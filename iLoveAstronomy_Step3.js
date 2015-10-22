// This is the OK Coders CSS Libraries Activity. I chose Skeleton (getskeleton.com)
// as my CSS framework. It is a data-driven site. (Data does not exist in HTML or JS)
//===================================================================================main
function main () {

    // T E M P O R A R Y   C O D E 
    var faves =  // An array of objects. To access data, use faves[i].imgSrc and faves[i].annotation
    [
      {
        "imgSrc": "http://apod.nasa.gov/apod/image/1207/sunspotsilhouette_carpentier_960.jpg",
        "annotation": "What stands between you and the Sun? Apparently, as viewed from Paris last week, one visible thing after another. First, in the foreground, is the Basilica of the Sacred Heart, built in the late 1800s and located on the highest hill in Paris, France."
      },
      {
        "imgSrc": "http://apod.nasa.gov/apod/image/1303/PIA16853mercury_900.jpg",
        "annotation": "The colors of the solar system's innermost planet are enhanced in this tantalizing view, based on global image data from the Mercury-orbiting MESSENGER spacecraft."
      },
      {
        "imgSrc": "http://apod.nasa.gov/apod/image/0802/venussouth_vexpress.jpg",
        "annotation": "Why did an acidic haze spread across Venus? The unusual clouds were discovered last July by ESA's robotic Venus Express spacecraft currently orbiting Venus."
      },
      {
        "imgSrc": "http://apod.nasa.gov/apod/image/1509/Earthrise_Apollo8_960.jpg",
        "annotation": "What's that rising over the edge of the Moon? Earth. About 47 years ago, in December of 1968, the Apollo 8 crew flew from the Earth to the Moon and back again. Frank Borman, James Lovell, and William Anders were launched atop a Saturn V rocket on December 21, circled the Moon ten times in their command module, and returned to Earth on December 27."
      },
      {
        "annotation": "This sharp view of Mars recorded on January 22nd is an example of the telescopic images possible in the coming days. The planet's whitish north polar cap is at the upper right. Mars' tiny red disk is about 14 arcseconds in angular diameter, less than 1/100th the diameter of the Full Moon.",
        "imgSrc": "http://apod.nasa.gov/apod/image/1001/mars_opposition_2010.jpg",
        "blah": "blah"
      }
    ];

    // Build the gallery container
    var gallery = document.getElementById("gallery");  // Retrieve the div that has id="gallery"

    // Each row is a group of three cells
    var i = 0; 
    var numRows = Math.ceil(faves.length/3);
    for (row=0; row<numRows; row++) {  // for each row
      var divRow = document.createElement("div");  // create a <div class="row"> 
      divRow.className = "row";  // Skeleton class
      gallery.appendChild(divRow); // attach the row to the gallery container

      for (cell=0; cell<3; cell++) {  // up to three cells on this row
        if (i < faves.length) {  // This is in case our array length isn't divisible by 3
          var divCell = document.createElement("div");  //create a cell for our content
          divCell.className = "four columns";  // 1 cell = 4 Skeleton columns
          divRow.appendChild(divCell);  // attach the cell to its row

          var img = document.createElement("img");  // Image is on top of each cell
          img.src = faves[i].imgSrc;
          img.style = "max-width: 100%";  // all APOD images are huge. Try commenting this out.
          divCell.appendChild(img); // append the image to the cell
     
          var parag  = document.createElement("p");  
          parag.innerHTML = faves[i].annotation;
          parag.style = "font-size: 80%";
          divCell.appendChild(parag); //append the annotation to the cell
        }
        i++;
      }
    }
    // NOTE: No difficulies lining up <div> and </div>
    // NEXT STEP: Load faves array from a JSON file, and add an <a> to the images so they can be viewed at full size
}
//===================================================================================Launch!
$(document).ready(main);  // This prevents JS from running until the html doc is fully loaded.