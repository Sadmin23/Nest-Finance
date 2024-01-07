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

const BankInfo = [
    {id: '86d03fe0-9560-4fd0-a9da-94a08f5c79aa', name: 'AB Bank Limited'},
    {id: '594d3a08-8ebe-461e-9be5-d2e0a083576a', name: 'Agrani Bank Limited'},
    {id: '4cece4ac-05f1-41ec-a001-febd9c926e18', name: 'Al-Arafah Islami Bank Limited'},
    {id: '4c240859-6816-4b29-a560-35c24b425cec', name: 'Bangladesh Commerce Bank Limited'},
    {id: '44285605-f5a3-4666-8a4e-7cef12013588', name: 'Bangladesh Development Bank Limited'},
    {id: '3a53e455-91ca-482c-8ebd-85a30a3c3d57', name: 'Bangladesh Krishi Bank'},
    {id: '056824f8-b465-43a1-a83f-16ad98e6ff7a', name: 'Bank Alfalah Limited'},
    {id: '1a7d5ab1-9127-4442-992d-4cb921faa3d9', name: 'Bank Asia Limited'},
    {id: 'e7d8cee4-f1da-4c96-b5f1-dbad7d7f4acc', name: 'Bangladesh Small Industries and Commerce Bank Limited'},
    {id: 'e84810a2-e1f6-4ad6-90cc-99eadee5fa40', name: 'Bengal Commercial Bank Limited'},
    {id: '418ad35b-c4f4-42f6-b185-f9006b86b36b', name: 'BRAC Bank Limited'},
    {id: '203c1b03-e292-4d41-897f-bec081e6bf72', name: 'Citibank N.A'},
    {id: 'f845dc7e-f5bf-4589-9d5e-7077ca7f3fc5', name: 'The City Bank Limited'},
    {id: 'abe1a4aa-2036-40a1-a805-3a4b5aa12913', name: 'Commercial Bank of Ceylon Limited'},
    {id: 'f07aa306-0e0d-4079-9154-64a515d2667d', name: 'Community Bank Bangladesh Limited'},
    {id: '3b8578bb-bdbf-44a9-9db4-cdd25fb81156', name: 'Dhaka Bank Limited'},
    {id: 'da389534-5f80-4971-8293-fac24ca0f709', name: 'Dutch-Bangla Bank Limited'},
    {id: '1b84c43a-7a86-4bb1-8d9a-0c7ebb27da07', name: 'Eastern Bank Limited'},
    {id: '25d452a8-7c5d-474b-966a-5c98508c4135', name: 'Export Import Bank of Bangladesh Limited'},
    {id: 'b2f2c922-4cf6-4d8e-850a-a91737754834', name: 'First Security Islami Bank Limited'},
    {id: '5bf25122-243e-4f58-84ee-3fb097764fc5', name: 'Global Islami Bank Limited'},
    {id: '2b6f71a8-b323-459d-bc85-f58e290967d0', name: 'Habib Bank Limited'},
    {id: 'e6803930-426a-4a12-b541-55640d0ea32a', name: 'The Hongkong and Shanghai Banking Corporation Limited'},
    {id: '4297610b-fc32-4d46-9169-b081f4f97e12', name: 'ICB Islamic Bank Limited'},
    {id: '96cddf84-a906-4616-9f27-f77543150a54', name: 'International Finance Invest and Commerce Bank Limited'},
    {id: '19d0955c-8cd8-4edd-b160-ed1e5fbdaaa5', name: 'Islami Bank Bangladesh Limited'},
    {id: '8d3b00b3-4462-42d9-bdb9-a41966228860', name: 'Jamuna Bank Limited'},
    {id: '4beb32b2-8d3b-4389-8d0d-eb6c1ee3c6c8', name: 'Janata Bank Limited'},
    {id: '7341f689-ab0e-487d-bc48-8e846f9b6c83', name: 'Meghna Bank Limited'},
    {id: '7f5c62be-de59-418d-a96c-bd5e5b5aaba4', name: 'Mercantile Bank Limited'},
    {id: '0b9655c8-87ea-49fa-a123-e0b549e75741', name: 'Midland Bank Limited'},
    {id: '6e8e7e4b-d131-4027-966a-22ab4b40edb5', name: 'Modhumoti Bank Limited'},
    {id: '758e5545-65c0-4e71-90ad-b5eaa8c713e1', name: 'Mutual Trust Bank Limited'},
    {id: 'a510c747-a56d-453b-89fb-64de2c1f4695', name: 'National Bank Limited'},
    {id: '00dacd50-784f-417c-a26d-526b9162ea60', name: 'National Bank of Pakistan'},
    {id: '01a87568-8d1d-4eb8-bde8-6732ff4a4b6c', name: 'National Credit & Commerce Bank Limited'},
    {id: 'fcf1db23-e6ec-4705-8a56-e9ef44650094', name: 'NRB Bank Limited'},
    {id: '4faddf90-8c8d-466f-8782-32708449d79c', name: 'NRB Commercial Bank Limited'},
    {id: '9aa065aa-7882-4cf1-b20c-1830aa9a7a52', name: 'One Bank Limited'},
    {id: 'bd3d19f9-0971-4f2b-9430-d57f06d9daac', name: 'Padma Bank Limited'},
    {id: '6e9ecf5a-c49b-4e00-b340-881dcf616a84', name: 'The Premier Bank Limited'},
    {id: '41d47c3b-934e-4072-9504-4db93fdd6c92', name: 'Prime Bank Limited'},
    {id: '8c11f4fd-259b-4ce9-b27b-e3646f345699', name: 'Probashi Kallyan Bank'},
    {id: '58deb121-d710-461f-99bd-348666702445', name: 'Pubali Bank Limited'},
    {id: '4bd2fd6c-a571-4013-b84d-978ea4d46e75', name: 'Rajshahi Krishi Unnayan Bank'},
    {id: '5b6b0ff5-5b1a-49ac-94ce-0d76377c3b65', name: 'Rupali Bank Limited'},
    {id: '7c777b26-2373-441d-9158-7669fc3721b4', name: 'South Bangla Agriculture & Commerce Bank Limited'},
    {id: '1ce80b01-ad0d-46f5-8316-9b10ba0ef764', name: 'Shahjalal Islami Bank Limited'},
    {id: '1f0e109e-dd42-4162-abc4-c3e282c6ee66', name: 'Shimanto Bank Limited'},
    {id: 'c42e7d22-b370-47b1-84d1-3faeb34f95b6', name: 'Social Islami Bank Limited'},
    {id: 'e8e3ad16-a1a4-463e-b9cd-37faae32618d', name: 'Sonali Bank Limited'},
    {id: '68c7a06f-b3f7-419c-9635-7af80c3efbee', name: 'Southeast Bank Limited'},
    {id: '69b60b77-edb4-478e-87bf-717e2cc22eaa', name: 'Standard Bank Limited'},
    {id: '1f1fc777-a4ab-4434-b4dd-e5e139d3d313', name: 'Standard Chartered Bank'},
    {id: '1a913f90-c306-4bad-993b-b04f89720c18', name: 'State Bank of India'},
    {id: 'd062570b-b1b7-4cd9-a248-4a363bc1b0a7', name: 'Trust Bank Limited'},
    {id: 'b7006c90-5a2d-45dd-8a1f-7343216107be', name: 'Union Bank Limited'},
    {id: 'ae435e9b-c8f0-4b60-a303-52db6611c6cb', name: 'United Commercial Bank Limited'},
    {id: 'f0470bb2-818d-4c84-820b-b4ae83413103', name: 'Uttara Bank Limited'},    
    {id: '97840d89-3b9e-434f-a5a3-233d9dee384d', name: 'Woori Bank Bangladesh'}
]


export const findNameById = (id:string) => {
    const foundOption = BankInfo.find(option => option.id === id);
    return foundOption ? foundOption.name : '';
};

export const findIdByName = (name : string) => {
    const foundOption = BankInfo.find(option => option.name === name);
    return foundOption ? foundOption.id : '';
};

console.log(findNameById("68c7a06f-b3f7-419c-9635-7af80c3efbee"));


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