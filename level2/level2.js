let heading = document.getElementById("h1");
let textBox = document.getElementById("txtBox");
let scoreText = document.getElementById("scoreh1");
let guessBtn = document.getElementById("guess");
let modal = document.getElementById("modal");
let presentModal = document.getElementById("howToPlay");
let closeModal = document.getElementById("closeModal");
let timeText = document.getElementById("timeLeft");
let score = 0;
let randomIndex = 0;
let audio = new Audio("../music/level2.mp3")
audio.loop = true



guessBtn.innerHTML = "Start"

let countryDictionary = {
  "Afghanistan": "Kabul",
  "Albania": "Tirana",
  "Algeria": "Algiers",
  // "Andorra": "Andorra la Vella",
  // "Angola": "Luanda",
  // "Antigua and Barbuda": "Saint John's",
  "Argentina": "Buenos Aires",
  "Armenia": "Yerevan",
  "Australia": "Canberra",
  "Austria": "Vienna",
  "Azerbaijan": "Baku",
  // "Bahamas": "Nassau",
  // "Bahrain": "Manama",
  // "Bangladesh": "Dhaka",
  // "Barbados": "Bridgetown",
  "Belarus": "Minsk",
  ////"Belgium": "Brussels",
  // "Belize": "Belmopan",
  // "Benin": "Porto-Novo",
  // "Bhutan": "Thimphu",
  // "Bolivia": "Sucre",
  "Bosnia and Herzegovina": "Sarajevo",
  // "Botswana": "Gaborone",
  "Brazil": "Brasilia",
  // "Brunei": "Bandar Seri Begawan",
  "Bulgaria": "Sofia",
  // "Burkina Faso": "Ouagadougou",
  // "Burundi": "Gitega",
  // "Cote d'Ivoire": "Yamoussoukro",
  // "Cambodia": "Phnom Penh",
  // "Cameroon": "Yaounde",
  "Canada": "Ottawa",
  // "Central African Republic": "Bangui",
  // "Chad": "N'Djamena",
  // "Chile": "Santiago",
////"China": "Beijing",
  // "Colombia": "Bogota",
  // "Comoros": "Moroni",
  "Costa Rica": "San Jose",
  "Croatia": "Zagreb",
  "Cuba": "Havana",
  // "Cyprus": "Nicosia",
  "Czech Republic": "Prague",
  // "Democratic Republic of the Congo": "Kinshasa",
  "Denmark": "Copenhagen",
  // "Djibouti": "Djibouti",
  // "Dominica": "Roseau",
  // "Dominican Republic": "Santo Domingo",
  // "Ecuador":	"Quito",
  "Egypt":	"Cairo",
  // "El Salvador":	"San Salvador",
  // "Eritrea":	"Asmara",
  // "Estonia":	"Tallinn",
  // "Ethiopia": "Addis Ababa",
  // "Fiji": "Suva",
  "Finland":	"Helsinki",
  ////"France":	"Paris",
  // "Gabon":	"Libreville",
  // "Gambia":	"Banjul",
  "Georgia":	"Tbilisi",
  ////"Germany":	"Berlin",
  // "Ghana":	"Accra",
  ////"Greece":	"Athens",
  // "Grenada":	"Saint George's",
  "Guatemala":	"Guatemala City",
  // "Guinea":	"Conakry",
  // "Guinea-Bissau": "Bissau",
  // "Guyana":	"Georgetown",
  // "Haiti":	"Port-au-Prince",
  // "Honduras":	"Tegucigalpa",
  "Hungary":	"Budapest",
  "Iceland":	"Reykjavik",
  ////"India":	"New Delhi",
  // "Indonesia":	"Jakarta",
  // "Iran":	"Tehran",
  // "Iraq":	"Baghdad",
  "Ireland":	"Dublin",
  "Israel":	"Jerusalem",
  ////"Italy":	"Rome",
  "Jamaica":	"Kingston",
  ////"Japan":	"Tokyo",
  // "Jordan":	"Amman",
  "Kazakhstan":	"Nur-Sultan",
  // "Kenya":	"Nairobi",
  // "Kiribati":	"Tarawa",
  // "Kosovo":	"Pristina",
  "Kuwait":	"Kuwait City",
  "Kyrgyzstan":	"Bishkek",
  // "Laos":	"Vientiane",
  "Latvia":	"Riga",
  // "Lebanon":	"Beirut",
  // "Lesotho":	"Maseru",
  // "Liberia":	"Monrovia",
  // "Libya":	"Tripoli",
  // "Liechtenstein":	"Vaduz",
  "Lithuania":	"Vilnius",
  ////"Luxembourg":	"Luxembourg",
  // "Madagascar":	"Antananarivo",
  // "Malawi":	"Lilongwe",
  // "Malaysia":	"Kuala Lumpur",
  // "Maldives":	"Male",
  // "Mali":	"Bamako",
  // "Malta":	"Valletta",
  // "Marshall Islands": "Majuro",
  // "Mauritania":	"Nouakchott",
  // "Mauritius":	"Port Louis",
  ////"Mexico":	"Mexico City",
  // "Micronesia":	"Palikir",
  // "Moldova":	"Chisinau",
  ////"Monaco":	"Monaco",
  // "Mongolia":	"Ulaanbaatar",
  // "Montenegro":	"Podgorica",
  // "Morocco":	"Rabat",
  // "Mozambique":	"Maputo",
  // "Myanmar":	"Naypyidaw",
  // "Namibia":	"Windhoek",
  // "Nauru":	"Yaren District",
  // "Nepal":	"Kathmandu",
  "Netherlands":	"Amsterdam",
  "New Zealand": "Wellington",
  // "Nicaragua":	"Managua",
  // "Niger":	"Niamey",
  // "Nigeria":	"Abuja",
  "North Korea":	"Pyongyang",
  // "North Macedonia": "Skopje",
  "Norway":	"Oslo",
  // "Oman":	"Muscat",
  // "Pakistan":	"Islamabad",
  // "Palau":	"Ngerulmud",
  "Palestine":	"Jerusalem",
  "Panama":	"Panama City",
  // "Papua New Guinea": "Moresby",
  // "Paraguay":	"Asunción",
  "Peru":	"Lima", 
  // "Philippines":	"Manila",
  ////"Poland":	"Warsaw",
  ////"Portugal":	"Lisbon",
  // "Qatar":	"Doha",
  "Romania":	"Bucharest",
  ////"Russia":	"Moscow",
  // "Rwanda":	"Kigali",
  // "Saint Kitts and Nevis":	"Basseterre",
  // "Saint Lucia": "Castries",
  // "Saint Vincent and the Grenadines":	"Kingstown",
  // "Samoa":	"Apia",
  ////"San Marino":	"San Marino",
  // "Sao Tome and Principe": "Sao Tome",
  // "Saudi Arabia": "Riyadh",
  // "Senegal":	"Dakar",
  // "Serbia":	"Belgrade",
  // "Seychelles":	"Victoria",
  // "Sierra Leone": "Freetown",
  ////"Singapore":	"Singapore",
  // "Slovakia":	"Bratislava",
  // "Slovenia":	"Ljubljana",
  // "Solomon Islands": "Honiara",
  // "Somalia":	"Mogadishu",
  "South Africa": "Cape Town",
  ////"South Korea":	"Seoul",
  // "South Sudan":	"Juba",
  ////"Spain":	"Madrid",
  // "Sri Lanka": "Sri Jayawardenepura Kotte",
  // "Sudan":	"Khartoum",
  // "Suriname":	"Paramaribo",
  "Sweden":	"Stockholm",
  "Switzerland":	"Bern",
  // "Syria":	"Damascus",
  // "Taiwan":	"Taipei",
  "Tajikistan":	"Dushanbe",
  // "Tanzania":	"Dodoma",
  "Thailand":	"Bangkok",
  // "Timor-Leste": "Dili",
  // "Togo":	"Lomé",
  // "Tonga":	"Nuku'alofa",
  // "Trinidad and Tobago":	"Port of Spain",
  "Tunisia":	"Tunis",
  "Turkey":	"Ankara",
  "Turkmenistan":	"Ashgabat",
  // "Tuvalu":	"Funafuti",
  // "Uganda":	"Kampala",
  "Ukraine":	"Kyiv",
  ////"United Arab Emirates":	"Abu Dhabi",
  ////"United Kingdom": "London",
  ////"United States of America": "Washington, D.C.",
  "Uruguay":	"Montevideo",
  "Uzbekistan":	"Tashkent",
  // "Vanuatu":	"Port Vila",
  ////"Vatican City":	"Vatican City",
  // "Venezuela":	"Caracas",
  // "Vietnam":	"Hanoi",
  // "Yemen":	"Sana'a",
  // "Zambia":	"Lusaka",
  // "Zimbabwe":	"Harare"
};

function updateCountry(){
  let countryCount = 0;
  for (let k in countryDictionary) if (countryDictionary.hasOwnProperty(k)) countryCount++;
  randomIndex = Math.floor(Math.random() * countryCount);
  let randCountry = Object.keys(countryDictionary)[randomIndex];
  heading.innerHTML = `Name the capital of ${randCountry}`;
  if (score == 7){
    heading.innerHTML = "You Won";
    guessBtn.innerHTML = "Play Again";
    textBox.style.display = "none";
    let intScore = parseInt(localStorage.userScore);
    intScore += score;
    localStorage.setItem("userScore", intScore);
    score = 1
    scoreText.innerHTML = "Score: 0"
  }
  console.log(countryCount)
}

function triggerAction(){
  textBox.style.display = "inline";
  guessBtn.innerHTML = "Guess";
  let correctAnswer = countryDictionary[Object.keys(countryDictionary)[randomIndex]];
  let userAnswerCap = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
  if (userAnswerCap == correctAnswer){
    score ++
    scoreText.innerHTML = `Score: ${score}`
    textBox.value = ""
    updateCountry()
  } else{
    scoreText.innerHTML = `Score: ${score}`
    textBox.value = ""
    updateCountry()
  }
}

guessBtn.onclick = function(){
  triggerAction()
  audio.play()
}


document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      triggerAction()
      audio.play()
  }
});