---
title: "Just clone it!"
date: 2019-04-28 11:37:00
categories: web
---

1. Settings in Ubuntu
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
