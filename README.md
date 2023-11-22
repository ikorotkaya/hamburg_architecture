# Hamburg Architectur Map

Interactive map showing new buildings in Hamburg presented in the "Tag der Architektur" event from 2014 onwards. 

The latest release features two languages (EN, DE).

![Hamburg Architecture Map](https://user-images.githubusercontent.com/91027118/283475503-d3528cdc-1970-4d92-9b00-8343d0f6af6a.png) 

![GitHub License MIT](https://img.shields.io/github/license/sqlhabit/sql_schema_visualizer?color=%2347A3F3)

## How to use

Click on a building for detailed information and a handy button that links to the Google Maps route planner for easy navigation.

![Hamburg Architecture Map](https://user-images.githubusercontent.com/91027118/283476142-8ac1ab79-c007-47f5-9092-2f7bddfa5d55.png)

## How it works

🔑 Please make sure you have set up your Google Maps API key correctly to access Google Maps. You can find detailed instructions on obtaining and configuring your API key in the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

🏠 New buildings will be added to this project every year after the "Tag der Architektur" event in Hamburg.

🔎 Project info sourced from website and PDFs via a JavaScript script. Access the [Hamburg Architecture Data Scraper](https://github.com/ikorotkaya/web_scraper) for usage instructions, including connecting the app to a PostgreSQL database using ORM Sequelize.

🗣️ Switch between English and German using the language button in the top-right corner. Project titles and descriptions are translated using the i18next package.

Optional:

🌐 Connect the app to a server for dynamic project updates. The server, built with Express.js and PostgreSQL, allows adding projects to the map without redeploying the app. Check *server.ts* in the root directory for the server code.

❗️ Secure your confidential data in the env file using dotenv for server-to-database connectivity. Refer to the [Express.js documentation](https://expressjs.com/en/starter/installing.html) for setup details.


## Technologies Used

- React
- TypeScript
- Google Maps API + Maps JavaScript API
- HTML
- CSS
- i18next (for translations)

Optional:
- Server with Express.js
- PostgreSQL

## Development

To get started with development, follow these steps:

1. Install dependencies:
```sh
npm install
```
2. Start the development server:

```sh
npm run start
```

You can access the application at [localhost:3000](http://localhost:3000/)

## Credits

The data is provided by the [Architekten- und Ingenieurkammer Hamburg](https://www.akhh.de/). You can find all the programm PDFs [here](https://www.akhh.de/baukultur/info-tag-der-architektur/).

All image rigths belong to the Architekten- und Ingenieurkammer Hamburg and being downloaded from their programm PDFs using [PDF24 Tools](https://tools.pdf24.org/en/).

## Contributions

Contributions to the Hamburg Architecture app are welcome! If you have any suggestions, bug reports, or feature requests, feel free to submit an issue or a pull request. 👋🏼

## Licence

This project is released under the MIT Licence. Feel free to use, modify, and redistribute the code under the terms of the licence.
