import time
from flask import Flask, Response, request
from flask_cors import CORS
from flask import jsonify
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from related_search import BingClient

app = Flask(__name__)
CORS(app)

# credentials (keep secret, do not modify)
key = '54a49a7ce91a4e47a5699065823a71ef'
endpoint = 'https://txtan.cognitiveservices.azure.com/'



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

@app.route('/api/keyPhraseExtraction', methods=['POST', 'GET'])
def keyPhraseExtraction():
  error = None
  if request.method == 'POST':
    text = request.args.get('text', '')
    print(text)
    return jsonify({'phrases' : key_phrase_extraction_example(client, text)})

@app.route('/api/relatedSearch', methods=['POST', 'GET'])
def relatedSearch():
  error = None
  if request.method == 'POST':
    text = request.args.get('text', '')
    print(text)
    api = BingClient()
    result = api.get_similar_results(text)
    print(result)
    return jsonify({'related' : result})

# authenticate client (supply credentials defined above)
def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(endpoint=endpoint, credential=ta_credential)
    return text_analytics_client

# extract key phrases
# @param documents: (type str): sentence from which to extract key phrase(s)
# @return (type list): a list of key phrases extracted from the input sentence
def key_phrase_extraction_example(client, documents):
    try:
        print("documents: ", documents)
        response = client.extract_key_phrases(documents = [documents])[0]
        if not response.is_error:
            return response.key_phrases
            #print("\tKey Phrases:")
            #for phrase in response.key_phrases:
            #    print("\t\t", phrase)
        else:
            print(response.id, response.error)
    except Exception as err:
        print("Encountered exception. {}".format(err))
    
    # encountered error
    return -1

client = authenticate_client()

# # test list of sentences to get key phrases for
# documents = ["My cat might need to see a veterinarian.", "He keeps on meowing for no apparent reason.", "He hasn't been to the vet in a year or so."]

# # for each sentence, get its key phrases
# for doc in documents:
#     result = key_phrase_extraction_example(client, doc)
#     if result != -1:
#         # did not encounter error
#         print(result)