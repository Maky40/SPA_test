from django.http import JsonResponse
from .models import Article

def articles_list(request):
    articles = list(Article.objects.values())
    return JsonResponse(articles, safe=False)
