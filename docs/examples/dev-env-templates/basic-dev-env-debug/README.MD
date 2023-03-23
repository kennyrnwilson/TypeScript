# Basic Development Environment With Visual Studio Code Debugging
This template build on top of [dev-dev-setup](../basic-dev-env/) project and add support for Visual Studio Code Debugging. We should follow all the steps in that template as pre-requisities to setting up this project. This setup is very useful for an educational project with lots of different script type fragments. 

## Adding Visual Studio Debugging
Clck the button with the arrow and a beetle on it from the side bar while in an open TypeScript file. Select Node and then click **create a launch.json file** and selecte **Node.js** which should be the selected one. A file called **.vscode/launch.json** should be created which looks as follows. 

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```
We add a line to this file that tells it to run typescript compiler a a prelaunch step

```json
"program": "${file}",
"preLaunchTask": "tsc: build - tsconfig.json"
```

Another very important step is to set the sourceMap property to true in the **tsconfig.json** file. 

```json
"sourceMap": true
```

## Debugging currently open file
Open [Index.ts](./src/Index.ts), add a breakpoint and press F5. The debugger should launch and attach. Now switch to [Index2.ts](./src/Index2.ts), add a breakpoint and we can now debug this file. 













