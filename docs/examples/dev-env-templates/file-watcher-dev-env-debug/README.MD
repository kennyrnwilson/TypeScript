# TypeScript Project With FileWatcher and Debugging
Most of the ideas and code for this template came from this article 

[Node.js with TypeScript and Debug](https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7)

**Note:** It is important to node this really only works for a daemon type process such as a web-server. Nodemon and attach does not really work for a simple script type scenarios where the process runs some statements and exits. 

## Setup
### Dependencies
The first stage is to add the node dependencies.

```
npm install  express
npm install  @types/express
npm install --save-dev nodemon
npm install --save-dev ts-node
npm install --save-dev typescript

```
### Create simple web server
[Index.ts](./src/Index.ts)

### Configure Nodemon
[nodemon.json](./nodemon.json)

### Configure TypeScript
[tsconfig.json](./tsconfig.json)

### Add script to package.json

```json
  "scripts": {
    "build": "tsc",
    "start": "nodemon --exec ts-node src/Index.ts",
    "dev": "nodemon src/Index.ts",
    "dev:debug": "nodemon --inspect src/Index.ts"
  },
```

### Setup .vscode/launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector"
    }
  ]
  ```

### Run the server
```
npm run dev:debug
```

### Use the VS Run/Debug
Any changes to the code should restart the server and re-attach the debugger.


