# :tv: Bleu202TV

 ![Bleu202TV](doc/readme-img/Bleu202TV.png?raw=true "Bleu202TV")

## Table of Contents

- [**Building configuration**](#Building-configuration)
  * [**Clone repository**](#clone-repository)
  * [**Linux**](#linux)
    - [**Add dependencies**](#add-dependencies)
    - [**Build**](#build)
    - [**Execute**](#execute)
  * [**Windows**](#windows)
    
- [**Presentation**](#presentation)

- [**Main Features**](#main-features)

- [**Contributors**](#contributors)

- [**Dependencies**](#dependencies)


## Building configuration 
You need [Node.js](https://nodejs.org) to launch this project.
### Clone repository 
In the local folder for the project
```bash
git clone https://github.com/LibertAntoine/Bleu202TV.git
```
### Frontend
#### Complete .env file
This project need env variable. You can use and rename .env.sample file to .env et complete it : 
* VUE_APP_DOMAIN_API=domain:port => domain of the API (backend)

#### Launch local frontend
In the Node Command Prompt, in the project folder
```bash
cd Frontend
npm install
npm run serve
```

#### Build frontend
In the Node Command Prompt, in the project folder
```bash
cd Frontend
npm install
npm run build
```
The build forder is dist.

### Backend
#### Complete .env file
This project need env variable. You can use and rename .env.sample file to .env et complete it : 
* PASSWORD=password => password to acces of the MongoDB database.
* SECRET_KEY=key => Private key used to generate and decript the token JWT (Authentication)

#### Launch backend
In the Node Command Prompt, in the project folder
```bash
cd Backend
npm install
node app
```

## Presentation
<p>
Bleu202TV is an interactive, fun and entertaining web experience, produced in collaboration with the Compagnie Bleu 202 of Alençon. With Covid Restrictions, the company made the choice in summer 2020 to produce an entirely digital work, mixing videos, photos, quizzes, interactive photo-novels, games and digital illustrations to depict a comic and colourful universe aimed at raising awareness of gestures barriers against Covid.
</p>
<p>
I had the immense pleasure of accompanying the company in the realization of the various videos and photos and in the creation of the entire website.
</p>

Realized in June-July 2020.


[**More details... (FR)**](doc/Rapport-de-Stage-Bleu-202.pdf)

<p align="center">
<img src="doc/readme-img//Bleu202TV2.png?raw=true" width="45%" alt="Screenshot">
<img src="doc/readme-img//Bleu202TV3.png?raw=true" width="45%" alt="Screenshot">
</p>


## Main Features

* Management of a project combining artistic creation and web development.
* Creation of a single page application in Vue.js.
* Construction of a website in a spirit of gamification.
* Implementation of a backend API with Node.js and MongoDB.
* Capture and post-production of numerous photos and videos.
* Creation of an interactive photo novel.

## Dependencies
### Frontend
- [Semantic-ui](https://www.npmjs.com/package/semantic-ui-vue) - For styles.
- [Vue-fullscreen](https://www.npmjs.com/package/vue-fullscreen) - For fullscreen mode management.
- [Nosleep.js](https://www.npmjs.com/package/nosleep.js) - For not closed the application on mobile, during some games.
- [Axios](https://www.npmjs.com/package/axios) - For API requests.
- [@vimeo/player](https://www.npmjs.com/package/@vimeo/player) - For managed embeded video contents.

### Backend
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - For password crypting.
- [Express](https://www.npmjs.com/package/express) - For application architecture.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For JWT.
- [Random-int](https://www.npmjs.com/package/random-int) - For given random name of users.
- [Mongoose](https://www.npmjs.com/package/mongoose) - For db management.
