import { kulcsLista } from "./adat.js";

export function adatMegjelenit(lista) {

  let txt = "<div class = 'table-responsive'>"
  txt += "<table id='MyTable' class= 'table table-striped table-bordered table-hover'>";
  txt += "<thead class = 'table-dark'><tr>";
  for (const key in kulcsLista){
    txt += `<th id ='${key}'> ${kulcsLista[key]}</th>`; 
  }
  txt += "<th></th></tr></thead>"
  for (let index = 0; index < lista.length; index++) {
    txt += '<tr>'
    const object = lista[index];
    for (const key in object){
      const element = object[key]
      if(key == nev){
        txt += `<th> ${element} </th>`
      } else {
        txt += `<td> ${element} </td>`
      }
    }
    txt += `<td><input class="delete-btn"type="button" value="❌"></td>`;
    txt += `</tr>`    
  }
  txt += '</table>'
  txt += '</div>'
  
  let hely = $('article')
  return hely.append(txt);
}