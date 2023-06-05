# Tweets 

The application consists of two pages: Home and Tweets. Used lazy load.
On click "goBack"-link of Tweets-page user routes the Home-page.
The Tweet-page contents user's cards with information about the count of tweets and the count of followers. 
User's data comes from the backend. Created pagination. Content loads on click button "Load more".
The user card contains an interactive button. On toggle button button's color changes and count of followers increases or decreases.
User's cards can be filtered by status: "all", "follow", "followings".
If the component is unmounted when user is on the Tweets-page, the user's data saves in the storage.
If the user goes to the Home-page, the storage cleared. 
Using [mockapi.io UI service] (https://mockapi.io/projects) for backend requests.
User's avatars received from [pixabay] (https://pixabay.com/).

## Tech tasks
1️ ✅ To implement user's cards according to the [layout] (https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=TK9lDKzWuV3eclAz-0)
2 ✅ To change text from "Follow" to "Following" on click button.
    * The color of the button changes.
    * The count of the followers changes.
3 ✅ To save the final result of the user's actions on update the page.
4 ✅ On click the button again to save its text and color to their original state.
5 ✅ To write the number 100,500 with one value (100500) in the code. In the UI - with a comma (100,500).
6 ✅ To create my personal backend for development.
   * To create source "users" with fields: id, user, tweets, followers, avatar.
   * Avatar images to register with separate urls in the “avatar” property. 
7 ✅ To create pagination. One pagination page should display at least 3 tweets, the rest should be loaded when you click "Load More".
8 ✅ To Create routing using React Router:
  * "/" - Home-page
  * "/tweets" - Tweets-page
  * "goBack"-link 
  ✅ To create Filter-component with options:
  * show all tweets 
  * show follow tweets 
  * show followins tweets   
   
   
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
