// This is the OK Coders CSS Libraries Activity. I chose Skeleton (getskeleton.com)
// as my CSS framework. It is a data-driven site. (Data does not exist in HTML or JS)
//===================================================================================main
function main () {
  d3.json('faveAPOD.json', function (error, rawData) {  // Read  JSON file, check for error and load faves array
    if (error) {
      console.error(error);
      return;
    }
    var faves = rawData.map(function (raw) {  // This builds the faves array from raw JSON data.
      return {
        imgSrc: raw.imgSrc, // An array of objects. To access data, use faves[i].imgSrc and faves[i].annotation
        annotation: raw.annotation
      }
    });

    // Build the gallery container
    var gallery = document.getElementById("gallery");  // Retrieve the div that has id="gallery"

    // Each row is a group of cells
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
          divRow.appendChild(divCell);  // append the cell to its row
          
            var anchor = document.createElement("a");  // Let's attach the image to an <a>
            anchor.href = faves[i].imgSrc;
            anchor.style = " text-decoration: none";
            divCell.appendChild(anchor);  // append the anchor to the cell

            var img = document.createElement("img");
            img.src = faves[i].imgSrc;
            img.style = "max-width: 100%";  // all APOD images are huge. 
            anchor.appendChild(img); // append the image to the anchor
          
            var parag  = document.createElement("p");  // Annotation is on bottom of each cell
            parag.innerHTML = faves[i].annotation;
            parag.style = "font-size: 80%";
            divCell.appendChild(parag); //append the annotation to the cell
        }
        i++;
      }
    }
  }); // end of JSON load
}
//===================================================================================Launch!
$(document).ready(main);  // This prevents JS from running until the html doc is fully loaded.