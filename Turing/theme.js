//Liste des thèmes disponibles
const themes = [
    ["Ancien", "themes/old.css"],
    ["Bleu", "themes/blue.css"]
]

function setCookie(name, value) {
    document.cookie = `${name}=${value}`
  }
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

//Simple système de changement de thème
function changeTheme(theme){
    console.log(`Chargement du thème ${theme}...`)
    setCookie("theme", theme)
    var head = document.getElementsByTagName("HEAD")[0];  
    var link = document.createElement("link"); 
    link.rel = "stylesheet";  
    link.type = "text/css"; 
    link.href = themes[theme][1]
    head.appendChild(link);  
}

function updateTheme(){
    for (i=0; i<document.getElementById("theme_selector").options.length; i++) {
        if (document.getElementById("theme_selector").options[i].selected ) {
            changeTheme(document.getElementById("theme_selector").options[i].value)
        }
    }
}


if (getCookie("theme") == undefined){
    console.log("Définition du thème Ancien par défaut...");
    setCookie("theme", 0);
}

//Au chargement de la page, on applique le thème sélectionné
changeTheme(getCookie("theme"));

//Modification du selecteur de thèmes
for (i=0; i<themes.length; i++){
    document.getElementById("theme_selector").options[document.getElementById("theme_selector").options.length] = new Option(themes[i][0], i);
    if (`${i}` == `${document.cookie}`){
        document.getElementById("theme_selector").options.selectedIndex = i;
    }
}

