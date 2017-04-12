var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 81; i++) {
  var tile = document.createElement("div");
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  if (i % 2 === 0) {
    tile.style.backgroundColor = "pink";
    body.appendChild(tile);
  }
  else {
    tile.style.backgroundColor = "purple";
    body.appendChild(tile);
  }

}



// tile.style.backgroundColor = "purple";
// tile2.style.width = "11.1%";
// tile2.style.float = "left";
// tile2.style.paddingBottom = "11.1%";
// tile2.style.backgroundColor = "pink";

// body.appendChild(tile);
