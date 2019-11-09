//Simple système de changement de thème
function changeTheme(theme){
    console.log(`Chargement du thème ${theme}...`)
    document.cookie = theme
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

if (document.cookie == ""){
    console.log("Définition du thème Ancien par défaut...");
    document.cookie = 0; //Utilisation très simple car on n'utilise qu'un seul cookie pour tout le site
}


//Liste des thèmes disponibles
const themes = [
    ["Ancien", "themes/old.css"],
    ["Bleu", "themes/blue.css"]
]

//Au chargement de la page, on applique le thème sélectionné
changeTheme(`${document.cookie}`);
for (i=0; i<themes.length; i++){
    document.getElementById("theme_selector").options[document.getElementById("theme_selector").options.length] = new Option(themes[i][0], i);
    if (`${i}` == `${document.cookie}`){
        document.getElementById("theme_selector").options.selectedIndex = i;
    }
}

