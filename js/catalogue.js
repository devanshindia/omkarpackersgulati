/*=====================================================
        OMKAR PACKERS GULATI
        PRODUCT CATALOGUE
=====================================================*/

const productGrid = document.querySelector("#productGrid");

const searchBox = document.querySelector("#searchBox");

const seriesFilter = document.querySelector("#seriesFilter");

let products = [];

let filteredProducts = [];

/************************************************
LOAD PRODUCTS
************************************************/

async function loadProducts(){

    try{

        const response = await fetch("data/products.json");

        products = await response.json();

        filteredProducts = [...products];

        createSeries();

        renderProducts(filteredProducts);

    }

    catch(error){

        console.error(error);

    }

}

/************************************************
RENDER PRODUCTS
************************************************/

function renderProducts(data){

    if(!productGrid) return;

    productGrid.innerHTML="";

    data.forEach(product=>{

        const card=document.createElement("div");

        card.className="productCard";

        card.innerHTML=`

        <div class="productImage">

            <img
            loading="lazy"
            src="${product.images[0]}"
            alt="${product.name}">

        </div>

        <div class="productContent">

            <span class="series">

            ${product.series}

            </span>

            <h3>

            ${product.name}

            </h3>

            <p>

            Suitable for:

            ${product.application.join(", ")}

            </p>

            <div class="gst">

            GST : ${product.tax}

            </div>

            <div class="hsn">

            HSN : ${product.hsn}

            </div>

            <button
            class="viewButton"
            onclick="openGallery(${product.id})">

            View Images

            </button>

        </div>

        `;

        productGrid.appendChild(card);

    });

}

/************************************************
SEARCH
************************************************/

if(searchBox){

searchBox.addEventListener("input",()=>{

const value=searchBox.value.toLowerCase();

filteredProducts=products.filter(product=>{

return(

product.name.toLowerCase().includes(value)

||

product.series.toLowerCase().includes(value)

||

product.application.join(" ").toLowerCase().includes(value)

);

});

renderProducts(filteredProducts);

});

}

/************************************************
SERIES FILTER
************************************************/

function createSeries(){

if(!seriesFilter) return;

const series=[

...new Set(products.map(item=>item.series))

];

seriesFilter.innerHTML=

'<option value="All">All Series</option>';

series.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.innerText=item;

seriesFilter.appendChild(option);

});

}

if(seriesFilter){

seriesFilter.addEventListener("change",()=>{

const value=seriesFilter.value;

if(value==="All"){

filteredProducts=[...products];

}

else{

filteredProducts=products.filter(product=>{

return product.series===value;

});

}

renderProducts(filteredProducts);

});

}

/************************************************
IMAGE GALLERY
************************************************/

function openGallery(id){

const product=products.find(p=>p.id===id);

if(!product) return;

const overlay=document.createElement("div");

overlay.className="galleryOverlay";

let images="";

product.images.forEach(image=>{

images+=`

<img

src="${image}"

alt="${product.name}"

loading="lazy">

`;

});

overlay.innerHTML=`

<div class="galleryBox">

<div class="galleryHeader">

<h2>

${product.name}

</h2>

<button onclick="this.parentNode.parentNode.parentNode.remove()">

✕

</button>

</div>

<div class="galleryImages">

${images}

</div>

</div>

`;

document.body.appendChild(overlay);

}

/************************************************
LOAD
************************************************/

loadProducts();