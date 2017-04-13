var body = document.getElementsByTagName("body")[0];

function randomColor () {
  var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];

      }
return color;
}


        function tiles (){
          for (var i = 0; i < 81; i++){
          // randomColor();
        var tile = document.createElement("div");
        tile.style.width = "11.1%";
        tile.style.float = "left";
        tile.style.paddingBottom = "11.1%";
        tile.style.backgroundColor=(randomColor());
        body.appendChild(tile);

      }
      return tile;
      }

      tiles();




//   // if (i % 2 === 0) {
//   //   tile.style.backgroundColor = "pink";
//   //   body.appendChild(tile);
//   // }
//   // else {
//   //   tile.style.backgroundColor = "purple";
//   //   body.appendChild(tile);
//   // }
//
// }








// tile.style.backgroundColor = "purple";
// tile2.style.width = "11.1%";
// tile2.style.float = "left";
// tile2.style.paddingBottom = "11.1%";
// tile2.style.backgroundColor = "pink";

// body.appendChild(tile);
