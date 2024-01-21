var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}




var products = [
    { name: "Hoodie", price: 700.00, image: "Hoodie.png"},
    { name: "T-shirt", price: 500.00,  image: "t-shirt.png"},
    { name: "Shoes", price: 2000.00, image: "shoes1.png" },
    { name: "Top", price: 800.00, image: "top.png"},
    { name: "Hand Watch", price: 900.00, image: "watch.png" },
    { name: "T-shirt", price: 500.00, image: "shirt.png" },
    { name: "Shirt", price: 600.00, image:"shirt2.png" },
    { name: "Jeans", price: 900.00, image:"jeans.png" },
    { name: "Jeans", price: 950.00, image:"jeans1.png" },
    { name: "1-piece", price: 1100.00, image:"dress.png" },
    { name: "Shirt", price: 500.00, image:"shirt1.png" },
    { name: "Hand Watch", price: 600.00,image:"watches1.png" },
  
  ];
  function addToCart(productIndex) {
  
    if (typeof Storage !== "undefined") {
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(products[productIndex]);
      localStorage.setItem("cart", JSON.stringify(cart));
 
      alert("Product added to cart!");
    } else {
      alert("Sorry, your browser does not support local storage. Unable to add to cart.");
    }
  }



  
  