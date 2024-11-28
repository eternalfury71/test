// LIST

const data = [
  {
    link: "#chair.html",
    title: "Slim PRO",
    desc: "Cтул Slim PRO предназначено не только для работы за компьютером, но и для дополнения антуража помещения. Красиво выполненная конструкция не только изысканно смотрится.",
    price: "83000",
    img: "images/stul_kresla/SlimPRO.png",
    code: "6702",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Slim",
    desc: "Изящные, легкие, универсальные и эргономичные кресла Slim подойдут для кабинета руководителя. А различные модификации этой серии позволят оформить в едином стиле различные зоны офиса.",
    price: "79000",
    img: "images/stul_kresla/slim.png",
    code: "6101",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Slim DC",
    desc: "Кресло Slim DC - это офисное кресло для руководителя спинка и сидение которого выполнена из из мягкой сетки.",
    price: "134100",
    img: "images/stul_kresla/GloryDC.png",
    code: "6987",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Hi-tech",
    desc: "Модель Hi-tech изготовлена в модном дизайне, а значит, будет отлично смотреться в любом современном интерьере.",
    price: "95500",
    img: "images/stul_kresla/Hi-tech.png",
    code: "6203",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Hi-tech PRO",
    desc: "Профилированная спинка – спинка, имеет анатомически правильную форму, повторяющую естественный изгиб позвоночника.",
    price: "125000",
    img: "images/stul_kresla/Hi-techPRO.png",
    code: "6057",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Prestige DC",
    desc: "Утонченность и функциональность, высокое качество обивочных материалов и комплектующих – сочетание, достойное современного офисного кресла.",
    price: "122000",
    img: "images/stul_kresla/PrestigeDC.png",
    code: "6041",
    parent: "computer",
    category: "computer_chair",
  },
  {
    link: "#chair.html",
    title: "Comfort DC",
    desc: "Многоцелевое кресло нового поколения, олицетворяет новые стандарты простоты, универсальной применимости, качества и комфорта.",
    price: "97610",
    img: "images/stul_kresla/ComfortDC.png",
    code: "6807",
    parent: "computer",
    category: "computer_chair",
  },
];

// SHOW

let computerChairList = document.getElementById("computerChairList_____SHOW");

function displayList(array, uniqId) {
  uniqId.innerHTML = "";

  array.map((a) => {
    let formatter = function (priceSum) {
      let price = priceSum.toString();
      let formattedPrice = "";
      for (let i = 0; i < price.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedPrice = " " + formattedPrice;
        }
        formattedPrice = price[price.length - 1 - i] + formattedPrice;
      }
      return formattedPrice;
    };

    let productItem = document.createElement("div");
    productItem.classList.add("product_item");

    productItem.innerHTML = `
        <a class="product_item_content" href="${a.link}">
            <img class="product_item_img" src="${a.img}" alt="Product">
            <div class="product_item_text">
                <h5>${a.title} | code: ${a.code}</h5>
                <p>${a.desc}</p>
            </div>
        </a>
        <div class="product_item_price">
            <span class="product_item_price_text">Цена:</span>
            <br>
            <span class="product_item_price_cost">${formatter(
              a.price
            )} <span class="product_item_price_par">₸</span> </span>
            <a class="product_item_price_btn" data-code="${
              a.code
            }">В корзину</a>
        </div>
        `;

    uniqId.appendChild(productItem);
  });

  document.querySelectorAll(".product_item_price_btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productCode = btn.dataset.code;
      const product = data.find((item) => item.code === productCode);

      addToCart(product);
    });
  });
}

// PRODUCTS SORT

const compareCode = (codeA, codeB) => {
  if (!isNaN(Number(codeA)) && !isNaN(Number(codeB))) {
    return Number(codeA) - Number(codeB);
  }

  return codeA.localeCompare(codeB);
};

const sortingScenarios = {
  "по возрастанию цены": (a, b) => a.price - b.price,
  "по убыванию цены": (a, b) => b.price - a.price,
  "по коду": (a, b) => compareCode(a.code, b.code),
  "по названию": (a, b) => a.title.localeCompare(b.title),
};

function sortProducts(products, scenario) {
  const compare = sortingScenarios[scenario];

  return [...products].sort(compare);
}

document.querySelectorAll(".sorting_option li").forEach((item) => {
  item.addEventListener("click", () => {
    const scenario = item.textContent.trim();
    const sortedProducts = sortProducts(data, scenario);

    displayList(sortedProducts, computerChairList);
  });
});

//  STORE CART PRODUCT

const badge = document.querySelector(".open_cart_number");

function updateBadge() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  badge.textContent = "";
  let totalProductsQnty = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  badge.textContent = totalProductsQnty;
}

displayList(data, computerChairList);
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  const existedProduct = cart.find((item) => item.code === product.code);

  if (existedProduct) {
    existedProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateBadge();
}

updateBadge();
