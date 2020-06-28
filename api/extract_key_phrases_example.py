# NOTE: run: pip install azure-ai-textanalytics

from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

# credentials (keep secret, do not modify)
key = '54a49a7ce91a4e47a5699065823a71ef'
endpoint = 'https://txtan.cognitiveservices.azure.com/'

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

# test list of sentences to get key phrases for
documents = ["My cat might need to see a veterinarian.", "He keeps on meowing for no apparent reason.", "He hasn't been to the vet in a year or so."]

# for each sentence, get its key phrases
for doc in documents:
    result = key_phrase_extraction_example(client, doc)
    if result != -1:
        # did not encounter error
        print(result)

