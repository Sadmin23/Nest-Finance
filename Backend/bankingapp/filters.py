from django_filters.rest_framework import FilterSet
from .models import Loan

class LoanFilter(FilterSet):
  class Meta:
    model = Loan
    fields = {
      'type': ['exact'],
      'bank_id': ['exact'],
      'loan_min_limit': ['gte'],
      'loan_max_limit': ['lte'],
      'duration': ['gte', 'lte']
    }