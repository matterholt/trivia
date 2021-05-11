## Setting up Project

Open a terminal window and make or navigate to the directory for projects. Once there Clone project from github by "[https://github.com/matterholt/trivia.git](https://github.com/matterholt/trivia.git)".
 When cloning has been completed and cd into the Trivia file. Inside the folder type, "npm install" to install all dependencies.

App is Bootstrapped from create react app -- typescript.

Emotion.js styled components to handle CSS

React-router providing routing  and redirection to pages

Once all decencies are downloaded then "npm run start" and a browser window will open up on 'localhost://3000".

## Project Structure

The entry point for the application is App.tsx. The file contains the routing for the application. Also, the question that is fetched from the API, and is able to pass values to the QuizQuestion page and be updated on the home page.

The bulk of the application is located in the src file. 
the assets file contains images and any other items that may improve the site's design. currently, only a background_v2.png lives in this directory.

Next is the components file where most bulk of the code 
is. Inside components are broken down pages the main entry point for each page. Next would be a separate directory with the name of the page, inside the directory are components that pertain to that specific page. The general directory is components are common components and could possibly use on other pages. Such as the Layout component which is used on every page.

The context directory has a custom useContext hook where the user's answers are stored. The context stores the user's answer for each question. Adding it to the context would allow the results page to read what the user had an answer to the trivia questions.

Hooks folder is designated for custom hooks, currently, only a useTrivaData hook that controls the fetching and the status handling of the trivia API. Return is the data that is fetched and a
 function to run when called. The function would need one parameter which controls the options for the trivia questions.

The final directory is the utils. The directory is dedicated to functions to mutate and return a result to display a user. Adding this function at a top level allows the component to be cleaner and the ability to access the function anywhere in the application. Currently, only 2 functions, One return the count of correctly answered questions and the other is checking for if
user selected answer is in the incorrect_answer array.

#TODO

- [] typescript on context file
- [] typescript on custom hook useTriviaData