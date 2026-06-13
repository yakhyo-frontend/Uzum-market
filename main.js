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

const cardsDiv1 = document.querySelector(".cards-1");
const cardsDiv2 = document.querySelector(".cards-2");
const cardsDiv3 = document.querySelector(".cards-3");

const getProducts1 = () => {
  fetch(`https://fakestoreapi.com/products/?limit=8`)
    .then((res) => res.json())
    .then((data) => {
      showProducts1(data);
    })
    .catch((err) => console.error(err));
};

function showProducts1(data) {
  cardsDiv1.innerHTML = "";
  data.forEach((element) => {
    const { image, price, description, rating } = element;
    cardsDiv1.innerHTML += `
        <div class="card">
          <div class="wrapper-card">
            <p class="heart-card">♡</p>
            <img class="card-img" src="${image}" />
          </div>
          <p class="description">${description.slice(0, 60)}...</p>
          <p class="rating">☆ ${rating.rate}</p>
          <div class="price-box">
            <h3 class="price">${price} so'm</h3>
            <h3 class="add">+</h3>
          </div>
        </div>
    `;
  });
}

const getProducts2 = () => {
  fetch(`https://fakestoreapi.com/products/?limit=16`)
    .then((res) => res.json())
    .then((data) => {
      showProducts2(data);
    })
    .catch((err) => console.error(err));
};

function showProducts2(data) {
  cardsDiv2.innerHTML = "";

  data.forEach((element, index) => {
    if (index < 8) return;

    const { image, price, description, rating } = element;
    cardsDiv2.innerHTML += `
        <div class="card">
          <div class="wrapper-card">
            <p class="heart-card">♡</p>
            <img class="card-img" src="${image}" />
          </div>
          <p class="description">${description.slice(0, 60)}...</p>
          <p class="rating">☆ ${rating.rate}</p>
          <div class="price-box">
            <h3 class="price">${price} so'm</h3>
            <h3 class="add">+</h3>
          </div>
        </div>
    `;
  });
}

const getProducts3 = () => {
  fetch(`https://fakestoreapi.com/products/?limit=20`)
    .then((res) => res.json())
    .then((data) => {
      showProducts3(data);
    })
    .catch((err) => console.error(err));
};

function showProducts3(data) {
  cardsDiv3.innerHTML = "";

  data.forEach((element, index) => {
    if (index < 16) return;

    const { image, price, description, rating } = element;
    cardsDiv3.innerHTML += `
        <div class="card">
          <div class="wrapper-card">
            <p class="heart-card">♡</p>
            <img class="card-img" src="${image}" />
          </div>
          <p class="description">${description.slice(0, 60)}...</p>
          <p class="rating">☆ ${rating.rate}</p>
          <div class="price-box">
            <h3 class="price">${price} so'm</h3>
            <h3 class="add">+</h3>
          </div>
        </div>
    `;
  });
}

getProducts1();
getProducts2();
getProducts3();
