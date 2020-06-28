import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
  #dictionary will be automatically turned into JSON on return
  return {'time': time.time()}