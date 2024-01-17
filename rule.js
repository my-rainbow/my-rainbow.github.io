const rules = [
    {titel:"Spielhintergrund",rule:"Die Spieler spielen einen\n transparenten Regenbogen.\n    Der Weg des Coming-outs\n von Schwulen ist wie ein\n transparenter Regenbogen \n    auf der Suche nach seinen\n Farben."},
    {titel:"Spielverlauf",rule:"Erste Runde, Ausdruck der\n Selbstidentität. In jeder fol-\n genden Spielrunde müssen \ndie Spieler einen Dialog mit \nden Eltern führen, um mit \n    den verschiedenen Emo-\n    tionen und Fragen umzuge-\nhen, die die Eltern in jeder\n Runde haben könnten."},
    {titel:"Runde und Belohnungen",rule:"Die Spieler erhalten eine be-\n stimmte Farbe des Regen-\n bogens für jede erfolgreiche\n Dialogrunde mit den Eltern."},
    {titel:"Die Siegbedingungen",rule:"Die Spieler sammeln in allen\n Runden alle Farben des Re-\n genbogens und erhalten im \nSpiel das Verständnis und \ndie Zustimmung der Eltern."}
    ]
let i = 0;
function display_rule(){
    document.getElementById("titel").style.display = "none";
    document.getElementById("buttons").style.display = "block";
    document.getElementById("rules").style.display = "block";
    document.getElementById("span1").textContent = rules[i].titel
    document.getElementById("span2").textContent =rules[i].rule;
    document.getElementById("next_rule").style.background = "#FFFFFF";
    document.getElementById("next_rule").style.boxShadow = "0px 2px 6px 0px rgba(199, 199, 199, 0.1)";
    document.getElementById("previous_rule").style.background = "#FFFFFF";
    document.getElementById("previous_rule").style.boxShadow = "0px 2px 6px 0px rgba(199, 199, 199, 0.1)";
    document.getElementById("arrows_next").src = "arrow_black.png";
    document.getElementById("arrows_previous").src = "arrow_black.png";

    };

setTimeout(display_rule, 2000);

function submit_step(direction){
    if(direction == "next"){
        document.getElementById("next_rule").style.background = "#121212";
        document.getElementById("next_rule").style.boxShadow = "0px 2px 6px 0px rgba(100, 100, 100, 0.3)";
        document.getElementById("arrows_next").src = "arrow_white.png";
        setTimeout(next_rule,100);
    }
    else{
        document.getElementById("previous_rule").style.background = "#121212";
        document.getElementById("previous_rule").style.boxShadow = "0px 2px 6px 0px rgba(100, 100, 100, 0.3)";
        document.getElementById("arrows_previous").src = "arrow_white.png";
        setTimeout(previous_rule,100);;
    }}

function next_rule(){
    if(i==3){
    window.location.href = 'index.html';}
    i++;
    display_rule();

}

function previous_rule(){
    if(i==0){
        window.location.href = 'start_page.html';}
    i--;
    display_rule();

}