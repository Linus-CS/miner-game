let geldElement = document.getElementById("geld");
let pausenElement = document.getElementById("pause");

let alles = {
    _geld: parseInt(geldElement.innerText),
    set geld(neuerWert) {
        this._geld = neuerWert;
        geldElement.innerText = this._geld;
    },
    get geld() {
        return this._geld;
    },
    _pause: 0,
    set pause(neuerWert) {
        this._pause = neuerWert;
        pausenElement.innerText = this._pause;
        if(this._pause == 0)
            pausenElement.innerText = "Pause zuende!" 
    },
    get pause() {
        return this._pause;
    },
    _steinMineOffen: false,
    set steinMineOffen(neuerWert) {
        this._steinMineOffen = neuerWert;
        if(this._steinMineOffen)
            steinMine.style.opacity = "1.0";
        else
            steinMine.style.opacity = "0.2";

    },
    get steinMineOffen() {
        return this._steinMineOffen;
    },
    arbeitszeit: 0,
    mittagspause: 200,
    abbauKraft: 5,
    stein: 0,
    kohle: 0,
    eisen: 0,
    saphire: 0,
    holzspitzhacke: false,
    steinspitzhacke: false,
    eisenspitzhacke: false,
    goldspitzhacke: false,
    smaragdspitzhacke: false,
    diamantspitzhacke: false
}