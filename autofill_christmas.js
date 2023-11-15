// ==UserScript==
// @name        Autofill Christmas
// @namespace   an-scripts (https://github.com/maxwellsantoro/an-scripts/)
// @match       https://www.auctionninja.com/portal/add_product.php
// @grant       none
// @version     1.0
// @author      Maxwell Santoro
// @description 11/5/2023, 11:44:06 PM
// ==/UserScript==

function autofillForm() {
  document.getElementById("category").value = '7';
  document.getElementById("subcat").value = '130';
  document.getElementById("menu-icon").innerHTML = 'Holiday / Seasonal' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
  document.getElementById("conditionn").value = '1';
  document.getElementById("usps").checked = true;
  document.getElementById("rte1").value = 'Shipping is available for this item. A handling fee of $5 will be charged for each USPS flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. Please look closely at the photos, title, and description as all items are sold AS-IS.';
  document.getElementsByName("tags")[0].value = 'Christmas, Holidays, Santa, Santa Claus, Decor, Holiday Decor, Collectibles';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '37';

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
  document.getElementById("category").value = '7';
  document.getElementById("subcat").value = '130';
  document.getElementById("menu-icon").innerHTML = 'Holiday / Seasonal' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
  document.getElementById("conditionn").value = '1';
  document.getElementById("usps").checked = true;
  document.getElementById("rte1").value = 'Shipping is available for this item. A handling fee of $5 will be charged for each USPS flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. Please look closely at the photos, title, and description as all items are sold AS-IS.';
  document.getElementsByName("tags")[0].value = 'Christmas, Holidays, Santa, Santa Claus, Decor, Holiday Decor, Collectibles';

  // Set the dropdown to the desired option
  document.getElementById("auctionid").value = '38';

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
    document.getElementById("category").value = '7';
    document.getElementById("subcat").value = '130';
    document.getElementById("menu-icon").innerHTML = 'Holiday / Seasonal' + ' <i class="fa fa-angle-down" aria-hidden="true"></i>';
    document.getElementById("conditionn").value = '1';
    document.getElementById("usps").checked = true;
    document.getElementById("rte1").value = 'Shipping is available for this item. A handling fee of $5 will be charged for each USPS flatrate box. Any orders that cannot fit into a flat rate box are considered XL and a handling fee of $20 will be required for shipment. Please look closely at the photos, title, and description as all items are sold AS-IS.';
    document.getElementsByName("tags")[0].value = 'Christmas, Holidays, Santa, Santa Claus, Decor, Holiday Decor, Collectibles';
  
    // Set the dropdown to the desired option
    document.getElementById("auctionid").value = '39';
  
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
autofillButton.textContent = "Autofill Christmas 3";
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
autofillButton2.textContent = "Autofill Christmas 4";
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
autofillButton3.textContent = "Autofill Christmas 5";
// Set styles if you wish to make it more visible
autofillButton3.style.position = "fixed";
autofillButton3.style.top = "70px";
autofillButton3.style.left = "10px";
autofillButton3.style.zIndex = "1000";

// Append the button to the body or another element on the page
document.body.appendChild(autofillButton3);

// Add event listener to the button
autofillButton3.addEventListener("click", autofillForm3);
