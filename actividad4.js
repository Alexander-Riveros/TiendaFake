const container = document.getElementById('product-container');

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    products.forEach(product => {
      const col = document.createElement('div');
      col.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top p-3" style="height: 200px; object-fit: contain;" alt="${product.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text text-truncate">${product.description}</p>
            <div class="mt-auto">
              <p class="fw-bold text-primary">$${product.price}</p>
              <button class="btn btn-outline-primary btn-sm w-100">Agregar al carrito</button>
            </div>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  } catch (error) {
    container.innerHTML = `<div class="alert alert-danger">Error cargando productos: ${error}</div>`;
  }
}

fetchProducts();
