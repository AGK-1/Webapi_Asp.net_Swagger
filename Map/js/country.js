// All countries
// length 252
window.onload = function () {
		
/////////////////////event click to list///////////////////////////////	
 const lis = document.getElementById('mylist');

  lis.addEventListener("click", function(event) {
   const target = event.target;
   if (target.tagName === "LI") {
     const index = [...lis.children].indexOf(target);
	 //document.getElementById('info').innerHTML=
    alert(countries[index].name+" "+countries[index].code+" "+countries[index].symbol+
	 " "+countries[index].capital+" "+countries[index].currency+" "+countries[index].continent);
   }
 })


const countries = [
	{name: "Afghanistan",code: "AF",symbol: "؋",capital: "Kabul",currency: "AFN",continent: "Asia"},
	{name: "Åland Islands",code: "AX",symbol: "€",capital: "Mariehamn",currency: "EUR",continent: "Europe"},
	{name: "Albania",code: "AL",symbol: "Lek",capital: "Tirana",currency: "ALL",continent: "Europe"},
	{name: "Algeria",code: "DZ",symbol: "دج",capital: "Algiers",currency: "DZD",continent: "Africa"},
	{name: "American Samoa",code: "AS",symbol: "$",capital: "Pago Pago",currency: "USD",continent: "Oceania"},
	{name: "Andorra",code: "AD",symbol: "€",capital: "Andorra la Vella",currency: "EUR",continent: "Europe"},
	{name: "Angola",code: "AO",symbol: "Kz",capital: "Luanda",currency: "AOA",continent: "Africa"},
	{name: "Anguilla",code: "AI",symbol: "$",capital: "The Valley",currency: "XCD",continent: "North America"},
	{name: "Antarctica",code: "AQ",symbol: "$",capital: "Antarctica",currency: "AAD",continent: "Antarctica"},
	{name: "Antigua & Barbuda",code: "AG",symbol: "$",capital: "St. John's",currency: "XCD",continent: "North America"},
	{name: "Argentina",code: "AR",symbol: "$",capital: "Buenos Aires",currency: "ARS",continent: "South America"},
	{name: "Armenia",code: "AM",symbol: "֏",capital: "Yerevan",currency: "AMD",continent: "Asia"},
	{name: "Aruba",code: "AW",symbol: "ƒ",capital: "Oranjestad",currency: "AWG",continent: "North America"},
	{name: "Australia",code: "AU",symbol: "$",capital: "Canberra",currency: "AUD",continent: "Oceania"},
	{name: "Austria",code: "AT",symbol: "€",capital: "Vienna",currency: "EUR",continent: "Europe"},
	{name: "Azerbaijan",code: "AZ",symbol: "m",capital: "Baku",currency: "AZN",continent: "Asia"},
	{name: "Bahamas",code: "BS",symbol: "B$",capital: "Nassau",currency: "BSD",continent: "North America"},
	{name: "Bahrain",code: "BH",symbol: ".د.ب",capital: "Manama",currency: "BHD",continent: "Asia"},
	{name: "Bangladesh",code: "BD",symbol: "৳",capital: "Dhaka",currency: "BDT",continent: "Asia"},
	{name: "Barbados",code: "BB",symbol: "Bds$",capital: "Bridgetown",currency: "BBD",continent: "North America"},
	{name: "Belarus",code: "BY",symbol: "Br",capital: "Minsk",currency: "BYN",continent: "Europe"},
	{name: "Belgium",code: "BE",symbol: "€",capital: "Brussels",currency: "EUR",continent: "Europe"},
	{name: "Belize",code: "BZ",symbol: "$",capital: "Belmopan",currency: "BZD",continent: "North America"},
	{name: "Benin",code: "BJ",symbol: "CFA",capital: "Porto-Novo",currency: "XOF",continent: "Africa"},
	{name: "Bermuda",code: "BM",symbol: "$",capital: "Hamilton",currency: "BMD",continent: "North America"},
	{name: "Bhutan",code: "BT",symbol: "Nu.",capital: "Thimphu",currency: "BTN",continent: "Asia"},
	{name: "Bolivia",code: "BO",symbol: "Bs.",capital: "Sucre",currency: "BOB",continent: "South America"},
	{name: "Caribbean Netherlands",code: "BQ",symbol: "$",capital: "Kralendijk",currency: "USD",continent: "North America"},
	{name: "Bosnia & Herzegovina",code: "BA",symbol: "KM",capital: "Sarajevo",currency: "BAM",continent: "Europe"},
	{name: "Botswana",code: "BW",symbol: "P",capital: "Gaborone",currency: "BWP",continent: "Africa"},
	{name: "Bouvet Island",code: "BV",symbol: "kr",capital: "",currency: "NOK",continent: "Antarctica"},
	{name: "Brazil",code: "BR",symbol: "R$",capital: "Brasilia",currency: "BRL",continent: "South America"},
	{name: "British Indian Ocean Territory",code: "IO",symbol: "$",capital: "Diego Garcia",currency: "USD",continent: "Asia"},
	{name: "Brunei",code: "BN",symbol: "B$",capital: "Bandar Seri Begawan",currency: "BND",continent: "Asia"},
	{name: "Bulgaria",code: "BG",symbol: "Лв.",capital: "Sofia",currency: "BGN",continent: "Europe"},
	{name: "Burkina Faso",code: "BF",symbol: "CFA",capital: "Ouagadougou",currency: "XOF",continent: "Africa"},
	{name: "Burundi",code: "BI",symbol: "FBu",capital: "Bujumbura",currency: "BIF",continent: "Africa"},
	{name: "Cambodia",code: "KH",symbol: "KHR",capital: "Phnom Penh",currency: "KHR",continent: "Asia"},
	{name: "Cameroon",code: "CM",symbol: "FCFA",capital: "Yaounde",currency: "XAF",continent: "Africa"},
	{name: "Canada",code: "CA",symbol: "$",capital: "Ottawa",currency: "CAD",continent: "North America"},
	{name: "Cape Verde",code: "CV",symbol: "$",capital: "Praia",currency: "CVE",continent: "Africa"},
	{name: "Cayman Islands",code: "KY",symbol: "$",capital: "George Town",currency: "KYD",continent: "North America"},
	{name: "Central African Republic",code: "CF",symbol: "FCFA",capital: "Bangui",currency: "XAF",continent: "Africa"},
	{name: "Chad",code: "TD",symbol: "FCFA",capital: "N'Djamena",currency: "XAF",continent: "Africa"},
	{name: "Chile",code: "CL",symbol: "$",capital: "Santiago",currency: "CLP",continent: "South America"},
	{name: "China",code: "CN",symbol: "¥",capital: "Beijing",currency: "CNY",continent: "Asia"},
	{name: "Christmas Island",code: "CX",symbol: "$",capital: "Flying Fish Cove",currency: "AUD",continent: "Asia"},
	{name: "Cocos (Keeling) Islands",code: "CC",symbol: "$",capital: "West Island",currency: "AUD",continent: "Asia"},
	{name: "Colombia",code: "CO",symbol: "$",capital: "Bogota",currency: "COP",continent: "South America"},
	{name: "Comoros",code: "KM",symbol: "CF",capital: "Moroni",currency: "KMF",continent: "Africa"},
	{name: "Congo - Brazzaville",code: "CG",symbol: "FC",capital: "Brazzaville",currency: "XAF",continent: "Africa"},
	{name: "Congo - Kinshasa",code: "CD",symbol: "FC",capital: "Kinshasa",currency: "CDF",continent: "Africa"},
	{name: "Cook Islands",code: "CK",symbol: "$",capital: "Avarua",currency: "NZD",continent: "Oceania"},
	{name: "Costa Rica",code: "CR",symbol: "₡",capital: "San Jose",currency: "CRC",continent: "North America"},
	{name: "Côte d’Ivoire",code: "CI",symbol: "CFA",capital: "Yamoussoukro",currency: "XOF",continent: "Africa"},
	{name: "Croatia",code: "HR",symbol: "kn",capital: "Zagreb",currency: "HRK",continent: "Europe"},
	{name: "Cuba",code: "CU",symbol: "$",capital: "Havana",currency: "CUP",continent: "North America"},
	{name: "Curaçao",code: "CW",symbol: "ƒ",capital: "Willemstad",currency: "ANG",continent: "North America"},
	{name: "Cyprus",code: "CY",symbol: "€",capital: "Nicosia",currency: "EUR",continent: "Asia"},
	{name: "Czechia",code: "CZ",symbol: "Kč",capital: "Prague",currency: "CZK",continent: "Europe"},
	{name: "Denmark",code: "DK",symbol: "Kr.",capital: "Copenhagen",currency: "DKK",continent: "Europe"},
	{name: "Djibouti",code: "DJ",symbol: "Fdj",capital: "Djibouti",currency: "DJF",continent: "Africa"},
	{name: "Dominica",code: "DM",symbol: "$",capital: "Roseau",currency: "XCD",continent: "North America"},
	{name: "Dominican Republic",code: "DO",symbol: "$",capital: "Santo Domingo",currency: "DOP",continent: "North America"},
	{name: "Ecuador",code: "EC",symbol: "$",capital: "Quito",currency: "USD",continent: "South America"},
	{name: "Egypt",code: "EG",symbol: "ج.م",capital: "Cairo",currency: "EGP",continent: "Africa"},
	{name: "El Salvador",code: "SV",symbol: "$",capital: "San Salvador",currency: "USD",continent: "North America"},
	{name: "Equatorial Guinea",code: "GQ",symbol: "FCFA",capital: "Malabo",currency: "XAF",continent: "Africa"},
	{name: "Eritrea",code: "ER",symbol: "Nfk",capital: "Asmara",currency: "ERN",continent: "Africa"},
	{name: "Estonia",code: "EE",symbol: "€",capital: "Tallinn",currency: "EUR",continent: "Europe"},
	{name: "Ethiopia",code: "ET",symbol: "Nkf",capital: "Addis Ababa",currency: "ETB",continent: "Africa"},
	{name: "Falkland Islands (Islas Malvinas)",code: "FK",symbol: "£",capital: "Stanley",currency: "FKP",continent: "South America"},
	{name: "Faroe Islands",code: "FO",symbol: "Kr.",capital: "Torshavn",currency: "DKK",continent: "Europe"},
	{name: "Fiji",code: "FJ",symbol: "FJ$",capital: "Suva",currency: "FJD",continent: "Oceania"},
	{name: "Finland",code: "FI",symbol: "€",capital: "Helsinki",currency: "EUR",continent: "Europe"},
	{name: "France",code: "FR",symbol: "€",capital: "Paris",currency: "EUR",continent: "Europe"},
	{name: "French Guiana",code: "GF",symbol: "€",capital: "Cayenne",currency: "EUR",continent: "South America"},
	{name: "French Polynesia",code: "PF",symbol: "₣",capital: "Papeete",currency: "XPF",continent: "Oceania"},
	{name: "French Southern Territories",code: "TF",symbol: "€",capital: "Port-aux-Francais",currency: "EUR",continent: "Antarctica"},
	{name: "Gabon",code: "GA",symbol: "FCFA",capital: "Libreville",currency: "XAF",continent: "Africa"},
	{name: "Gambia",code: "GM",symbol: "D",capital: "Banjul",currency: "GMD",continent: "Africa"},
	{name: "Georgia",code: "GE",symbol: "ლ",capital: "Tbilisi",currency: "GEL",continent: "Asia"},
	{name: "Germany",code: "DE",symbol: "€",capital: "Berlin",currency: "EUR",continent: "Europe"},
	{name: "Ghana",code: "GH",symbol: "GH₵",capital: "Accra",currency: "GHS",continent: "Africa"},
	{name: "Gibraltar",code: "GI",symbol: "£",capital: "Gibraltar",currency: "GIP",continent: "Europe"},
	{name: "Greece",code: "GR",symbol: "€",capital: "Athens",currency: "EUR",continent: "Europe"},
	{name: "Greenland",code: "GL",symbol: "Kr.",capital: "Nuuk",currency: "DKK",continent: "North America"},
	{name: "Grenada",code: "GD",symbol: "$",capital: "St. George's",currency: "XCD",continent: "North America"},
	{name: "Guadeloupe",code: "GP",symbol: "€",capital: "Basse-Terre",currency: "EUR",continent: "North America"},
	{name: "Guam",code: "GU",symbol: "$",capital: "Hagatna",currency: "USD",continent: "Oceania"},
	{name: "Guatemala",code: "GT",symbol: "Q",capital: "Guatemala City",currency: "GTQ",continent: "North America"},
	{name: "Guernsey",code: "GG",symbol: "£",capital: "St Peter Port",currency: "GBP",continent: "Europe"},
	{name: "Guinea",code: "GN",symbol: "FG",capital: "Conakry",currency: "GNF",continent: "Africa"},
	{name: "Guinea-Bissau",code: "GW",symbol: "CFA",capital: "Bissau",currency: "XOF",continent: "Africa"},
	{name: "Guyana",code: "GY",symbol: "$",capital: "Georgetown",currency: "GYD",continent: "South America"},
	{name: "Haiti",code: "HT",symbol: "G",capital: "Port-au-Prince",currency: "HTG",continent: "North America"},
	{name: "Heard & McDonald Islands",code: "HM",symbol: "$",capital: "",currency: "AUD",continent: "Antarctica"},
	{name: "Vatican City",code: "VA",symbol: "€",capital: "Vatican City",currency: "EUR",continent: "Europe"},
	{name: "Honduras",code: "HN",symbol: "L",capital: "Tegucigalpa",currency: "HNL",continent: "North America"},
	{name: "Hong Kong",code: "HK",symbol: "$",capital: "Hong Kong",currency: "HKD",continent: "Asia"},
	{name: "Hungary",code: "HU",symbol: "Ft",capital: "Budapest",currency: "HUF",continent: "Europe"},
	{name: "Iceland",code: "IS",symbol: "kr",capital: "Reykjavik",currency: "ISK",continent: "Europe"},
	{name: "India",code: "IN",symbol: "₹",capital: "New Delhi",currency: "INR",continent: "Asia"},
	{name: "Indonesia",code: "ID",symbol: "Rp",capital: "Jakarta",currency: "IDR",continent: "Asia"},
	{name: "Iran",code: "IR",symbol: "﷼",capital: "Tehran",currency: "IRR",continent: "Asia"},
	{name: "Iraq",code: "IQ",symbol: "د.ع",capital: "Baghdad",currency: "IQD",continent: "Asia"},
	{name: "Ireland",code: "IE",symbol: "€",capital: "Dublin",currency: "EUR",continent: "Europe"},
	{name: "Isle of Man",code: "IM",symbol: "£",capital: "Douglas, Isle of Man",currency: "GBP",continent: "Europe"},
	{name: "Israel",code: "IL",symbol: "₪",capital: "Jerusalem",currency: "ILS",continent: "Asia"},
	{name: "Italy",code: "IT",symbol: "€",capital: "Rome",currency: "EUR",continent: "Europe"},
	{name: "Jamaica",code: "JM",symbol: "J$",capital: "Kingston",currency: "JMD",continent: "North America"},
	{name: "Japan",code: "JP",symbol: "¥",capital: "Tokyo",currency: "JPY",continent: "Asia"},
	{name: "Jersey",code: "JE",symbol: "£",capital: "Saint Helier",currency: "GBP",continent: "Europe"},
	{name: "Jordan",code: "JO",symbol: "ا.د",capital: "Amman",currency: "JOD",continent: "Asia"},
	{name: "Kazakhstan",code: "KZ",symbol: "лв",capital: "Astana",currency: "KZT",continent: "Asia"},
	{name: "Kenya",code: "KE",symbol: "KSh",capital: "Nairobi",currency: "KES",continent: "Africa"},
	{name: "Kiribati",code: "KI",symbol: "$",capital: "Tarawa",currency: "AUD",continent: "Oceania"},
	{name: "North Korea",code: "KP",symbol: "₩",capital: "Pyongyang",currency: "KPW",continent: "Asia"},
	{name: "South Korea",code: "KR",symbol: "₩",capital: "Seoul",currency: "KRW",continent: "Asia"},
	{name: "Kosovo",code: "XK",symbol: "€",capital: "Pristina",currency: "EUR",continent: "Europe"},
	{name: "Kuwait",code: "KW",symbol: "ك.د",capital: "Kuwait City",currency: "KWD",continent: "Asia"},
	{name: "Kyrgyzstan",code: "KG",symbol: "лв",capital: "Bishkek",currency: "KGS",continent: "Asia"},
	{name: "Laos",code: "LA",symbol: "₭",capital: "Vientiane",currency: "LAK",continent: "Asia"},
	{name: "Latvia",code: "LV",symbol: "€",capital: "Riga",currency: "EUR",continent: "Europe"},
	{name: "Lebanon",code: "LB",symbol: "£",capital: "Beirut",currency: "LBP",continent: "Asia"},
	{name: "Lesotho",code: "LS",symbol: "L",capital: "Maseru",currency: "LSL",continent: "Africa"},
	{name: "Liberia",code: "LR",symbol: "$",capital: "Monrovia",currency: "LRD",continent: "Africa"},
	{name: "Libya",code: "LY",symbol: "د.ل",capital: "Tripolis",currency: "LYD",continent: "Africa"},
	{name: "Liechtenstein",code: "LI",symbol: "CHf",capital: "Vaduz",currency: "CHF",continent: "Europe"},
	{name: "Lithuania",code: "LT",symbol: "€",capital: "Vilnius",currency: "EUR",continent: "Europe"},
	{name: "Luxembourg",code: "LU",symbol: "€",capital: "Luxembourg",currency: "EUR",continent: "Europe"},
	{name: "Macao",code: "MO",symbol: "$",capital: "Macao",currency: "MOP",continent: "Asia"},
	{name: "North Macedonia",code: "MK",symbol: "ден",capital: "Skopje",currency: "MKD",continent: "Europe"},
	{name: "Madagascar",code: "MG",symbol: "Ar",capital: "Antananarivo",currency: "MGA",continent: "Africa"},
	{name: "Malawi",code: "MW",symbol: "MK",capital: "Lilongwe",currency: "MWK",continent: "Africa"},
	{name: "Malaysia",code: "MY",symbol: "RM",capital: "Kuala Lumpur",currency: "MYR",continent: "Asia"},
	{name: "Maldives",code: "MV",symbol: "Rf",capital: "Male",currency: "MVR",continent: "Asia"},
	{name: "Mali",code: "ML",symbol: "CFA",capital: "Bamako",currency: "XOF",continent: "Africa"},
	{name: "Malta",code: "MT",symbol: "€",capital: "Valletta",currency: "EUR",continent: "Europe"},
	{name: "Marshall Islands",code: "MH",symbol: "$",capital: "Majuro",currency: "USD",continent: "Oceania"},
	{name: "Martinique",code: "MQ",symbol: "€",capital: "Fort-de-France",currency: "EUR",continent: "North America"},
	{name: "Mauritania",code: "MR",symbol: "MRU",capital: "Nouakchott",currency: "MRO",continent: "Africa"},
	{name: "Mauritius",code: "MU",symbol: "₨",capital: "Port Louis",currency: "MUR",continent: "Africa"},
	{name: "Mayotte",code: "YT",symbol: "€",capital: "Mamoudzou",currency: "EUR",continent: "Africa"},
	{name: "Mexico",code: "MX",symbol: "$",capital: "Mexico City",currency: "MXN",continent: "North America"},
	{name: "Micronesia",code: "FM",symbol: "$",capital: "Palikir",currency: "USD",continent: "Oceania"},
	{name: "Moldova",code: "MD",symbol: "L",capital: "Chisinau",currency: "MDL",continent: "Europe"},
	{name: "Monaco",code: "MC",symbol: "€",capital: "Monaco",currency: "EUR",continent: "Europe"},
	{name: "Mongolia",code: "MN",symbol: "₮",capital: "Ulan Bator",currency: "MNT",continent: "Asia"},
	{name: "Montenegro",code: "ME",symbol: "€",capital: "Podgorica",currency: "EUR",continent: "Europe"},
	{name: "Montserrat",code: "MS",symbol: "$",capital: "Plymouth",currency: "XCD",continent: "North America"},
	{name: "Morocco",code: "MA",symbol: "DH",capital: "Rabat",currency: "MAD",continent: "Africa"},
	{name: "Mozambique",code: "MZ",symbol: "MT",capital: "Maputo",currency: "MZN",continent: "Africa"},
	{name: "Myanmar (Burma)",code: "MM",symbol: "K",capital: "Nay Pyi Taw",currency: "MMK",continent: "Asia"},
	{name: "Namibia",code: "NA",symbol: "$",capital: "Windhoek",currency: "NAD",continent: "Africa"},
	{name: "Nauru",code: "NR",symbol: "$",capital: "Yaren",currency: "AUD",continent: "Oceania"},
	{name: "Nepal",code: "NP",symbol: "₨",capital: "Kathmandu",currency: "NPR",continent: "Asia"},
	{name: "Netherlands",code: "NL",symbol: "€",capital: "Amsterdam",currency: "EUR",continent: "Europe"},
	{name: "Curaçao",code: "AN",symbol: "NAf",capital: "Willemstad",currency: "ANG",continent: "North America"},
	{name: "New Caledonia",code: "NC",symbol: "₣",capital: "Noumea",currency: "XPF",continent: "Oceania"},
	{name: "New Zealand",code: "NZ",symbol: "$",capital: "Wellington",currency: "NZD",continent: "Oceania"},
	{name: "Nicaragua",code: "NI",symbol: "C$",capital: "Managua",currency: "NIO",continent: "North America"},
	{name: "Niger",code: "NE",symbol: "CFA",capital: "Niamey",currency: "XOF",continent: "Africa"},
	{name: "Nigeria",code: "NG",symbol: "₦",capital: "Abuja",currency: "NGN",continent: "Africa"},
	{name: "Niue",code: "NU",symbol: "$",capital: "Alofi",currency: "NZD",continent: "Oceania"},
	{name: "Norfolk Island",code: "NF",symbol: "$",capital: "Kingston",currency: "AUD",continent: "Oceania"},
	{name: "Northern Mariana Islands",code: "MP",symbol: "$",capital: "Saipan",currency: "USD",continent: "Oceania"},
	{name: "Norway",code: "NO",symbol: "kr",capital: "Oslo",currency: "NOK",continent: "Europe"},
	{name: "Oman",code: "OM",symbol: ".ع.ر",capital: "Muscat",currency: "OMR",continent: "Asia"},
	{name: "Pakistan",code: "PK",symbol: "₨",capital: "Islamabad",currency: "PKR",continent: "Asia"},
	{name: "Palau",code: "PW",symbol: "$",capital: "Melekeok",currency: "USD",continent: "Oceania"},
	{name: "Palestine",code: "PS",symbol: "₪",capital: "East Jerusalem",currency: "ILS",continent: "Asia"},
	{name: "Panama",code: "PA",symbol: "B/.",capital: "Panama City",currency: "PAB",continent: "North America"},
	{name: "Papua New Guinea",code: "PG",symbol: "K",capital: "Port Moresby",currency: "PGK",continent: "Oceania"},
	{name: "Paraguay",code: "PY",symbol: "₲",capital: "Asuncion",currency: "PYG",continent: "South America"},
	{name: "Peru",code: "PE",symbol: "S/.",capital: "Lima",currency: "PEN",continent: "South America"},
	{name: "Philippines",code: "PH",symbol: "₱",capital: "Manila",currency: "PHP",continent: "Asia"},
	{name: "Pitcairn Islands",code: "PN",symbol: "$",capital: "Adamstown",currency: "NZD",continent: "Oceania"},
	{name: "Poland",code: "PL",symbol: "zł",capital: "Warsaw",currency: "PLN",continent: "Europe"},
	{name: "Portugal",code: "PT",symbol: "€",capital: "Lisbon",currency: "EUR",continent: "Europe"},
	{name: "Puerto Rico",code: "PR",symbol: "$",capital: "San Juan",currency: "USD",continent: "North America"},
	{name: "Qatar",code: "QA",symbol: "ق.ر",capital: "Doha",currency: "QAR",continent: "Asia"},
	{name: "Réunion",code: "RE",symbol: "€",capital: "Saint-Denis",currency: "EUR",continent: "Africa"},
	{name: "Romania",code: "RO",symbol: "lei",capital: "Bucharest",currency: "RON",continent: "Europe"},
	{name: "Russia",code: "RU",symbol: "₽",capital: "Moscow",currency: "RUB",continent: "Asia"},
	{name: "Rwanda",code: "RW",symbol: "FRw",capital: "Kigali",currency: "RWF",continent: "Africa"},
	{name: "St. Barthélemy",code: "BL",symbol: "€",capital: "Gustavia",currency: "EUR",continent: "North America"},
	{name: "St. Helena",code: "SH",symbol: "£",capital: "Jamestown",currency: "SHP",continent: "Africa"},
	{name: "St. Kitts & Nevis",code: "KN",symbol: "$",capital: "Basseterre",currency: "XCD",continent: "North America"},
	{name: "St. Lucia",code: "LC",symbol: "$",capital: "Castries",currency: "XCD",continent: "North America"},
	{name: "St. Martin",code: "MF",symbol: "€",capital: "Marigot",currency: "EUR",continent: "North America"},
	{name: "St. Pierre & Miquelon",code: "PM",symbol: "€",capital: "Saint-Pierre",currency: "EUR",continent: "North America"},
	{name: "St. Vincent & Grenadines",code: "VC",symbol: "$",capital: "Kingstown",currency: "XCD",continent: "North America"},
	{name: "Samoa",code: "WS",symbol: "SAT",capital: "Apia",currency: "WST",continent: "Oceania"},
	{name: "San Marino",code: "SM",symbol: "€",capital: "San Marino",currency: "EUR",continent: "Europe"},
	{name: "São Tomé & Príncipe",code: "ST",symbol: "Db",capital: "Sao Tome",currency: "STD",continent: "Africa"},
	{name: "Saudi Arabia",code: "SA",symbol: "﷼",capital: "Riyadh",currency: "SAR",continent: "Asia"},
	{name: "Senegal",code: "SN",symbol: "CFA",capital: "Dakar",currency: "XOF",continent: "Africa"},
	{name: "Serbia",code: "RS",symbol: "din",capital: "Belgrade",currency: "RSD",continent: "Europe"},
	{name: "Serbia",code: "CS",symbol: "din",capital: "Belgrade",currency: "RSD",continent: "Europe"},
	{name: "Seychelles",code: "SC",symbol: "SRe",capital: "Victoria",currency: "SCR",continent: "Africa"},
	{name: "Sierra Leone",code: "SL",symbol: "Le",capital: "Freetown",currency: "SLL",continent: "Africa"},
	{name: "Singapore",code: "SG",symbol: "$",capital: "Singapur",currency: "SGD",continent: "Asia"},
	{name: "Sint Maarten",code: "SX",symbol: "ƒ",capital: "Philipsburg",currency: "ANG",continent: "North America"},
	{name: "Slovakia",code: "SK",symbol: "€",capital: "Bratislava",currency: "EUR",continent: "Europe"},
	{name: "Slovenia",code: "SI",symbol: "€",capital: "Ljubljana",currency: "EUR",continent: "Europe"},
	{name: "Solomon Islands",code: "SB",symbol: "Si$",capital: "Honiara",currency: "SBD",continent: "Oceania"},
	{name: "Somalia",code: "SO",symbol: "Sh.so.",capital: "Mogadishu",currency: "SOS",continent: "Africa"},
	{name: "South Africa",code: "ZA",symbol: "R",capital: "Pretoria",currency: "ZAR",continent: "Africa"},
	{name: "South Georgia & South Sandwich Islands",code: "GS",symbol: "£",capital: "Grytviken",currency: "GBP",continent: "Antarctica"},
	{name: "South Sudan",code: "SS",symbol: "£",capital: "Juba",currency: "SSP",continent: "Africa"},
	{name: "Spain",code: "ES",symbol: "€",capital: "Madrid",currency: "EUR",continent: "Europe"},
	{name: "Sri Lanka",code: "LK",symbol: "Rs",capital: "Colombo",currency: "LKR",continent: "Asia"},
	{name: "Sudan",code: "SD",symbol: ".س.ج",capital: "Khartoum",currency: "SDG",continent: "Africa"},
	{name: "Suriname",code: "SR",symbol: "$",capital: "Paramaribo",currency: "SRD",continent: "South America"},
	{name: "Svalbard & Jan Mayen",code: "SJ",symbol: "kr",capital: "Longyearbyen",currency: "NOK",continent: "Europe"},
	{name: "Eswatini",code: "SZ",symbol: "E",capital: "Mbabane",currency: "SZL",continent: "Africa"},
	{name: "Sweden",code: "SE",symbol: "kr",capital: "Stockholm",currency: "SEK",continent: "Europe"},
	{name: "Switzerland",code: "CH",symbol: "CHf",capital: "Berne",currency: "CHF",continent: "Europe"},
	{name: "Syria",code: "SY",symbol: "LS",capital: "Damascus",currency: "SYP",continent: "Asia"},
	{name: "Taiwan",code: "TW",symbol: "$",capital: "Taipei",currency: "TWD",continent: "Asia"},
	{name: "Tajikistan",code: "TJ",symbol: "SM",capital: "Dushanbe",currency: "TJS",continent: "Asia"},
	{name: "Tanzania",code: "TZ",symbol: "TSh",capital: "Dodoma",currency: "TZS",continent: "Africa"},
	{name: "Thailand",code: "TH",symbol: "฿",capital: "Bangkok",currency: "THB",continent: "Asia"},
	{name: "Timor-Leste",code: "TL",symbol: "$",capital: "Dili",currency: "USD",continent: "Asia"},
	{name: "Togo",code: "TG",symbol: "CFA",capital: "Lome",currency: "XOF",continent: "Africa"},
	{name: "Tokelau",code: "TK",symbol: "$",capital: "",currency: "NZD",continent: "Oceania"},
	{name: "Tonga",code: "TO",symbol: "$",capital: "Nuku'alofa",currency: "TOP",continent: "Oceania"},
	{name: "Trinidad & Tobago",code: "TT",symbol: "$",capital: "Port of Spain",currency: "TTD",continent: "North America"},
	{name: "Tunisia",code: "TN",symbol: "ت.د",capital: "Tunis",currency: "TND",continent: "Africa"},
	{name: "Turkey",code: "TR",symbol: "₺",capital: "Ankara",currency: "TRY",continent: "Asia"},
	{name: "Turkmenistan",code: "TM",symbol: "T",capital: "Ashgabat",currency: "TMT",continent: "Asia"},
	{name: "Turks & Caicos Islands",code: "TC",symbol: "$",capital: "Cockburn Town",currency: "USD",continent: "North America"},
	{name: "Tuvalu",code: "TV",symbol: "$",capital: "Funafuti",currency: "AUD",continent: "Oceania"},
	{name: "Uganda",code: "UG",symbol: "USh",capital: "Kampala",currency: "UGX",continent: "Africa"},
	{name: "Ukraine",code: "UA",symbol: "₴",capital: "Kiev",currency: "UAH",continent: "Europe"},
	{name: "United Arab Emirates",code: "AE",symbol: "إ.د",capital: "Abu Dhabi",currency: "AED",continent: "Asia"},
	{name: "United Kingdom",code: "GB",symbol: "£",capital: "London",currency: "GBP",continent: "Europe"},
	{name: "United States",code: "US",symbol: "$",capital: "Washington",currency: "USD",continent: "North America"},
	{name: "U.S. Outlying Islands",code: "UM",symbol: "$",capital: "",currency: "USD",continent: "North America"},
	{name: "Uruguay",code: "UY",symbol: "$",capital: "Montevideo",currency: "UYU",continent: "South America"},
	{name: "Uzbekistan",code: "UZ",symbol: "лв",capital: "Tashkent",currency: "UZS",continent: "Asia"},
	{name: "Vanuatu",code: "VU",symbol: "VT",capital: "Port Vila",currency: "VUV",continent: "Oceania"},
	{name: "Venezuela",code: "VE",symbol: "Bs",capital: "Caracas",currency: "VEF",continent: "South America"},
	{name: "Vietnam",code: "VN",symbol: "₫",capital: "Hanoi",currency: "VND",continent: "Asia"},
	{name: "British Virgin Islands",code: "VG",symbol: "$",capital: "Road Town",currency: "USD",continent: "North America"},
	{name: "U.S. Virgin Islands",code: "VI",symbol: "$",capital: "Charlotte Amalie",currency: "USD",continent: "North America"},
	{name: "Wallis & Futuna",code: "WF",symbol: "₣",capital: "Mata Utu",currency: "XPF",continent: "Oceania"},
	{name: "Western Sahara",code: "EH",symbol: "MAD",capital: "El-Aaiun",currency: "MAD",continent: "Africa"},
	{name: "Yemen",code: "YE",symbol: "﷼",capital: "Sanaa",currency: "YER",continent: "Asia"},
	{name: "Zambia",code: "ZM",symbol: "ZK",capital: "Lusaka",currency: "ZMW",continent: "Africa"},
	{name: "Zimbabwe",code: "ZW",symbol: "$",capital: "Harare",currency: "ZWL",continent: "Africa"}
];

/////////////////////////download list/////////////////////////////////


    let list = document.getElementById("mylist");
	let coun_name=[];
	//ngt.push(negat[index]);
    for (var i = 0; i < countries.length; i++) {
		coun_name.push(countries[i]);
		//let items = ["saab", "BMW", "Fiat","Volvo","Bentley"];
        const li = document.createElement('li');
        li.innerText = countries[i].name;
       // li.appendChild(anchor);
        list.appendChild(li);

    }

document.querySelector(".africa").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');
	
	//const liToShow = myUl.querySelectorAll('li')[index];
allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='Africa'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})
///////////////////////////////////////////Europe
document.querySelector(".europe").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');
	
	//const liToShow = myUl.querySelectorAll('li')[index];
allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='Europe'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})


/////////////////////////////Asia
document.querySelector(".asia").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');
	
	//const liToShow = myUl.querySelectorAll('li')[index];
allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='Asia'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})
///////////////////////////australia
document.querySelector(".australia").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');

allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='Oceania'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})

///////////////////////////South_America
document.querySelector(".south_america").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');

allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='South America'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})

///////////////////////////North_America
document.querySelector(".north_america").addEventListener('click', function() {
	const myUl = document.querySelector('#mylist');
	const allLi = myUl.querySelectorAll('li');

allLi.forEach(li => {
  li.style.display = 'none';
});

for (i=0;i<countries.length;i++){
	
	if (countries[i].continent=='North America'){
		const liToShow = myUl.querySelectorAll('li')[i];
	liToShow.style.display = 'block'; // or 'list-item'
	
	
	}
}

})
}