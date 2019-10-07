> NODEJS TUTORIAL

NODE is not a programming language nor framework
- It's a runtime envrionment for executing JavaScript code.
- It uses Chromes V8 javascript engine embedded in C++ and some extra modules. It has more feature than DOM/Browser.
- Remember in Node we don't window or document objects. We have other objects to work with files, operating system and network etc.

> STEPS:

// on terminal run\
``` node --version```\
\
// regardless go to nodejs.org and download LTS version of node\
// or \
// on terminal run:\
```nvm install 10.16 (your new version) --reinstall-packages-from=8.12 (your old version)```\
// then, if you want, you can delete your previous version with:\
```nvm deactivate```\
```nvm uninstall OLD_VERSION```\
\
// create a folder\
```mkdir node-tutorial```\
// open that folder in vscode or any other editor\
``` code . ```\
// add a new file inside vs app.js\
// for code look app.js content that located on the same location\
\
// to run the file\
// on terminal (inside node-tutorial folder):\
``` node app.js ```\
\
// Like in DOM/Browser when we create variables they assigned to global scope (window).\
// try running on Console:\
```window.console.log```\
```window.setTimeout ```\
\
// In nodejs we have modules. If we created a varibale it is only avaibale inside that module.\
// We should avoid creating variable on global scope.\
// write console.log(module) in app.js and try to run it on terminal \
```node app.js```\
// you will see every module has id, path, filename, exports etc.. \
\
// create a new module logger.js inside node-tutorial folder\
// see file content for code \
// by using module.exports we are exporting one or more members etc. and use them in our first module app.js by using require() 

> in order to excape overriding variables use const instead of var

// Node use module wrapper function (self invoked function) to wrap function etc. And it has exports, module, require etc arguments.\
// to check write ```console.log(__filename)```, ```console.log(dirname)``` etc inside logger.js and run on terminal"
```node logger.js ```\
\
// go to nodesjs.org > docs > modules > Path\
// we will practice path.parse method\
// look for Example5 in logger.js file for how it works\
\
// go to nodesjs.org > docs > modules > OS\
// we will practice os.totalmem and os.freemem methods\
// look for Example6 in logger.js file for how it works\
\
// go to nodesjs.org > docs > modules > File System\
// we will practice fs.readdirSync or fs.readdir methods\
// look for Example7 in logger.js file for how it works\
\
// go to nodesjs.org > docs > modules > Events\
// we will practice os.totalmem and os.freemem methods\
// look for Example6 in logger.js file for how it works\
\
// in Example9 we modified some code\
// the reason for that in real life we don't use events directly \
// instead we create a class and use from it\
// Overall we created Logger class inside logger.js and moved our log function inside it.\
// also moved const EventEmitter = require('events'); from app.js to logger.js\
// const emitter = new EventEmitter(); can be deleted in logger.js but in app.js it is used in Example8. (you don't need it in Example9 though which is the right way to do)\
\
// go to nodesjs.org > docs > modules > HTTP\
// we will practice http.createServer method\
// look for Example10 in logger.js file for how it works\

> END

