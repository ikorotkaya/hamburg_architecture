# Hamburg Architectur Map

This map shows all modern buildings in Hamburg that have been included in the "Tag der Architektur" event since 2014. Use the map to explore and discover interesting architectural landmarks.

![Hamburg Architecture Map](https://user-images.githubusercontent.com/91027118/283475503-d3528cdc-1970-4d92-9b00-8343d0f6af6a.png) 

![GitHub License MIT](https://img.shields.io/github/license/sqlhabit/sql_schema_visualizer?color=%2347A3F3)

🎯 *The aim of this project was to create a map of the modern buildings built in Hamburg after 2014. If you believe you've explored all Hamburg has to provide, this map could assist you in discovering additional architectural wonders of the city!*

💡 *Brief explanations of the projects featured provide an overview of the buildings. This may be of interest to architects looking for a fresh perspective on the city. It is also an excellent opportunity to learn about the firms and architects who were involved in these projects.*

## How to use

Use the map to navigate through the architectural projects of Hamburg's Day of Architecture provided by the [Architekten- und Ingenieurkammer Hamburg](https://www.akhh.de/). The collection includes projects developed since 2014, as well as some iconic structures from the city's earlier years. 

Click on a building for detailed information and a handy button that links to the Google Maps route planner for easy navigation.

![Hamburg Architecture Map](https://user-images.githubusercontent.com/91027118/283476142-8ac1ab79-c007-47f5-9092-2f7bddfa5d55.png)

## How it works

🔑 *Important Note:* Please make sure you have set up your Google Maps API key correctly to access Google Maps. You can find detailed instructions on obtaining and configuring your API key in the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

🏠 New buildings will be added to this project every year after the "Tag der Architektur" event in Hamburg.

🔎 All project information was taken from PDF files provided by the Architekten- und Ingenieurkammer Hamburg using a JavaScript script. The script is available in a separate repository named [Web scraper on Github](https://github.com/ikorotkaya/web_scraper), where you can find instructions on how to use it, connect the app to the database using ORM Sequalize and store data in a PostgreSQL database.

🗣️ The app has two languages: English and German. To change the language, click on the language button in the top-right corner. The title and description of the project will be translated. Translations are facilitated by the i18next package. Design Note 1 has thorough instructions for adding new languages.

Optional:

🌐 You can connect the app to a server and obtain the details of the projects from the database. This enables you to add new projects to the map without requiring to redeploy the app. Express.js is used to create the server, which uses PostgreSQL as its database. You'll discover the server code in the *server.ts* document found in the root directory. 

❗️ Ensure your confidential data is stored in the env file. Use dotenv to access your private information for server-to-database connectivity. You can find detailed instructions on how to set up your server in the [Express.js documentation](https://expressjs.com/en/starter/installing.html).

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

Contributions to the Miles Experiences app are welcome! If you have any suggestions, bug reports, or feature requests, feel free to submit an issue or a pull request. 👋🏼

## Licence

This project is released under the MIT Licence. Feel free to use, modify, and redistribute the code under the terms of the licence.
