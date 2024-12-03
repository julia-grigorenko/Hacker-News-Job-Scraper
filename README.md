# Hacker News Job Scraper

A web scraper for Hacker News that fetches job-related articles based on specified keywords and displays them in a formatted and color-coded output.

## Features

- Fetches articles from Hacker News pages [https://news.ycombinator.com/] dynamically.
- Filters articles based on job-related keywords.
- Displays results in a color-coded, readable format.
- Stops when no more relevant articles are found.

## Installation

1. Clone the repository:
    ```git clone <repository-url>```
2. Navigate to the project directory:
    ```cd hacker-news-job-scraper```
3. Install dependencies:
    ```npm install``
4. Usage
    ```npm start```


### The script will start fetching and filtering articles from Hacker News.

Output Example:

```
Articles:
  {
    "title": "Wasmer (YC S19) Is Hiring a SRE and DevOps Engineer in Europe",
    "link": "item?id=42261862"
  },
  {
    "title": "Top Remote Work Opportunities for 2024",
    "link": "item?id=42262301"
  }
```


### Customization

To update keywords for filtering, edit the keywords array in the scraper.js file.

### Structure Overview

hacker-news-job-scraper/
├── scraper.js                   # Script
├── package.json                 # Project metadata
├── README.md                    # Documentation
├── node_modules/                # Dependencies
└── package-lock.json            # Auto-generated dependency lock file
