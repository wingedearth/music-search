# music-search
A search interface for music

Current deployment: https://wingedearth-music-search.herokuapp.com

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
10. Sass
11. Superagent
12. Axios

## Requirements
- Node.js 22.16.0
- MongoDB (local for development, cloud for production)

## Local Development Setup
If you intend to run a local instance of this application in Development mode (i.e. with npm run start:dev), you will need to install a local copy of MongoDB with a MongoDB server that can be launched from the command line with the "mongod" command. For instructions on how to do this, refer to https://docs.mongodb.com/manual/installation/#tutorial-

1. Install dependencies: `npm install`
2. Start local MongoDB: `mongod`
3. Run development server: `npm run start:dev`

## Production Deployment

### Heroku Deployment
This application is deployed on [Heroku](https://www.heroku.com) with the following configuration:

- **Platform**: Heroku-24 stack
- **Node.js Version**: 22.16.0 (specified in package.json engines)
- **Build Process**: Uses `heroku-postbuild` script to compile frontend and backend assets
- **Process Type**: Web dyno running `npm start`

#### Heroku Configuration
The app requires the following environment variables:
- `DATABASE_URL`: MongoDB Atlas connection string
- `SPOTIFY_CLIENT_ID`: Spotify API client ID
- `SPOTIFY_CLIENT_SECRET`: Spotify API client secret

#### Deployment Process
1. Push to GitHub triggers automatic deployment
2. Heroku builds frontend and backend using webpack during build phase
3. Production server starts with pre-compiled assets

### MongoDB Atlas
In production, this application uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud database:

- **Cluster**: MongoDB Atlas shared cluster
- **Database**: `music-search`
- **Connection**: Secured with username/password authentication
- **Configuration**: Handles environment detection automatically (production vs development)

The application automatically detects the environment using `NODE_ENV` or `ENVIRONMENT` variables and connects to the appropriate database (local MongoDB for development, Atlas for production).

## Server summary
An Express.js server in a Node.js runtime exposes routes to get a main page and query for certain data. The API can be used to search for artists by a string keyword, and the server makes use of Spotify's API to query for artists. Any artists returned by Spotify are then stored in a MongoDB database with relevant data including related genres. Another endpoint on the server allows a user to query for artist using a genre keyword. The query returns all artists matching the queried genre.

The root route of the server, '/' returns the main page in initial state, built using React components. The main page includes a search form with a GUI for searching for artists by artist name. A list of matching artists is returned from the search. Clicking on an artist provides artist details in the upper right panel, and a list of related artists in the lower right panel. The related artists may also be clicked on to get artist details and more related artists.

The list of related artists is sorted by popularity and capped at a maximum of 50 list items.

## Client summary
The client consists of a single page expecting a skeleton DOM to be rendered by the server, upon which the client side React application is injected into the page body. The React App renders a navbar with a search field and a submit button that the user can use to search for Artists.

## NPM Scripts
1. **clean** - Deletes build folder
2. **build** - Builds both frontend and backend for production
3. **heroku-postbuild** - Automatically runs build process during Heroku deployment
4. **start** - Starts the production server (runs pre-compiled server.js)
5. **start:dev** - Development mode: builds and watches frontend/backend with auto-restart
6. **frontend** - Builds frontend assets only
7. **frontend:dev** - Builds frontend with watch mode
8. **server** - Builds and starts backend server
9. **server:dev** - Builds backend with watch mode
