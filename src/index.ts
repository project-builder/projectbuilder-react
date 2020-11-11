import * as shell from 'shelljs';
import * as fs from 'fs-extra';
// import * as YAML from 'yamljs'
import reactIndex from './reactIndex';
import resetCSS from './resetCSS';
import createHTML from './createHTML';
import createReactSCSS from './createReactSCSS'

import createPackageJson from './createPackageJson';
import createAPIGet from './createAPIGet';
import createAPIPost from './createAPIPost';
import createAPIPut from './createAPIPut';
import createAPIDelete from './createAPIDelete';




const createFile = async function(){

  console.log(createReactSCSS())

  const project = {
    title: 'myFirstReact'
  }

  console.log(`Creating ${project.title}`)

  //Create the root directory for the project (named by project.title) along with the package.json file
  let rootDir = await fs.ensureDir(`${process.cwd()}/${project.title}`);
  await fs.outputFile(`${rootDir}/package.json`, JSON.stringify(createPackageJson(project.title)));

  //create the src directory and index.html and reset.css file
  let srcDir = await fs.ensureDir(`${process.cwd()}/${project.title}/src`);
  await fs.outputFile(`${srcDir}/index.html`, createHTML(project.title));
  await fs.outputFile(`${srcDir}/reset.scss`, resetCSS());

  //create the app directory
  let appDir = await fs.ensureDir(`${srcDir}/app`)

  let apiDir = await fs.ensureDir(`${srcDir}/API`)
  await fs.outputFile(`${apiDir}/get.tsx`, createAPIGet());
  await fs.outputFile(`${apiDir}/post.tsx`, createAPIPost());
  await fs.outputFile(`${apiDir}/put.tsx`, createAPIPut());
  await fs.outputFile(`${apiDir}/delete.tsx`, createAPIDelete());



  let componentDir = await fs.ensureDir(`${appDir}/components`);
  let stylesDir = await fs.ensureDir(`${appDir}/styles`);

  await fs.outputFile(`${appDir}/index.tsx`, reactIndex(project.title));
  await fs.outputFile(`${appDir}/index.scss`, createReactSCSS());

  await shell.cd(project.title);

  let dependencies = [
    "@types/react",
    "axios",
    "node-sass",
    "react",
    "react-dom",
    "react-inlinesvg"
  ]

  let devDependencies = [
    "@testing-library/react",
    "@types/jest",
    "codecov",
    "identity-obj-proxy",
    "jest",
    "jest-dom",
    "parcel-bundler",
    "sass",
    "ts-jest",
    "typescript"
  ]

  for (const dependency of dependencies) {
    await shell.exec(`npm i ${dependency}`)
  }

  for (const dependency of devDependencies) {
    await shell.exec(`npm i -D ${dependency}`)
  }


  // await shell.exec(`npm i ${[...dependencies]}`)
  // await shell.exec(`npm i -D ${[...devDependencies]}`)


};


createFile()

export default createFile;
