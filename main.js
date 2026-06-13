// Slides

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function changeSlide(newIndex) {
  slides[currentIndex].classList.remove("active");

  if (newIndex >= slides.length) {
    currentIndex = 0;
  } else if (newIndex < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = newIndex;
  }

  slides[currentIndex].classList.add("active");
}

function nextSlide() {
  changeSlide(currentIndex + 1);
}

function prevSlide() {
  changeSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

// Cards

const API = `https://fakestoreapi.com/products`;
const cardsDiv = document.querySelector(".cards");

const getProducts = (url) => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      showProducts(data);
    })
    .catch((error) => {
      console.error(error);
      Toastify({
        text: "Invalid API URL",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #b00000, #c93d3d)",
        },
      }).showToast();
    });
};

getProducts(API);

function showProducts(data) {
  cardsDiv.innerHTML = "";

  data.forEach((element) => {
    const { id, image, price, description, rating } = element;

    cardsDiv.innerHTML += `
            <div class="card">
              <div class="wrapper-card">
              <p class="heart-card">♡</p>
              <img class="card-img" src="${image}" alt="" />
              
              </div>

              <p class="description">${description.slice(0, 80)}</p>
              <p class="rating">☆ ${rating.rate}</p>
              <div class="price-box">
              <h3 class="price">${price} so'm</h3>
              <h3 class="add">+</h3>
              </div>
            </div>
    `;
  });
}
