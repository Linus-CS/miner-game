import fs from "node:fs";

let desktop = "C:\\Users\\Linus-CS\\Desktop\\";
let bilder = "C:\\Users\\Linus-CS\\Pictures\\";
let dateien = fs.readdirSync(desktop);

for(const name of dateien){
    if (name.endsWith(".png") || name.endsWith(".jpg")){
        fs.renameSync(desktop + name , bilder + name);
        console.log("Datei verschoben: " + name);
    }
}
