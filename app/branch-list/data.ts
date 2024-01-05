const District = [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Jamalpur",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Mymensingh",
    "Narayanganj",
    "Narsingdi",
    "Netrokona",
    "Rajbari",
    "Shariatpur",
    "Sherpur",
    "Tangail",
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Chapai Nawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajgonj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Habiganj",
    "Maulvibazar",
    "Sunamganj",
    "Sylhet",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira"
]

const Bank = [
    "AB Bank Limited",
    "Agrani Bank Limited",   
    "Al-Arafah Islami Bank Limited",
    "Bangladesh Commerce Bank Limited",
    "Bangladesh Development Bank Limited",
    "Bangladesh Krishi Bank",
    "Bank Alfalah Limited",
    "Bank Asia Limited",
    "Bangladesh Small Industries and Commerce Bank Limited",
    "Bengal Commercial Bank Limited",
    "BRAC Bank Limited",
    "Citibank N.A",
    "The City Bank Limited",
    "Commercial Bank of Ceylon Limited",
    "Community Bank Bangladesh Limited",
    "Dhaka Bank Limited",
    "Dutch-Bangla Bank Limited",
    "Eastern Bank Limited",
    "Export Import Bank of Bangladesh Limited",
    "First Security Islami Bank Limited",
    "Global Islami Bank Limited",
    "Habib Bank Limited",
    "The Hongkong and Shanghai Banking Corporation Limited",
    "ICB Islamic Bank Limited",
    "International Finance Invest and Commerce Bank Limited",
    "Islami Bank Bangladesh Limited",
    "Jamuna Bank Limited",
    "Janata Bank Limited",
    "Meghna Bank Limited",
    "Mercantile Bank Limited",
    "Midland Bank Limited",
    "Modhumoti Bank Limited",
    "Mutual Trust Bank Limited",
    "National Bank Limited",
    "National Bank of Pakistan",
    "National Credit & Commerce Bank Limited",
    "NRB Bank Limited",
    "NRB Commercial Bank Limited",
    "One Bank Limited",
    "Padma Bank Limited",
    "The Premier Bank Limited",
    "Prime Bank Limited",
    "Probashi Kallyan Bank",
    "Pubali Bank Limited",
    "Rajshahi Krishi Unnayan Bank",
    "Rupali Bank Limited",
    "South Bangla Agriculture & Commerce Bank Limited",
    "Shahjalal Islami Bank Limited",
    "Shimanto Bank Limited",
    "Social Islami Bank Limited",
    "Sonali Bank Limited",
    "Southeast Bank Limited",
    "Standard Bank Limited",
    "Standard Chartered Bank",
    "State Bank of India",
    "Trust Bank Limited",
    "Union Bank Limited",
    "United Commercial Bank Limited",
    "Uttara Bank Limited",
    "Woori Bank Bangladesh",
]

export const DistrictData = District.map((district) => ({
    value: district,
    label: district,
}));

export const BankData = Bank.map((bank) => ({
    value: bank,
    label: bank,
}));

export interface Option {
    value: string;
    label: string;
}
/*
8: Chadpur

9: Chandpur

10: Chapai Nawabganj

11: Chapainawabganj

26: Jhalakathi

27: Jhalakati

28: Jhalokati

33: Kishoreganj

34: Kishorganj

9: Chapai Nawabganj

10: Chapainawabganj

13: Cox's Bazaar

14: Cox's Bazar

22: Gopalganj

23: Goplaganj

27: Jhalakati

28: Jhalokati

33: Kishoreganj

34: Kishoregonj

35: Kishorganj

37: Kushtia

38: Kustia

51: Narsindhi

52: Narsingdi

65: Sariatpur

67: Shariatpur

71: Sonagazi(Feni)
*/