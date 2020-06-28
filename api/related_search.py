import requests

class BingClient:

    def __init__(self):
        self.subscription_key = "8a4b666666954949b86e9a9b517251d2"
        self.search_url = "https://api.cognitive.microsoft.com/bing/v7.0/search"

    def get_similar_results(self, search_term):
        headers = {"Ocp-Apim-Subscription-Key": self.subscription_key}
        params = {"q": search_term, "textDecorations": True, "textFormat": "HTML"}
        response = requests.get(self.search_url, headers=headers, params=params)
        response.raise_for_status()
        search_results = response.json()["relatedSearches"]["value"]

        results = [x["text"].replace("&amp;", "&") for x in search_results]
        return results
