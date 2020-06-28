import time
from flask import Flask
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_hello_world():
  return jsonify({'message': 'Hello World!'})

@app.route('/api')
def get_base_call():
  return jsonify({'message': 'This is the base API call.'})  

@app.route('/api/time')
def get_current_time():
  #dictionary will be automatically turned into JSON on return
  return jsonify({'time': time.time()})