from related_search import BingClient

api = BingClient()
result = api.get_similar_results("burrito")
print(result)
