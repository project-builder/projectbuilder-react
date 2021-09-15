#!/usr/bin/env node
import * as shell from 'shelljs';
import * as fs from 'fs-extra';
import reactIndex from './reactIndex';
import resetCSS from './resetCSS';
import createHTML from './createHTML';
import createReactSCSS from './createReactSCSS'

import createPackageJson from './createPackageJson';
import {createAPIGet, createAPIPost, createAPIPut, createAPIDeleteOne} from './createAPIFiles'
import { dependencies, devDependencies } from "./createDependecies";


let [,,appName] = process.argv;

const createFile = async function(){

  console.log(createReactSCSS())

  const project = {
    title: appName
  }

  console.log(`Creating ${project.title}`)

  let rootDir = await fs.ensureDir(`${process.cwd()}/${project.title}`);
  await fs.outputFile(`${rootDir}/package.json`, JSON.stringify(createPackageJson(project.title)));

  //create the src directory and index.html and reset.css file
  let srcDir = await fs.ensureDir(`${process.cwd()}/${project.title}/src`);
  await fs.outputFile(`${srcDir}/index.html`, createHTML(project.title));
  await fs.outputFile(`${srcDir}/reset.scss`, resetCSS());

  //create the app directory
  let appDir = await fs.ensureDir(`${srcDir}/app`)

  let apiDir = await fs.ensureDir(`${srcDir}/API`)
  await fs.outputFile(`${apiDir}/get.js`, createAPIGet());
  await fs.outputFile(`${apiDir}/post.js`, createAPIPost());
  await fs.outputFile(`${apiDir}/put.js`, createAPIPut());
  await fs.outputFile(`${apiDir}/deleteOne.js`, createAPIDeleteOne());



  let componentDir = await fs.ensureDir(`${appDir}/components`);
  let stylesDir = await fs.ensureDir(`${appDir}/styles`);

  await fs.outputFile(`${appDir}/index.jsx`, reactIndex(project.title));
  await fs.outputFile(`${appDir}/index.scss`, createReactSCSS());

  await shell.cd(project.title);

  for (const dependency of dependencies) {
    await shell.exec(`npm i ${dependency}`)
  }

  for (const dependency of devDependencies) {
    await shell.exec(`npm i -D ${dependency}`)
  }
};


createFile()

export default createFile;
