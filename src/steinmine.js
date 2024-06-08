let steinWand = document.getElementById("stein-wand");

function zufaelligesErz(erzBild){
    let typ = Math.floor(Math.random() * 1000);
    erzBild.classList.add("erz");

    let erz = {
        name: '',
        wert: 0,
        haerte: 0,
        set src(value){
            erzBild.src = value;
        },
        _groesse: "5%",
        get groesse(){
            return this._groesse;
        },
        set groesse(value){
            this._groesse = value;
            erzBild.style.width = value;
        },
        _opacity: 1,
        get opacity(){
            return this._opacity;
        },
        set opacity(value){
            this._opacity = value;
            erzBild.style.opacity = value;
        },
    }   

    if (typ < 500) {
        erz.name = "stein";
        erz.src = "bilder/stein.png";
        erz.haerte = 10;
        erz.wert = 1;
    } else if (typ < 900){
        erz.name = "kohle";
        erz.src = "bilder/kohle.png";
        erz.haerte = 8;
        erz.wert = 10;
    } else if (typ < 999){
        erz.name = "eisen";
        erz.src = "bilder/eisen.png";
        erz.haerte = 12;
        erz.wert = 25;
    }else{
        erz.name = "saphire";
        erz.src = "bilder/saphire.png";
        erz.haerte = 20;
        erz.wert = 250;
    }

    return erz;
}

function erstelleErzElement(reihe, spalte){
    let erzBild = document.createElement("img");
    let linksZufall = Math.random() * 60;
    let obenZufall = Math.random() * 20;
    erzBild.style.left = "calc(" + spalte + "% + " + linksZufall + "px)";
    erzBild.style.top = "calc(" + reihe + "% + " + obenZufall + "px)";
    return erzBild;
}

function platziereErz(reihe, spalte){
    let erzBild = erstelleErzElement(reihe, spalte);
    let erz = zufaelligesErz(erzBild);


    let verkleinern = 0;
    function abbauen(){
        verkleinern += alles.abbauKraft;
        erz.groesse = "calc(5rem - " + verkleinern + "px)";
        if(verkleinern > 50){
            erzBild.onclick = null;
            erz.src = "bilder/partikel.png"
            erz.groesse = "5rem";

            let id = setInterval(wolkeVerschwinden, 100);
            function wolkeVerschwinden(){
                erz.opacity -= 0.1;
                if(erz.opacity < 0){
                    alles[erz.name] += 1;
                    steinWand.removeChild(erzBild);
                    if(steinWand.children.length == 0){
                        erstelleUndPlatziereErze();
                    }
                    clearInterval(id);
                }
            }
        }
    }
    erzBild.onclick = () => abbauen(verkleinern, erzBild);

    steinWand.appendChild(erzBild);
}

function erstelleUndPlatziereErze(){
    let versetzt = false;

    for(let reihe = 10; reihe < 78; reihe += 13){
        let spalte = 8
        if(versetzt){
            spalte += 5;
        }
        for(; spalte < 88; spalte += 8){
            let zufall = Math.random();
            if (zufall > 0.5){
                platziereErz(reihe, spalte);
            }
        }
        versetzt = !versetzt;
    }
}

erstelleUndPlatziereErze();