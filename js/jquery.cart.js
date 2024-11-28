const btnLocation = document.getElementById("open_cart_btn");

// utils
const getCartProducts = () => JSON.parse(localStorage.getItem("cart")) || [];

const saveCartProducts = (cartProducts) => {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
};

function formatterCart(priceSum) {
  let price = priceSum.toString();
  let formattedPrice = "";
  for (let i = 0; i < price.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedPrice = " " + formattedPrice;
    }
    formattedPrice = price[price.length - 1 - i] + formattedPrice;
  }
  return formattedPrice;
}

function calculateTotalPrice(cartProducts) {
  return cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
}

function renderCartProductsHTML(cartProducts) {
  const allCartProducts = cartProducts.map((product) => {
    return `
      <ul class="jqcart_tbody" data-id="${product.code}">
        <li class="jqcart_small_td">
          <img src="${product.img}" alt="${product.title}">
        </li>
        <li>
          <div class="jqcart_nd">
            <a href="${product.link}">${product.title}</a>
          </div>
        </li>
        <li></li>
        <li class="jqcart_price">${formatterCart(product.price)} тг</li>
        <li>
          <div class="jqcart_pm">
            <input type="text" class="jqcart_amount" value="${
              product.quantity
            }">
            <span class="jqcart_incr" data-incr="1" data-code=${product.code}>
              <i class="fa fa-angle-up" aria-hidden="true"></i>
            </span>
            <span class="jqcart_incr" data-incr="-1" data-code=${product.code}>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
        </li>
        <li class="jqcart_sum">${formatterCart(
          product.price * product.quantity
        )} тг</li>
      </ul>
    `;
  });

  return allCartProducts.join("");
}

function renderCartModal() {
  const cartProducts = getCartProducts();
  const totalPrice = calculateTotalPrice(cartProducts);

  const productCartModal = document.createElement("div");
  productCartModal.classList.add("jqcart_layout");
  productCartModal.innerHTML = `
      <div class="jqcart_content">
        <div class="jqcart_table_wrapper">
          <div class="jqcart_manage_order">
            <ul class="jqcart_thead">
              <li></li>
              <li>ТОВАР</li>
              <li></li>
              <li>ЦЕНА</li>
              <li>КОЛИЧЕСТВО</li>
              <li>СТОИМОСТЬ</li>
            </ul>
            ${renderCartProductsHTML(cartProducts)}
          </div>
        </div>
        <div class="jqcart_manage_block">
          <div class="jqcart_btn">
            <button class="jqcart_open_form_btn">Оформить заказ</button>
            <form class="jqcart_order_form" style="opacity: 0">
              <input class="jqcart_return_btn" type="reset" value="Продолжить покупки">
            </form>
          </div>
          <div class="jqcart_subtotal">Итого: <strong>${formatterCart(
            totalPrice
          )}</strong> тг</div>
        </div>
      </div>
    `;

  productCartModal.addEventListener("click", (e) => {
    if (e.target === productCartModal) {
      productCartModal.remove();
    }
  });

  return productCartModal;
}

function renderModal() {
  const modal = document.querySelector(".jqcart_layout");

  if (modal) {
    modal.remove();
  }

  const cartModal = renderCartModal();
  document.body.appendChild(cartModal);

  document.querySelectorAll(".jqcart_incr").forEach((button) => {
    button.addEventListener("click", () => {
      const increment = parseInt(button.dataset.incr, 10);
      const productCode = button.dataset.code;
      console.log(increment, productCode);

      if (increment === 1) {
        incrementQty(productCode);
      } else if (increment === -1) {
        decrementQty(productCode);
      }
    });
  });
}

function incrementQty(productCode) {
  const cartProducts = getCartProducts();
  const product = cartProducts.find((p) => p.code === productCode);
  if (product) {
    product.quantity += 1;
    saveCartProducts(cartProducts);
    renderModal();
  }
}

function decrementQty(productCode) {
  const cartProducts = getCartProducts();
  const product = cartProducts.find((p) => p.code === productCode);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
    saveCartProducts(cartProducts);
    renderModal();
  }
}

btnLocation.addEventListener("click", () => {
  console.log("click!!!");
  renderModal();
});
