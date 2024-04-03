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

    [
      {
        id: 1,
        name: "18TBX100",
        category: "Speaker",
        brand: "B&C",
        price: 12000.0,
        stock: 25,
        description:
          "Aluminum demodulating ring for low distortion. Double silicone spider for optimized compliance. 2400W power capacity. 100mm copper voice coil. 35 - 1000Hz response.",
        image:
          "https://cdn.shopify.com/s/files/1/0536/9639/7492/products/730_360x.jpg?v=1616334421",
      },
      {
        id: 2,
        name: "12 MH 32",
        category: "Speaker",
        brand: "B&C",
        price: 9800.0,
        stock: 50,
        description:
          "Frequency Range 50-3000 Hz. 76mm Voice Coil Diameter. Copper winding. Glass Fibre former. 14mm winding depth. 8mm magnetic gap depth. 1.4T flux density.",
        image:
          "https://vmt.in/cdn/shop/products/698_2048x2048.jpg?v=1616334369",
      },
      {
        id: 3,
        name: "SRX 812",
        category: "Speaker + Box",
        brand: "JBL",
        price: 25000.0,
        stock: 10,
        description:
          "SRX812: 12” woofer. Portable, versatile. Ideal for musicians, DJs, public speaking. M10 suspension points. Suitable for various venues.",
        image:
          "https://vmt.in/cdn/shop/products/srx812_1_2048x2048.jpg?v=1632130808",
      },
      {
        id: 4,
        name: "18 SW 115",
        category: "Speaker",
        brand: "B&C",
        price: 50000.0,
        stock: 10,
        description:
          "18 Bass loud speaker.1700W.8 Ohm. 97dB. 35-1500Hz. Neodym Magnet. TWP Waterproof. Xmax +/- 14mm.",
        image:
          "https://vmt.in/cdn/shop/products/18sw115_2048x2048.jpg?v=1623053586",
      },
      {
        id: 5,
        name: "DBR 12",
        category: "Box",
        brand: "YAMAHA",
        price: 50000.0,
        stock: 10,
        description:
          "DBR 12: 12” woofer. Portable, versatile. Ideal for musicians, DJs, public speaking. M10 suspension points. Suitable for various venues.",
        image:
          "https://vmt.in/cdn/shop/products/720_2048x2048.jpg?v=1616334399",
      },
      {
        id: 6,
        name: "DBR 12",
        category: "Box",
        brand: "YAMAHA",
        price: 50000.0,
        stock: 10,
        description:
          "DBR 12: 12” woofer. Portable, versatile. Ideal for musicians, DJs, public speaking. M10 suspension points. Suitable for various venues.",
        image: "../assets/dbr12.webp",
      },
    ];
    productClone.querySelector(".category").textContent = category;

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productStock").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
    productClone.querySelector(".productActualPrice").textContent = `Rs.${
      price * 1.5
    }`;

    productContainer.append(productClone);
  });
};
