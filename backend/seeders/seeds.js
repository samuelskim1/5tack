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

const user1 = new User({
  username: 'johndoe',
  email: 'johndoe@user.com',
  description: 'Hi, my name is John Doe and I love hiking and traveling.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password1', 10)
})

const user2 = new User({
  username: 'janedoe',
  email: 'janedoe@user.com',
  description: 'Hi, I am Jane Doe and I enjoy reading and trying out new recipes.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password2', 10)
})

const user3 = new User({
  username: 'davidbrown',
  email: 'davidbrown@user.com',
  description: 'Hey, I am David Brown and I am a big fan of basketball and playing guitar.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password3', 10)
})

const user4 = new User({
  username: 'emilyjones',
  email: 'emilyjones@user.com',
  description: 'Hey, I am Emily Jones and I enjoy yoga and painting in my free time.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password4', 10)
})

const user5 = new User({
  username: 'chrisbrown',
  email: 'chrisbrown@user.com',
  description: 'Hi, my name is Chris Brown and I love playing football and listening to hip-hop music.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password5', 10)
})

const user6 = new User({
  username: 'annasmith',
  email: 'annasmith@user.com',
  description: 'Hey, I am Anna Smith and I enjoy playing tennis and going to music festivals.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password6', 10)
})

const user7 = new User({
  username: 'jasonwang',
  email: 'jasonwang@user.com',
  description: 'Hi, I am Jason Wang and I love hiking and trying out new restaurants.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password7', 10)
})

const user8 = new User({
  username: 'sarahmiller',
  email: 'sarahmiller@user.com',
  description: 'Hey, I am Sarah Miller and I enjoy playing basketball and reading science fiction books.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password8', 10)
})

const user9 = new User({
  username: 'robertjones',
  email: 'robertjones@user.com',
  description: 'Hi, my name is Robert Jones and I love playing video games and watching movies.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password9', 10)
})

const user10 = new User({
  username: 'amandasmith',
  email: 'amandasmith@user.com',
  description: 'Hi, I am Amanda Smith and I enjoy hiking and playing guitar in my free time.',
  profileImageUrl: getRandomImage(),
  hashedPassword: bcrypt.hashSync('password10', 10)
})

users.push(demoUser);
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);

const games = [];

const game1 = new Game({ name: "League of Legends", nameURL: "LeagueofLegends", imageUrls:["https://5tack.s3.amazonaws.com/public/league_of_legends.jpeg", "https://5tack.s3.amazonaws.com/public/league1.gif", "https://5tack.s3.amazonaws.com/public/league2.gif", "https://5tack.s3.amazonaws.com/public/league3.gif", "https://5tack.s3.amazonaws.com/public/league4.gif"] });
const game2 = new Game({ name: "Valorant", nameURL: "Valorant", imageUrls: ["https://5tack.s3.amazonaws.com/public/valorant.webp"] });
const game3 = new Game({ name: "Apex Legends", nameURL: "ApexLegends", imageUrls: ["https://5tack.s3.amazonaws.com/public/apexlegends.jpeg"] });
const game4 = new Game({ name: "Fortnite", nameURL: "Fortnite", imageUrls: ["https://5tack.s3.amazonaws.com/public/fortnite.jpeg"] })
const game5 = new Game({ name: 'CS:GO', nameURL: "CS:GO", imageUrls: ["https://5tack.s3.amazonaws.com/public/csgo.webp"] });
const game6 = new Game({ name: 'Minecraft', nameURL: "Minecraft", imageUrls: ["https://5tack.s3.amazonaws.com/public/minecraft.jpeg"] });
const game7 = new Game({ name: "Rocket League", nameURL: "RocketLeague", imageUrls: ["https://5tack.s3.amazonaws.com/public/rocketleague.jpeg"] });
const game8 = new Game({ name: 'FIFA', nameURL: "FIFA", imageUrls: ["https://5tack.s3.amazonaws.com/public/fifa23.jpeg"] });
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
    game9
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

const comments = [];

const comment_league1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Platinum player and I enjoy playing mid and top. Let me know if you want to duo together!'
})
  
const comment_league2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold player and I mainly play jungle and support. Let me know if you want to play together!'
})

const comment_league3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold player and I mainly play mid and jungle. Let me know if you want to duo together or form a team!'
})

const comment_league4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play top and support. Let me know if you want to play together and have some fun!'
  })
  
const comment_league5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing mid and jungle. Let me know when you guys are playing and I will join you!'
})

const comment_league6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Diamond support player and I am also serious about the game. Let us team up and climb the ladder together!'
})

const comment_league7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Platinum player and I mainly play jungle and top. Let me know if you want to try me out!'
})
  
const comment_league8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold player and I play ADC and mid. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})
  
const comment_league9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a duo partner and I mainly play top and jungle. I am a Gold player and I am serious about the game as well. Let us team up and climb the ladder together!'
})
  
const comment_league10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to League of Legends! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_league1);
comments.push(comment_league2);
comments.push(comment_league3);
comments.push(comment_league4);
comments.push(comment_league5);
comments.push(comment_league6);
comments.push(comment_league7);
comments.push(comment_league8);
comments.push(comment_league9);
comments.push(comment_league10);

const posts = [];

const league1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_league1._id, comment_league2._id],
  title: 'Looking for people to play League of Legends with',
  description: 'Hey everyone, I am looking for some new people to play League of Legends with. I am a Diamond player and enjoy playing all roles. Let me know if you are interested in playing together!'
})

const league2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_league3._id],
  title: 'Platinum player looking for teammates in League of Legends',
  description: 'Hey there, I am a Platinum player and I am looking for some teammates to climb the ladder with. I mainly play ADC and support, but I am open to playing other roles as well. Hit me up if you are interested!'
})

const league3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_league4._id, comment_league5._id],
  title: 'Looking for casual League of Legends players',
  description: 'Hey everyone, I am a casual League of Legends player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})
  
const league4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_league6._id],
  title: 'Diamond mid laner looking for duo partner in League of Legends',
  description: 'Hey there, I am a Diamond mid laner and I am looking for a duo partner to climb the ladder with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})
  
const league5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_league7._id, comment_league8._id],
  title: 'Looking for a team to play League of Legends with',
  description: 'Hey everyone, I am looking for a team to play League of Legends with. I am a Gold player and I enjoy playing all roles. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})
  
const league6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_league9._id],
  title: 'Support main looking for duo partner in League of Legends',
  description: 'Hey there, I am a Support main and I am looking for a duo partner to climb the ladder with. I am a Gold player and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})
  
const league7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_league10._id],
  title: 'New player looking for friends to play League of Legends with',
  description: 'Hey everyone, I am new to League of Legends and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(league1);
posts.push(league2);
posts.push(league3);
posts.push(league4);
posts.push(league5);
posts.push(league5);
posts.push(league6);
posts.push(league7);

const comment_valorant1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Platinum player and I enjoy playing Controller and Duelist. Let me know if you want to duo together!'
})
  
const comment_valorant2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold player and I mainly play Sentinel and Initiator. Let me know if you want to play together!'
})

const comment_valorant3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold player and I mainly play Duelist and Initiator. Let me know if you want to duo together or form a team!'
})

const comment_valorant4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play Controller and Sentinel. Let me know if you want to play together and have some fun!'
  })
  
const comment_valorant5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing Duelist and Initiator. Let me know when you guys are playing and I will join you!'
})

const comment_valorant6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Diamond Controller player and I am also serious about the game. Let us team up and climb the ladder together!'
})

const comment_valorant7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Platinum player and I mainly play Initiator and Controller. Let me know if you want to try me out!'
})
  
const comment_valorant8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold player and I play Duelist and Controller. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})
  
const comment_valorant9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a duo partner and I mainly play Controller and Initiator. I am a Gold player and I am serious about the game as well. Let us team up and climb the ladder together!'
})
  
const comment_valorant10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Valorant! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_valorant1);
comments.push(comment_valorant2);
comments.push(comment_valorant3);
comments.push(comment_valorant4);
comments.push(comment_valorant5);
comments.push(comment_valorant6);
comments.push(comment_valorant7);
comments.push(comment_valorant8);
comments.push(comment_valorant9);
comments.push(comment_valorant10);

const valorant1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_valorant1._id, comment_valorant2._id],
  title: 'Looking for people to play Valorant with',
  description: 'Hey everyone, I am looking for some new people to play Valorant with. I am a Diamond player and enjoy playing all roles. Let me know if you are interested in playing together!'
})

const valorant2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_valorant3._id],
  title: 'Platinum player looking for teammates in Valorant',
  description: 'Hey there, I am a Platinum player and I am looking for some teammates to climb the ladder with. I mainly play Duelist and Controller, but I am open to playing other roles as well. Hit me up if you are interested!'
})

const valorant3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_valorant4._id, comment_valorant5._id],
  title: 'Looking for casual Valorant players',
  description: 'Hey everyone, I am a casual Valorant player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})
  
const valorant4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_valorant6._id],
  title: 'Diamond Controller player looking for duo partner in Valorant',
  description: 'Hey there, I am a Diamond Controller player and I am looking for a duo partner to climb the ladder with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})
  
const valorant5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_valorant7._id, comment_valorant8._id],
  title: 'Looking for a team to play Valorant with',
  description: 'Hey everyone, I am looking for a team to play Valorant with. I am a Gold player and I enjoy playing all roles. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})
  
const valorant6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_valorant9._id],
  title: 'Duelist main looking for duo partner in Valorant',
  description: 'Hey there, I am a Duelist main and I am looking for a duo partner to climb the ladder with. I am a Gold player and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})
  
const valorant7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_valorant10._id],
  title: 'New player looking for friends to play Valorant with',
  description: 'Hey everyone, I am new to Valorant and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(valorant1);
posts.push(valorant2);
posts.push(valorant3);
posts.push(valorant4);
posts.push(valorant5);
posts.push(valorant6);
posts.push(valorant7);

const comment_apex1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Platinum player and I enjoy playing as Wraith and Bloodhound. Let me know if you want to duo together!'
})

const comment_apex2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold player and I mainly play as Lifeline and Pathfinder. Let me know if you want to play together!'
})

const comment_apex3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold player and I mainly play as Gibraltar and Caustic. Let me know if you want to duo together or form a team!'
})

const comment_apex4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play as Octane and Crypto. Let me know if you want to play together and have some fun!'
})

const comment_apex5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing as Mirage and Wattson. Let me know when you guys are playing and I will join you!'
})

const comment_apex6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Diamond player and I main Bangalore and Loba. Let us team up and climb the ladder together!'
})

const comment_apex7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Platinum player and I mainly play as Revenant and Rampart. Let me know if you want to try me out!'
})

const comment_apex8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold player and I play as Valkyrie and Horizon. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})

const comment_apex9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a duo partner and I mainly play as Fuse and Seer. I am a Gold player and I am serious about the game as well. Let us team up and climb the ladder together!'
})

const comment_apex10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Apex Legends! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_apex1);
comments.push(comment_apex2);
comments.push(comment_apex3);
comments.push(comment_apex4);
comments.push(comment_apex5);
comments.push(comment_apex6);
comments.push(comment_apex7);
comments.push(comment_apex8);
comments.push(comment_apex9);
comments.push(comment_apex10);

const apex1 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_apex1._id, comment_apex2._id],
  title: 'Looking for people to play Apex Legends with',
  description: 'Hey everyone, I am looking for some new people to play Apex Legends with. I am a Diamond player and enjoy playing as various legends. Let me know if you are interested in playing together!'
})

const apex2 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_apex3._id],
  title: 'Platinum player looking for teammates in Apex Legends',
  description: 'Hey there, I am a Platinum player and I am looking for some teammates to climb the ladder with. I mainly play as Wraith and Bloodhound, but I am open to playing other legends as well. Hit me up if you are interested!'
})

const apex3 = new Post({
  author_id: user2._id,
  game_id: game2._id,
  comment_id: [comment_apex4._id, comment_apex5._id],
  title: 'Looking for casual Apex Legends players',
  description: 'Hey everyone, I am a casual Apex Legends player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const apex4 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_apex6._id],
  title: 'Diamond player looking for duo partner in Apex Legends',
  description: 'Hey there, I am a Diamond player and I am looking for a duo partner to climb the ladder with. I mainly play as Bangalore and Loba. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const apex5 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_apex7._id, comment_apex8._id],
  title: 'Looking for a team to play Apex Legends with',
  description: 'Hey everyone, I am looking for a team to play Apex Legends with. I am a Gold player and I enjoy playing as various legends. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const apex6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_apex9._id],
  title: 'Legend main looking for duo partner in Apex Legends',
  description: 'Hey there, I am an Apex Legends main and I am looking for a duo partner to climb the ladder with. I am a Gold player and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const apex7 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_apex10._id],
  title: 'New player looking for friends to play Apex Legends with',
  description: 'Hey everyone, I am new to Apex Legends and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(apex1);
posts.push(apex2);
posts.push(apex3);
posts.push(apex4);
posts.push(apex5);
posts.push(apex6);
posts.push(apex7);

const comment_fortnite1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Platinum player and I enjoy playing both Battle Royale and Save the World. Let me know if you want to duo together!'
})

const comment_fortnite2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold player and I mainly play Battle Royale. Let me know if you want to play together!'
})

const comment_fortnite3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold player and I mainly play Save the World. Let me know if you want to duo together or form a team!'
})

const comment_fortnite4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play Battle Royale. Let me know if you want to play together and have some fun!'
})

const comment_fortnite5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing Battle Royale and Save the World. Let me know when you guys are playing and I will join you!'
})

const comment_fortnite6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Diamond player and I am also serious about the game. Let us team up and climb the ladder together!'
})

const comment_fortnite7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Platinum player and I mainly play Battle Royale. Let me know if you want to try me out!'
})

const comment_fortnite8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold player and I play both Battle Royale and Save the World. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})

const comment_fortnite9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a duo partner and I mainly play Battle Royale. I am a Gold player and I am serious about the game as well. Let us team up and climb the ladder together!'
})

const comment_fortnite10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Fortnite! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_fortnite1);
comments.push(comment_fortnite2);
comments.push(comment_fortnite3);
comments.push(comment_fortnite4);
comments.push(comment_fortnite5);
comments.push(comment_fortnite6);
comments.push(comment_fortnite7);
comments.push(comment_fortnite8);
comments.push(comment_fortnite9);
comments.push(comment_fortnite10);

const fortnite1 = new Post({
  author_id: user4._id,
  game_id: game3._id,
  comment_id: [comment_fortnite1._id, comment_fortnite2._id],
  title: 'Looking for people to play Fortnite with',
  description: 'Hey everyone, I am looking for some new people to play Fortnite with. I am a Diamond player and enjoy playing both Battle Royale and Save the World. Let me know if you are interested in playing together!'
})

const fortnite2 = new Post({
  author_id: user1._id,
  game_id: game3._id,
  comment_id: [comment_fortnite3._id],
  title: 'Platinum player looking for teammates in Fortnite',
  description: 'Hey there, I am a Platinum player and I am looking for some teammates to climb the ladder with. I mainly play Battle Royale, but I am open to playing Save the World as well. Hit me up if you are interested!'
})

const fortnite3 = new Post({
  author_id: user2._id,
  game_id: game3._id,
  comment_id: [comment_fortnite4._id, comment_fortnite5._id],
  title: 'Looking for casual Fortnite players',
  description: 'Hey everyone, I am a casual Fortnite player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const fortnite4 = new Post({
  author_id: user3._id,
  game_id: game3._id,
  comment_id: [comment_fortnite6._id],
  title: 'Diamond player looking for duo partner in Fortnite',
  description: 'Hey there, I am a Diamond player and I am looking for a duo partner to climb the ladder with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const fortnite5 = new Post({
  author_id: user5._id,
  game_id: game3._id,
  comment_id: [comment_fortnite7._id, comment_fortnite8._id],
  title: 'Looking for a team to play Fortnite with',
  description: 'Hey everyone, I am looking for a team to play Fortnite with. I am a Gold player and I enjoy playing both Battle Royale and Save the World. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const fortnite6 = new Post({
  author_id: user6._id,
  game_id: game3._id,
  comment_id: [comment_fortnite9._id],
  title: 'Battle Royale main looking for duo partner in Fortnite',
  description: 'Hey there, I am a Battle Royale main and I am looking for a duo partner to climb the ladder with. I am a Gold player and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const fortnite7 = new Post({
  author_id: user7._id,
  game_id: game3._id,
  comment_id: [comment_fortnite10._id],
  title: 'New player looking for friends to play Fortnite with',
  description: 'Hey everyone, I am new to Fortnite and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(fortnite1);
posts.push(fortnite2);
posts.push(fortnite3);
posts.push(fortnite4);
posts.push(fortnite5);
posts.push(fortnite6);
posts.push(fortnite7);

const comment_csgo1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Legendary Eagle Master and I enjoy playing Rifler and AWPer. Let me know if you want to duo together!'
})

const comment_csgo2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold Nova player and I mainly play Rifler and Support. Let me know if you want to play together!'
})

const comment_csgo3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold Nova player and I mainly play Rifler and AWPer. Let me know if you want to duo together or form a team!'
})

const comment_csgo4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play Rifler and Support. Let me know if you want to play together and have some fun!'
})

const comment_csgo5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing Rifler and AWPer. Let me know when you guys are playing and I will join you!'
})

const comment_csgo6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Supreme Master First Class Rifler player and I am also serious about the game. Let us team up and climb the ladder together!'
})

const comment_csgo7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Legendary Eagle player and I mainly play Rifler and Support. Let me know if you want to try me out!'
})

const comment_csgo8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold Nova player and I play Rifler and AWPer. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})

const comment_csgo9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a duo partner and I mainly play Rifler and Support. I am a Gold Nova player and I am serious about the game as well. Let us team up and climb the ladder together!'
})

const comment_csgo10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to CS:GO! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_csgo1);
comments.push(comment_csgo2);
comments.push(comment_csgo3);
comments.push(comment_csgo4);
comments.push(comment_csgo5);
comments.push(comment_csgo6);
comments.push(comment_csgo7);
comments.push(comment_csgo8);
comments.push(comment_csgo9);
comments.push(comment_csgo10);

const csgo1 = new Post({
  author_id: user4._id,
  game_id: game4._id,
  comment_id: [comment_csgo1._id, comment_csgo2._id],
  title: 'Looking for people to play CS:GO with',
  description: 'Hey everyone, I am looking for some new people to play CS:GO with. I am a Legendary Eagle Master and enjoy playing Rifler and AWPer roles. Let me know if you are interested in playing together!'
})

const csgo2 = new Post({
  author_id: user1._id,
  game_id: game4._id,
  comment_id: [comment_csgo3._id],
  title: 'Gold Nova player looking for teammates in CS:GO',
  description: 'Hey there, I am a Gold Nova player and I am looking for some teammates to climb the ladder with. I mainly play Rifler and AWPer, but I am open to playing other roles as well. Hit me up if you are interested!'
})

const csgo3 = new Post({
  author_id: user2._id,
  game_id: game4._id,
  comment_id: [comment_csgo4._id, comment_csgo5._id],
  title: 'Looking for casual CS:GO players',
  description: 'Hey everyone, I am a casual CS:GO player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const csgo4 = new Post({
  author_id: user3._id,
  game_id: game4._id,
  comment_id: [comment_csgo6._id],
  title: 'Supreme Master First Class Rifler player looking for duo partner in CS:GO',
  description: 'Hey there, I am a Supreme Master First Class Rifler player and I am looking for a duo partner to climb the ladder with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const csgo5 = new Post({
  author_id: user5._id,
  game_id: game4._id,
  comment_id: [comment_csgo7._id, comment_csgo8._id],
  title: 'Looking for a team to play CS:GO with',
  description: 'Hey everyone, I am looking for a team to play CS:GO with. I am a Gold Nova player and I enjoy playing all roles. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const csgo6 = new Post({
  author_id: user6._id,
  game_id: game4._id,
  comment_id: [comment_csgo9._id],
  title: 'AWPer main looking for duo partner in CS:GO',
  description: 'Hey there, I am an AWPer main and I am looking for a duo partner to climb the ladder with. I am a Gold Nova player and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const csgo7 = new Post({
  author_id: user7._id,
  game_id: game4._id,
  comment_id: [comment_csgo10._id],
  title: 'New player looking for friends to play CS:GO with',
  description: 'Hey everyone, I am new to CS:GO and I am looking for some friends to play with. I am not very good, but I   am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(csgo1);
posts.push(csgo2);
posts.push(csgo3);
posts.push(csgo4);
posts.push(csgo5);
posts.push(csgo6);
posts.push(csgo7);

const comment_minecraft1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I enjoy building and exploring. Let me know if you want to join my server or start a new world together!'
})

const comment_minecraft2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I like redstone engineering and farming. Let me know if you want to play together!'
})

const comment_minecraft3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I mainly enjoy building and playing mini-games. Let me know if you want to join my server or form a team!'
})

const comment_minecraft4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly enjoy building and exploring. Let me know if you want to play together and have some fun!'
})

const comment_minecraft5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy mining and adventuring. Let me know when you guys are playing and I will join you!'
})

const comment_minecraft6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a skilled builder and I am also serious about the game. Let us team up and create amazing things together!'
})

const comment_minecraft7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am good at redstone engineering and building. Let me know if you want to try me out!'
})

const comment_minecraft8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I enjoy farming and playing mini-games. I am serious about the game and I want to compete in building contests as well. Let us team up and achieve great things!'
})

const comment_minecraft9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a partner and I mainly enjoy exploring and building. I am serious about the game as well. Let us team up and have fun together!'
})

const comment_minecraft10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Minecraft! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_minecraft1);
comments.push(comment_minecraft2);
comments.push(comment_minecraft3);
comments.push(comment_minecraft4);
comments.push(comment_minecraft5);
comments.push(comment_minecraft6);
comments.push(comment_minecraft7);
comments.push(comment_minecraft8);
comments.push(comment_minecraft9);
comments.push(comment_minecraft10);

const minecraft1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_minecraft1._id, comment_minecraft2._id],
  title: 'Looking for people to play Minecraft with',
  description: 'Hey everyone, I am looking for some new people to play Minecraft with. I enjoy building and exploring. Let me know if you are interested in playing together!'
})

const minecraft2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_minecraft3._id],
  title: 'Looking for Minecraft teammates',
  description: 'Hey there, I am looking for some teammates to play Minecraft with. I mainly enjoy building and playing mini-games. Hit me up if you are interested!'
})

const minecraft3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_minecraft4._id, comment_minecraft5._id],
  title: 'Looking for casual Minecraft players',
  description: 'Hey everyone, I am a casual Minecraft player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const minecraft4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_minecraft6._id],
  title: 'Skilled builder looking for partner in Minecraft',
  description: 'Hey there, I am a skilled builder and I am looking for a partner to create amazing things with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const minecraft5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_minecraft7._id, comment_minecraft8._id],
  title: 'Looking for a team to play Minecraft with',
  description: 'Hey everyone, I am looking for a team to play Minecraft with. I enjoy farming and playing mini-games. I am looking for a team that is serious about the game and wants to compete in building contests. Let me know if you are interested!'
})

const minecraft6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_minecraft9._id],
  title: 'Explorer looking for partner in Minecraft',
  description: 'Hey there, I am an explorer and I am looking for a partner to adventure with. I am serious about the game and I am looking for someone who wants to have fun and improve. Let me know if you are interested!'
})

const minecraft7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_minecraft10._id],
  title: 'New player looking for friends to play Minecraft with',
  description: 'Hey everyone, I am new to Minecraft and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(minecraft1);
posts.push(minecraft2);
posts.push(minecraft3);
posts.push(minecraft4);
posts.push(minecraft5);
posts.push(minecraft6);
posts.push(minecraft7);

const comment_rocketleague1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Platinum player and I enjoy playing both 2v2 and 3v3. Let me know if you want to team up!'
})

const comment_rocketleague2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Gold player and I mainly play 3v3. Let me know if you want to play together!'
})

const comment_rocketleague3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gold player and I mainly play 2v2 and 3v3. Let me know if you want to team up or form a team!'
})

const comment_rocketleague4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play 2v2 and Rumble. Let me know if you want to play together and have some fun!'
})

const comment_rocketleague5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing 3v3 and Dropshot. Let me know when you guys are playing and I will join you!'
})

const comment_rocketleague6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Diamond player and I am serious about the game. Let us team up and climb the ranks together!'
})

const comment_rocketleague7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I am a Platinum player and I mainly play 3v3. Let me know if you want to try me out!'
})

const comment_rocketleague8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I am a Gold player and I play 2v2 and 3v3. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})

const comment_rocketleague9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a teammate and I mainly play 2v2. I am a Gold player and I am serious about the game as well. Let us team up and climb the ranks together!'
})

const comment_rocketleague10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Rocket League! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_rocketleague1);
comments.push(comment_rocketleague2);
comments.push(comment_rocketleague3);
comments.push(comment_rocketleague4);
comments.push(comment_rocketleague5);
comments.push(comment_rocketleague6);
comments.push(comment_rocketleague7);
comments.push(comment_rocketleague8);
comments.push(comment_rocketleague9);
comments.push(comment_rocketleague10);

const rocketleague1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague1._id, comment_rocketleague2._id],
  title: 'Looking for people to play Rocket League with',
  description: 'Hey everyone, I am looking for some new people to play Rocket League with. I am a Diamond player and enjoy playing both 2v2 and 3v3. Let me know if you are interested in playing together!'
})

const rocketleague2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague3._id],
  title: 'Platinum player looking for teammates in Rocket League',
  description: 'Hey there, I am a Platinum player and I am looking for some teammates to climb the ranks with. I mainly play 2v2 and 3v3, but I am open to playing other modes as well. Hit me up if you are interested!'
})

const rocketleague3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague4._id, comment_rocketleague5._id],
  title: 'Looking for casual Rocket League players',
  description: 'Hey everyone, I am a casual Rocket League player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const rocketleague4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague6._id],
  title: 'Diamond player looking for teammates in Rocket League',
  description: 'Hey there, I am a Diamond player and I am looking for teammates to climb the ranks with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const rocketleague5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague7._id, comment_rocketleague8._id],
  title: 'Looking for a team to play Rocket League with',
  description: 'Hey everyone, I am looking for a team to play Rocket League with. I am a Gold player and I enjoy playing both 2v2 and 3v3. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const rocketleague6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague9._id],
  title: 'Player looking for teammate in Rocket League',
  description: 'Hey there, I am looking for a teammate to climb the ranks with in Rocket League. I am a Gold player and I mainly play 2v2. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const rocketleague7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_rocketleague10._id],
  title: 'New player looking for friends to play Rocket League with',
  description: 'Hey everyone, I am new to Rocket League and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(rocketleague1);
posts.push(rocketleague2);
posts.push(rocketleague3);
posts.push(rocketleague4);
posts.push(rocketleague5);
posts.push(rocketleague6);
posts.push(rocketleague7);

const comment_fifa1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I mainly play Ultimate Team and enjoy both online and offline modes. Let me know if you want to team up!'
})

const comment_fifa2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I play Career Mode and I\'m looking for someone to share tips and tactics. Let me know if you want to play together!'
})

const comment_fifa3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I enjoy playing Pro Clubs and I am looking for a new club to join. Let me know if you want to team up!'
})

const comment_fifa4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play Ultimate Team and Kick-Off. Let me know if you want to play together and have some fun!'
})

const comment_fifa5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I enjoy playing Co-op Seasons and Online Friendlies. Let me know when you guys are playing and I will join you!'
})

const comment_fifa6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a serious FIFA player and I mainly play Ultimate Team. Let us team up and climb the ranks together!'
})

const comment_fifa7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your club! I play Pro Clubs and I am looking for a new team to join. Let me know if you want to try me out!'
})

const comment_fifa8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in playing with you! I am a serious FIFA player and I mainly play Career Mode. Let us team up and achieve great things!'
})

const comment_fifa9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a teammate and I mainly play Ultimate Team. I am a serious FIFA player and I want to compete in tournaments as well. Let us team up and climb the ranks together!'
})

const comment_fifa10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to FIFA! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_fifa1);
comments.push(comment_fifa2);
comments.push(comment_fifa3);
comments.push(comment_fifa4);
comments.push(comment_fifa5);
comments.push(comment_fifa6);
comments.push(comment_fifa7);
comments.push(comment_fifa8);
comments.push(comment_fifa9);
comments.push(comment_fifa10);

const fifa1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_fifa1._id, comment_fifa2._id],
  title: 'Looking for people to play FIFA with',
  description: 'Hey everyone, I am looking for some new people to play FIFA with. I mainly play Ultimate Team and enjoy both online and offline modes. Let me know   if you are interested in playing together!'
})

const fifa2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_fifa3._id],
  title: 'FIFA player looking for teammates',
  description: 'Hey there, I am a FIFA player and I am looking for some teammates to climb the ranks with. I mainly play Pro Clubs and Career Mode, but I am open to playing other modes as well. Hit me up if you are interested!'
})

const fifa3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_fifa4._id, comment_fifa5._id],
  title: 'Looking for casual FIFA players',
  description: 'Hey everyone, I am a casual FIFA player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const fifa4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_fifa6._id],
  title: 'Serious FIFA player looking for teammates',
  description: 'Hey there, I am a serious FIFA player and I am looking for teammates to climb the ranks with. I mainly play Ultimate Team and Career Mode. Let me know if you are interested!'
})

const fifa5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_fifa7._id, comment_fifa8._id],
  title: 'Looking for a club to play FIFA with',
  description: 'Hey everyone, I am looking for a club to play FIFA with. I mainly play Pro Clubs and I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const fifa6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_fifa9._id],
  title: 'FIFA player looking for teammate',
  description: 'Hey there, I am looking for a teammate to climb the ranks with in FIFA. I mainly play Ultimate Team and I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const fifa7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_fifa10._id],
  title: 'New player looking for friends to play FIFA with',
  description: 'Hey everyone, I am new to FIFA and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(fifa1);
posts.push(fifa2);
posts.push(fifa3);
posts.push(fifa4);
posts.push(fifa5);
posts.push(fifa6);
posts.push(fifa7);

const comment_smash1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I main Pikachu and I enjoy playing both 1v1 and 2v2. Let me know if you want to team up!'
})

const comment_smash2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I main Mario and I mainly play 1v1. Let me know if you want to play together!'
})

const comment_smash3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I main Bowser and I mainly play 1v1 and 2v2. Let me know if you want to team up or form a team!'
})

const comment_smash4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I main Sonic and enjoy playing both 1v1 and 2v2. Let me know if you want to play together and have some fun!'
})

const comment_smash5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I main Yoshi. Let me know when you guys are playing and I will join you!'
})

const comment_smash6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I main Link and I am serious about the game. Let us team up and climb the ranks together!'
})

const comment_smash7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your team! I main Samus and I mainly play 2v2. Let me know if you want to try me out!'
})

const comment_smash8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your team! I main Donkey Kong and I play both 1v1 and 2v2. I am serious about the game and I want to compete in tournaments as well. Let us team up and achieve great things!'
})

const comment_smash9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a teammate and I mainly play 1v1. I main Kirby and I am serious about the game as well. Let us team up and climb the ranks together!'
})

const comment_smash10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Super Smash Bros! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_smash1);
comments.push(comment_smash2);
comments.push(comment_smash3);
comments.push(comment_smash4);
comments.push(comment_smash5);
comments.push(comment_smash6);
comments.push(comment_smash7);
comments.push(comment_smash8);
comments.push(comment_smash9);
comments.push(comment_smash10);

const smash1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_smash1._id, comment_smash2._id],
  title: 'Looking for people to play Super Smash Bros with',
  description: 'Hey everyone, I am looking for some new people to play Super Smash Bros with. I main Pikachu and enjoy playing both 1v1 and 2v2. Let me know if you are interested in playing together!'
})

const smash2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_smash3._id],
  title: 'Player looking for teammates in Super Smash Bros',
  description: 'Hey there, I main Bowser and I am looking for some teammates to play with. I mainly play 1v1 and 2v2, but I am open to playing other modes as well. Hit me up if you are interested!'
})

const smash3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_smash4._id, comment_smash5._id],
  title: 'Looking for casual Super Smash Bros players',
  description: 'Hey everyone, I am a casual Super Smash Bros player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const smash4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_smash6._id],
  title: 'Player looking for teammates in Super Smash Bros',
  description: 'Hey there, I main Link and I am looking for teammates to play with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const smash5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_smash7._id, comment_smash8._id],
  title: 'Looking for a team to play Super Smash Bros with',
  description: 'Hey everyone, I am looking for a team to play Super Smash Bros with. I main Donkey Kong and I enjoy playing both 1v1 and 2v2. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const smash6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_smash9._id],
  title: 'Player looking for teammate in Super Smash Bros',
  description: 'Hey there, I am looking for a teammate to play Super Smash Bros with. I main Kirby and I mainly play 1v1. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const smash7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_smash10._id],
  title: 'New player looking for friends to play Super Smash Bros with',
  description: 'Hey everyone, I am new to Super Smash Bros and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(smash1);
posts.push(smash2);
posts.push(smash3);
posts.push(smash4);
posts.push(smash5);
posts.push(smash6);
posts.push(smash7);

const comment_lostark1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a Paladin player and I enjoy doing both PvE and PvP content. Let me know if you want to team up!'
})

const comment_lostark2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a Berserker player and I mainly focus on PvE content. Let me know if you want to play together!'
})

const comment_lostark3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Gunlancer player and I mainly do PvE and PvP content. Let me know if you want to team up or form a guild!'
})

const comment_lostark4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I am a Bard player and mainly focus on PvE content. Let me know if you want to play together and have some fun!'
})

const comment_lostark5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I play as a Summoner. Let me know when you guys are playing and I will join you!'
})

const comment_lostark6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a Shadowhunter player and I am serious about the game. Let us team up and conquer the content together!'
})

const comment_lostark7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your guild! I am a Sorceress player and I mainly focus on PvE content. Let me know if you want to try me out!'
})

const comment_lostark8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your guild! I am a Demonic player and I play both PvE and PvP content. I am serious about the game and I want to compete in high-level content. Let us team up and achieve great things!'
})

const comment_lostark9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a guild and I mainly focus on PvP content. I am a Deathblade player and I am serious about the game as well. Let us team up and climb the ranks together!'
})

const comment_lostark10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to Lost Ark! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
})

comments.push(comment_lostark1);
comments.push(comment_lostark2);
comments.push(comment_lostark3);
comments.push(comment_lostark4);
comments.push(comment_lostark5);
comments.push(comment_lostark6);
comments.push(comment_lostark7);
comments.push(comment_lostark8);
comments.push(comment_lostark9);
comments.push(comment_lostark10);

const lostark1 = new Post({
  author_id: user4._id,
  game_id: game1._id,
  comment_id: [comment_lostark1._id, comment_lostark2._id],
  title: 'Looking for people to play Lost Ark with',
  description: 'Hey everyone, I am looking for some new people to play Lost Ark with.'
})

const lostark2 = new Post({
  author_id: user1._id,
  game_id: game1._id,
  comment_id: [comment_lostark3._id],
  title: 'Player looking for teammates in Lost Ark',
  description: 'Hey there, I am a Demonic player and I am looking for some teammates to play with. I play both PvE and PvP content.'
})

const lostark3 = new Post({
  author_id: user2._id,
  game_id: game1._id,
  comment_id: [comment_lostark4._id, comment_lostark5._id],
  title: 'Looking for casual Lost Ark players',
  description: 'Hey everyone, I am a casual Lost Ark and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})

const lostark4 = new Post({
  author_id: user3._id,
  game_id: game1._id,
  comment_id: [comment_lostark6._id],
  title: 'Player looking for teammates in Lost Ark',
  description: 'Hey there, I main Berserker Class and I am looking for teammates to play with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const lostark5 = new Post({
  author_id: user5._id,
  game_id: game1._id,
  comment_id: [comment_lostark7._id, comment_lostark8._id],
  title: 'Looking for a team to play Lost Ark with',
  description: 'Hey everyone, I am looking for a team to play Lost Ark with. I am looking for a team that is serious about the game and wants to compete in tournaments. Let me know if you are interested!'
})

const lostark6 = new Post({
  author_id: user6._id,
  game_id: game1._id,
  comment_id: [comment_lostark9._id],
  title: 'Player looking for teammate in Lost Ark',
  description: 'Hey there, I am looking for a teammate to play Lost Ark with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

const lostark7 = new Post({
  author_id: user7._id,
  game_id: game1._id,
  comment_id: [comment_lostark10._id],
  title: 'New player looking for friends to play Lost Ark with',
  description: 'Hey everyone, I am new to Lost Ark and I am looking for some friends to play with. I am not very good, but I am willing to learn and improve. Let me know if you want to play together!'
})

posts.push(lostark1);
posts.push(lostark2);
posts.push(lostark3);
posts.push(lostark4);
posts.push(lostark5);
posts.push(lostark6);
posts.push(lostark7);

const comment_nba1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I am interested in playing with you! I am a point guard and I enjoy playing both MyCareer and Park games. Let me know if you want to team up!'
  })
  
  const comment_nba2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also interested in playing with you! I am a center and I mainly focus on playing MyCareer games. Let me know if you want to play together!'
  })
  
  const comment_nba3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a shooting guard and I mainly play Park games. Let me know if you want to team up or form a squad!'
  })
  
  const comment_nba4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am a casual player too and I am looking for more people to play with! I mainly play MyCareer games as a small forward. Let me know if you want to play together and have some fun!'
  })
  
  const comment_nba5 = new Comment({
  author_id: user4._id,
  content: 'Hey, count me in too! I am also a casual player and I play as a power forward. Let me know when you guys are playing and I will join you!'
  })
  
  const comment_nba6 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am interested in playing with you! I am a point guard and I am serious about the game. Let us team up and dominate the court together!'
  })
  
  const comment_nba7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am interested in joining your squad! I am a small forward and I mainly focus on playing Park games. Let me know if you want to try me out!'
  })
  
  const comment_nba8 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am also interested in joining your squad! I am a shooting guard and I play both MyCareer and Park games. I am serious about the game and I want to compete in high-level tournaments. Let us team up and achieve great things!'
  })
  
  const comment_nba9 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also looking for a squad and I mainly focus on playing MyCareer games as a center. I am serious about the game as well. Let us team up and climb the ranks together!'
  })
  
  const comment_nba10 = new Comment({
  author_id: user10._id,
  content: 'Hey, welcome to NBA 2K23! I am also a new player and I am willing to help you learn and improve. Let us play together and have some fun!'
  })

comments.push(comment_nba1);
comments.push(comment_nba2);
comments.push(comment_nba3);
comments.push(comment_nba4);
comments.push(comment_nba5);
comments.push(comment_nba6);
comments.push(comment_nba7);
comments.push(comment_nba8);
comments.push(comment_nba9);
comments.push(comment_nba10);

const nba1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_nba_1._id, comment_nba_2._id],
  title: 'Looking for people to play NBA 2K23 with',
  description: 'Hey everyone, I am looking for some new people to play NBA 2K23 with. I play as a shooting guard and enjoy playing both online and offline modes. Let me know if you are interested in playing together!'
})
  
const nba2 = new Post({
  author_id: user2._id,
  game_id: game2._id,
  comment_id: [comment_nba_3._id],
  title: 'Player looking for teammates in NBA 2K23',
  description: 'Hey there, I am a point guard and I am looking for some teammates to play with. I mainly play online and I am interested in forming a team for competitive play. Let me know if you are interested!'
})
  
const nba3 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_nba_4._id, comment_nba_5._id],
  title: 'Looking for casual NBA 2K23 players',
  description: 'Hey everyone, I am a casual NBA 2K23 player and I am looking for some other casual players to play with. I am not very good, but I love the game and want to improve. Let me know if you want to play together!'
})
  
const nba4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_nba2k23_6._id],
  title: 'Player looking for teammates in NBA 2K23',
  description: 'Hey there, I play as a small forward and I am looking for teammates to play with. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})
  
const nba5 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_nba2k23_7._id, comment_nba2k23_8._id],
  title: 'Looking for a team to play NBA 2K23 with',
  description: 'Hey everyone, I am looking for a team to play NBA 2K23 with. I am looking for a team that is serious about the game and wants to compete in tournaments. I play as a power forward and enjoy playing both online and offline modes. Let me know if you are interested!'
})
  
const nba6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_nba2k23_9._id],
  title: 'Player looking for teammate in NBA 2K23',
  description: 'Hey there, I am looking for a teammate to play NBA 2K23 with. I play as a center and mainly play online modes. I am looking for someone who is serious about the game and wants to improve. Let me know if you are interested!'
})

posts.push(nba1);
posts.push(nba2);
posts.push(nba3);
posts.push(nba4);
posts.push(nba5);
posts.push(nba6);

const comment_stardew1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join you on your farm! I enjoy raising animals and fishing in Stardew Valley. Let me know if you need a farming partner!'
})
  
const comment_stardew2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of Stardew Valley! I enjoy mining and gathering resources. Let me know if you want to explore the mines together!'
})
  
const comment_stardew3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a wine-making enthusiast and I enjoy growing crops. Let me know if you want to team up and become the best winemakers in the valley!'
})
  
const comment_stardew4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I am a foraging expert and I love exploring the different areas of the valley. Let me know if you want to join me on my next adventure!'
})
  
const comment_stardew5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am also a casual player and I love fishing in Stardew Valley! Let me know if you want to relax by the river and catch some fish together.'
})
  
const comment_stardew6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am a seasoned farmer and I enjoy raising crops and animals. Let us work together and make our farms the envy of the valley!'
})
  
const comment_stardew7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play Stardew Valley with! I am a skilled cook and I love creating delicious dishes with the ingredients we grow. Let me know if you want to cook up a storm together!'
})
  
const comment_stardew8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play Stardew Valley with! I am a carpentry enthusiast and I love building and decorating our farms. Let us build the best farmhouses in the valley!'
})
  
const comment_stardew9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your farm! I am a skilled blacksmith and I can help you upgrade your tools and equipment. Let us become the best blacksmiths in the valley!'
})
  
const comment_stardew10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also a new player to Stardew Valley! I am still learning the ropes but I would love to play with others and explore the valley together. Let us have some fun and learn from each other!'
})

comments.push(comment_stardew1);
comments.push(comment_stardew2);
comments.push(comment_stardew3);
comments.push(comment_stardew4);
comments.push(comment_stardew5);
comments.push(comment_stardew6);
comments.push(comment_stardew7);
comments.push(comment_stardew8);
comments.push(comment_stardew9);
comments.push(comment_stardew10);

const stardewvalley1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_stardew1._id, comment_stardew2._id],
  title: 'Looking for players to start a new farm in Stardew Valley',
  description: 'Hello everyone, I am looking for a few players who are interested in starting a new farm in Stardew Valley. We can coordinate and work together to make it the best farm ever!'
})
  
const stardewvalley2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_stardew3._id],
  title: 'Looking for a player to join my Stardew Valley farm',
  description: 'Hey there, I am looking for a player to join my existing farm in Stardew Valley. We can work together to improve the farm and have fun!'
})
  
const stardewvalley3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_stardew4._id, comment_stardew5._id],
  title: 'Casual Stardew Valley players wanted',
  description: 'Hi there, I am a casual player of Stardew Valley and I am looking for other casual players to play with. We can hang out, farm, and do whatever we feel like doing in the game. Let me know if you want to join me!'
})
  
const stardewvalley4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_stardew6._id],
  title: 'Looking for someone to play Stardew Valley with',
  description: 'Hello, I am looking for someone to play Stardew Valley with. I am new to the game and want to learn more about it. I am interested in both co-op and multiplayer modes. Let me know if you are interested!'
})
  
const stardewvalley5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_stardew7._id, comment_stardew8._id],
  title: 'Experienced Stardew Valley players wanted',
  description: 'Hey there, I am an experienced player of Stardew Valley and I am looking for other experienced players to play with. I am interested in optimizing our farm, exploring new areas, and completing all the challenges the game has to offer. Let me know if you want to join me!'
})
  
const stardewvalley6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_stardew9._id],
  title: 'Looking for a player to do multiplayer challenges in Stardew Valley',
  description: 'Hey there, I am looking for a player to do multiplayer challenges with in Stardew Valley. I am interested in exploring new areas and trying out new farm layouts. Let me know if you are interested!'
})

posts.push(stardewvalley1);
posts.push(stardewvalley2);
posts.push(stardewvalley3);
posts.push(stardewvalley4);
posts.push(stardewvalley5);
posts.push(stardewvalley6);

const comment_starcraft1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join your team! I mainly play as Protoss and enjoy micromanaging my units. Let me know if you need a teammate for some 2v2 or 3v3 matches!'
})

const comment_starcraft2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of StarCraft 2! I mainly play as Zerg and love swarming my opponents with a massive army. Let me know if you want to practice strategies together!'
})

const comment_starcraft3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a Terran player who focuses on a strong economy and a well-rounded army composition. Let me know if you want to team up and conquer the ladder!'
})

const comment_starcraft4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I enjoy playing Random and adapting to different strategies. Let me know if you want to join me in some epic battles!'
})

const comment_starcraft5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am also a casual player and I love playing StarCraft 2! Let me know if you want to relax and play some team games together.'
})

const comment_starcraft6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am a seasoned StarCraft 2 player who enjoys coaching and helping others improve. Let\'s work together and climb the ranks!'
})

const comment_starcraft7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play StarCraft 2 with! I love playing in team games and enjoy executing well-coordinated strategies. Let me know if you want to form a team and dominate the battlefield!'
})

const comment_starcraft8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play StarCraft 2 with! I am a fan of watching professional games and would love to discuss strategies and analyze replays. Let\'s learn from the pros and improve our own gameplay!'
})

const comment_starcraft9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your StarCraft 2 group! I am a passionate player who loves studying build orders and optimizing my gameplay. Let\'s work together and refine our strategies!'
})

const comment_starcraft10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also new to StarCraft 2! I am still learning the ropes but would love to play with others and improve together. Let\'s have some fun and learn from each other!'
})

comments.push(comment_starcraft1);
comments.push(comment_starcraft2);
comments.push(comment_starcraft3);
comments.push(comment_starcraft4);
comments.push(comment_starcraft5);
comments.push(comment_starcraft6);
comments.push(comment_starcraft7);
comments.push(comment_starcraft8);
comments.push(comment_starcraft9);
comments.push(comment_starcraft10);

const starcraft1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_starcraft1._id, comment_starcraft2._id],
  title: 'Looking for players to team up in StarCraft 2',
  description: 'Hello everyone, I am looking for a few players who are interested in teaming up for some StarCraft 2 matches. We can practice strategies and work together to climb the ladder!'
})

const starcraft2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_starcraft3._id],
  title: 'Looking for a player to practice StarCraft 2 with',
  description: 'Hey there, I am looking for a player to practice with in StarCraft 2. We can work on our build orders, unit control, and overall gameplay. Let me know if you are interested!'
})

const starcraft3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_starcraft4._id, comment_starcraft5._id],
  title: 'Casual StarCraft 2 players wanted',
  description: 'Hi there, I am a casual player of StarCraft 2 and I am looking for other casual players to play with. We can play team games, co-op missions, or just mess around with fun strategies. Let me know if you want to join me!'
})

const starcraft4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_starcraft6._id],
  title: 'Looking for someone to play StarCraft 2 with',
  description: 'Hello, I am looking for someone to play StarCraft 2 with. I am new to the game and want to learn more about it. I am interested in both co-op and multiplayer modes. Let me know if you are interested!'
})

const starcraft5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_starcraft7._id, comment_starcraft8._id],
  title: 'Experienced StarCraft 2 players wanted',
  description: 'Hey there, I am an experienced player of StarCraft 2 and I am looking for other experienced players to play with. I am interested in improving my skills, discussing strategies, and competing in tournaments. Let me know if you want to join me!'
})

const starcraft6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_starcraft9._id],
  title: 'Looking for a player to do StarCraft 2 co-op missions',
  description: 'Hey there, I am looking for a player to do co-op missions with in StarCraft 2. I am interested in trying different commanders and mastering each mission. Let me know if you are interested!'
})

posts.push(starcraft1);
posts.push(starcraft2);
posts.push(starcraft3);
posts.push(starcraft4);
posts.push(starcraft5);
posts.push(starcraft6);

const comment_terraria1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join your Terraria adventure! I enjoy exploring and mining for resources. Let me know if you need a partner to dig deep and uncover hidden treasures!'
})

const comment_terraria2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of Terraria! I enjoy building creative structures and designing efficient farms. Let me know if you want to collaborate on some unique building projects!'
})

const comment_terraria3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a boss-fighting enthusiast and enjoy gearing up for epic battles. Let me know if you want to team up and conquer the toughest foes!'
})

const comment_terraria4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I am an expert in wiring and crafting complex contraptions. Let me know if you want to join me in creating some amazing Terraria inventions!'
})

const comment_terraria5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am also a casual player and I love exploring the vast world of Terraria! Let me know if you want to venture into the unknown and discover new biomes together.'
})

const comment_terraria6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am a seasoned Terraria player and I enjoy sharing my knowledge with others. Let\'s work together and create an amazing world!'
})

const comment_terraria7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play Terraria with! I love participating in events and tackling challenges together. Let me know if you want to form a group and experience all that Terraria has to offer!'
})

const comment_terraria8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play Terraria with! I am a fishing enthusiast and I love collecting rare items from the depths. Let\'s cast our lines and reel in some incredible catches!'
})

const comment_terraria9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your Terraria world! I am a skilled mage who can help you defeat powerful enemies with my arsenal of spells. Let\'s work together to become the most powerful wizards in Terraria!'
})

const comment_terraria10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am also new to Terraria! I am still learning the ropes but would love to play with others and explore the world together. Let\'s have some fun and learn from each other!'
})

comments.push(comment_terraria1);
comments.push(comment_terraria2);
comments.push(comment_terraria3);
comments.push(comment_terraria4);
comments.push(comment_terraria5);
comments.push(comment_terraria6);
comments.push(comment_terraria7);
comments.push(comment_terraria8);
comments.push(comment_terraria9);
comments.push(comment_terraria10);

const terraria1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_terraria1._id, comment_terraria2._id],
  title: 'Looking for players to start a new Terraria adventure',
  description: 'Hello everyone, I am looking for a few players who are interested in starting a new Terraria adventure. We can explore, build, and work together to make the most amazing world!'
})

const terraria2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_terraria3._id],
  title: 'Looking for a player to join my Terraria world',
  description: 'Hey there, I am looking for a player to join my existing Terraria world. We can work together to improve our builds and have fun!'
})

const terraria3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_terraria4._id, comment_terraria5._id],
  title: 'Casual Terraria players wanted',
  description: 'Hi there, I am a casual player of Terraria and I am looking for other casual players to play with. We can hang out, explore, and do whatever we feel like doing in the game. Let me know if you want to join me!'
})

const terraria4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_terraria6._id],
  title: 'Looking for someone to play Terraria with',
  description: 'Hello, I am looking for someone to play Terraria with. I am new to the game and want to learn more about it. I am interested in both co-op and multiplayer modes. Let me know if you are interested!'
})

const terraria5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_terraria7._id, comment_terraria8._id],
  title: 'Experienced Terraria players wanted',
  description: 'Hey there, I am an experienced player of Terraria and I am looking for other experienced players to play with. I am interested in optimizing our builds, exploring new areas, and completing all the challenges the game has to offer. Let me know if you want to join me!'
})

const terraria6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_terraria9._id],
  title: 'Looking for a player to do Terraria expert mode',
  description: 'Hey there, I am looking for a player to do expert mode with in Terraria. I am interested in tackling difficult bosses and finding the best gear. Let me know if you are interested!'
})

posts.push(terraria1);
posts.push(terraria2);
posts.push(terraria3);
posts.push(terraria4);
posts.push(terraria5);
posts.push(terraria6);

const comment_dota1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join your Dota 2 team! I am a versatile player, comfortable with both support and core roles. Let me know if you need a teammate to help secure some victories!'
})

const comment_dota2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of Dota 2! I mainly play mid and carry roles. Let me know if you want to form a dynamic duo and dominate the lanes together!'
})

const comment_dota3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I excel in the support role and enjoy enabling my cores to shine. Let me know if you want to team up and climb the MMR ladder!'
})

const comment_dota4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I am an offlane specialist and love creating space for my team. Let me know if you want to join forces and make a strong frontline!'
})

const comment_dota5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am a casual Dota 2 player and enjoy playing different heroes for fun. Let me know if you want to chill, have a good time, and maybe try out some unconventional strategies!'
})

const comment_dota6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am a seasoned Dota 2 player and have experience in various roles. Let\'s work together and improve our skills as a team!'
})

const comment_dota7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play Dota 2 with! I am always eager to learn and practice new strategies. Let me know if you want to group up and conquer the battlefield!'
})

const comment_dota8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play Dota 2 with! I am a dedicated roamer and enjoy making impactful plays across the map. Let\'s work together to secure early game advantages!'
})

const comment_dota9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your Dota 2 team! I am a skilled drafter and can help devise strategies to counter the enemy. Let\'s outsmart our opponents and rise through the ranks!'
})

const comment_dota10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am new to Dota 2 but eager to learn and improve! I am open to playing any role and excited to discover the depth and complexity of the game. Let\'s grow together as players and teammates!'
})

comments.push(comment_dota1);
comments.push(comment_dota2);
comments.push(comment_dota3);
comments.push(comment_dota4);
comments.push(comment_dota5);
comments.push(comment_dota6);
comments.push(comment_dota7);
comments.push(comment_dota8);
comments.push(comment_dota9);
comments.push(comment_dota10);

const dota1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_dota1._id, comment_dota2._id],
  title: 'Looking for players to form a Dota 2 team',
  description: 'Hello everyone, I am looking for a few players who are interested in forming a Dota 2 team. We can practice together, improve our skills, and climb the MMR ladder as a team!'
})

const dota2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_dota3._id],
  title: 'Looking for a support player to join my Dota 2 stack',
  description: 'Hey there, I am looking for a support player to join my existing Dota 2 stack. We can work together to coordinate our plays and climb the ranks!'
})

const dota3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_dota4._id, comment_dota5._id],
  title: 'Casual Dota 2 players wanted',
  description: 'Hi there, I am a casual player of Dota 2 and I am looking for other casual players to play with. We can chill, try different heroes, and have fun without stressing too much about winning or losing. Let me know if you want to join me!'
})

const dota4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_dota6._id],
  title: 'Looking for someone to play Dota 2 with',
  description: 'Hello, I am looking for someone to play Dota 2 with. I am new to the game and want to learn more about it. I am interested in both casual games and ranked matches. Let me know if you are interested!'
})

const dota5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_dota7._id, comment_dota8._id],
  title: 'Experienced Dota 2 players wanted',
  description: 'Hey there, I am an experienced player of Dota 2 and I am looking for other experienced players to play with. I am interested in improving our teamwork, mastering advanced strategies, and reaching higher MMR brackets. Let me know if you want to join me!'
})

const dota6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_dota9._id],
  title: 'Looking for a player to practice Dota 2 mechanics',
  description: 'Hey there, I am looking for a player to practice Dota 2 mechanics with. I am interested in learning new heroes, improving last hitting, and refining map awareness. Let me know if you are interested!'
})

posts.push(dota1);
posts.push(dota2);
posts.push(dota3);
posts.push(dota4);
posts.push(dota5);
posts.push(dota6);

const comment_overwatch1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join your Overwatch team! I am a versatile player, comfortable with playing both DPS and support roles. Let me know if you need a teammate to help secure some victories!'
})

const comment_overwatch2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of Overwatch! I mainly play tank heroes. Let me know if you want to team up and create a strong frontline together!'
})

const comment_overwatch3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I excel in the support role and enjoy keeping my teammates alive. Let me know if you want to team up and climb the ranks together!'
})

const comment_overwatch4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I am a DPS specialist and love securing key eliminations for my team. Let me know if you want to join forces and dominate the battlefield!'
})

const comment_overwatch5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am a casual Overwatch player and enjoy playing different heroes for fun. Let me know if you want to chill, have a good time, and maybe try out some unconventional strategies!'
})

const comment_overwatch6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am a seasoned Overwatch player and have experience with various heroes. Let\'s work together and improve our skills as a team!'
})

const comment_overwatch7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play Overwatch with! I am always eager to learn and practice new strategies. Let me know if you want to group up and conquer the battlefield!'
})

const comment_overwatch8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play Overwatch with! I am a dedicated shot-caller and enjoy coordinating team fights. Let\'s work together to outsmart our opponents!'
})

const comment_overwatch9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your Overwatch team! I am a skilled player and can flex between different roles. Let\'s rise through the ranks together!'
})

const comment_overwatch10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am new to Overwatch but eager to learn and improve! I am open to playing any role and excited to discover the depth and complexity of the game. Let\'s grow together as players and teammates!'
})

comments.push(comment_overwatch1);
comments.push(comment_overwatch2);
comments.push(comment_overwatch3);
comments.push(comment_overwatch4);
comments.push(comment_overwatch5);
comments.push(comment_overwatch6);
comments.push(comment_overwatch7);
comments.push(comment_overwatch8);
comments.push(comment_overwatch9);
comments.push(comment_overwatch10);

const overwatch1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_overwatch1._id, comment_overwatch2._id],
  title: 'Looking for players to form an Overwatch team',
  description: 'Hello everyone, I am looking for a few players who are interested in forming an Overwatch team. We can practice together, improve our skills, and climb the competitive ladder as a team!'
})

const overwatch2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_overwatch3._id],
  title: 'Looking for a support player to join my Overwatch group',
  description: 'Hey there, I am looking for a support player to join my existing Overwatch group. We can work together to coordinate our plays and climb the ranks!'
})

const overwatch3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_overwatch4._id, comment_overwatch5._id],
  title: 'Casual Overwatch players wanted',
  description: 'Hi there, I am a casual player of Overwatch and I am looking for other casual players to play with. We can chill, try different heroes, and have fun without stressing too much about winning or losing. Let me know if you want to join me!'
})

const overwatch4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_overwatch6._id],
  title: 'Looking for someone to play Overwatch with',
  description: 'Hello, I am looking for someone to play Overwatch with. I am new to the game and want to learn more about it. I am interested in both casual games and ranked matches. Let me know if you are interested!'
})

const overwatch5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_overwatch7._id, comment_overwatch8._id],
  title: 'Experienced Overwatch players wanted',
  description: 'Hey there, I am an experienced player of Overwatch and I am looking for other experienced players to play with. I am interested in improving our teamwork, mastering advanced strategies, and reaching higher ranks. Let me know if you want to join me!'
})

const overwatch6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_overwatch9._id],
  title: 'Looking for a player to practice Overwatch mechanics',
  description: 'Hey there, I am looking for a player to practice Overwatch mechanics with. I am interested in learning new heroes, improving positioning, and refining map awareness. Let me know if you are interested!'
})

posts.push(overwatch1);
posts.push(overwatch2);
posts.push(overwatch3);
posts.push(overwatch4);
posts.push(overwatch5);
posts.push(overwatch6);

const comment_gta5_1 = new Comment({
  author_id: user1._id,
  content: 'Hey, I would love to join your GTA V crew! I enjoy completing heists and various missions in the game. Let me know if you need a skilled partner in crime!'
})

const comment_gta5_2 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am also a fan of GTA V! I like participating in races and custom game modes. Let me know if you want to race together or explore the vast world of Los Santos!'
})

const comment_gta5_3 = new Comment({
  author_id: user2._id,
  content: 'Hey, I am interested in playing with you! I am a vehicle enthusiast and enjoy collecting and customizing cars in GTA V. Let me know if you want to team up and show off our rides!'
})

const comment_gta5_4 = new Comment({
  author_id: user3._id,
  content: 'Hey, I am looking for more people to play with! I am a marksman in GTA V and love taking on challenging combat missions. Let me know if you want to join me in some intense firefights!'
})

const comment_gta5_5 = new Comment({
  author_id: user4._id,
  content: 'Hey, I am a casual player and love exploring the world of GTA V. Let me know if you want to relax, have fun, and discover hidden secrets throughout the map together.'
})

const comment_gta5_6 = new Comment({
  author_id: user5._id,
  content: 'Hey, I am interested in playing with you! I am an experienced GTA V player and enjoy both cooperative and competitive gameplay. Let\'s work together and make our mark in Los Santos!'
})

const comment_gta5_7 = new Comment({
  author_id: user6._id,
  content: 'Hey, I am looking for a group to play GTA V with! I love participating in stunt races and custom game modes. Let me know if you want to team up and experience the thrill of high-speed racing!'
})

const comment_gta5_8 = new Comment({
  author_id: user7._id,
  content: 'Hey, I am also looking for people to play GTA V with! I enjoy strategizing and planning the perfect heist. Let\'s team up and secure the biggest scores in the city!'
})

const comment_gta5_9 = new Comment({
  author_id: user8._id,
  content: 'Hey, I am interested in joining your GTA V group! I am a skilled pilot and can provide air support during missions. Let\'s dominate the skies and rule Los Santos!'
})

const comment_gta5_10 = new Comment({
  author_id: user9._id,
  content: 'Hey, I am new to GTA V but eager to learn and improve! I am open to playing any role and excited to explore the depth and complexity of the game. Let\'s grow together as players and teammates!'
})

comments.push(comment_gta5_1);
comments.push(comment_gta5_2);
comments.push(comment_gta5_3);
comments.push(comment_gta5_4);
comments.push(comment_gta5_5);
comments.push(comment_gta5_6);
comments.push(comment_gta5_7);
comments.push(comment_gta5_8);
comments.push(comment_gta5_9);
comments.push(comment_gta5_10);

const gta5_1 = new Post({
  author_id: user1._id,
  game_id: game2._id,
  comment_id: [comment_gta5_1._id, comment_gta5_2._id],
  title: 'Looking for players to form a GTA V crew',
  description: 'Hello everyone, I am looking for a few players who are interested in forming a GTA V crew. We can complete heists, missions, and various activities together!'
})

const gta5_2 = new Post({
  author_id: user3._id,
  game_id: game2._id,
  comment_id: [comment_gta5_3._id],
  title: 'Looking for a player to join my GTA V group',
  description: 'Hey there, I am looking for a player to join my existing GTA V group. We can work together to have fun, participate in races, and explore the vast world of Los Santos!'
})

const gta5_3 = new Post({
  author_id: user5._id,
  game_id: game2._id,
  comment_id: [comment_gta5_4._id, comment_gta5_5._id],
  title: 'Casual GTA V players wanted',
  description: 'Hi there, I am a casual player of GTA V and I am looking for other casual players to play with. We can chill, explore, and just have fun in the world of Los Santos. Let me know if you want to join me!'
})

const gta5_4 = new Post({
  author_id: user4._id,
  game_id: game2._id,
  comment_id: [comment_gta5_6._id],
  title: 'Looking for someone to play GTA V with',
  description: 'Hello, I am looking for someone to play GTA V with. I am new to the game and want to learn more about it. I am interested in both co-op and competitive gameplay. Let me know if you are interested!'
})

const gta5_5 = new Post({
  author_id: user7._id,
  game_id: game2._id,
  comment_id: [comment_gta5_7._id, comment_gta5_8._id],
  title: 'Experienced GTA V players wanted',
  description: 'Hey there, I am an experienced player of GTA V and I am looking for other experienced players to play with. I am interested in completing heists, dominating races, and conquering Los Santos. Let me know if you want to join me!'
})

const gta5_6 = new Post({
  author_id: user6._id,
  game_id: game2._id,
  comment_id: [comment_gta5_9._id],
  title: 'Looking for a player to practice GTA V mechanics',
  description: 'Hey there, I am looking for a player to practice GTA V mechanics with. I am interested in learning new strategies, improving my skills, and becoming a better player. Let me know if you are interested!'
})

posts.push(gta5_1);
posts.push(gta5_2);
posts.push(gta5_3);
posts.push(gta5_4);
posts.push(gta5_5);
posts.push(gta5_6);




//demo user post seeding
// for (let i = 0; i < 10; i++) {
//   const author_id = demoUser._id;
//   const game_id = game1._id;
//   const comment_id = getRandomComment()._id;
//   let title = faker.lorem.sentence(5);
//   // Truncate the title to 50 characters if it's longer
//   title = title.length > 50 ? title.substring(0, 50) : title;
//   const description = faker.lorem
//     .paragraphs(getRandomArbitrary(5, 20), "\n")
//     .substring(0, 400);
//   posts.push(
//     new Post({
//       author_id: author_id,
//       comment_id: [comment_id, comment_id, comment_id],
//       game_id: game_id,
//       title: title,
//       description: description
//     })
//   );
// }

// const reviews = [];
// const NUM_SEED_REVIEWS = 100;

// for (let i = 0; i < NUM_SEED_REVIEWS; i++) {
//   const user_id = getRandomUser().id;
//   let reviewer_id;
//   reviewer_id = getRandomUser().id;
//   while (reviewer_id === user_id) {
//     reviewer_id = getRandomUser().id;
//   };
//   let title = faker.lorem.sentence(5);
//   // Truncate the title to 50 characters if it's longer
//   title = title.length > 50 ? title.substring(0, 50) : title;
//   const rating = getRandomIntInclusive(1,5)
//   const description = faker.lorem
//     .sentences(getRandomArbitrary(1, 10))
//     .substring(0, 400); 
//     reviews.push(
//       new Review({
//         user_id: user_id,
//         reviewer_id: reviewer_id,
//         description: description,
//         title: title,
//         rating: rating
//       })
//     );
// }

//demoUser reviews seeding
// for (let i = 0; i < 10; i++) {
//   const user_id = demoUser.id;
//   let reviewer_id;
//   reviewer_id = getRandomUser().id;
//   while (reviewer_id === user_id) {
//     reviewer_id = getRandomUser().id;
//   };
//   let title = faker.lorem.sentence(5);
//   // Truncate the title to 50 characters if it's longer
//   title = title.length > 50 ? title.substring(0, 50) : title;
//   const rating = getRandomIntInclusive(1, 5)
//   const description = faker.lorem
//     .sentences(getRandomArbitrary(1, 10))
//     .substring(0, 400);
//   reviews.push(
//     new Review({
//       user_id: user_id,
//       reviewer_id: reviewer_id,
//       description: description,
//       title: title,
//       rating: rating
//     })
//   );
// }

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
