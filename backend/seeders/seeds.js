const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Category = require('../models/Category');
const Game = require('../models/Game.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const NUM_SEED_USERS = 10;
const users = [];


const demoUser = new User({
  username: 'demo',
  email: 'demo@user.com',
  description: 'i am demo user',
  hashedPassword: bcrypt.hashSync('password', 10)
})

for (let i = 1; i < NUM_SEED_USERS; i++) {
    const firstName = faker.name.firstName();
    users.push(
        new User ({
        username: faker.internet.userName(firstName),
        email: faker.internet.email(firstName),
        description: faker.lorem.sentences(),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10)
        })
    )
}

const games = [];

const game1 = new Game({ name: "League of Legends" });
const game2 = new Game({ name: "Valorant" });
const game3 = new Game({ name: "Apex Legends" });
const game4 = new Game({ name: "Fortnite" })
const game5 = new Game({ name: 'CS:GO' });
const game6 = new Game({ name: 'Minecraft' });
const game7 = new Game({ name: "Rocket League" });
const game8 = new Game({ name: 'Fifa' });
const game9 = new Game({ name: 'Super Smash Bros. Ultimate' });
const game10 = new Game({ name: 'Lost Ark' });
const game11 = new Game({ name: 'NBA 2K23' });
const game12 = new Game({ name: 'Stardew Valley' });
const game13 = new Game({ name: 'Starcraft' });
const game14 = new Game({ name: 'Terraria' });
const game15 = new Game({ name: 'DOTA 2' });
const game16 = new Game({ name: 'Overwatch' });
const game17 = new Game({ name: 'Grand Theft Auto V' });
const game18 = new Game({ name: 'MapleStory' });

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

const posts = [];
const NUM_SEED_POSTS = 10;
//demoUser posts for League of Legends
for (let i = 0; i < NUM_SEED_POSTS; i++) {
  const author_id = demoUser._id;
  const game_id = game1._id;
  const title = faker.lorem.sentence(5);
  const description = faker.lorem.paragraphs(2, '<br/>\n')
  posts.push(
    new Post ({
      author_id: author_id,
      game_id: game_id,
      title: title,
      description: description
    })
  )
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
console.log("Resetting db and seeding users, categories, and games...");

User.collection.drop()
                .then(() => Game.collection.drop())
                .then(() => Category.collection.drop())
                .then(() => Post.collection.drop())
                .then(() => User.insertMany(users))
                .then(() => Game.insertMany(games))
                .then(() => Category.insertMany(categories))
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