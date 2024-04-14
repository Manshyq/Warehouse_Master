        


        //LOG IN JS
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);






//PRODUCTS AND SEARCH JS
function showProductDetails(detailsId) {
  // Hide all product details
  const allDetails = document.querySelectorAll('.product-details');
  for (const details of allDetails) {
    details.style.display = 'none';
  }

  // Show the selected product's details
  const selectedDetails = document.getElementById(detailsId);
  if (selectedDetails) {
    selectedDetails.style.display = 'block';
  } else {
    console.error("Details container not found for ID:", detailsId);
  }
}




//SEARCH BAR

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (searchTerm.length > 0) {
            // Filter products by name
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

            // Display matching products
            filteredProducts.forEach(product => {
                const div = document.createElement('div');
                div.classList.add('result-item');
                div.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width:50px; height:50px; margin-right:10px;"><span>${product.name}</span>`;
                div.onclick = function() {
                    showProductDetails(product.id);
                };
                searchResults.appendChild(div);
            });
        }
    });
});

// Dummy products array for example purposes
const products = [
    { id: 'soya-milk-details', name: 'Soya Milk', image: 'assets/images/soya-milk.jpeg' },
    { id: 'chocolate-muffin-details', name: 'Chocolate Muffin', image: 'assets/images/chocolate-muffin.jpeg' },
    { id: 'paper-cups-details', name: 'Paper cups', image: 'assets/images/paper-cups.jpeg'},
    { id: 'lemonade-details', name: 'Lemonade', image: 'assets/images/lemonade.jpeg'}
    // Add more products here
];








//CUSTOMERS JS
function showCustomerDetails(detailsId) {
  // Hide all customer details
  const allDetails = document.querySelectorAll('.customer-details');
  for (const details of allDetails) {
    details.style.display = 'none';
  }

  // Show the selected customer's details
  const selectedDetails = document.getElementById(detailsId);
  if (selectedDetails) {
    selectedDetails.style.display = 'block';
  } else {
    console.error("Details container not found for ID:", detailsId);
  }
}

//SEARCH BAR

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInputCustomers');
    const searchResultsCustomers = document.getElementById('searchResultsCustomers');

    searchInputCustomers.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchResultsCustomers.innerHTML = ''; // Clear previous results

        if (searchTerm.length > 0) {
            // Filter customers by name
            const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(searchTerm));

            // Display matching customers
            filteredCustomers.forEach(customer => {
                const div = document.createElement('div');
                div.classList.add('result-item');
                div.innerHTML = `<img src="${customer.image}" alt="${customer.name}" style="width:50px; height:50px; margin-right:10px;"><span>${customer.name}</span>`;
                div.onclick = function() {
                    showCustomerDetails(customer.id);
                };
                searchResultsCustomers.appendChild(div);
            });
        }
    });
});

// Dummy customers array for example purposes
const customers = [
    { id: 'customer1-details', name: 'Jack Jones', image: 'assets/images/jack-jones.jpeg' },
    { id: 'customer2-details', name: 'Aliya Nazarova', image: 'assets/images/aliya.jpeg' },
    { id: 'customer3-details', name: 'Kim Lee', image: 'assets/images/girl.jpeg' },
    { id: 'customer4-details', name: 'Aibek Kim', image: 'assets/images/kim.png' },
    { id: 'customer5-details', name: 'Aigerim Ali', image: 'assets/images/aigerim.png' },
    { id: 'customer6-details', name: 'Rustam Bolatovich', image: 'assets/images/rustam.png' },
    { id: 'customer7-details', name: 'Jennifer Aniston', image: 'assets/images/jennifer.png' },
    // Add more customers here
];
