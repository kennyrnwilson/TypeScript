# TypeScript Project With FileWatcher and Debugging
This template contains a very simple web server with support for [VS Code Debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-support-for-npm-and-other-tools) and File Watching using [nodemon.io](https://nodemon.io). The project can be copied as is but we also talk though how the project was setup. 

## Setup a new npm package
We run the following command to setup a new package. [npm-init](https://docs.npmjs.com/cli/v9/commands/npm-init)

```
npm init --yes
```

## Adjust the generated package.json to look as follows
```json
{
  "name": "file-watcher-dev-env-debug",
  "version": "1.0.0",
  "description": "Template Project for a TypeScript server that supports file watching and VSCode debugging",
  "scripts": {
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

## Install the Runtime dependencies
```
npm install express
npm install @types/express
```

## Install the Dev Dependencies
```
npm install --save-dev nodemon
npm install --save-dev ts-node
npm install --save-dev typescript
```

## Create the simple web server using TypeScript
We create a src folder for our source files and add [Server.ts](./src/Server.ts)

```js
import express from 'express';

const server = express();

server.use('/index', (_req, res) => {
  res.status(200).json({ hello: "world3" });
});

server.listen(8000, () => { console.log('Running on localhost:8000') })
```

## Create the TypeScript Configuration File
The full list of compiler options can be found [here](https://www.typescriptlang.org/tsconfig)
```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "outDir": "./dist",
        "sourceMap": true
    }
}
```
For local reference we set the following

 * target - The version of JavaScript we will compile to. We use the latest version ES2022
 * module - The module format. We use the old school **commonjs** as we are running in Node.js
 * esModuleInterop - Add additional support when importing CommonJS modules
 * strict - enable all string type checking 
 * outDir - tell the compiler where we want the compiled JavaScript to live
 * sourceMap - We need this for TypeScript debugging to work

 ## Add Scripts to package.json

We are the following scripts

 ```json
  "scripts": {
    "build": "tsc",
    "start": "nodemon --exec ts-node src/Server.ts",
    "dev:debug": "nodemon --inspect src/Server.ts"
  },
 ```

 * build - Run the TypeScript compiler to compile the code
 * start - Run the Server.ts in nodemon
 * dev:debug - Run the Server.ts in nodemon with support for debugging