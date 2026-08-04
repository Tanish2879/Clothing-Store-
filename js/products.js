/* =========================================
   DUMMY JSON API
========================================= */

// API that contains clothing products

const apiURL = "https://dummyjson.com/products/category/mens-shirts";



/* =========================================
   HTML ELEMENTS
========================================= */

// Container where all products will appear

const productContainer =
document.querySelector(".product-grid");



// Array that will store all products

let products = [];



/* =========================================
   GET PRODUCTS FROM API
========================================= */

async function getProducts(){


    // Send request to API

    const response = await fetch(apiURL);


    // Convert response into JSON

    const data = await response.json();


    // Store products

    products = data.products;


    // Display them

    displayProducts(products);

}



/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList){


    // Remove previous products

    productContainer.innerHTML = "";



    productList.forEach(function(product){


        productContainer.innerHTML += `

        <article class="product-card">

            <img src="${product.thumbnail}" alt="${product.title}" width="200" height="200">

            <h3>${product.title}</h3>

            <p>${product.description}</p>

            <span class="product-price">

                ₹${product.price}

            </span>

            <a href="#" class="btn">

                Buy Now

            </a>

        </article>

        `;

    });

}



/* =========================================
   START PROGRAM
========================================= */

getProducts();


/* ================================
   DARK / LIGHT THEME
================================ */

// Get the button

const themeButton = document.getElementById("themeButton");

// Check if dark mode was saved

let savedTheme = localStorage.getItem("theme");

// If dark mode was previously selected

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeButton.innerHTML = "☀";

}

// Button click

themeButton.addEventListener("click", function(){

    // Toggle dark class

    document.body.classList.toggle("dark");

    // Check current mode

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML = "☀";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML = "🌙";

    }

});