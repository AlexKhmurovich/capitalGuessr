let countries = [
    {
        "country": "AFGHANISTAN",
        "capital": "KABUL",
        "level": "2" 
    },
    {
        "country": "ALBANIA",
        "capital": "TIRANA",
        "level": "2" 
    },
    {
        "country": "ALGERIA",
        "capital": "ALGER",
        "level": "1" 
    },
    {
        "country": "AMERICAN SAMOA",
        "capital": "FAGATOGO",
        "level": "3" 
    },
    {
        "country": "ANDORRA",
        "capital": "ANDORRA LA VELLA",
        "level": "3" 
    },
    {
        "country": "ANGOLA",
        "capital": "LUANDA",
        "level": "3" 
    },
    {
        "country": "ANGUILLA",
        "capital": "THE VALLEY",
        "level": "3" 
    },
    {
        "country": "ANTIGUA AND BARBUDA",
        "capital": "SAINT JOHN'S",
        "level": "3" 
    },
    {
        "country": "ARGENTINA",
        "capital": "BUENOS AIRES",
        "level": "1" 
    },
    {
        "country": "ARMENIA",
        "capital": "YEREVAN",
        "level": "2" 
    },
    {
        "country": "ARUBA",
        "capital": "ORANJESTAD",
        "level": "3" 
    },
    {
        "country": "AUSTRALIA",
        "capital": "CANBERRA",
        "level": "1" 
    },
    {
        "country": "AUSTRIA",
        "capital": "VIENNA",
        "level": "1" 
    },
    {
        "country": "AZERBAIJAN",
        "capital": "BAKU",
        "level": "2" 
    },
    {
        "country": "BAHAMAS",
        "capital": "NASSAU",
        "level": "3" 
    },
    {
        "country": "BAHRAIN",
        "capital": "AL-MANAMA",
        "level": "3" 
    },
    {
        "country": "BANGLADESH",
        "capital": "DHAKA",
        "level": "2" 
    },
    {
        "country": "BARBADOS",
        "capital": "BRIDGETOWN",
        "level": "3" 
    },
    {
        "country": "BELARUS",
        "capital": "MINSK",
        "level": "2" 
    },
    {
        "country": "BELGIUM",
        "capital": "BRUSSELS",
        "level": "1" 
    },
    {
        "country": "BELIZE",
        "capital": "BELMOPAN",
        "level": "3" 
    },
    {
        "country": "BENIN",
        "capital": "PORTO-NOVO",
        "level": "3" 
    },
    {
        "country": "BERMUDA",
        "capital": "HAMILTON",
        "level": "3" 
    },
    {
        "country": "BHUTAN",
        "capital": "THIMPHU",
        "level": "3" 
    },
    {
        "country": "BOLIVIA",
        "capital": "LA PAZ",
        "level": "2" 
    },
    {
        "country": "BOSNIA AND HERZEGOVINA",
        "capital": "SARAJEVO",
        "level": "2" 
    },
    {
        "country": "BOTSWANA",
        "capital": "GABORONE",
        "level": "3" 
    },
    {
        "country": "BRAZIL",
        "capital": "BRASILIA",
        "level": "1" 
    },
    {
        "country": "BRUNEI",
        "capital": "BANDAR SERI BEGAWAN",
        "level": "3" 
    },
    {
        "country": "BULGARIA",
        "capital": "SOFIA",
        "level": "1" 
    },
    {
        "country": "BURKINA FASO",
        "capital": "OUAGADOUGOU",
        "level": "3" 
    },
    {
        "country": "BURUNDI",
        "capital": "BUJUMBURA",
        "level": "3" 
    },
    {
        "country": "CAMBODIA",
        "capital": "PHNOM PENH",
        "level": "3" 
    },
    {
        "country": "CAMEROON",
        "capital": "YAOUND",
        "level": "3" 
    },
    {
        "country": "CANADA",
        "capital": "OTTAWA",
        "level": "1" 
    },
    {
        "country": "CAPE VERDE",
        "capital": "PRAIA",
        "level": "3" 
    },
    {
        "country": "CAYMAN ISLANDS",
        "capital": "GEORGE TOWN",
        "level": "3" 
    },
    {
        "country": "CENTRAL AFRICAN REPUBLIC",
        "capital": "BANGUI",
        "level": "2" 
    },
    {
        "country": "CHAD",
        "capital": "N'DJAM",
        "level": "3" 
    },
    {
        "country": "CHILE",
        "capital": "SANTIAGO DE CHILE",
        "level": "2" 
    },
    {
        "country": "CHINA",
        "capital": "BEIJING",
        "level": "1" 
    },
    {
        "country": "CHRISTMAS ISLAND",
        "capital": "FLYING FISH COVE",
        "level": "3" 
    },
    {
        "country": "COCOS (KEELING) ISLANDS",
        "capital": "WEST ISLAND",
        "level": "3" 
    },
    {
        "country": "COLOMBIA",
        "capital": "SANTAF",
        "level": "2" 
    },
    {
        "country": "COMOROS",
        "capital": "MORONI",
        "level": "3" 
    },
    {
        "country": "CONGO",
        "capital": "BRAZZAVILLE",
        "level": "3" 
    },
    {
        "country": "COOK ISLANDS",
        "capital": "AVARUA",
        "level": "3" 
    },
    {
        "country": "COSTA RICA",
        "capital": "SAN JOSE",
        "level": "2" 
    },
    {
        "country": "CROATIA",
        "capital": "ZAGREB",
        "level": "2" 
    },
    {
        "country": "CUBA",
        "capital": "HAVANA",
        "level": "1" 
    },
    {
        "country": "CYPRUS",
        "capital": "NICOSIA",
        "level": "2" 
    },
    {
        "country": "CZECH REPUBLIC",
        "capital": "PRAGUE",
        "level": "1" 
    },
    {
        "country": "DENMARK",
        "capital": "COPENHAGEN",
        "level": "1" 
    },
    {
        "country": "DJIBOUTI",
        "capital": "DJIBOUTI",
        "level": "3" 
    },
    {
        "country": "DOMINICA",
        "capital": "ROSEAU",
        "level": "3" 
    },
    {
        "country": "DOMINICAN REPUBLIC",
        "capital": "SANTO DOMINGO DE GUZM",
        "level": "2" 
    },
    {
        "country": "EAST TIMOR",
        "capital": "DILI",
        "level": "3" 
    },
    {
        "country": "ECUADOR",
        "capital": "QUITO",
        "level": "3" 
    },
    {
        "country": "EGYPT",
        "capital": "CAIRO",
        "level": "1" 
    },
    {
        "country": "EL SALVADOR",
        "capital": "SAN SALVADOR",
        "level": "3" 
    },
    {
        "country": "ENGLAND",
        "capital": "LONDON",
        "level": "1" 
    },
    {
        "country": "EQUATORIAL GUINEA",
        "capital": "MALABO",
        "level": "3" 
    },
    {
        "country": "ERITREA",
        "capital": "ASMARA",
        "level": "3" 
    },
    {
        "country": "ESTONIA",
        "capital": "TALLINN",
        "level": "1" 
    },
    {
        "country": "ETHIOPIA",
        "capital": "ADDIS ABEBA",
        "level": "3" 
    },
    {
        "country": "FALKLAND ISLANDS",
        "capital": "STANLEY",
        "level": "3" 
    },
    {
        "country": "FAROE ISLANDS",
        "capital": "TORSHAVN",
        "level": "3" 
    },
    {
        "country": "FIJI ISLANDS",
        "capital": "SUVA",
        "level": "3" 
    },
    {
        "country": "FINLAND",
        "capital": "HELSINKI",
        "level": "1" 
    },
    {
        "country": "FRANCE",
        "capital": "PARIS",
        "level": "1" 
    },
    {
        "country": "FRENCH GUIANA",
        "capital": "CAYENNE",
        "level": "3" 
    },
    {
        "country": "FRENCH POLYNESIA",
        "capital": "PAPEETE",
        "level": "3" 
    },
    {
        "country": "GABON",
        "capital": "LIBREVILLE",
        "level": "3" 
    },
    {
        "country": "GAMBIA",
        "capital": "BANJUL",
        "level": "3" 
    },
    {
        "country": "GEORGIA",
        "capital": "TBILISI",
        "level": "2" 
    },
    {
        "country": "GERMANY",
        "capital": "BERLIN",
        "level": "1" 
    },
    {
        "country": "GHANA",
        "capital": "ACCRA",
        "level": "3" 
    },
    {
        "country": "GIBRALTAR",
        "capital": "GIBRALTAR",
        "level": "2" 
    },
    {
        "country": "GREECE",
        "capital": "ATHENS",
        "level": "1" 
    },
    {
        "country": "GREENLAND",
        "capital": "NUUK",
        "level": "3" 
    },
    {
        "country": "GRENADA",
        "capital": "SAINT GEORGE'S",
        "level": "3" 
    },
    {
        "country": "GUADELOUPE",
        "capital": "BASSE-TERRE",
        "level": "3" 
    },
    {
        "country": "GUAM",
        "capital": "AGA",
        "level": "3" 
    },
    {
        "country": "GUATEMALA",
        "capital": "CIUDAD DE GUATEMALA",
        "level": "3" 
    },
    {
        "country": "GUINEA",
        "capital": "CONAKRY",
        "level": "3" 
    },
    {
        "country": "GUINEA-BISSAU",
        "capital": "BISSAU",
        "level": "3" 
    },
    {
        "country": "GUYANA",
        "capital": "GEORGETOWN",
        "level": "3" 
    },
    {
        "country": "HAITI",
        "capital": "PORT-AU-PRINCE",
        "level": "3" 
    },
    {
        "country": "HOLY SEE (VATICAN CAPITAL STATE)",
        "capital": "CITT",
        "level": "3" 
    },
    {
        "country": "HONDURAS",
        "capital": "TEGUCIGALPA",
        "level": "3" 
    },
    {
        "country": "HONG KONG",
        "capital": "VICTORIA",
        "level": "2" 
    },
    {
        "country": "HUNGARY",
        "capital": "BUDAPEST",
        "level": "1" 
    },
    {
        "country": "ICELAND",
        "capital": "REYKJAVÍK",
        "level": "1" 
    },
    {
        "country": "INDIA",
        "capital": "NEW DELHI",
        "level": "1" 
    },
    {
        "country": "INDONESIA",
        "capital": "JAKARTA",
        "level": "2" 
    },
    {
        "country": "IRAN",
        "capital": "TEHRAN",
        "level": "2" 
    },
    {
        "country": "IRAQ",
        "capital": "BAGHDAD",
        "level": "2" 
    },
    {
        "country": "IRELAND",
        "capital": "DUBLIN",
        "level": "1" 
    },
    {
        "country": "ISRAEL",
        "capital": "JERUSALEM",
        "level": "1" 
    },
    {
        "country": "ITALY",
        "capital": "ROME",
        "level": "1" 
    },
    {
        "country": "IVORY COAST",
        "capital": "YAMOUSSOUKRO",
        "level": "3" 
    },
    {
        "country": "JAMAICA",
        "capital": "KINGSTON",
        "level": "3" 
    },
    {
        "country": "JAPAN",
        "capital": "TOKYO",
        "level": "1" 
    },
    {
        "country": "JORDAN",
        "capital": "AMMAN",
        "level": "2" 
    },
    {
        "country": "KAZAKHSTAN",
        "capital": "NUR-SULTAN",
        "level": "2" 
    },
    {
        "country": "KENYA",
        "capital": "NAIROBI",
        "level": "3" 
    },
    {
        "country": "KIRIBATI",
        "capital": "BAIRIKI",
        "level": "3" 
    },
    {
        "country": "KUWAIT",
        "capital": "KUWAIT",
        "level": "3" 
    },
    {
        "country": "KYRGYZSTAN",
        "capital": "BISHKEK",
        "level": "2" 
    },
    {
        "country": "LAOS",
        "capital": "VIENTIANE",
        "level": "3" 
    },
    {
        "country": "LATVIA",
        "capital": "RIGA",
        "level": "1" 
    },
    {
        "country": "LEBANON",
        "capital": "BEIRUT",
        "level": "3" 
    },
    {
        "country": "LESOTHO",
        "capital": "MASERU",
        "level": "3" 
    },
    {
        "country": "LIBERIA",
        "capital": "MONROVIA",
        "level": "3" 
    },
    {
        "country": "LIBYAN ARAB JAMAHIRIYA",
        "capital": "TRIPOLI",
        "level": "3" 
    },
    {
        "country": "LIECHTENSTEIN",
        "capital": "VADUZ",
        "level": "3" 
    },
    {
        "country": "LITHUANIA",
        "capital": "VILNIUS",
        "level": "1" 
    },
    {
        "country": "LUXEMBOURG",
        "capital": "LUXEMBOURG",
        "level": "2" 
    },
    {
        "country": "MACAO",
        "capital": "MACAO",
        "level": "3" 
    },
    {
        "country": "NORTH MACEDONIA",
        "capital": "SKOPJE",
        "level": "3" 
    },
    {
        "country": "MADAGASCAR",
        "capital": "ANTANANARIVO",
        "level": "3" 
    },
    {
        "country": "MALAWI",
        "capital": "LILONGWE",
        "level": "3" 
    },
    {
        "country": "MALAYSIA",
        "capital": "KUALA LUMPUR",
        "level": "3" 
    },
    {
        "country": "MALDIVES",
        "capital": "MALE",
        "level": "3" 
    },
    {
        "country": "MALI",
        "capital": "BAMAKO",
        "level": "3" 
    },
    {
        "country": "MALTA",
        "capital": "VALLETTA",
        "level": "3" 
    },
    {
        "country": "MARSHALL ISLANDS",
        "capital": "DALAP-ULIGA-DARRIT",
        "level": "3" 
    },
    {
        "country": "MARTINIQUE",
        "capital": "FORT-DE-FRANCE",
        "level": "3" 
    },
    {
        "country": "MAURITANIA",
        "capital": "NOUAKCHOTT",
        "level": "3" 
    },
    {
        "country": "MAURITIUS",
        "capital": "PORT-LOUIS",
        "level": "3" 
    },
    {
        "country": "MAYOTTE",
        "capital": "MAMOUTZOU",
        "level": "3" 
    },
    {
        "country": "MEXICO",
        "capital": "MEXICO CITY",
        "level": "1" 
    },
    {
        "country": "MICRONESIA, FEDERATED STATES OF",
        "capital": "PALIKIR",
        "level": "3" 
    },
    {
        "country": "MOLDOVA",
        "capital": "CHISINAU",
        "level": "2" 
    },
    {
        "country": "MONACO",
        "capital": "MONACO",
        "level": "2" 
    },
    {
        "country": "MONGOLIA",
        "capital": "ULAN BATOR",
        "level": "2" 
    },
    {
        "country": "MONTENEGRO",
        "capital": "PODGORICA",
        "level": "2" 
    },
    {
        "country": "MONTSERRAT",
        "capital": "PLYMOUTH",
        "level": "3" 
    },
    {
        "country": "MOROCCO",
        "capital": "RABAT",
        "level": "3" 
    },
    {
        "country": "MOZAMBIQUE",
        "capital": "MAPUTO",
        "level": "3" 
    },
    {
        "country": "MYANMAR",
        "capital": "RANGOON",
        "level": "3" 
    },
    {
        "country": "NAMIBIA",
        "capital": "WINDHOEK",
        "level": "3" 
    },
    {
        "country": "NAURU",
        "capital": "YAREN",
        "level": "3" 
    },
    {
        "country": "NEPAL",
        "capital": "KATHMANDU",
        "level": "3" 
    },
    {
        "country": "NETHERLANDS",
        "capital": "AMSTERDAM",
        "level": "1" 
    },
    {
        "country": "NETHERLANDS ANTILLES",
        "capital": "WILLEMSTAD",
        "level": "3" 
    },
    {
        "country": "NEW CALEDONIA",
        "capital": "NOUM",
        "level": "3" 
    },
    {
        "country": "NEW ZEALAND",
        "capital": "WELLINGTON",
        "level": "2" 
    },
    {
        "country": "NICARAGUA",
        "capital": "MANAGUA",
        "level": "3" 
    },
    {
        "country": "NIGER",
        "capital": "NIAMEY",
        "level": "3" 
    },
    {
        "country": "NIGERIA",
        "capital": "ABUJA",
        "level": "3" 
    },
    {
        "country": "NIUE",
        "capital": "ALOFI",
        "level": "3" 
    },
    {
        "country": "NORFOLK ISLAND",
        "capital": "KINGSTON",
        "level": "3" 
    },
    {
        "country": "NORTH KOREA",
        "capital": "PYONGYANG",
        "level": "1" 
    },
    {
        "country": "NORTHERN IRELAND",
        "capital": "BELFAST",
        "level": "1" 
    },
    {
        "country": "NORTHERN MARIANA ISLANDS",
        "capital": "GARAPAN",
        "level": "3" 
    },
    {
        "country": "NORWAY",
        "capital": "OSLO",
        "level": "1" 
    },
    {
        "country": "OMAN",
        "capital": "MASQAT",
        "level": "3" 
    },
    {
        "country": "PAKISTAN",
        "capital": "ISLAMABAD",
        "level": "2" 
    },
    {
        "country": "PALAU",
        "capital": "KOROR",
        "level": "2" 
    },
    {
        "country": "PALESTINE",
        "capital": "GAZA",
        "level": "2" 
    },
    {
        "country": "PANAMA",
        "capital": "CIUDAD DE PANAMA",
        "level": "3" 
    },
    {
        "country": "PAPUA NEW GUINEA",
        "capital": "PORT MORESBY",
        "level": "3" 
    },
    {
        "country": "PARAGUAY",
        "capital": "ASUNCION",
        "level": "3" 
    },
    {
        "country": "PERU",
        "capital": "LIMA",
        "level": "3" 
    },
    {
        "country": "PHILIPPINES",
        "capital": "MANILA",
        "level": "3" 
    },
    {
        "country": "PITCAIRN",
        "capital": "ADAMSTOWN",
        "level": "3" 
    },
    {
        "country": "POLAND",
        "capital": "WARSAW",
        "level": "1" 
    },
    {
        "country": "PORTUGAL",
        "capital": "LISBON",
        "level": "1" 
    },
    {
        "country": "PUERTO RICO",
        "capital": "SAN JUAN",
        "level": "2" 
    },
    {
        "country": "QATAR",
        "capital": "DOHA",
        "level": "3" 
    },
    {
        "country": "REUNION",
        "capital": "SAINT-DENIS",
        "level": "3" 
    },
    {
        "country": "ROMANIA",
        "capital": "BUCHAREST",
        "level": "1" 
    },
    {
        "country": "RUSSIA",
        "capital": "MOSCOW",
        "level": "1" 
    },
    {
        "country": "RWANDA",
        "capital": "KIGALI",
        "level": "3" 
    },
    {
        "country": "SAINT HELENA",
        "capital": "JAMESTOWN",
        "level": "3" 
    },
    {
        "country": "SAINT KITTS AND NEVIS",
        "capital": "BASSETERRE",
        "level": "3" 
    },
    {
        "country": "SAINT LUCIA",
        "capital": "CASTRIES",
        "level": "3" 
    },
    {
        "country": "SAINT PIERRE AND MIQUELON",
        "capital": "SAINT-PIERRE",
        "level": "3" 
    },
    {
        "country": "SAINT VINCENT AND THE GRENADINES",
        "capital": "KINGSTOWN",
        "level": "3" 
    },
    {
        "country": "SAMOA",
        "capital": "APIA",
        "level": "3" 
    },
    {
        "country": "SAN MARINO",
        "capital": "SAN MARINO",
        "level": "2" 
    },
    {
        "country": "SAO TOME AND PRINCIPE",
        "capital": "SAO TOME",
        "level": "3" 
    },
    {
        "country": "SAUDI ARABIA",
        "capital": "RIYADH",
        "level": "3" 
    },
    {
        "country": "SCOTLAND",
        "capital": "EDINBURGH",
        "level": "1" 
    },
    {
        "country": "SENEGAL",
        "capital": "DAKAR",
        "level": "3" 
    },
    {
        "country": "SERBIA",
        "capital": "BELGRADE",
        "level": "2" 
    },
    {
        "country": "SEYCHELLES",
        "capital": "VICTORIA",
        "level": "3" 
    },
    {
        "country": "SIERRA LEONE",
        "capital": "FREETOWN",
        "level": "3" 
    },
    {
        "country": "SINGAPORE",
        "capital": "SINGAPORE",
        "level": "1" 
    },
    {
        "country": "SLOVAKIA",
        "capital": "BRATISLAVA",
        "level": "2" 
    },
    {
        "country": "SLOVENIA",
        "capital": "LJUBLJANA",
        "level": "2" 
    },
    {
        "country": "SOLOMON ISLANDS",
        "capital": "HONIARA",
        "level": "3" 
    },
    {
        "country": "SOMALIA",
        "capital": "MOGADISHU",
        "level": "3" 
    },
    {
        "country": "SOUTH AFRICA",
        "capital": "PRETORIA",
        "level": "3" 
    },
    {
        "country": "SOUTH KOREA",
        "capital": "SEOUL",
        "level": "1" 
    },
    {
        "country": "SOUTH SUDAN",
        "capital": "JUBA",
        "level": "3" 
    },
    {
        "country": "SPAIN",
        "capital": "MADRID",
        "level": "1" 
    },
    {
        "country": "SUDAN",
        "capital": "KHARTUM",
        "level": "3" 
    },
    {
        "country": "SURINAME",
        "capital": "PARAMARIBO",
        "level": "3" 
    },
    {
        "country": "SVALBARD AND JAN MAYEN",
        "capital": "LONGYEARBYEN",
        "level": "3" 
    },
    {
        "country": "SWAZILAND",
        "capital": "MBABANE",
        "level": "3" 
    },
    {
        "country": "SWEDEN",
        "capital": "STOCKHOLM",
        "level": "1" 
    },
    {
        "country": "SWITZERLAND",
        "capital": "BERN",
        "level": "1" 
    },
    {
        "country": "SYRIA",
        "capital": "DAMASCUS",
        "level": "2" 
    },
    {
        "country": "TAJIKISTAN",
        "capital": "DUSHANBE",
        "level": "2" 
    },
    {
        "country": "TANZANIA",
        "capital": "DODOMA",
        "level": "3" 
    },
    {
        "country": "THAILAND",
        "capital": "BANGKOK",
        "level": "1" 
    },
    {
        "country": "THE DEMOCRATIC REPUBLIC OF CONGO",
        "capital": "KINSHASA",
        "level": "3" 
    },
    {
        "country": "TOGO",
        "capital": "LOME",
        "level": "3" 
    },
    {
        "country": "TOKELAU",
        "capital": "FAKAOFO",
        "level": "3" 
    },
    {
        "country": "TONGA",
        "capital": "NUKU'ALOFA",
        "level": "3" 
    },
    {
        "country": "TRINIDAD AND TOBAGO",
        "capital": "PORT-OF-SPAIN",
        "level": "3" 
    },
    {
        "country": "TUNISIA",
        "capital": "TUNIS",
        "level": "2" 
    },
    {
        "country": "TURKEY",
        "capital": "ANKARA",
        "level": "1" 
    },
    {
        "country": "TURKMENISTAN",
        "capital": "ASHGABAT",
        "level": "2" 
    },
    {
        "country": "TURKS AND CAICOS ISLANDS",
        "capital": "COCKBURN TOWN",
        "level": "3" 
    },
    {
        "country": "TUVALU",
        "capital": "FUNAFUTI",
        "level": "3" 
    },
    {
        "country": "UGANDA",
        "capital": "KAMPALA",
        "level": "3" 
    },
    {
        "country": "UKRAINE",
        "capital": "KYIV",
        "level": "1" 
    },
    {
        "country": "UNITED ARAB EMIRATES",
        "capital": "ABU DHABI",
        "level": "1" 
    },
    {
        "country": "ENGLAND",
        "capital": "LONDON",
        "level": "1" 
    },
    {
        "country": "UNITED STATES",
        "capital": "WASHINGTON",
        "level": "1" 
    },
    {
        "country": "URUGUAY",
        "capital": "MONTEVIDEO",
        "level": "3" 
    },
    {
        "country": "UZBEKISTAN",
        "capital": "TOSKENT",
        "level": "2" 
    },
    {
        "country": "VANUATU",
        "capital": "PORT-VILA",
        "level": "3" 
    },
    {
        "country": "VENEZUELA",
        "capital": "CARACAS",
        "level": "2" 
    },
    {
        "country": "VIETNAM",
        "capital": "HANOI",
        "level": "2" 
    },
    {
        "country": "VIRGIN ISLANDS, BRITISH",
        "capital": "ROAD TOWN",
        "level": "3" 
    },
    {
        "country": "VIRGIN ISLANDS, U.S.",
        "capital": "CHARLOTTE AMALIE",
        "level": "3" 
    },
    {
        "country": "WALES",
        "capital": "CARDIFF",
        "level": "2" 
    },
    {
        "country": "WALLIS AND FUTUNA",
        "capital": "MATA-UTU",
        "level": "3" 
    },
    {
        "country": "WESTERN SAHARA",
        "capital": "EL-AAI",
        "level": "3" 
    },
    {
        "country": "YEMEN",
        "capital": "SANAA",
        "level": "3" 
    },
    {
        "country": "ZAMBIA",
        "capital": "LUSAKA",
        "level": "3" 
    },
    {
        "country": "ZIMBABWE",
        "capital": "HARARE",
        "level": "3" 
    }
]