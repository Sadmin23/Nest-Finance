from uuid import uuid4
from django.db import models


class BankCategory(models.Model):
    bank_category = models.CharField(primary_key=True, max_length=100)


class BankType(models.Model):
    bank_type = models.CharField(primary_key=True, max_length=100)


class Bank(models.Model):
    ORIGIN_1 = 'Local Bank'
    ORIGIN_2 = 'Foreign Bank'

    ORIGIN_CHOICES = [
        (ORIGIN_1, 'Local Bank'),
        (ORIGIN_2, 'Foreign Bank')
    ]

    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=100, null=True)
    slug = models.CharField(max_length=255, null=True)
    image_url = models.CharField(max_length=100, null=True)
    est_year = models.CharField(max_length=10, null=True)
    origin = models.CharField(
        max_length=20, choices=ORIGIN_CHOICES, default=ORIGIN_1)
    hotline = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=100, null=True)
    website = models.CharField(max_length=100, null=True)
    bank_code = models.CharField(max_length=20, null=True)
    type = models.ForeignKey(
        BankType, on_delete=models.CASCADE, related_name='type')
    category = models.ForeignKey(
        BankCategory, on_delete=models.CASCADE, related_name='category')


class Branch(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    bank_id = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='branch')
    name = models.CharField(max_length=100, null=True)
    slug = models.CharField(max_length=255, null=True)
    routing_number = models.CharField(max_length=255, null=True)
    address_line = models.CharField(max_length=255, null=True)
    postal_code = models.CharField(max_length=20, null=True)
    district = models.CharField(max_length=20, null=True)
    telephone = models.CharField(max_length=20, null=True)
    mobile = models.CharField(max_length=20, null=True)
    email = models.CharField(max_length=100, null=True)
    swift_code = models.CharField(max_length=20, null=True)
    opening_time = models.CharField(max_length=10, null=True)
    closing_time = models.CharField(max_length=10, null=True)
    location_latitude = models.FloatField(null=True)
    location_longitude = models.FloatField(null=True)


class CardNetwork(models.Model):
    card_network = models.CharField(primary_key=True, max_length=30)


class CardCategory(models.Model):
    card_category = models.CharField(primary_key=True, max_length=30)


class CardUsage(models.Model):
    card_usage = models.CharField(primary_key=True, max_length=30)


class Card(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    bank_id = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='card')
    network = models.ForeignKey(
        CardNetwork, on_delete=models.CASCADE, related_name='network')
    category = models.ForeignKey(
        CardCategory, on_delete=models.CASCADE, related_name='category')
    usage = models.ForeignKey(
        CardUsage, on_delete=models.CASCADE, related_name='usage')
    credit_limit = models.CharField(max_length=100, null=True)
    apr = models.CharField(max_length=100, null=True)
    introductory_apr = models.CharField(max_length=100, null=True)
    foreign_transaction_fee = models.CharField(max_length=100, null=True)
    late_payment_fee = models.CharField(max_length=100, null=True)
    over_limit_fee = models.CharField(max_length=100, null=True)
    billing_cycle = models.CharField(max_length=256, null=True)
    issuance_fee = models.CharField(max_length=100, null=True)
    annual_fee = models.CharField(max_length=100, null=True)
    grace_period = models.CharField(max_length=150, null=True)
    customer_ratings = models.CharField(max_length=100, null=True)
    supplementary_card_number = models.IntegerField(null=True)
    supplementary_card_allowed = models.BooleanField(null=True)
    tags = models.CharField(max_length=150, null=True)


class ATM(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    bank_id = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='atm')
    name = models.CharField(max_length=100)
    address_line = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=20, null=True)
    district = models.CharField(max_length=20, null=True)
    location_latitude = models.FloatField(null=True)
    location_longitude = models.FloatField(null=True)


class DepositSchemeName(models.Model):
    deposit_scheme_name = models.CharField(primary_key=True, max_length=50)


class DepositSchemeType(models.Model):
    deposit_scheme_type = models.CharField(primary_key=True, max_length=50)


class DepositScheme(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    bank_id = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='deposit')
    name = models.ForeignKey(
        DepositSchemeName, on_delete=models.CASCADE, related_name='name')
    type = models.ForeignKey(
        DepositSchemeType, on_delete=models.CASCADE, related_name='type')
    learn_more_link = models.CharField(max_length=255)


class LoanName(models.Model):
    loan_name = models.CharField(primary_key=True, max_length=150)


class LoanType(models.Model):
    loan_type = models.CharField(primary_key=True, max_length=20)


class Loan(models.Model):
    INTEREST_TYPE_1 = 'Simple'
    INTEREST_TYPE_2 = 'Compound'

    INTEREST_CHOICES = [
        (INTEREST_TYPE_1, 'Simple'),
        (INTEREST_TYPE_2, 'Compound')
    ]

    id = models.UUIDField(primary_key=True, default=uuid4)
    bank_id = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='loan')
    name = models.ForeignKey(
        LoanName, on_delete=models.CASCADE, related_name='name')
    type = models.ForeignKey(
        LoanType, on_delete=models.CASCADE, related_name='type')
    loan_min_limit = models.IntegerField(null=True)
    loan_max_limit = models.BigIntegerField(null=True)
    interest_rate = models.CharField(max_length=20,null=True)
    grace_period = models.CharField(max_length=20,null=True)
    hidden_charge = models.BooleanField(null=True)
    interest_type = models.CharField(
        max_length=10, choices=INTEREST_CHOICES, default=INTEREST_TYPE_1)
    duration = models.IntegerField(null=True) 
    feature = models.CharField(max_length=300,null=True)
    learn_more_link = models.CharField(max_length=50,null=True)


class Benefits(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    display_name = models.CharField(max_length=100)
    internal_name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    tags = models.CharField(max_length=50)


class CreditCardBenefits(models.Model):
    credit_card_id = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='card_benefit')
    benefit_id = models.ForeignKey(
        Benefits, on_delete=models.CASCADE, related_name='benefit')


class Offers(models.Model):
    card_id = models.ForeignKey(
        Card, on_delete=models.CASCADE, related_name='card_offer')
    name = models.CharField(max_length=100)
    internal_name = models.CharField(max_length=100)
    descriptoin = models.TextField()
    tags = models.CharField(max_length=50)
