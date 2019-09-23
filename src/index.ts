import * as shell from 'shelljs';
import * as fs from 'fs-extra';
// import * as YAML from 'yamljs'



const createFile = async function(){

const project = {
  title: 'sampleApp'
}


const sampleJson = {
  "name": project.title,
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel ./src/index.html",
    "dev": "parcel ./src/index.html",
    "test": "jest --verbose",
    "coverage": "jest --coverage && codecov",
    "build": "parcel build ./src/index.html",
    "deploy": "echo 'No deploy script has been specified'"
  },
  "jest": {
    "coverageDirectory": "./coverage/",
    "collectCoverage": true,
    "transform": {
      ".(ts|tsx)": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleNameMapper": {
      "\\.(css|scss|less|jpg|pdf|svg)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jpg",
      "pdf",
      "svg"

    ]
  },
  "repository": {
    "type": "git",
    "url": "git+"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "dependencies": {
    "@types/react": "^16.8.4",
    "axios": "^0.19.0",
    "node-sass": "^4.9.2",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-inlinesvg": "^0.8.4"
  },
  "devDependencies": {
    "@testing-library/react": "^8.0.1",
    "@types/jest": "^24.0.13",
    "codecov": "^3.5.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.8.0",
    "jest-dom": "^3.4.0",
    "parcel-bundler": "^1.12.3",
    "sass": "^1.17.2",
    "ts-jest": "^24.0.2",
    "typescript": "^3.3.3333"
  }
}


let htmlIndex = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Site</title>
    <link rel="stylesheet" href="./reset.scss">
  </head>
  <body>
    <div id="root"></div>
    <script src='./app/index.tsx'></script>
  </body>
</html>
`

let resetCSS = `
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`



let reactIndex = `
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

const App = () => {
  return(
    <React.Fragment>
      <h1>This React App was made using Project Builder</h1>
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));

`

let reactCSS =`

`



const currentDir = process.cwd()

let rootFile = await fs.ensureDir(`${process.cwd()}/${project.title}`);

await fs.outputFile(`${rootFile}/package.json`, JSON.stringify(sampleJson));


let srcDir = await fs.ensureDir(`${process.cwd()}/${project.title}/src`);
let appDir = await fs.ensureDir(`${srcDir}/app`)
await fs.outputFile(`${srcDir}/index.html`, htmlIndex);
await fs.outputFile(`${srcDir}/reset.scss`, resetCSS);

let apiDir = await fs.ensureDir(`${srcDir}/API`)

let componentDir = await fs.ensureDir(`${appDir}/components`);
let stylesDir = await fs.ensureDir(`${appDir}/styles`);

await fs.outputFile(`${appDir}/index.tsx`, reactIndex);
await fs.outputFile(`${appDir}/index.scss`, reactCSS);








await shell.cd(project.title);
await shell.exec('npm i')







    // await fs.outputFile(`${rootFile}/prjbconfig.yml`, YAML.stringify(this.globalConfig));
    // await fs.outputFile(`${rootFile}/index.js`, indexFile);
    // await fs.outputFile(`${rootFile}/.env`, envFile);
    // await fs.outputFile(`${rootFile}/.gitignore`, gitIgnoreFile);
    //
    // await fs.outputFile(`${rootFile}/package.json`, JSON.stringify(pkgJSON));
    //
    //
    //
    // await shell.cd(this.projectTitle);
      // await shell.exec('npm init -y')

    // await shell.exec(`npm i @projectbuilder/projectbuilder-core yamljs`)

    // for (let key of this.databaseTypes) {
    //     console.log(`Need to install ORM for ${key}`)
    //     await shell.exec(`npm i @projectbuilder/projectbuilder-orm-${key}`)
    // }


  // } catch (err) {
  //   console.error(err)
  // }

};


createFile()

export default createFile;
