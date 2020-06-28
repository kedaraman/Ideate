## Starting the Backend

Note: the non-default yarn scripts can be found in package.json

### yarn update-api

This will go into the api folder and automatically run pip install -r requirements.txt. Do this before proceeding.

### yarn start-api

This will run the flask backend which can be found in the "api" folder.

.env is in the .gitignore as we should not have keys out on Git. However, you can find the two pieces we need in info.txt (ironically). COGSVCS_CLIENTURL & COGSVCS_KEY.

.gitignore ignores both .env and venv from committing to the repository. Add more if needed.

api.py is the primary backend file. You can add routes, store info in a database, and do the bulk processing here.

api.pyc are binaries and should be in the .gitignore.

info.txt is where all Azure services information is stored.

requirements.txt is where all Flask dependencies are located.

## Starting the Frontend

### yarn install

This will refer to package.json and install all React frontend dependencies. Do this before proceeding.

### yarn start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Middle Tier

The middle tier makes it easy to call the Flask services from react. Essentially, it's a class found in the MiddleTier folder that uses axios to make calls. You can then instantiate an ApiService (MiddleTier instance) in any part of the frontend to make method calls with arguments.

You'll find that the format parallels the routes defined in api.py almost exactly.

## Useful Scripts Definitions

### yarn build

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Scripts we probably won't use Definitions

### yarn eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### yarn test

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).