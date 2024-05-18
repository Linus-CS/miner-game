function spitzhackeKaufbarMachen(spitzhacke){
    const name = spitzhacke.getElementsByTagName("p")[0].innerText.toLowerCase();

    const kosten = spitzhacke.getElementsByClassName("kosten")[0];
    const imgWagen = spitzhacke.getElementsByClassName("kaufen")[0];
    const preis = parseInt(kosten.getElementsByTagName("p")[0].innerText);

    imgWagen.onclick = () => {
        if (alles.geld >= preis) {
            alles[name] = true;
            kosten.style.display = "none";
            imgWagen.style.display = "none";
            alles.geld -= preis;
        }
    };
}

function upgradeKaufbarMachen(upgrade,  currentWert, faktor, callback = () => {}, erstesUpgrade, ersterCallback = () => {}){
    const name = upgrade.getElementsByClassName("upgrade-name")[0].innerText.toLowerCase();
    const wertElement = upgrade.getElementsByClassName("wert")[0];
    const kaufenElement = upgrade.getElementsByClassName("plus-minus")[0];
    const kostenElement = upgrade.getElementsByClassName("kosten")[0];
    let preis = parseInt(kostenElement.getElementsByTagName("p")[0].innerText);


    kaufenElement.onclick = () => {
        if (alles.geld >= preis) {
            kostenElement.getElementsByTagName("p")[0].innerText = preis * 2;
            if (currentWert == 0){
                currentWert = erstesUpgrade;
                ersterCallback()
            }else{
                currentWert = Math.floor(currentWert + (currentWert / 100) * faktor);
            }
            alles[name] = currentWert;
            callback();
            wertElement.innerText = currentWert + "s";

            alles.geld -= preis;
            preis *= 2;
        }
    };
}