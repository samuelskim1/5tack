// backend/seeders/seeds.js
const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Category = require('../models/Category');
const Game = require('../models/Game.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');
const Review = require('../models/Review.js');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const NUM_SEED_USERS = 10;
const users = [];

const images = [
  "https://5tack.s3.amazonaws.com/public/0.jpeg", 
  "https://5tack.s3.amazonaws.com/public/1.jpeg", 
  "https://5tack.s3.amazonaws.com/public/2.jpeg",
  "https://5tack.s3.amazonaws.com/public/3.jpeg",
  "https://5tack.s3.amazonaws.com/public/3.jpeg",
  "https://5tack.s3.amazonaws.com/public/5.jpeg",
  "https://5tack.s3.amazonaws.com/public/6.jpeg",
  "https://5tack.s3.amazonaws.com/public/7.jpeg",
  "https://5tack.s3.amazonaws.com/public/8.jpeg",
  "https://5tack.s3.amazonaws.com/public/9.jpeg",
  "https://5tack.s3.amazonaws.com/public/12.jpeg",
  "https://5tack.s3.amazonaws.com/public/13.jpeg",
  "https://5tack.s3.amazonaws.com/public/15.jpeg"
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const demoUser = new User({
  username: 'demo',
  email: 'demo@user.com',
  description: 'i am demo user',
  profileImageUrl: "https://5tack.s3.amazonaws.com/public/cartoon-dead-fish.png",
  hashedPassword: bcrypt.hashSync('password', 10)
})

users.push(demoUser);

for (let i = 1; i < NUM_SEED_USERS; i++) {
    const firstName = faker.name.firstName();
    users.push(
        new User ({
        username: faker.internet.userName(firstName),
        email: faker.internet.email(firstName),
          description: faker.lorem
            .sentences(getRandomArbitrary(1, 5))
            .substring(0, 200),
        profileImageUrl: getRandomImage(),
        hashedPassword: bcrypt.hashSync('password', 10)
      })
    )
}

const games = [];

const game1 = new Game({ name: "League of Legends", nameURL: "LeagueofLegends", imageUrls:["https://5tack.s3.amazonaws.com/public/league_of_legends.jpeg", "https://5tack.s3.amazonaws.com/public/league1.gif", "https://5tack.s3.amazonaws.com/public/league2.gif", "https://5tack.s3.amazonaws.com/public/league3.gif", "https://5tack.s3.amazonaws.com/public/league4.gif"] });
const game2 = new Game({ name: "Valorant", nameURL: "Valorant", imageUrls: ["https://5tack.s3.amazonaws.com/public/valorant.webp"] });
const game3 = new Game({ name: "Apex Legends", nameURL: "ApexLegends", imageUrls: ["https://5tack.s3.amazonaws.com/public/apexlegends.jpeg"] });
const game4 = new Game({ name: "Fortnite", nameURL: "Fortnite", imageUrls: ["https://5tack.s3.amazonaws.com/public/fortnite.jpeg"] })
const game5 = new Game({ name: 'CS:GO', nameURL: "CS:GO", imageUrls: ["https://5tack.s3.amazonaws.com/public/csgo.webp"] });
const game6 = new Game({ name: 'Minecraft', nameURL: "Minecraft", imageUrls: ["https://5tack.s3.amazonaws.com/public/minecraft.jpeg"] });
const game7 = new Game({ name: "Rocket League", nameURL: "RocketLeague", imageUrls: ["https://5tack.s3.amazonaws.com/public/rocketleague.jpeg"] });
const game8 = new Game({ name: 'Fifa', nameURL: "Fifa", imageUrls: ["https://5tack.s3.amazonaws.com/public/fifa23.jpeg"] });
const game9 = new Game({ name: 'Super Smash Bros. Ultimate', nameURL: "SuperSmashBros.Ultimate", imageUrls: ["https://5tack.s3.amazonaws.com/public/supersmashbros.png"] });
const game10 = new Game({ name: 'Lost Ark', nameURL: "LostArk", imageUrls: ["https://5tack.s3.amazonaws.com/public/lostark.jpeg"] });
const game11 = new Game({ name: 'NBA 2K23', nameURL: "NBA2K23", imageUrls: ["https://5tack.s3.amazonaws.com/public/nba2k23.jpeg"] });
const game12 = new Game({ name: 'Stardew Valley', nameURL: "StardewValley", imageUrls: ["https://5tack.s3.amazonaws.com/public/stardewvalley.jpeg"] });
const game13 = new Game({ name: 'Starcraft II', nameURL: "StarcraftII", imageUrls: ["https://5tack.s3.amazonaws.com/public/starcraft2.jpeg"] });
const game14 = new Game({ name: 'Terraria', nameURL: "Terraria", imageUrls: ["https://5tack.s3.amazonaws.com/public/terraria.jpeg"] });
const game15 = new Game({ name: 'DOTA 2', nameURL: "DOTA 2", imageUrls: ["https://5tack.s3.amazonaws.com/public/dota2.jpeg"] });
const game16 = new Game({ name: 'Overwatch', nameURL: "Overwatch", imageUrls: ["https://5tack.s3.amazonaws.com/public/overwatch.jpeg"] });
const game17 = new Game({ name: 'Grand Theft Auto V', nameURL: "GrandTheftAutoV", imageUrls: ["https://5tack.s3.amazonaws.com/public/gtaV.jpeg"] });
const game18 = new Game({ name: 'Maple Story', nameURL: "MapleStory", imageUrls: ["https://5tack.s3.amazonaws.com/public/maplestory.png"] });

games.push(
  game1, 
  game2, 
  game3, 
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
  game13,
  game14,
  game15,
  game16,
  game17,
  game18
)

const categories = [];

const category1 = new Category({
  name: 'MOBA$Multiplayer Online Battle Arena',
  game_id: [
    game1,
    game15
  ]
})

const category2 = new Category({
  name: 'FPS$First Person Shooter',
  game_id: [
    game2,
    game3,
    game5,
    game16
  ]
})

const category3 = new Category({
  name: 'Survival',
  game_id: [
    game6,
    game14
  ]
})

const category4 = new Category({
  name: 'BR$Battle Royale',
  game_id: [
    game4,
    game3
  ]
})


const category5 = new Category({
  name: 'Open World',
  game_id: [
    game6,
    game12,
    game14,
    game17
  ]
})

const category6 = new Category({
  name: 'Sandbox',
  game_id: [
    game6,
    game14,
    game12,
    game17
  ]
})
const category7 = new Category({
  name: 'Sports',
  game_id: [
    game8,
    game7,
    game11
  ]
})
const category8 = new Category({
  name: 'Role-Playing',
  game_id: [
    game12,
    game17,
    game18,
    game10
  ]
})

const category9 = new Category({
  name: 'MMORPG$Massively Multiplayer Online Role-Playing Game',
  game_id: [
    game18,
    game10
  ]
})

const category10 = new Category({
  name: 'RTS$Real-time strategy',
  game_id: [
    game13
  ]
})

const category11 = new Category({
  name: 'Fighting',
  game_id: [
    game9,
    game12,
    game10
  ]
})

categories.push(
  category1, 
  category2, 
  category3, 
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  category11,
  )

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Helper function to get a random game
function getRandomGame() {
  const randomIndex = Math.floor(Math.random() * games.length);
  return games[randomIndex];
}

function getRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

function getRandomPost() {
  const randomIndex = Math.floor(Math.random() * posts.length);
  return posts[randomIndex];
}

function getRandomComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

function getRandomReview() {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews[randomIndex];
}



const comments = [];
const NUM_SEED_COMMENTS = 200;

for (let i = 0; i < NUM_SEED_COMMENTS; i++) {
  const author_id = getRandomUser()._id;
  // const post_id = getRandomPost()._id;
  const description = faker.lorem
    .sentences(getRandomArbitrary(1, 5))
    .substring(0, 200);
  comments.push(
    new Comment({
      author_id: author_id,
      content: description
    })
  );
}



// Loop to create posts for each user with random games
// Loop to create posts for each user with random games

const posts = [];
const NUM_SEED_POSTS = 50;

for (let i = 0; i < NUM_SEED_POSTS; i++) {
  const author_id = getRandomUser()._id;
  const game_id = getRandomGame()._id;
  const comment_id = getRandomComment()._id;
  let title = faker.lorem.sentence(5);
  // Truncate the title to 50 characters if it's longer
  title = title.length > 50 ? title.substring(0, 50) : title;
  const description = faker.lorem
  .paragraphs(getRandomArbitrary(5, 20), "\n")
  .substring(0, 400);
  posts.push(
    new Post({
      author_id: author_id,
      game_id: game_id,
      comment_id: [comment_id, comment_id, comment_id],
      title: title,
      description: description
    })
  );
  // for (let i = 0; i < posts.length; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     const comment = comments.shift();
  //     comment.post_id = posts[i]._id;
  //     comment_id.push(comment);
  //   }

  // }
}

//demo user post seeding
for (let i = 0; i < 10; i++) {
  const author_id = demoUser._id;
  const game_id = game1._id;
  const comment_id = getRandomComment()._id;
  let title = faker.lorem.sentence(5);
  // Truncate the title to 50 characters if it's longer
  title = title.length > 50 ? title.substring(0, 50) : title;
  const description = faker.lorem
    .paragraphs(getRandomArbitrary(5, 20), "\n")
    .substring(0, 400);
  posts.push(
    new Post({
      author_id: author_id,
      comment_id: [comment_id, comment_id, comment_id],
      game_id: game_id,
      title: title,
      description: description
    })
  );
}




const reviews = [];
const NUM_SEED_REVIEWS = 100;

for (let i = 0; i < NUM_SEED_REVIEWS; i++) {
  const user_id = getRandomUser().id;
  let reviewer_id;
  reviewer_id = getRandomUser().id;
  while (reviewer_id === user_id) {
    reviewer_id = getRandomUser().id;
  };
  let title = faker.lorem.sentence(5);
  // Truncate the title to 50 characters if it's longer
  title = title.length > 50 ? title.substring(0, 50) : title;
  const rating = getRandomIntInclusive(1,5)
  const description = faker.lorem
    .sentences(getRandomArbitrary(1, 10))
    .substring(0, 400); 
    reviews.push(
      new Review({
        user_id: user_id,
        reviewer_id: reviewer_id,
        description: description,
        title: title,
        rating: rating
      })
    );
}

//demoUser reviews seeding
for (let i = 0; i < 10; i++) {
  const user_id = demoUser.id;
  let reviewer_id;
  reviewer_id = getRandomUser().id;
  while (reviewer_id === user_id) {
    reviewer_id = getRandomUser().id;
  };
  let title = faker.lorem.sentence(5);
  // Truncate the title to 50 characters if it's longer
  title = title.length > 50 ? title.substring(0, 50) : title;
  const rating = getRandomIntInclusive(1, 5)
  const description = faker.lorem
    .sentences(getRandomArbitrary(1, 10))
    .substring(0, 400);
  reviews.push(
    new Review({
      user_id: user_id,
      reviewer_id: reviewer_id,
      description: description,
      title: title,
      rating: rating
    })
  );
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
console.log("Resetting db and seeding users, categories, games, posts, comments, and reviews...");

User.collection.drop()
                .then(() => Game.collection.drop())
                .then(() => Category.collection.drop())
                .then(() => Comment.collection.drop()) 
                .then(() => Post.collection.drop())
                .then(() => Review.collection.drop())
                .then(() => User.insertMany(users))
                .then(() => Game.insertMany(games))
                .then(() => Comment.insertMany(comments)) 
                .then(() => Category.insertMany(categories))
                .then(() => Review.insertMany(reviews))
                .then(() => Post.insertMany(posts))
                .then(() => {
                    console.log("Done!");
                    mongoose.disconnect();
                })
                .catch(err => {
                    console.error(err.stack);
                    process.exit(1);
                });
}

// run seed file
// npx dotenv node seeders/seeds.js
