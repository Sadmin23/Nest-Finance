from django.urls import path
from .views import ATMViewSet, BankCategoryViewSet, BankTypeViewSet, BankViewSet, BenefitsViewSet, BranchViewSet, CardCategoryViewSet, CardNetworkViewSet, CardUsageViewSet, CardViewSet, CreditCardBenefitsViewSet, DepositSchemeNameViewSet, DepositSchemeTypeViewSet, DepositSchemeViewSet, LoanNameViewSet, LoanTypeViewSet, LoanViewSet, OffersViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('bank-category',BankCategoryViewSet)
router.register('bank-type',BankTypeViewSet)
router.register('bank',BankViewSet)

router.register('card-network',CardNetworkViewSet)
router.register('card-category',CardCategoryViewSet)
router.register('card-usage',CardUsageViewSet)
router.register('card',CardViewSet)

router.register('branch',BranchViewSet)
router.register('atm',ATMViewSet)

router.register('depositScheme-name',DepositSchemeNameViewSet)
router.register('depositScheme-type',DepositSchemeTypeViewSet)
router.register('depositScheme',DepositSchemeViewSet)

router.register('loan-name',LoanNameViewSet)
router.register('loan-type',LoanTypeViewSet)
router.register('loan',LoanViewSet)

router.register('benefits',BenefitsViewSet)
router.register('card_benefits',CreditCardBenefitsViewSet)
router.register('offers',OffersViewSet)


urlpatterns = router.urls
    
