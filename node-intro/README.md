# Node

#### Not a framework - not a programming language

#### But a javascript runtime (port of the v8 engine from chrome) 

#### Presented in 2009, written in C, C++ and JavaScript.

#### Fork in 2014, to keep up to date with the newest additions in the v8 engine. merged back in 2015

#### In 2018 Ryan Dahl released the first version of deno, a js runtime based on typescript written in the programming language Rust

## Installation 

#### Checking if node is installed : 

```bash
$ node -v 
```

#### Checking if nvm is installed : 

```bash
$ nvm --version
```

#### For documentation check out the homepage of node

https://nodejs.org/en/docs/


#### Install the latest lts version : 

```bash
$ nvm install --lts 
```

#### To not to have to do that all the time - set default : 

```bash
$ nvm alias default 12.16.1  
```


#### Now we have the ability to run javasctipt without a browser

```js
console.log('Hello Node')
```

#### Run the file
```bash
$ node <nameofthefile.js>
```

#### If you have an index.js file which is the default entry point then you can run
```bash
$ node .
```

#### We don't have the document object in node
```bash
$ console.log(document);
```

#### What is the window in the browser is the global object in node
```bash
$ global.console.log('hello node');
```

#### This returns darwin on mac os - which is the core of os as linux is the core of debian
```bash
$ console.log(process.platform)
```


## NPM - The package manager for node.js
#### More than one million packages on npm 

#### Terminology : module or package, dependencies

#### A package or module is a bundle of reusable code that is packaged with the code it depends on (and that code is called dependencies).

#### We use modules to reuse code and not have to rewrite everything on our own

#### If we install node we install npm automatically

#### Check for npm : 
```bash
$ npm --version
```

## The package.json 

#### It is a so called manifest file - it lists the dependencies of our application (and also some metadata about the application)

#### It also holds information about the license - if you want to know more about software licenses here is an overview - https://choosealicense.com/licenses/

#### You can check for outdated packages in your project easily by running npm outdated command.

```bash
$ npm outdated
```

#### You can update the dependencies by running npm update

```bash
$ npm update
```

### Semantic versioning package.json

#### ~1.0.2 it means to install version 1.0.2 or the latest patch version such as 1.0.4. 

#### ^1.0.2 it means to install version 1.0.2 or the latest minor or patch version such as 1.1.0.

#### The package.lock holds the information of the exact dependency tree so that after the next install you get the exact file structure - the package.lock file you normally don't touch 

## Building a new project

```bash
$ npm init
```

#### Or if you don't want to answer all these questions: 
```bash
$ npm init -y
```

#### Install our first npm package

```bash
$ npm install chalk 
```

#### In older versions of npm you had to do : npm install chalk --save - that is not needed any more

#### Normally you install packages per project - this installs package globally

```bash
$ npm install -g 
```

#### Let's use the installed package:

```js
const chalk = require('chalk');
console.log(chalk.blue('Hello, npm!'));
```

#### If we want to see the workings of a package we either go to NPM , GitHub or sometimes also a dedicates page just for the documentation

### There are also built in modules available in node - e.g. the crypto module

```js
const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');

console.log(randomString);
```


### Require a function from another file

```bash
$ touch add.js
```

```js
// add.js
const add = (a, b) => a + b;

module.exports = add;
```

#### Then in another file we can pull in this function with 'require' and use it

```js
// node-intro.js
const addNumbers = require('./add');

console.log(addNumbers(2, 3));
```

#### Require an object containing multiple functions

```bash
$ touch functions.js
```

#### Then require and use it

```js
const functions = require('./functions');
console.log(functions.goodBye());
```


#### Exercise : install a package from this list and use it, especially the weird part
https://github.com/sindresorhus/awesome-nodejs#weird