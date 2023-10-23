function produit(x, y) {
    return x * y;
  }
  
  function afficheImg(image) {
    let img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", "image");
    document.body.appendChild(img);
  }
  