# Tweets 
The application consists of two pages: Home and Tweets. Used lazy load.    
On click "goBack"-link of Tweets-page user routes the Home-page.    
The Tweet-page contents user's cards with information about the count of tweets and the count of followers.     
User's data comes from the backend. Created pagination. Content loads on click button "Load more".    
The user card contains an interactive button. On toggle button button's color changes and count of followers increases or decreases.    
User's cards can be filtered by status: "all", "follow", "followings".    
If the component is unmounted when user is on the Tweets-page, the user's data saves in the storage.    
If the user goes to the Home-page, the storage cleared.     
Using [mockapi.io](https://mockapi.io/projects) for backend requests.    
User's avatars received from [pixabay](https://pixabay.com/).

## Tech tasks
1️. ✅ To implement user's cards according to the [layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=TK9lDKzWuV3eclAz-0)    
2. ✅ To change text from "Follow" to "Following" on click button.    
  * The color of the button changes.    
  * The count of the followers changes.    
3. ✅ To save the final result of the user's actions on update the page.    
4. ✅ On click the button again to save its text and color to their original state.    
5. ✅ To write the number 100,500 with one value (100500) in the code. In the UI - with a comma (100,500).    
6. ✅ To create my personal backend for development.    
   * To create source "users" with fields: id, user, tweets, followers, avatar.    
   * Avatar images to register with separate urls in the “avatar” property.        
7. ✅ To create pagination. One pagination page should display at least 3 tweets, the rest should be loaded when you click "Load More".    
8. ✅ To Create routing using React Router:    
  * "/" - Home-page    
  * "/tweets" - Tweets-page    
  * "goBack"-link     
9.  ✅ To create Filter-component with options:    
  * show all tweets      
  * show follow tweets     
  * show followins tweets       
   
   
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






