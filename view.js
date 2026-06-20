function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProductDetail(product) {
  const container = document.querySelector(".detail-wrapper");
  if (!container) return;

  container.innerHTML = `
    <div class="detail-card">
      <img class="detail-image" src="${product.image}" alt="${product.title}" />
      <div class="detail-info">
        <h1 class="detail-title">${product.title}</h1>
        <p class="detail-price">${product.price} so'm</p>
        <p class="detail-rating">Rating: ${product.rating.rate} (${product.rating.count} ta sharh)</p>
        <p class="detail-description">${product.description}</p>
        <button class="back-btn" onclick="window.location.href='index.html'">Orqaga</button>
      </div>
    </div>
  `;
}

function loadProduct() {
  const id = getQueryParam("id");
  if (!id) {
    document.querySelector(".detail-wrapper").innerHTML =
      '<p class="error-message">Mahsulot topilmadi.</p>';
    return;
  }

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Mahsulot olishda xato");
      return res.json();
    })
    .then((product) => {
      renderProductDetail(product);
    })
    .catch((err) => {
      console.error(err);
      document.querySelector(".detail-wrapper").innerHTML =
        '<p class="error-message">Mahsulotni yuklashda xatolik yuz berdi.</p>';
    });
}

window.addEventListener("DOMContentLoaded", loadProduct);
