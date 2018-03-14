<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# Workflow App

This is the implementation of an App Solution for a Problem stated by Industry Experts in our "App-Paper-Prototyping-Workshop".
A definable workflow will be processed with different web-components for every part of the workflow. These Web Components come from different Apps in the ScaleIT Eco-System, allowing custom Workflow creation by combining Web-Components inside the Workflow App.

# Example scenario
![Example gif](https://raw.githubusercontent.com/ScaleIT-Org/sapp-workflow-app/master/Resources/Store/example%20scenario/scenario.gif)

Example scenario: A workflow consisting of 4 Apps. The first one is the Workflow App, a generic App used to create custom workflows. Using the QR-Code-App we scan the code of a specific product with the transportation information (truck ID). Using another App, we check if the product was already loaded into the specific truck. The last App in the workflow allows us to Capture an image of the truck loading area for proof that the product is loaded correctly onto the truck.

## Technology Stack

- Branch Master
	- Static HTML (Bootstrap / AWC-Core / granit-qr-scanner)
- Branch Ionic
	- NodeJs->(Typescript->Angular->Ionic)
	
# Note

This is still a work in progress
