# WEB-VARIERTY

Welcome to the workshop Web-Variety. Today, you can understand the basic of the construction of an API through 2 differents languages and frameworks:

- Python with FLASK
- JavaScript with EXPRESS

To put it in some context: we are going to create a basic photo gallery ! 

## Step 1: Setup the two projects

- Create a folder called `web-variety`
- Download the file named `photos.json`
- Put it at the root of the folder created

### JavaScript

- If it is not installed on your computer , Install NodeJS LTS: <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
- Create a folder called `express` at the root of `web-variety` and go into it
- Init an npm package
- Create a file named `index.js` into a folder named `src`
- Create a script named `start` into your package that will run the command `node src/index.js`


From this point, you are good to start the development of a javascript. The only thing missing to develop an Express API are: The Express Module !

To install it: 

```bash
$ npm install --save express cors
```

Now you are ready to start! 

### Python

To a develop a Flask API, first, it is important setup a working environment for Python:

Here is the way to do this:

- Create a folder named `flask` at the root of `web-variety` and go into
- Create a virtual environment with `venv` module and activate it !
- install `flask` module
- Create a file named `app.py`
- export the environment variable FLASK_APP with the value `app`

Documentation of Flask: <a href="https://flask.palletsprojects.com/en/2.0.x/">https://flask.palletsprojects.com/en/2.0.x/</a>


Now you are ready to go !

## Step 2: Your first server

From this part, you have set up two APIs project you will be doing on this workshop. It is time to run your first HTTP Server !


- Run an Express server on port 8080

- Run an Flask server on port 5000

- For both servers, create an endpoint `/hello-world` of type `GET` that returns the string `Hello, world!`


## Step 3 : Load photo database

Having an endpoint saying "Hello, world!", it is great, but better if we could have real data sent !

That's what we going to try now !

In the setup step, you have downloaded the `photos.json`, you will have now to read it. 

- Loading the `photos.json` in both Express and Flask application and display it (very basically)

- Create an endpoint `GET` named `/photos` that will returns you all the photos metadata

## Step 4 : Load a specific photo and manage errors


We are now starting the last part of this workshop !  You will now try to handle requests parameters and return an understandable error for your user


- Create an endpoint `GET` named `/photos/:id` where `id` is a parameter containing the id of the photo : It will return the metadata of this specific photo and if it is not found, send a 404 Not found error