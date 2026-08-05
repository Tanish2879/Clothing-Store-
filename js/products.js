
// const apiURL = "https://dummyjson.com/products/category/mens-shirts";



// const productContainer =
// document.querySelector(".product-grid");



// // Array that will store all products

// let products = [];



// // GET PRODUCTS FROM API

// async function getProducts(){


//     // Send request to API

//     const response = await fetch(apiURL);

//     // Convert response into JSON

//     const data = await response.json();
//     // Store products

//     products = data.products;
//     // Display them

//     displayProducts(products);

// }



// // DISPLAY PRODUCTS


// function displayProducts(productList){


//     // Remove previous products

//     productContainer.innerHTML = "";



//     productList.forEach(function(product){


//         productContainer.innerHTML += `

//         <article class="product-card">

//             <img src="${product.thumbnail}" alt="${product.title}" width="200" height="200">

//             <h3>${product.title}</h3>

//             <p>${product.description}</p>

//             <span class="product-price">

//                 ₹${product.price}

//             </span>

//             <a href="#" class="btn">

//                 Buy Now

//             </a>

//         </article>

//         `;

//     });

// }



//  //  START PROGRAM

// getProducts();


// // DARK / LIGHT THEME


// // Get the button

// const themeButton = document.getElementById("themeButton");

// // Check if dark mode was saved

// let savedTheme = localStorage.getItem("theme");

// // If dark mode was previously selected

// if(savedTheme === "dark"){

//     document.body.classList.add("dark");

//     themeButton.innerHTML = "Light Mode";

// }

// // Button click

// themeButton.addEventListener("click", function(){

//     // Toggle dark class

//     document.body.classList.toggle("dark");

//     // Check current mode

//     if(document.body.classList.contains("dark")){

//         localStorage.setItem("theme","dark");

//         themeButton.innerHTML = "Dark Mode";

//     }

//     else{

//         localStorage.setItem("theme","light");

//         themeButton.innerHTML = "Dark Mode";

//     }

// });


const apiURL = "https://dummyjson.com/products/category/mens-shirts";



const productContainer =
document.querySelector(".product-grid");



// Array that will store all products

let products = [];



// GET PRODUCTS FROM API

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



// DISPLAY PRODUCTS


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



 //  START PROGRAM

getProducts();


// SEARCH & SORT


// Get the elements

const searchBox = document.getElementById("searchBox");

const sortProducts = document.getElementById("sortProducts");


// Runs search + sort together and displays the result

function applyFilters(){


    // Start with all products

    let result = products;


    // SEARCH by title

    let searchValue = searchBox.value.toLowerCase();

    if(searchValue !== ""){

        result = result.filter(function(product){

            return product.title.toLowerCase().includes(searchValue);

        });

    }


    // SORT

    let sortValue = sortProducts.value;

    if(sortValue === "priceLowHigh"){

        result = result.slice().sort(function(a, b){ return a.price - b.price; });

    }

    else if(sortValue === "priceHighLow"){

        result = result.slice().sort(function(a, b){ return b.price - a.price; });

    }

    else if(sortValue === "nameAZ"){

        result = result.slice().sort(function(a, b){ return a.title.localeCompare(b.title); });

    }


    // Show the result

    displayProducts(result);

}


// Run applyFilters whenever the user types or changes the sort option

searchBox.addEventListener("input", applyFilters);

sortProducts.addEventListener("change", applyFilters);


// DARK / LIGHT THEME


// Get the button

const themeButton = document.getElementById("themeButton");

// Check if dark mode was saved

let savedTheme = localStorage.getItem("theme");

// If dark mode was previously selected

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeButton.innerHTML = "Light Mode";

}

// Button click

themeButton.addEventListener("click", function(){

    // Toggle dark class

    document.body.classList.toggle("dark");

    // Check current mode

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML = "Dark Mode";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML = "Dark Mode";

    }

});