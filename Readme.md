<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# sapp-workflow-app [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the implementation of an App Solution for a Problem stated by Industry Experts in our "App-Paper-Prototyping-Workshop".
A definable workflow will be processed with different web-components for every part of the workflow. These Web Components come from different Apps in the ScaleIT Eco-System, allowing custom Workflow creation by combining Web-Components inside the Workflow App.

Example scenario: A workflow consisting of 4 Apps. The first one is the Workflow App, a generic App used to create custom workflows. Using the QR-Code-App we scan the code of a specific product with the transportation information (truck ID). Using another App, we check if the product was already loaded into the specific truck. The last App in the workflow allows us to Capture an image of the truck loading area for proof that the product is loaded correctly onto the truck.

## How to Use

### Standalone
Resolve dependencies inside `Domain Software/workflow/` with `npm install` and run your application with `node server.js` 
### Docker
Build and run docker image with `docker-compose up -d`

## Screenshots

Example:

| Mobile        | Desktop       |
| ------------- | ------------- |
| <img width="50%" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_960_720.png"/> | <img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Desktop_font_awesome.svg/512px-Desktop_font_awesome.svg.png"/> |

|More Screenshots|
| ------------- |
| ![Example gif](https://raw.githubusercontent.com/ScaleIT-Org/sapp-workflow-app/master/Resources/Store/example%20scenario/scenario.gif)|

## Requirements
-

## Features

Different technology stacks

- Branch Master
	- Static HTML (Bootstrap / AWC-Core / granit-qr-scanner)
- Branch Ionic
	- NodeJs->(Typescript->Angular->Ionic)

## Known Issues
 - Ionic version (Branch: ionic) not compatible with web components

## Troubleshooting
-

## How to build

```
  docker-compose build 
  docker-compose up -d
```

## Configuration

- 

## Tests
  
  - IsRunningTest: Tests if application is running
  - qrcode-btn test: Tests if the qrcode-btn is deactivated and activated correctly 

	
## Notes

This is still a work in progress
