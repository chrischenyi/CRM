# Node, Mongo, Express


####Install Npm
`$ npm i` or `$npm install`

####Install Express
`$ npm i --save express`

####Install Mongo
1. Go to [mongodb](https://mongodb.com/) -> Click Docs -> Getting Started
2. `$ brew update`
3. `$ brew install mongodb`
4. Check if mongodb is installed `$ mongod`

####Install Mongoose 
A library to help us to modeling database to help to handle validation, hooks
`$ npm i --save mongoose`

####Install nodemon
Help to refresh the applicaiton automatically whenever there are changes without having to restart the server
`$ 

####Install Babel
A javascript compiler to write all the ES6 syntax

1. Save a few depencies for babel
	`$ npm i --save-dev babel-cli babel-preset-env`

2. Create .babelrc in the project
		"presets": [
			"es2015",
			"stage-0"
		]

### Set up a server to test
1. Install bodyParser
`npm i --save body-parser`

2. Ensure the package.json file contains
		 "main": "index.js",

3. Create a file `index.js` and create a server
		import express from 'express';

		const app = express();
		const PORT = 3000;

		app.get('/',(req,res) => {
				res.send(`Node and express server is running on port ${PORT}`)    
		});

		app.listen(PORT, () => 
				console.log(`your server is running on port ${PORT}`)
		);

4. Create the script for the command
	 	 "scripts": {
				"test": "echo \"Error: no test specified\" && exit 1",
				"start": "nodemon ./index.js --exec babel-node -e js"
	  	},

5. Server response
`$ npm start`


### Set up
Create folders and files as below:
	src
		- controllers
			- crmController.js
		- models
			- crmModel.js
		- routes
			- crmRoutes.js

## RESTful API

### Routes
Use routes to define endpoints(GET, POST, PUT, DELETE) under`crmRoutes.js`
```javascript
const routes = (app) =>{
    app.route('/contact')
        .get((req, res) => 
        res.send('GET request successfully!'))

        .post((req, res) => 
        res.send('POST request successfully!'));

    app.route('/contact/:contactId')
        .put((req, res) => 
        res.send('PUT request successfully!'))

        .delete((req, res) => 
        res.send('DELETE request successfully!'));
}

export default routes; // ES6 syntax
```

Import routes into `index.js`
``` javascript 
import routes from './src/routes/crmRoutes';
routes(app);
```


### MongoDb (MacOS)
Go to [https://treehouse.github.io/installation-guides/mac/mongo-mac.html]

### Create dir
`$ sudo mkdir -p /data/db`

1. Go to /data/db
	`cd /data/db/`

2.  Start mongo
	`mongod`

### If existed, kill the previous mongo instance and start the new one:
1.  Search for a list of tasks running on your machine
 `sudo lsof -iTCP -sTCP:LISTEN -n -P`

2.  Search for mongod COMMAND and its PID and type,
`sudo kill <mongo_command_pid>`

3. Start mongo
`mongod`

### Other Node.js API framework
- Loopback.js
- koa.js

