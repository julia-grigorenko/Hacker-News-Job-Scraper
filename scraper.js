import axios from "axios";
import chalk from "chalk";
import pkg from "node-html-parser"; // Import the CommonJS module as default
const { parse } = pkg; // Destructure `parse` from the default export

const keywords = [
  "job",
  "hiring",
  "hire",
  "career",
  "employment",
  "opportunities",
  "resume",
  "networking",
  "interview",
  "freelance",
  "remote",
  "upskilling",
  "mentorship",
];

async function fetchArticles() {
  const baseUrl = "https://news.ycombinator.com/";
  let page = 1;
  let articles = [];

  while (true) {
    const url = page === 1 ? baseUrl : `${baseUrl}?p=${page}`;
    console.log(chalk.cyan(`Fetching: ${url}`));

    try {
      const response = await axios.get(url);
      const root = parse(response.data);

      const titleElements = root.querySelectorAll("span.titleline > a");

      if (titleElements.length === 0) {
        console.log(chalk.red(`No articles found on page ${page}. Stopping.`));
        break;
      }

      const filteredArticles = titleElements
        .map((el) => ({
          title: el.text,
          link: el.getAttribute("href"),
        }))
        .filter((article) =>
          keywords.some((keyword) =>
            article.title.toLowerCase().includes(keyword)
          )
        );

      articles = articles.concat(filteredArticles);
    } catch (error) {
      console.error(chalk.red(`Error fetching ${url}: ${error.message}`));
      break;
    }

    page++;
  }

  console.log(chalk.yellow("Articles:"));
  articles.forEach(article => {
    console.log({
        title: (article.title), 
        link: (article.link)            
    });
});

}

await fetchArticles();

