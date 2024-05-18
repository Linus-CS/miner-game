let spitzhacken = document.getElementsByClassName("spitzhacke");

for (let i = 0; i <= 5; i++) {
    let spitzhacke = spitzhacken[i];
    spitzhackeKaufbarMachen(spitzhacke);
}

let upgrades = document.getElementsByClassName("upgrade");
let arbeitszeitElement = upgrades[0];
let mittagspauseElement = upgrades[1]

function mineÖffnen(){
    if (alles.pause == 0){
        alles.steinMineOffen = true;
    }
}

function mittagPauseKleiner(){
    if(alles.mittagspause < alles.pause){
        alles.pause = alles.mittagspause;
    }
    
}

upgradeKaufbarMachen(arbeitszeitElement, 0, 20, () =>{} , 20, mineÖffnen);
upgradeKaufbarMachen(mittagspauseElement, 200,  -20, mittagPauseKleiner, null, () =>{});

mineÖffnen();
steinMineBetreten();


// Tutorial einbauen | Schlösser an die Minen bevor man da rein darf
// Übergangsviedeo beim betreten der Mine