import { KUTYALISTA } from "./adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendezes.js";
import { rendezesvissza } from "./rendezes.js";
$(() => {
    adatMegjelenit(KUTYALISTA);
    var kattint = 0
    var NevreRendez = document.getElementById("neve");
    $(NevreRendez).click(() => {
        if (kattint == 0){
            rendezes(0)
            kattint = 1
        }else{
            rendezesvissza(0)
            kattint = 0
        }
        
    });
    var FajtaraRendez = document.getElementById("fajtaja");
    $(FajtaraRendez).click(() => {
        if (kattint == 0){
            rendezes(1)
            kattint = 1
        }else{
            rendezesvissza(1)
            kattint = 0
        }
})

    var korraRendez = document.getElementById("kora");
    $(korraRendez).click(() => {
        if (kattint == 0){
            rendezes(2)
            kattint = 1
        }else{
            rendezesvissza(2)
            kattint = 0
        }
    
    });
    
    
    $(document).ready(function() {
        $(".delete-btn").click(function() {
          // Get the row that contains the clicked button
          var row = $(this).closest("tr");
        
          // Remove the row from the table
          row.remove();
        });
      });

      $(document).ready(function() {
        // Add a keyup event listener to the search inputs
        $("#nev, #kor, #fajta").keyup(function() {
          // Get the input values
          var nevErtek = $("#nev").val().toLowerCase();
          var fajErtek = $("#fajta").val().toLowerCase();
          var korErtek = $("#kor").val();
  
          // Loop through all the table rows
          $("tbody tr").each(function() {
            var nev = $(this).find("td:first").text().toLowerCase();
            var faj = $(this).find("td:nth-child(2)").text().toLowerCase();
            var kor = $(this).find("td:nth-child(3)").text();
  
            // Check if the nev and kor match the input values
            if (nev.indexOf(nevErtek) !== -1 && kor.indexOf(korErtek) !== -1 && faj.indexOf(fajErtek) !== -1) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        });
      });
});