

let heading = document.getElementById("h1");
let textBox = document.getElementById("txtBox");
let scoreText = document.getElementById("scoreh1");
let guessBtn = document.getElementById("guess");
let timeText = document.getElementById("timeLeft");
let randomIndex;
let audio = new Audio("../music/level1.mp3")
audio.loop = true



let countryDictionary = {
  // "AFGHANISTAN": "KABUL",
  // "ALBANIA": "TIRANA",
  // "ALGERIA": "ALGIERS",
  // "ANDORRA": "ANDORRA LA VELLA",
  // "ANGOLA": "LUANDA",
  // "ANTIGUA AND BARBUDA": "SAINT JOHN'S",
  // "ARGENTINA": "BUENOS AIRES",
  // "ARMENIA": "YEREVAN",
  // "AUSTRALIA": "CANBERRA",
  // "AUSTRIA": "VIENNA",
  // "AZERBAIJAN": "BAKU",
  // "BAHAMAS": "NASSAU",
  // "BAHRAIN": "MANAMA",
  // "BANGLADESH": "DHAKA",
  // "BARBADOS": "BRIDGETOWN",
  // "BELARUS": "MINSK",
  "BELGIUM": "BRUSSELS",
  // "BELIZE": "BELMOPAN",
  // "BENIN": "PORTO-NOVO",
  // "BHUTAN": "THIMPHU",
  // "BOLIVIA": "SUCRE",
  // "BOSNIA AND HERZEGOVINA": "SARAJEVO",
  // "BOTSWANA": "GABORONE",
  // "BRAZIL": "BRASILIA",
  // "BRUNEI": "BANDAR SERI BEGAWAN",
  // "BULGARIA": "SOFIA",
  // "BURKINA FASO": "OUAGADOUGOU",
  // "BURUNDI": "GITEGA",
  // "COTE D'IVOIRE": "YAMOUSSOUKRO",
  // "CAMBODIA": "PHNOM PENH",
  // "CAMEROON": "YAOUNDE",
  // "CANADA": "OTTAWA",
  // "CENTRAL AFRICAN REPUBLIC": "BANGUI",
  // "CHAD": "N'DJAMENA",
  // "CHILE": "SANTIAGO",
  "CHINA": "BEIJING",
  // "COLOMBIA": "BOGOTA",
  // "COMOROS": "MORONI",
  // "COSTA RICA": "SAN JOSE",
  // "CROATIA": "ZAGREB",
  // "CUBA": "HAVANA",
  // "CYPRUS": "NICOSIA",
  // "CZECH REPUBLIC": "PRAGUE",
  // "DEMOCRATIC REPUBLIC OF THE CONGO": "KINSHASA",
  // "DENMARK": "COPENHAGEN",
  // "DJIBOUTI": "DJIBOUTI",
  // "DOMINICA": "ROSEAU",
  // "DOMINICAN REPUBLIC": "SANTO DOMINGO",
  // "ECUADOR":	"QUITO",
  // "EGYPT":	"CAIRO",
  // "EL SALVADOR":	"SAN SALVADOR",
  // "ERITREA":	"ASMARA",
  // "ESTONIA":	"TALLINN",
  // "ETHIOPIA":	"ADDIS ABABA",
  // "FIJI": "SUVA",
  // "FINLAND":	"HELSINKI",
  "FRANCE":	"PARIS",
  // "GABON":	"LIBREVILLE",
  // "GAMBIA":	"BANJUL",
  // "GEORGIA":	"TBILISI",
  "GERMANY":	"BERLIN",
  // "GHANA":	"ACCRA",
  "GREECE":	"ATHENS",
  // "GRENADA":	"SAINT GEORGE'S",
  // "GUATEMALA":	"GUATEMALA CITY",
  // "GUINEA":	"CONAKRY",
  // "GUINEA-BISSAU": "BISSAU",
  // "GUYANA":	"GEORGETOWN",
  // "HAITI":	"PORT-AU-PRINCE",
  // "HONDURAS":	"TEGUCIGALPA",
  // "HUNGARY":	"BUDAPEST",
  // "ICELAND":	"REYKJAVIK",
  "INDIA":	"NEW DELHI",
  // "INDONESIA":	"JAKARTA",
  // "IRAN":	"TEHRAN",
  // "IRAQ":	"BAGHDAD",
  // "IRELAND":	"DUBLIN",
  // "ISRAEL":	"JERUSALEM",
  "ITALY":	"ROME",
  // "JAMAICA":	"KINGSTON",
  "JAPAN":	"TOKYO",
  // "JORDAN":	"AMMAN",
  // "KAZAKHSTAN":	"NUR-SULTAN",
  // "KENYA":	"NAIROBI",
  // "KIRIBATI":	"TARAWA",
  // "KOSOVO":	"PRISTINA",
  // "KUWAIT":	"KUWAIT CITY",
  // "KYRGYZSTAN":	"BISHKEK",
  // "LAOS":	"VIENTIANE",
  // "LATVIA":	"RIGA",
  // "LEBANON":	"BEIRUT",
  // "LESOTHO":	"MASERU",
  // "LIBERIA":	"MONROVIA",
  // "LIBYA":	"TRIPOLI",
  // "LIECHTENSTEIN":	"VADUZ",
  // "LITHUANIA":	"VILNIUS",
  "LUXEMBOURG":	"LUXEMBOURG",
  // "MADAGASCAR":	"ANTANANARIVO",
  // "MALAWI":	"LILONGWE",
  // "MALAYSIA":	"KUALA LUMPUR",
  // "MALDIVES":	"MALE",
  // "MALI":	"BAMAKO",
  // "MALTA":	"VALLETTA",
  // "MARSHALL ISLANDS": "MAJURO",
  // "MAURITANIA":	"NOUAKCHOTT",
  // "MAURITIUS":	"PORT LOUIS",
  "MEXICO":	"MEXICO CITY",
  // "MICRONESIA":	"PALIKIR",
  // "MOLDOVA":	"CHISINAU",
  "MONACO":	"MONACO",
  // "MONGOLIA":	"ULAANBAATAR",
  // "MONTENEGRO":	"PODGORICA",
  // "MOROCCO":	"RABAT",
  // "MOZAMBIQUE":	"MAPUTO",
  // "MYANMAR":	"NAYPYIDAW",
  // "NAMIBIA":	"WINDHOEK",
  // "NAURU":	"YAREN DISTRICT",
  // "NEPAL":	"KATHMANDU",
  // "NETHERLANDS":	"AMSTERDAM",
  // "NEW ZEALAND": "WELLINGTON",
  // "NICARAGUA":	"MANAGUA",
  // "NIGER":	"NIAMEY",
  // "NIGERIA":	"ABUJA",
  // "NORTH KOREA":	"PYONGYANG",
  // "NORTH MACEDONIA": "SKOPJE",
  // "NORWAY":	"OSLO",
  // "OMAN":	"MUSCAT",
  // "PAKISTAN":	"ISLAMABAD",
  // "PALAU":	"NGERULMUD",
  // "PALESTINE":	"JERUSALEM",
  // "PANAMA":	"PANAMA CITY",
  // "PAPUA NEW GUINEA": "MORESBY",
  // "PARAGUAY":	"ASUNCIÓN",
  // "PERU":	"LIMA", 
  // "PHILIPPINES":	"MANILA",
  "POLAND":	"WARSAW",
  "PORTUGAL":	"LISBON",
  // "QATAR":	"DOHA",
  // "ROMANIA":	"BUCHAREST",
  "RUSSIA":	"MOSCOW",
  // "RWANDA":	"KIGALI",
  // "SAINT KITTS AND NEVIS":	"BASSETERRE",
  // "SAINT LUCIA": "CASTRIES",
  // "SAINT VINCENT AND THE GRENADINES":	"KINGSTOWN",
  // "SAMOA":	"APIA",
  "SAN MARINO":	"SAN MARINO",
  // "SAO TOME AND PRINCIPE": "SAO TOME",
  // "SAUDI ARABIA": "RIYADH",
  // "SENEGAL":	"DAKAR",
  // "SERBIA":	"BELGRADE",
  // "SEYCHELLES":	"VICTORIA",
  // "SIERRA LEONE": "FREETOWN",
  "SINGAPORE":	"SINGAPORE",
  // "SLOVAKIA":	"BRATISLAVA",
  // "SLOVENIA":	"LJUBLJANA",
  // "SOLOMON ISLANDS": "HONIARA",
  // "SOMALIA":	"MOGADISHU",
  // "SOUTH AFRICA": "CAPE TOWN",
  "SOUTH KOREA":	"SEOUL",
  // "SOUTH SUDAN":	"JUBA",
  "SPAIN":	"MADRID",
  // "SRI LANKA": "SRI JAYAWARDENEPURA KOTTE",
  // "SUDAN":	"KHARTOUM",
  // "SURINAME":	"PARAMARIBO",
  // "SWEDEN":	"STOCKHOLM",
  // "SWITZERLAND":	"BERN",
  // "SYRIA":	"DAMASCUS",
  // "TAIWAN":	"TAIPEI",
  // "TAJIKISTAN":	"DUSHANBE",
  // "TANZANIA":	"DODOMA",
  // "THAILAND":	"BANGKOK",
  // "TIMOR-LESTE": "DILI",
  // "TOGO":	"LOMÉ",
  // "TONGA":	"NUKU'ALOFA",
  // "TRINIDAD AND TOBAGO":	"PORT OF SPAIN",
  // "TUNISIA":	"TUNIS",
  // "TURKEY":	"ANKARA",
  // "TURKMENISTAN":	"ASHGABAT",
  // "TUVALU":	"FUNAFUTI",
  // "UGANDA":	"KAMPALA",
  // "UKRAINE":	"KYIV",
  "UNITED ARAB EMIRATES":	"ABU DHABI",
  "UNITED KINGDOM": "LONDON",
  "UNITED STATES OF AMERICA": "WASHINGTON, D.C.",
  // "URUGUAY":	"MONTEVIDEO",
  // "UZBEKISTAN":	"TASHKENT",
  // "VANUATU":	"PORT VILA",
  "VATICAN CITY":	"VATICAN CITY",
  // "VENEZUELA":	"CARACAS",
  // "VIETNAM":	"HANOI",
  // "YEMEN":	"SANA'A",
  // "ZAMBIA":	"LUSAKA",
  // "ZIMBABWE":	"HARARE"
};
let countryCount = 0;
let score = 0;
let listOfUsed = [];
let randomCountry = ""
numberOfTries = 0

function updateCountry(){
  while (score !== 10) {
    for (let k in countryDictionary) if (countryDictionary.hasOwnProperty(k)) countryCount++;
    randomIndex = Math.floor(Math.random() * countryCount);
    if (!listOfUsed.includes(randomIndex)){
      randomCountry = Object.keys(countryDictionary)[randomIndex];
      heading.innerHTML = `Name the capital of ${randomCountry}`;
      guessBtn.blur()
      triggerAction()
      listOfUsed.push(randomIndex)
    } else{
      break;
    }
  }

}

function triggerAction(){
  textBox.style.display = "inline";
  guessBtn.innerHTML = "Guess";
  let correctAnswer = countryDictionary[Object.keys(countryDictionary)[randomIndex]];
  let userAnswerCap = textBox.value.toUpperCase();
  if (userAnswerCap == correctAnswer){
    score ++
    numberOfTries ++
    scoreText.innerHTML = `Score: ${score}`
    textBox.value = ""
  } else{
    scoreText.innerHTML = `Score: ${score}`
    textBox.value = ""
    numberOfTries ++
    }
}

guessBtn.onclick = function(){
  audio.play()
  updateCountry()
  triggerAction()
}

function youWon(){
  heading.innerHTML = "You Won";
  guessBtn.innerHTML = "Play Again";
  textBox.style.display = "none";
  let intScore = parseInt(localStorage.userScore);
  intScore += score;
  localStorage.setItem("userScore", intScore);
  scoreText.innerHTML = "Score: 0"
}

document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      updateCountry()
      audio.play()
  }
})