
//===================================================================================main
function main () {

    // T E M P O R A R Y   C O D E 
    var faves = ["The Sun", "Mercury", "Venus",   // first row
                "Earth", "Mars", "Jupiter",   // second row
                "Saturn", "Uranus", "Neptune",  // third row
                "Pluto"];  // Only one cell on the fourth row

    // Build the gallery container
    var gallery = document.getElementById("gallery");  // Find the <div> that has id="gallery"

    // Rows are groups of three cells
    var i = 0; // index into the faves array.
    var numRows = Math.ceil(faves.length/3);  // try replacing Math.ceil with Math.floor
    for (row=0; row<numRows; row++) {  // for each row
      var divRow = document.createElement("div");  // create a div 
      divRow.className = "row";  // Apply Skeleton.css class to make it a row
      gallery.appendChild(divRow); // attach the row to the gallery container

      for (cell=0; cell<3; cell++) {  // up to three cells on this row  
        if (i < faves.length) {  // This is in case our array length isn't divisible by 3
          var divCell = document.createElement("div");  //create a cell for our content
          divCell.className = "four columns";  // 1 cell = 4 Skeleton columns
          divRow.appendChild(divCell);  // attach the cell to its row
     
          // T E M P O R A R Y   C O D E 
          var parag  = document.createElement("p"); 
          parag.innerHTML = faves[i]; 
          // parag.innerHTML = "Row: " + row + "<br>i: " + i + "<br><b>" + faves[i] + "</b>";
          parag.style = "font-size: 120%; background-color: #bdb; text-align: center";
          divCell.appendChild(parag); //append the paragraph to the cell
        }
      i++;
      }
    }
    // TAKE AWAY: A lot of power you don't have in straight .html and .css
    // NEXT STEPS: Build out a nicer grid from an array of objects
}
//===================================================================================Launch!
$(document).ready(main);  // This prevents JS from running until the html doc is fully loaded.