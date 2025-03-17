
git 01a - React Router app setup

GOALS

Review and set up a template for the react-router project

PROJECT CREATION

meteor create react-router --release 2.6.1

cd react-router
    meteor npm install react@17.0.2 react-dom@17.0.2 --save 
    meteor npm install react-router-dom@6.2.2 --save 

    meteor npm install (make sure all dependencies are in place)

DELETE STUFF

    delete the following files:
        imports/api/links.js
        imports/ui/App.jsx
        imports/ui/Hello.jsx
        imports/ui/Info.jsx

    in client/main.js
        delete import { App } from '/imports/ui/App';
        create the following:
            let placeholder = 'this is a placeholder';
        update the render method to replace <App/> with placeholder

    in server/main.js
        delete all code

    delete the following file and directory
        tests/main.js and the tests directory

    in package.json delete the following lines of code:
        "test": "meteor test --once --driver-package meteortesting:mocha",
        "test-app": "TEST_WATCH=1 meteor test --full-app --driver-package meteortesting:mocha",
        "testModule": "tests/main.js" (dont forget the comma on the previous line)


Stop runaway mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe
