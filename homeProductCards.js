const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplete");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { id, name, category, brand, price, stock, description, image } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productStock").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
    productClone.querySelector(".productBrand").textContent = brand;
    productClone.querySelector(".productActualPrice").textContent = `Rs.${
      price * 1.25
    }`;

    productContainer.append(productClone);
  });
};
