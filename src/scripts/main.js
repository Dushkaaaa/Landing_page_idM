"use strict";

const API = "https://brandstestowy.smallhost.pl/api/random";

const fetchData = async () => {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Can't load data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const productBody = document.getElementById("productBody");

fetchData().then((result) => {
  const product = result.data;

  product.map((item, index) => {
    productBody.innerHTML += `
      <article class="card products__card"
        title="${item.text}"
        data-id="${item.id}"
        data-title="${item.text}"
        data-image="${item.image}"
      >
        <p class="card__id">ID: ${item.id}</p>
        <img
          src="${item.image}"
          alt="${item.text}"
          class="card__img"
        />
      </article>
    `;

    if (index === 4) {
      productBody.innerHTML += `
        <article class="product__banner">
          <img
            src="./assets/img/banner.png"
            alt="banner"
            class="card__banner"
          />
        </article>
      `;
    }
  });
});

const popup = document.querySelector(".popup");
const popupDetails = document.querySelector(".details");

productBody.addEventListener("click", function (e) {
  const card = e.target.closest(".products__card");

  if (!card) {
    return;
  }

  const id = card.dataset.id;
  const title = card.dataset.title;
  const image = card.dataset.image;

  popupDetails.innerHTML = `
    <div class="details__top">
      <p>ID: ${id}</p>
      <div class="details__left-side" style="cursor:pointer;">
        <img src="./assets/icons/close.png" alt="close icon" />
        <p>CLOSE</p>
      </div>
    </div>
    <img src="${image}" alt="${title}" class="details__photo" />
  `;
  popup.style.display = "block";
});

document.body.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("popup__bg") ||
    e.target.closest(".details__left-side")
  ) {
    popup.style.display = "none";
  }
});

const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

burgerMenu.onclick = () => menu.classList.add('open');
closeMenu.onclick = () => menu.classList.remove('open');
