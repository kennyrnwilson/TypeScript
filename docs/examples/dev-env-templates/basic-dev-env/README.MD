# Basic Development Environment
TypeScript need to be compiled to JavaScript before we can run it. To do this we use a TypeScript compiler.  Before we do anything else we need to Initialize our project and setup any dependencies

## Dependencies

```
npm init --yes
```

Now we install the TypeScript module globally as follows

```
npm i -g typescript 
```

## Generate a TypeScript configuration file
We now generate a basic TypeScript configuration file tsconfig.json that we can then modify to change the compilers behaviour. 

```
tsc --init
```

Once I strip out all tge commented out properties the file looks as follows

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */s
    
    "target": "es2016", /* Set the JavaScript language version for emitted JavaScript */
    "module": "commonjs", /* Specify what module code is generated. */
    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules*/
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true, /* Enable all strict type-checking options. */
  }
}

```

## Compiling
If I now run the compiler 

```
tsc
```

All the .js files are stored in the same src folder as my .ts files. I would rather they go to a separate dist folder. I add an extra line to the tsconfig.json file's compilerOptions section

```json
     "outDir": "./sdist"
```

## Running
We can run our file very sinmply by using Node.js to run the JavaScript

```
node ./dist/Index.js
```
We can also run the Index.js from our package.json file. First we add the relevant section

```json
  "scripts": {
    "start": "node ./dist/Index.js"
  },
  ```

  Then we run it as 

  ```
  npm run start
  ```

  or 

  ```
  npm start
  ```
