import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = parseInt(
    currentProdElem.querySelector(".productQuantity").innerText
  );
  let price = parseFloat(
    currentProdElem
      .querySelector(".productPrice")
      .innerText.replace("Rs.", "")
      .trim()
  );

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = price * quantity;
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    showToast("add", id);
  }

  if (existingProd) {
    return false;
  }

  price = price * quantity;
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  showToast("add", id);
};
