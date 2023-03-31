import { KUTYALISTA } from "./adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendezes.js";
import { rendezesvissza } from "./rendezes.js";
$(() => {
    adatMegjelenit(KUTYALISTA);
    var kattint = 0
    var rendez = document.getElementById("neve");
    $(rendez).click(() => {
        if (kattint == 0){
            rendezes(0)
            kattint = 1
        }else{
            rendezesvissza(0)
            kattint = 0
        }
        
    });
    var rendez2 = document.getElementById("fajtaja");
    $(rendez2).click(() => {
        if (kattint == 0){
            rendezes(1)
            kattint = 1
        }else{
            rendezesvissza(1)
            kattint = 0
        }
})

    var rendez3 = document.getElementById("kora");
    $(rendez3).click(() => {
        if (kattint == 0){
            rendezes(2)
            kattint = 1
        }else{
            rendezesvissza(2)
            kattint = 0
        }
    });
});