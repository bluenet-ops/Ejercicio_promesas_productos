let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://fakestoreapi.com/products",{method: "GET"});
    promesa.then((response) => {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
        }).catch((error)=> console.log("Problema con el JSON", error));
    }).catch((err)=> console.log("Existió un problema con la solicitud", err));
} //getData

function createCards(products){
    // forEach: name, description, image, price
    products.forEach((product) => {
    // Crear una Card por cada producto con sus datos esenciales
    divData.insertAdjacentHTML("beforeend",
    `<div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="${product.title}" style="width: 100%; height: 250px; object-fit: contain;>
        <div class="card-body">
            <h5 class="card-title">${product.title.slice(0,50)}...</h5>
            <p class="card-text">${product.description.slice(0,100)}...</p>
            <p class="card-text">$ ${product.price}</p>
            <p class="card-text">${product.rating.rate} <i class="bi bi-star-fill" style="color: gold;"></i></p>
            <a href="#" class="btn btn-primary mb-3">Comprar</a>
        </div>
    </div>`);
    });
} //createCards

getData();
