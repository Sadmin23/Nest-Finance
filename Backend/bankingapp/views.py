from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter


from .pagination import Paginaition
from .filters import LoanFilter
from . import models
from . import serializers



class BankCategoryViewSet(ModelViewSet):
    queryset = models.BankCategory.objects.all()
    serializer_class = serializers.BankCategorySerializer
    
class BankTypeViewSet(ModelViewSet):
    queryset = models.BankType.objects.all()
    serializer_class = serializers.BankTypeSerializer
    


class BankViewSet(ModelViewSet):
    queryset = models.Bank.objects.all()
    serializer_class = serializers.BankSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'bank_code','type']
    search_fields = ['bank_code', 'name']
    ordering_fields = ['bank_code', 'name']
    pagination_class = Paginaition


class CardNetworkViewSet(ModelViewSet):
    queryset = models.CardNetwork.objects.all()
    serializer_class = serializers.CardNetworkSerializer
    
class CardCategoryViewSet(ModelViewSet):
    queryset = models.CardCategory.objects.all()
    serializer_class = serializers.CardCategorySerializer
    
class CardUsageViewSet(ModelViewSet):
    queryset = models.CardUsage.objects.all()
    serializer_class = serializers.CardUsageSerializer



class CardViewSet(ModelViewSet):
    queryset = models.Card.objects.all()
    serializer_class = serializers.CardSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []
    pagination_class = Paginaition

class BranchViewSet(ModelViewSet):
    queryset = models.Branch.objects.all()
    serializer_class = serializers.BranchSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['slug','district']
    search_fields = ['name']
    ordering_fields = ['name']
    pagination_class = Paginaition
  
class ATMViewSet(ModelViewSet):
    queryset = models.ATM.objects.all()
    serializer_class = serializers.ATMSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []
    pagination_class = Paginaition


class DepositSchemeNameViewSet(ModelViewSet):
    queryset = models.DepositSchemeName.objects.all()
    serializer_class = serializers.DepositSchemeNameSerializer
    
class DepositSchemeTypeViewSet(ModelViewSet):
    queryset = models.DepositSchemeType.objects.all()
    serializer_class = serializers.DepositSchemeTypeSerializer
    
  
class DepositSchemeViewSet(ModelViewSet):
    queryset = models.DepositScheme.objects.all()
    serializer_class = serializers.DepositSchemeSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []
    pagination_class = Paginaition



class LoanNameViewSet(ModelViewSet):
    queryset = models.LoanName.objects.all()
    serializer_class = serializers.LoanNameSerializer
    
class LoanTypeViewSet(ModelViewSet):
    queryset = models.LoanType.objects.all()
    serializer_class = serializers.LoanTypeSerializer
    


  
class LoanViewSet(ModelViewSet):
    queryset = models.Loan.objects.all()
    serializer_class = serializers.LoanSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = LoanFilter
    search_fields = ['name']
    ordering_fields = ['duration','loan_max_limit']
    pagination_class = Paginaition


class BenefitsViewSet(ModelViewSet):
    queryset = models.Benefits.objects.all()
    serializer_class = serializers.BenefitsSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []


class CreditCardBenefitsViewSet(ModelViewSet):
    queryset = models.CreditCardBenefits.objects.all()
    serializer_class = serializers.CreditCardBenefitsSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []


class OffersViewSet(ModelViewSet):
    queryset = models.Offers.objects.all()
    serializer_class = serializers.OffersSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = []
    search_fields = []
    ordering_fields = []
  