# music-search
A search interface for music

Follow Agile progress of the app on my Trello board: https://trello.com/b/0ov5tGxx/music-search

## Technologies:
1. JavaScript
2. Node.js
3. Express.js
4. Babeljs
5. Webpack
6. MongoDB
7. React
8. React Context API
9. ESLint

## Before starting
If you intend to run a local instance of this application in Development mode (i.e. with npm run start:dev), you will need to install a local copy of MongoDB with a MongoDB server that can be launched from the command line with the "mongod" command. For instructions on how to do this, refer to https://docs.mongodb.com/manual/installation/#tutorial-installation

## Server summary
An Express.js server in a Node.js runtime exposes routes to get a main page and query for certain data. The API can be used to search for artists by a string keyword, and the server makes use of Spotify's API to query for artists. Any artists returned by Spotify are then stored in a MongoDB database with relevant data including related genres. Another endpoint on the server allows a user to query for artist using a genre keyword. The query returns all artists matching the queried genre.

The root route of the server, '/' returns the main page in initial state, wbuilt using React components.

As the application development progresses, The main page will include a search form with a GUI for searching for artists by artist name or by genre.

## Client summary
The client consists of a single page expecting a skeleton DOM to be rendered by the server, upon which the client side React application is injected into the page body. The React App renders a navbar with a search field and a submit button that the user can use to search for Artists.

## NPM Scripts
1. clean - deletes build folder
2. start - Calls clean, then uses Webpack to transpile and build front end and back end and uses Node to start server, for production builds
3. start:dev - Calls clean, then uses Webpack to transpile and build front end and back end. Applies Webpack's --watch option and uses a Nodemon plugin to run server and restart when Webpack observes changes. Use for development
