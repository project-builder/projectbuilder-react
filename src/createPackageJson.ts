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
  // "dependencies": {
  //   "@types/react": "^16.8.4",
  //   "axios": "^0.19.0",
  //   "node-sass": "^4.9.2",
  //   "react": "^16.8.3",
  //   "react-dom": "^16.8.3",
  //   "react-inlinesvg": "^0.8.4"
  // },
  // "devDependencies": {
  //   "@testing-library/react": "^8.0.1",
  //   "@types/jest": "^24.0.13",
  //   "codecov": "^3.5.0",
  //   "identity-obj-proxy": "^3.0.0",
  //   "jest": "^24.8.0",
  //   "jest-dom": "^3.4.0",
  //   "parcel-bundler": "^1.12.3",
  //   "sass": "^1.17.2",
  //   "ts-jest": "^24.0.2",
  //   "typescript": "^3.3.3333"
  // }
}
}


export default createPackageJson
