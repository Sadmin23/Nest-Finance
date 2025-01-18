from rest_framework import serializers
from .models import ATM, Bank, BankCategory, BankType, Benefits, Branch, Card, CardCategory, CardNetwork, CardUsage, CreditCardBenefits, DepositScheme, DepositSchemeName, DepositSchemeType, Loan, LoanName, LoanType, Offers


class BankCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BankCategory
        fields = '__all__'


class BankTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankType
        fields = '__all__'



class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bank
        fields = '__all__'



class CardNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardNetwork
        fields = '__all__'


class CardCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CardCategory
        fields = '__all__'


class CardUsageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardUsage
        fields = '__all__'




class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class ATMSerializer(serializers.ModelSerializer):
    class Meta:
        model = ATM
        fields = '__all__'




class DepositSchemeNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositSchemeName
        fields = '__all__'


class DepositSchemeTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositSchemeType
        fields = '__all__'



class DepositSchemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositScheme
        fields = '__all__'


class LoanNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanName
        fields = '__all__'


class LoanTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanType
        fields = '__all__'


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = '__all__'


class BenefitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefits
        fields = '__all__'


class CreditCardBenefitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditCardBenefits
        fields = '__all__'


class OffersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offers
        fields = '__all__'
        