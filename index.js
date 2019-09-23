import * as shell from 'shelljs';
import * as fs from 'fs-extra';
// import * as YAML from 'yamljs'


const createFile = async function(){

// let envFile =``
//
//   for (let key in this.globalConfig.databases) {
//       let name = key;
//       let password = this.globalConfig.databases[key].setup.password;
//       let kv =`${name}=${password}`
//
//       envFile += kv;
//       envFile += '\n'
//   }





  try {

let indexFile =
`
const YAML = require('yamljs');
const {Manager} = require('@projectbuilder/projectbuilder-core');
console.log('coming along')
const project = YAML.load('./prjbconfig.yml')
const myManager = new Manager(project);
myManager.initialize(7500);
`


let gitIgnoreFile =
`
node_modules/
.env
`


let pkgJSON = {
  "name": this.projectTitle,
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "repository" : "",
  "license": "ISC"
}


    let rootFile = await fs.ensureDir(`${process.cwd()}/${this.projectTitle}`);
    await fs.outputFile(`${rootFile}/prjbconfig.yml`, YAML.stringify(this.globalConfig));
    await fs.outputFile(`${rootFile}/index.js`, indexFile);
    await fs.outputFile(`${rootFile}/.env`, envFile);
    await fs.outputFile(`${rootFile}/.gitignore`, gitIgnoreFile);

    await fs.outputFile(`${rootFile}/package.json`, JSON.stringify(pkgJSON));



    await shell.cd(this.projectTitle);
      // await shell.exec('npm init -y')

    await shell.exec(`npm i @projectbuilder/projectbuilder-core yamljs`)

    for (let key of this.databaseTypes) {
        console.log(`Need to install ORM for ${key}`)
        await shell.exec(`npm i @projectbuilder/projectbuilder-orm-${key}`)
    }


  } catch (err) {
    console.error(err)
  }

};

export default createFile;
