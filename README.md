# QR & Bar Code Generator
### Browser extension for QR & Bar Code generation


## Features
- **Generate QR Code**
- **Generate Bar Code**
- **Save generated code as SVG**
- **Recent actions are stored in history**


## Download
### [Firefox](https://addons.mozilla.org/en-US/firefox/addon/qr-bar-code-generator)
### Chrome — extension not published in store but [still supported](#chrome)


## Building locally
### Install dependencies
`yarn install`

### Run in dev mode
`yarn dev`

Open http://localhost:8080 in your browser


## Load extension locally
### Chrome
`yarn build:chrome`

Open chrome://extensions/ and press "Load unpacked" button. Select bundling output

### Firefox
`yarn build:firefox`

Open about:debugging#/runtime/this-firefox and press "Load temporary Add-on" button. Select bundling output
