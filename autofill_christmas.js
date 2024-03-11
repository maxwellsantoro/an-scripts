// ==UserScript==
// @name        Autofill AN
// @namespace   an-scripts (https://github.com/maxwellsantoro/an-scripts/)
// @match       https://www.auctionninja.com/portal/add_product.php*
// @grant       none
// @version     3.1
// @author      Maxwell Santoro
// @description 2/14/2024, 12:11:06 PM
// ==/UserScript==

function autofillForm() {
  document.getElementById("category").value = '14';
  document.getElementById("subcat").value = '105';
  document.getElementById("status").value = '11';
  document.getElementById("menu-icon").innerHTML = 'Toys' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
  document.getElementById("conditionn").value = '1';
  document.getElementById("usps").checked = true;
  document.getElementById("rte1").value = 'Please see photos for condition details.\n\n' + 'Please make sure to review Additional Auction Details & Seller Instructions for all pickup and shipping information before bidding.';

  document.getElementsByName("tags")[0].value = 'Vintage Toys, Antique Toys, Retro Toys, Classic Toys, Collectible Toys, Toy Collectibles, Old School Toys, Nostalgic Toys, Toy Memorabilia, Rare Toys, Vintage Action Figures, Vintage Dolls, Tin Toys, Diecast Toys, Vintage Board Games, Model Trains, Vintage LEGO, Wind-Up Toys, Battery Operated Vintage Toys, Handmade Vintage Toys, Vintage Toy Cars, Vintage Plush Toys, Historical Toys, Toy Soldiers, Vintage Space Toys, Vintage Video Games, Vintage Puzzles, Wooden Toys, Vintage Educational Toys, Puppet Toys, Vintage Toy Sets, Collectible Figurines, Vintage Cartoon Toys, Vintage Superhero Toys, Vintage Fantasy Toys, Vintage Sports Toys, Vintage Anime Toys, Vintage Comic Book Toys, Limited Edition Toys, Vintage Toy Collections, Vintage Toy Auctions, Mint Condition Vintage Toys, Restored Vintage Toys, Vintage Toy Parts, Vintage Toy Accessories';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '46';

  // If the dropdown has an 'onchange' event that needs to be triggered manually
  if ("createEvent" in document) {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      document.getElementById("auctionid").dispatchEvent(evt);
  } else {
      document.getElementById("auctionid").fireEvent("onchange");
  }

  // Place cursor in the "name" input field
  var nameInput = document.getElementById("name");
  if (nameInput) {
      nameInput.focus();

  }
}

function autofillForm2() {
  document.getElementById("category").value = '12';
  document.getElementById("subcat").value = '99';
  document.getElementById("status").value = '11';
  document.getElementById("menu-icon").innerHTML = 'Trading Cards' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
  document.getElementById("conditionn").value = '1';
  document.getElementById("usps").checked = true;
  document.getElementById("rte1").value = 'Please see photos for condition details.\n\n' + 'Please make sure to review Additional Auction Details & Seller Instructions for all pickup and shipping information before bidding.';
  document.getElementsByName("tags")[0].value = 'Collectibles, Sports Cards, Trading Cards, Rare Sports Memorabilia, Baseball Cards, Basketball Cards, Pokémon Cards, Football Cards, Vintage Cards, Rookie Cards, Limited Edition Cards, Sports Memorabilia, Card Collecting, Hobby Collectibles, Autographed Cards, Sports Collectibles, Mint Condition Cards, Holographic Cards, Investment Cards, Sports Card Auction';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '46';

  // If the dropdown has an 'onchange' event that needs to be triggered manually
  if ("createEvent" in document) {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      document.getElementById("auctionid").dispatchEvent(evt);
  } else {
      document.getElementById("auctionid").fireEvent("onchange");
  }

  // Place cursor in the "name" input field
  var nameInput = document.getElementById("name");
  if (nameInput) {
      nameInput.focus();

  }
}

function autofillForm3() {
    document.getElementById("category").value = '12';
    document.getElementById("subcat").value = '167';
    document.getElementById("status").value = '11';
    document.getElementById("menu-icon").innerHTML = 'Comic Books' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
    document.getElementById("conditionn").value = '1';
    document.getElementById("usps").checked = true;
    document.getElementById("rte1").value = 'Please see photos for condition details.\n\n' + 'Please make sure to review Additional Auction Details & Seller Instructions for all pickup and shipping information before bidding.';
    document.getElementsByName("tags")[0].value = 'Comic Book, Silver Age, Marvel, Vintage, Collectible Comic, Marvel Comics Group, Superhero Memorabilia, Classic Comic Book, 1970s Marvel';
  
    // Set the dropdown to the desired option
    document.getElementById("auctionid").value = '46';
  
    // If the dropdown has an 'onchange' event that needs to be triggered manually
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        document.getElementById("auctionid").dispatchEvent(evt);
    } else {
        document.getElementById("auctionid").fireEvent("onchange");
    }
  
    // Place cursor in the "name" input field
    var nameInput = document.getElementById("name");
    if (nameInput) {
        nameInput.focus();
  
    }
  }


  function autofillForm4() {
    document.getElementById("status").value = '11';
    document.getElementById("conditionn").value = '1';
    document.getElementById("usps").checked = true;
    document.getElementById("rte1").value = 'Please see photos for condition details.\n\n' + 'Please make sure to review Additional Auction Details & Seller Instructions for all pickup and shipping information before bidding.';
  
    // Set the dropdown to the desired option
    document.getElementById("auctionid").value = '46';
  
    // If the dropdown has an 'onchange' event that needs to be triggered manually
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        document.getElementById("auctionid").dispatchEvent(evt);
    } else {
        document.getElementById("auctionid").fireEvent("onchange");
    }
  
    // Place cursor in the "name" input field
    var nameInput = document.getElementById("name");
    if (nameInput) {
        nameInput.focus();
  
    }
  }


  // Create a new button element

var autofillButton = document.createElement("button");
// Set the button text
autofillButton.textContent = "Autofill Toys";
// Set styles if you wish to make it more visible
autofillButton.style.position = "fixed";
autofillButton.style.top = "10px";
autofillButton.style.left = "10px";
autofillButton.style.zIndex = "1000";

// Append the button to the body or another element on the page
document.body.appendChild(autofillButton);

// Add event listener to the button
autofillButton.addEventListener("click", autofillForm);


// Create a new button element

var autofillButton2 = document.createElement("button");
// Set the button text
autofillButton2.textContent = "Autofill Trading Cards";
// Set styles if you wish to make it more visible
autofillButton2.style.position = "fixed";
autofillButton2.style.top = "40px";
autofillButton2.style.left = "10px";
autofillButton2.style.zIndex = "1000";

// Append the button to the body or another element on the page
document.body.appendChild(autofillButton2);

// Add event listener to the button
autofillButton2.addEventListener("click", autofillForm2);


// Create a new button element

var autofillButton3 = document.createElement("button");
// Set the button text
autofillButton3.textContent = "Autofill Comics";
// Set styles if you wish to make it more visible
autofillButton3.style.position = "fixed";
autofillButton3.style.top = "70px";
autofillButton3.style.left = "10px";
autofillButton3.style.zIndex = "1000";

// Append the button to the body or another element on the page
document.body.appendChild(autofillButton3);

// Add event listener to the button
autofillButton3.addEventListener("click", autofillForm3);

// Create a new button element

var autofillButton4 = document.createElement("button");
// Set the button text
autofillButton4.textContent = "Autofill Generic";
// Set styles if you wish to make it more visible
autofillButton4.style.position = "fixed";
autofillButton4.style.top = "100px";
autofillButton4.style.left = "10px";
autofillButton4.style.zIndex = "1000";

// Append the button to the body or another element on the page
document.body.appendChild(autofillButton4);

// Add event listener to the button
autofillButton4.addEventListener("click", autofillForm4);
