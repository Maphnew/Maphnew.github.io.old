---
title: "Just clone it!"
date: 2019-04-28 11:37:00
categories: web
---
### Set Up
1. Setting up the Project
- Make github repository(Add readme.md / .gitignore got Node)
- Clone it!
- Installing yarn

Ref: <https://itsfoss.com/install-yarn-ubuntu/>

```
sudo apt install curl

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

sudo sh -c 'echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list'

sudo apt update
sudo apt install yarn

yarn --version
```
- Initialization __yarn__
```
# yarn init
```
- Set up project name, version, description etc.
- Add __graphql-yoga__
```
# yarn add graphql-yoga
```
- Start __vscode__
```
# code .
```
- Add __nodemon__
```
# yarn add nodemon -D
```
- Make a folder and file (src/server.js)
- Modify package.json
```json
"scripts": {
    "dev": "nodemon --exec babel-node src/server.js"
  }

```
- Make a json file (nodemon.json)
```json
{
    "ext": "js graphql"
}
```
- Test yarn dev 
```
# yarn dev
```

***

2. Creating GraphQL Server
