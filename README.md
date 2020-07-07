1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

A). I spend around 22 hours on this assignment  to resolve bug fixes and many more . I need to work on SEO more to ake it visible and i dont have experiecne in WCAG so i will try to make more accessible . I will do some more styling for the cards.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A). I think Redux is the most useful featrue i enjoyed writing code with redux because it sepearates Presentational components with container components which hels to reduce coding and resue the components.



code :


#import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_REFINE_DATA
  } from '../actions/Actions';
  
  const initialState = {
    restaurants: [],
    refine: '',
    city: '',
    total_items: 0,
    loading: false,
    error: null
  };
  
  const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_DATA_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
    
3.	How would you track down a performance issue in production? Have you ever had to do this?

A).Identify issues by performing a full code review of each app ,inefficent code to be identified in initail stages it take too much memory and cpu resources and make the application too big which makes minor issurs to be the biggest issues in application. personally i done it once  with my code when i am working on my last project.



4.	How would you improve the API that you just used?

A). Increased System status visbiltiy helps to improve the API , need to improve the information helps to understand people who use to invoke the api.
Include to give better viewbility of the page. Include information about distance from my location to the restaurants. reviews about the restauratns and specify what the restuarant is best for.

5.	Please describe yourself using JSON.

A). This is mine 
{
  "name": "Jitendra",
  "lastname": "Guttikonda",
  "Email": "jitendraguttikonda@gmail.com"
  "age": 25,
  "nationality": "INDIAN",
  "livesin": "Toronto",
  "Git profile":https://github.com/guttikondajitendra
  "passions": [
    "Programming",
    "Networking",
    "Debugging"
  ],
  "interests": [
    "Movies",
    "Learning NewTechnologies",
    "Gaming",
    "Music"
  ],
  "believes": [
    "Work hard think smart Enjoy life to the fullest"
  ]
}


