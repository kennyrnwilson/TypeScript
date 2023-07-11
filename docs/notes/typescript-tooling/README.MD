# Introduction to TypeScript tooling

## Node.js
[Node.js](https://nodejs.org/en) is an "open source, cross platform JavaScript runtime environment. I have copied in the basic Http server example from the nodejs.org getting started guide [app.js](./app.js). We run the server in Node using

```
node app.js
```

### Node.js REPL
REPL stands for Read Evaluate Print Loop. We can use the REPL loop to enter simple expressions and test out basic logic. To run Node.js in REPL mode we run it without any command line arguments. 

```
node
```

### Node.js debugging
If we want to debug a Node.js process we need to start it with the --inspect flag. See [Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started) for more information. 

```
node --inspect app.js
```

By default the Node.js debugger listens on port 9229. We can setup a very simple VS Code launch.json as follows to attach to a process we started form the command line using the previous command.

```json
{
    "configurations": [
        {
            "type": "node",
            "name": "Attach to Process",
            "request" :"attach",
            "port" : 9229
        }
    ]
}
```

We can use a different port as follows 

```
node --inspect=9200 app.js
```

And then modify the port in the launch.json
```json
{
    "configurations": [
        {
            "type": "node",
            "name": "Attach to Process",
            "request" :"attach",
            "port" : 9200
        }
    ]
}
```