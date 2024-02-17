// ==UserScript==
// @name        Autofill AN
// @namespace   an-scripts (https://github.com/maxwellsantoro/an-scripts/)
// @match       https://www.auctionninja.com/portal/add_product.php
// @grant       none
// @version     1.5
// @author      Maxwell Santoro
// @description 2/14/2024, 12:11:06 PM
// ==/UserScript==

function autofillForm() {
  document.getElementById("category").value = '12';
  document.getElementById("subcat").value = '102';
  document.getElementById("status").value = '11';
  document.getElementById("menu-icon").innerHTML = 'Other' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
  document.getElementById("conditionn").value = '1';
  document.getElementById("usps").checked = true;
  // document.getElementById("rte1").value = 'All items are sold AS-IS. If you require shipping, you will be charged for the postage amount plus any applicable handling fee (see below for details). Small items are shipped in small, medium or large USPS flat rate boxes. We will combine lots for shipping discounts. Please feel free to text if you have any questions about shipping 631-913-8063. A handling fee of $5 will be charged for each flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. ALL ITEMS NOT PICKED UP OR WITH SHIPPING ARRANGED BY THE END OF THE SPECIFIED PICK UP TIME WILL BE FORFEITED WITHOUT REFUND. AN ADDITIONAL PICKUP WINDOW OF 1 HOUR CAN BE ARRANGED FOR A FEE OF $25 PER HOUR OF AVAILABILITY. Shipping quotes may take up to 10 business days to receive.';

  document.getElementsByName("tags")[0].value = 'Funko pop, comics, anime, Funko, pop, toy, figurine, collectible';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '44';

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
  // document.getElementById("rte1").value = 'All items are sold AS-IS. If you require shipping, you will be charged for the postage amount plus any applicable handling fee (see below for details). Small items are shipped in small, medium or large USPS flat rate boxes. We will combine lots for shipping discounts. Please feel free to text if you have any questions about shipping 631-913-8063. A handling fee of $5 will be charged for each flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. ALL ITEMS NOT PICKED UP OR WITH SHIPPING ARRANGED BY THE END OF THE SPECIFIED PICK UP TIME WILL BE FORFEITED WITHOUT REFUND. AN ADDITIONAL PICKUP WINDOW OF 1 HOUR CAN BE ARRANGED FOR A FEE OF $25 PER HOUR OF AVAILABILITY. Shipping quotes may take up to 10 business days to receive.';
  document.getElementsByName("tags")[0].value = 'Collectibles, sports, cards, trading, trading cards, rare, baseball, basketball, pokemon, football';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '44';

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
    // document.getElementById("rte1").value = 'All items are sold AS-IS. If you require shipping, you will be charged for the postage amount plus any applicable handling fee (see below for details). Small items are shipped in small, medium or large USPS flat rate boxes. We will combine lots for shipping discounts. Please feel free to text if you have any questions about shipping 631-913-8063. A handling fee of $5 will be charged for each flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. ALL ITEMS NOT PICKED UP OR WITH SHIPPING ARRANGED BY THE END OF THE SPECIFIED PICK UP TIME WILL BE FORFEITED WITHOUT REFUND. AN ADDITIONAL PICKUP WINDOW OF 1 HOUR CAN BE ARRANGED FOR A FEE OF $25 PER HOUR OF AVAILABILITY. Shipping quotes may take up to 10 business days to receive.';
    // document.getElementsByName("tags")[0].value = 'Comic Book, Silver Age, Marvel, Vintage, Collectible Comic, Marvel Comics Group, Superhero Memorabilia, Classic Comic Book, 1970s Marvel';
  
    // Set the dropdown to the desired option
    document.getElementById("auctionid").value = '44';
  
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
autofillButton.textContent = "Autofill Funko Pop";
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
