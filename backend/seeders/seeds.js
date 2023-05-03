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
  comment_id: [comment_league1, comment_league2],
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
  comment_id: [comment_valorant1, comment_valorant2],
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
  comment_id: [comment_fortnite1, comment_fortnite2],
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
  comment_id: [comment_csgo1, comment_csgo2],
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
