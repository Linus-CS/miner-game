const steinMine = document.getElementById("stein-mine");
const hauptmenu = document.getElementById("hauptmenu");
const minenMenu = document.getElementById("minen-menu");
const steinMinenMenu = document.getElementById("stein-minen-menu");
const arbeit = document.getElementById("arbeit");

function startMittagsPause(pauseWert){
    alles.pause = pauseWert;
    let intervalId;

    function pauseAblaufen(){
        alles.pause -= 1;
        if (alles.pause == 0){
            clearInterval(intervalId)
            if (alles.arbeitszeit > 0){  
                alles.steinMineOffen = true;
            }
        }
    }

    intervalId = setInterval(pauseAblaufen, 1000);
}

function steinMineBetreten(){
    if(alles.steinMineOffen){
        hauptmenu.style.display = "none";
        steinMinenMenu.style.display = "block";
        let uebrigeArbeitszeit = alles.arbeitszeit;
        arbeit.innerText = uebrigeArbeitszeit;
        
        let intervalId = setInterval(() =>  {
            uebrigeArbeitszeit -= 1;
            arbeit.innerText = uebrigeArbeitszeit;
            if (uebrigeArbeitszeit == 0){
                hauptMenuBetreten();
                startMittagsPause(alles.mittagspause);
                clearInterval(intervalId);
            }
        },1000)
    }
}

function hauptMenuBetreten(){
    hauptmenu.style.display = "block"
    steinMinenMenu.style.display = "none";
    alles.steinMineOffen = false;
}


steinMine.onclick = steinMineBetreten;