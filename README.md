
# Getting started with badenweiler-ui


## What is it?
A simple React component library.

HorizontalNav is a customizable horizontal nav component.

## How can it be installed?
From your shell, go to the project's root folder and enter the following command:
```bash
npm install --save badenweiler-ui
```

## Usage
```javascript
import React from 'react'
import { HorizontalNav } from 'badenweiler-ui'

function App() {
  const props = {
    title: 'the title',
    buttonLeft: <button> News </button>,
    buttonRightOne: <button> About </button>,
    buttonRightTwo: <button> Settings </button>,
    styles: {backgroundColor: 'blue'}
  };
  return <HorizontalNav {...props} />
}
```

## Available Scripts
The following scripts can be run within the project's root directory:

### start
```bash
npm start
```

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.

### test
Execute the tests
```bash
npm test
```
Execute the tests and update snapshots
```bash
npm run test:unit -- -u
```

### build

Compiles the production files and places them in the dist folder.
```bash
npm run build
```


## Useful commands


### Link

Link can be used to run the library locally before publishing. From the project root:

1. ```bash npm run build ```

2. ```bash npm link ```

3. From local test project:
```bash npm link badenweiler-ui ```

### Publish to npmjs
The following shell commands are required for publishing the prjoect to npmjs

1. ```bash npm login ```

2. ```bash npm publish ```

## License
MIT - [thanders](https://www.github.com/thanders/badenweiler-ui)

