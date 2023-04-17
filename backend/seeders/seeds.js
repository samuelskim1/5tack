const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const NUM_SEED_USERS = 10;
const users = [];

users.push(
    new User ({
      username: 'demo',
      email: 'demo@user.com',
      description: 'i am demo user',
      hashedPassword: bcrypt.hashSync('password', 10)
    })
  )

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
console.log("Resetting db and seeding users and tweets...");

User.collection.drop()
                .then(() => User.insertMany(users))
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