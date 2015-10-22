
//===================================================================================main
function main () {

    // Build the gallery container
    var gallery = document.getElementById("gallery");  // Retrieve the div that has id="gallery"

    // T E M P O R A R Y   C O D E 
    var faves = ["Earth", "Mars", "Jupiter", "Saturn", "Orion Nebula", "Pluto"]; 

    for (i=0; i<faves.length; i++) {

      //Create it
      var parag  = document.createElement("p");  // This creates a <p> element, but it's not attached to anything
      console.log(parag);  // empty

      //Shape it
      parag.innerHTML = "I like <b>" + faves[i]+ "</b>";  // note bold tags
      if (i%2 === 0) {
        parag.style = "font-size: 200%; background-color: #bdb; text-align: center";
      } else {
        parag.style = "font-size: 200%; background-color: #ccc; text-align: center";
      }
      console.log(parag);  // styled

      // Attach it
      gallery.appendChild(parag); //Don't forget to inspect elements
    }
    // TAKE AWAY: You can write HTML by writing Javascript. Pattern: Create it, shape it, attach it.
    // NEXT STEPS: build a skeleton.css grid 

}
//===================================================================================Launch!
$(document).ready(main);  // This prevents JS from running until the html doc is fully loaded.
// main(); //this also works, but not always