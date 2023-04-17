const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const NUM_SEED_USERS = 10;

const users = [];

// create a demo user
users.push(
    new User ({
        username: 'demo-user',
        email: 'demo@user.com',
        hashedPassword: bcrypt.hashSync('password', 10)
    })
)

// create more users
for (let i = 1; i < NUM_SEED_USERS; i++) {
    // creating a name to bas username and email off of
    const firstName = faker.name.firstName();
    users.push(
        new User ({
            username: faker.internet.userName(firstName),
            email: faker.internet.email(firstName),
            handlePassword: bcrypt.hashSync(faker.internet.password(), 10)
        })
    )
}

// connect to database + add seeds
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

    // drop users and reseed
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

// command to run seed file
// npx dotenv node seeders/seeds.js