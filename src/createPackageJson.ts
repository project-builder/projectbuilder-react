const createPackageJson = (title) =>{
return {
  "name": title,
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel ./src/index.html",
    "dev": "parcel ./src/index.html",
    "test": "jest --verbose",
    "coverage": "codecov",
    "build": "parcel build ./src/index.html",
    "deploy": "echo 'No deploy script has been specified'"
  },
  "babel": {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  },
  "jest": {
    "coverageDirectory": "./coverage/",
    "collectCoverage": true,
    "transform": {},
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$",
    "moduleNameMapper": {
      "\\.(css|scss|less|jpg|pdf|svg)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
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
}
}


export default createPackageJson
