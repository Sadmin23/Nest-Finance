from rest_framework.pagination import PageNumberPagination

class Paginaition(PageNumberPagination):
    page_size = 1
    max_page_size = 100 
    page_size_query_param = 'pagesize'
    page_query_param = 'pagenumber'



