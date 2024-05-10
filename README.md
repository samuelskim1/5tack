# **5tack** #

5tack is a web application designed to help gamers connect based on similar interests and availability.

## **Background and Overview** ##
***

The inspiration behind 5tack originates largely from rapidly growing online multiplayer games and takes into account the busy lives of individuals around the world. In a majority of these games, players have the important option of playing with or against friends. However, a common issue that all gamers have faced at one point or another is the lack of available friends with whom to play. This can be frustrating because simply relying on a game’s matching algorithm to provide you with random teammates may lead to uncooperative, unpleasant, or even toxic teams to be formed. 

5tack is a platform where gamers can circumvent this frustration by detailing their specific requirements for both gaming experience and availability. In addition to networking, 5tack users may also leave reviews for players with which they connected. This feature is vital for games that are poorly moderated and serves to improve the integrity of the gaming community by holding players accountable for their actions and behaviors. 

## **Running the Development Server** ##
***
- Backend: `npm run dev`
- Frontend: `npm run start`

Note: `cd` into the correct folders first

## **Functionality & MVP** ##
***

- User authentication: sign up, log in, and log out
- Profiles: username, gaming handle(s), bio/description, rating
- Reviews (& Ratings): users can review and rate other users they connected with
- Posts: users can create posts to network with other users based on gaming interests and availability
   - Posts can be created with tags that are other users can filter/sort by
- Categories (& Listings): browse by gaming category and specific games
   - Users can favorite different games/listings to customize feed

**Bonus Features**

 - Implementing a search bar

## **Technologies & Technical Challenges** ##
***

**Backend: MongoDB/Express**
The backend of our project will be developed using MongoDB and Express.js frameworks. 

MongoDB will be used to store and manage user profile information, reviews, ratings, and posts. 

Express.js will be used to build the API that communicates with the frontend and manages the necessary CRUD operations for profiles, reviews, ratings, and posts.

The backend will support the following features:
Management of creating, retrieving, updating, and deleting users, reviews and ratings, posts, and categories.

**Technical Challenges:**

- The challenge lies in establishing a secure and reliable connection between the application and the backend API, ensuring data is properly sent, stored, and retrieved.
- The challenge involves effectively organizing data, learning Express.js, and preventing performance issues such as n+1 query problems.

**Frontend: React/Node.js**
- Our project will utilize React/Redux in order to create a more predictable and traceable workflow through having a single source of truth. 
- We will be using Node.js in order to take advantage of Javascript's asynchronicity to circumvent the blocking problem in processing non-JS operations.

**Technical Challenges:**

 - Fetching data from MongoDB and restructuring information for display and interaction
WebSockets API:
    - In order to provide a better user experience, we will incorporate real-time communication between users through WebSockets.
After an initial handshake, websockets then establish a two-way, persistent connection that either side can use to send data at any time.

## **Group Members & Work Breakdown** ##
***

**Samuel Kim, Milner Chen, Shan Kim, Gary Hor**


### **Friday to Sunday 04/14/2023 - 4/16/2023** ###
 - Writing Proposal README
 - Plan initial work for the week

### **Monday 04/17/2023** ### 
 - **Shan Kim** - Backend User Auth and AWS setup and S3 image hosting
 - **Samuel Kim** - Help with User Auth and AWS setup
 - **Gary Hor** - Creating Splash Page and User Auth modals
 - **Milner Chen** - Creating Splash Page, NavBar, and categories bar
### **Tuesday 04/18/2023** ###
 - **Shan Kim** - Setup Backend api routes and normalizing data-types. 
 - **Samuel Kim** - Setup Backend routes for posts and reviews
 - **Gary Hor** - Start profiles and game page
 - **Milner Chen** - Start profiles and game page
### **Wednesday 04/19/2023** ###
 - **Shan Kim** - assist with frontend dev and websocket implementation from the backend
 - **Samuel Kim** - assist with frontend dev and websocket implementation from the backend
 - **Gary Hor** - Finishing game page, start/finish posts and reviews
 - **Milner Chen** - Finishing game page, start/finish posts and reviews
### **Thursday 04/20/2023** ###
 - **Shan Kim** - Details, Deployment, env files, About Page
 - **Samuel Kim** - About Page and assisting with styling
 - **Gary Hor** - Finishing reviews and additional styling
 - **Milner Chen** - Finishing reviews and overall styling




