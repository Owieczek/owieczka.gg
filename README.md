# About The Project

<img src="\client\src\assets\owcatacker.jpg" alt="owca tracker view">

League tracker provides insight to League of Legends players about thier game performance, match history, and ranked ladder via Riot API.

## Getting Started

To get a local copy up and running follow steps below.

### Prerequisites

Node and npm are required to install and run the project. Riot API key is essential to display
valuable content.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/arnoldkokot/tracker.git
   ```
2. Install backend NPM packages
   ```sh
   cd server
   npm install
   ```
3. Fill variables in .env file
   ```sh
   mv .env.template .env
   nano .env
   ```
4. Example variables

   ```sh
   REACT_APP_API_KEY=*riot api key*

   ```

5. Run api
   ```sh
   npm run dev
   ```
6. Install frontend NPM packages
   ```sh
   cd client
   npm install
   ```
7. Run project
   ```sh
   npm start
   ```
8. Visit localhost:4000

## Usage

### Endpoints

All API request start with `/api/` and are guaranteed to return JSON data.

- `/api/match/:id`
  Responds with info and metadata about given match id, depends on whether match is already in the database.

- `/api/:region/:input`
  Responds with player data and match id data.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

## Acknowledgements

- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Create react app](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [Styled components](https://styled-components.com/)

### Live page

- http://64.226.122.114/
