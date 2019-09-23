"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const fs = require("fs-extra");
// import * as YAML from 'yamljs'
const createFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const project = {
            title: 'sampleApp'
        };
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
        };
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
`;
        let resetCSS = `
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`;
        let reactIndex = `
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

const App = () => {
  return(
    <React.Fragment>
      <h1>My React App</h1>
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));

`;
        let reactCSS = `

`;
        const currentDir = process.cwd();
        let rootFile = yield fs.ensureDir(`${process.cwd()}/${project.title}`);
        yield fs.outputFile(`${rootFile}/package.json`, JSON.stringify(sampleJson));
        let srcDir = yield fs.ensureDir(`${process.cwd()}/${project.title}/src`);
        let appDir = yield fs.ensureDir(`${srcDir}/app`);
        yield fs.outputFile(`${srcDir}/index.html`, htmlIndex);
        yield fs.outputFile(`${srcDir}/reset.scss`, resetCSS);
        let apiDir = yield fs.ensureDir(`${srcDir}/API`);
        let componentDir = yield fs.ensureDir(`${appDir}/components`);
        let stylesDir = yield fs.ensureDir(`${appDir}/styles`);
        yield fs.outputFile(`${appDir}/index.tsx`, reactIndex);
        yield fs.outputFile(`${appDir}/index.scss`, reactCSS);
        yield shell.cd(project.title);
        yield shell.exec('npm i');
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
    });
};
createFile();
exports.default = createFile;
//# sourceMappingURL=index.js.map