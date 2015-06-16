# NodeJS Tutorials
Playing around with NodeJS and Git.

# Quick Start
### simple-server
From GitBash, enter the project folder and type the following to get started:
```
npm start
```

### express-website
In the project folder. type the following to get started:
```
npm start
```
Go to http://localhost:3000 to see the results.

# Installation
### Windows
* Install Git from: https://git-scm.com/
* Install NodeJS from: https://nodejs.org/

### Linux
Ensure your distribution is up to date, and install nodejs and also the nodejs package manager.
```
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install nodejs
sudo apt-get install npm
```
Ensure that you also have git installed:
```
sudo apt-get install git
```

### How to get started with express
Install express and express-generator through:
```
npm install -g express
npm install -g express-generator
```
Note for Linux:
* Add `sudo` before the above commands
* You also need to symlink node and nodejs to get around an [issue](http://stackoverflow.com/questions/14914715/express-js-no-such-file-or-directory "Link to issue") with the package naming scheme, with the following command:
```
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
```

Create the basic express website layout through:
```
express name-of-project
npm install
npm start
```
