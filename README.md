Rick and Morty Characters Catalog
This project consists of a web application that displays a list of characters from the Rick and Morty series. The list is powered by the Rick and Morty API.

On the initial screen of the application, it is possible to view the list of characters, with the possibility to favorite each one of them. The list has pagination, for better navigation between the characters.

The application is responsive, adapting to different screen sizes. Application routes are defined using the React Router.

The list of characters is consumed through a custom hook, created using the React Query library. The hook is responsible for fetching data from the API and managing the state of the list of characters.

To improve code organization and increase component reusability, functional components were used. In addition, the code was written in TypeScript, ensuring greater robustness and security in typing.

The project has layout and integration tests, using the React Testing Library and Jest libraries.

For styling the application, the Styled Components library was used.

How to run the project
Clone the repository on your machine.
Access the project folder through the terminal.
Install the project's dependencies using the npm install command.
To start the project in development mode, run the npm start command.
Access the application in your browser through the address http://localhost:3000.
How to run the tests
Access the project folder through the terminal.
Run the npm test command to run the tests. Layout and integration tests will be performed next.
Libraries used
React
React Query
React Router
Styled Components
React TestingLibrary
Jest
