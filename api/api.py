import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_hello_world():
  return {'message': 'Hello World!'}

@app.route('/api')
def get_base_call():
  return {'message': 'This is the base API call.'}  

@app.route('/api/time')
def get_current_time():
  #dictionary will be automatically turned into JSON on return
  return {'time': time.time()}