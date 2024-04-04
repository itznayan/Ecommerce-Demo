const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProduct) => {
  return (cartValue.innerHTML = ` <i class="ri-shopping-cart-fill">${cartProduct.length}</i>`);
};
