if (typeof Storage !== "undefined") {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsContainer = document.getElementById("cart-items");

    cart.forEach(function (product, index) {
      var row = cartItemsContainer.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      
      cell1.innerHTML = product.name;
      cell2.innerHTML = "₹" + product.price.toFixed(2);
      cell3.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" width="50" height="50">';
      cell4.innerHTML = '<img id="delete" src="download.png" width="50px" height="50px" alt="Discart" onclick= "removeItem(' + index + ')">';
    });

    var totalPrice = cart.reduce(function (sum, product) {
      return sum + product.price;
    }, 0);
    document.getElementById("cart-total").innerHTML = "₹" + totalPrice.toFixed(2);

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    }
  } else {
    alert("Sorry, your browser does not support local storage. Unable to load cart.");
  }
