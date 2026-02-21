const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// REČNIK PROIZVODA
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const productsList = [
  {
    id: 1,
    name: "Puppy Teething Ring",
    price: "RSD400",
    img: "https://a.storyblok.com/f/152022/c46b3286c6/teething-rings-safe-dog-dental-health-chew-toy.jpg",
    description:
      "This soft puppy chewing toy helps relieve the discomfort of teething and encourages healthy chewing habits.",
    images: [
      "https://a.storyblok.com/f/152022/c46b3286c6/teething-rings-safe-dog-dental-health-chew-toy.jpg",
      "https://www.ottoenvironmental.com/wp-content/uploads/2024/11/Puppy-Teething-Ring-1.jpeg",
      "https://www.ubuy.com.py/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMTM5MzU2NDItOTA0NC00MDY1LWI0MmMtN2Y5YmQ0ZjdhYTk4LjRhNDEwMTkxNWNmZjkwYTBmOWVkYzQyMmU2YzhkZmQwLmpwZWc.jpg",
      "https://m.media-amazon.com/images/I/51GyLBTNWIL._AC_UF1000,1000_QL80_.jpg",
    ],
  },
  {
    id: 2,
    name: "Rope Dog Toy",
    price: "RSD250",
    img: "https://harrybarker.com/cdn/shop/products/harry-barker-teal-rope-bone-toy_1200x.png?v=1631630853",
    description:
      "Durable rope toy perfect for tug-of-war and fetch. Keeps dogs active and strengthens their teeth.",
    images: [
      "https://harrybarker.com/cdn/shop/products/harry-barker-teal-rope-bone-toy_1200x.png?v=1631630853",
      "https://www.kazoo.com.au/cdn/shop/products/13741_Kazoo_BraidedRopeKnotBone_XLarge.png?v=1755067869&width=900",
      "https://mobileimages.lowes.com/productimages/05604b92-6276-4ce8-9114-10c994a9d2a0/61151755.jpg?size=pdhism",
      "https://www.kohepets.com.sg/cdn/shop/files/vetreska-cherry-knot-rope-dog-toy.jpg?v=1719311548",
    ],
  },
  {
    id: 3,
    name: "Rubber Chew Bone Toy",
    price: "RSD100",
    img: "https://workshoptools.com/cdn/shop/files/hmpfsb1224202404181324298341.jpg?v=1717520426",
    description:
      "A strong rubber chew toy that keeps your pet entertained and supports dental health.",
    images: [
      "https://workshoptools.com/cdn/shop/files/hmpfsb1224202404181324298341.jpg?v=1717520426",
      "https://www.petway.com.cy/wp-content/uploads/2022/05/ezgif-4-10d6739b4c.jpg",
      "https://m-pets.com/cdn/shop/files/Untitled_design_52_a98968b4-8993-4079-b4fc-a0f6f6c97fff.png?v=1736326445&width=800",
      "https://s7d2.scene7.com/is/image/PetSmart/5365579?fmt=webp&wid=400&hei=400",
    ],
  },
  {
    id: 4,
    name: "Cat Tree",
    price: "RSD1500",
    img: "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3324377-back-1",
    description:
      "Multi-level cat tree designed for climbing, scratching, and lounging, keeping your cat active, entertained, and comfortable.",
    images: [
      "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3324377-back-1",
      "https://i5.walmartimages.com/seo/Alden-Design-61-Cat-Tree-with-Condo-and-Scratching-Post-Tower-Beige_b7386034-b420-4385-8276-6f4e5b8749f6.a67d3d8324cfe50c69ec07a3bad8a2c2.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "https://media.zooplus.com/bilder/9/400/68997_pla_natural_paradise_xl_creme_fg_0442_9.jpg",
      "https://www.catrygroup.com/cdn/shop/files/Trinity_CT240359.png?v=1753229541&width=416",
    ],
  },
  {
    id: 5,
    name: "Cat Scratching Post with Toy",
    price: "RSD900",
    img: "https://img-us.aosomcdn.com/thumbnail/100/n0/product/2024/11/13/sls0d3193230a2ae2.jpg",
    description:
      "Sturdy scratching post with attached toy to keep your cat entertained, satisfy scratching instincts, and protect your furniture.",
    images: [
      "https://img-us.aosomcdn.com/thumbnail/100/n0/product/2024/11/13/sls0d3193230a2ae2.jpg",
      "https://i.ebayimg.com/images/g/PUQAAOSwasFl1YeX/s-l400.jpg",
      "https://www.tjhughes.co.uk/cdn/shop/products/Z1qoVwc_Je_sHNah74PDUg_ROs2dQY0y5w3SZJ7V6VztedhELu_Fc6gwTPj9mbXMwk_800x.jpg?v=1701440059",
      "https://m.media-amazon.com/images/I/81eHnxpmDBL.jpg",
    ],
  },
  {
    id: 6,
    name: "Cat Teaser Wand Toy",
    price: "RSD200",
    img: "https://www.vetnpetdirect.com.au/cdn/shop/products/Go-Cat-Da-Bird-Pull-Apart-Rod-web_2048x.jpg?v=1621322372",
    description:
      "Interactive wand toy to engage your cat in playful exercise, encouraging agility, hunting instincts, and endless fun.",
    images: [
      "https://www.vetnpetdirect.com.au/cdn/shop/products/Go-Cat-Da-Bird-Pull-Apart-Rod-web_2048x.jpg?v=1621322372",
      "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3982089-center-1",
      "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3804071-center-2",
      "https://i.ebayimg.com/images/g/10oAAOSwXUVlBfjr/s-l1200.jpg",
    ],
  },
  {
    id: 7,
    name: "Cat Interactive Toy with a Ball and Spring Teaser",
    price: "RSD1200",
    img: "https://m.media-amazon.com/images/I/71C2Gt6x38L._AC_UF1000,1000_QL80_.jpg",
    description:
      "Engaging cat toy with a bouncing ball and spring teaser to keep your feline entertained, active, and mentally stimulated.",
    images: [
      "https://m.media-amazon.com/images/I/71C2Gt6x38L._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/51EwGFj1sJL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/617iHaUEWLL.jpg",
      "https://image.made-in-china.com/202f0j00WrObqETHhkoS/Voovpet-Brand-Improve-Cat-Iq-and-Relieve-Anxiety-Funny-Toys-with-Spring-and-Rotating-Teaser-Ball-Cat-Toy-for-Indoor-Cats-Kitten.webp",
    ],
  },
  {
    id: 8,
    name: "Small Dog Hypoallergenic",
    price: "RSD1400",
    img: "https://rsplusb2bee.blob.core.windows.net/df0a48b4-be01-44e1-1351-08d9ae8120be/SalesItemImage/90d5e4df-b583-455f-b6be-52e345d38012/b320abb5-e6ac-4fee-afce-a98292e1485f-RC-HypoAll-Small-Dog-1kg_w536.jpg",
    description:
      "Specially formulated hypoallergenic food for small dogs, supporting digestion and overall health while minimizing allergic reactions.",
    images: [
      "https://rsplusb2bee.blob.core.windows.net/df0a48b4-be01-44e1-1351-08d9ae8120be/SalesItemImage/90d5e4df-b583-455f-b6be-52e345d38012/b320abb5-e6ac-4fee-afce-a98292e1485f-RC-HypoAll-Small-Dog-1kg_w536.jpg",
      "https://media.zooplus.com/bilder/5/400/rc_vet_dry_doghypo_mv_eretailkit_1_de_de_5.jpg",
      "https://www.petland.ca/cdn/shop/files/royal-canin-royal-canin-x-small-adult-dry-dog-food-1173817209.png?v=1750180773",
      "https://vcahospitals.com/-/media/2/project/vca/shop/product-images/r/royal-canin-size-health-nutrition-small-adult-dry-dog-food/41512514ea/41512514ea_front_small.jpg?rev=8d55414f745b4b3f97aed4e0019f4687",
    ],
  },
  {
    id: 9,
    name: "Dry Food",
    price: "RSD800",
    img: "https://www.homesalive.ca/media/catalog/product/a/c/acana_wild_prairie_600_600_px_4_.jpg",
    description:
      "Nutritious and balanced dry food to keep your pet healthy, energetic, and satisfied every day.",
    images: [
      "https://www.homesalive.ca/media/catalog/product/a/c/acana_wild_prairie_600_600_px_4_.jpg",
      "https://www.animed.co.uk/media/catalog/product/f/c/fcn22-hero_image-dry-digestive_page1_master_4_psfroducdhswxo4m.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      "https://www.notcutts.co.uk/media/catalog/product/cache/708c8744ef16531d9175d00beef86676/2/0/20017398.jpg",
      "https://images.albertsons-media.com/is/image/ABS/960523472-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
    ],
  },
  {
    id: 10,
    name: "Knitted Cozy Sweater",
    price: "RSD2000",
    img: "https://i5.walmartimages.com/seo/Projectretro-Dog-Sweater-Warm-Sweater-Winter-Clothes-Puppy-Soft-Coat-Pure-Color-Dog-Sweater-for-Small-Medium-and-Large-Dogs-Pet-Clothing-Boy-Girl_7206b8f8-8986-48e8-828a-dc038875eaa7.38ad7d23a93418222c601911e9084ae9.jpeg",
    description:
      "Soft and stylish knitted sweater that keeps your pet warm and comfortable, perfect for chilly days and cozy moments.",
    images: [
      "https://i5.walmartimages.com/seo/Projectretro-Dog-Sweater-Warm-Sweater-Winter-Clothes-Puppy-Soft-Coat-Pure-Color-Dog-Sweater-for-Small-Medium-and-Large-Dogs-Pet-Clothing-Boy-Girl_7206b8f8-8986-48e8-828a-dc038875eaa7.38ad7d23a93418222c601911e9084ae9.jpeg",
      "https://www.cocoandpud.com.au/cdn/shop/products/Coco_Pud-CocoCableWoolDogSweater-Olive.png?v=1713766223&width=1080",
      "https://cdn11.bigcommerce.com/s-4l51jzs8vn/images/stencil/500x659/products/46562/92947/271550__22248.1740090980.jpg?c=1",
      "https://i5.samsclubimages.com/asr/f43a9705-d52c-4bc8-9d38-ab2caad3fade.be5589b629a1d6630de33d1ef59668ac.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    ],
  },
  {
    id: 11,
    name: "Winter Cat Coat",
    price: "RSD1650",
    img: "https://catharnessaustralia.com.au/cdn/shop/files/BlackPuffer-BarelyThereLitter0216.jpg?crop=center&height=4100&v=1763259367&width=4100",
    description:
      "Keep your cat warm and cozy during chilly days with this soft, comfortable winter coat designed for a perfect fit.",
    images: [
      "https://catharnessaustralia.com.au/cdn/shop/files/BlackPuffer-BarelyThereLitter0216.jpg?crop=center&height=4100&v=1763259367&width=4100",
      "https://i.pinimg.com/736x/04/53/9a/04539aa957f3dc770b30017d9ccd548a.jpg",
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/a3caad519f56c5e5aef4a2e1ef0f2d6a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      "https://m.media-amazon.com/images/I/81Vo8jkB7aL.jpg",
    ],
  },
  {
    id: 12,
    name: "Pet Bandana Collar",
    price: "RSD800",
    img: "https://assets.mgimgs.com/mgimgs/rk/images/dp/wcm/202542/0002/ruffle-dog-bandana-5-o.jpg",
    description:
      "Stylish and comfortable bandana collar to give your pet a fashionable look while keeping them cozy and secure.",
    images: [
      "https://assets.mgimgs.com/mgimgs/rk/images/dp/wcm/202542/0002/ruffle-dog-bandana-5-o.jpg",
      "https://www.bandanaswholesale.com/cdn/shop/products/RedDogBandana_400x400.jpg?v=1610854186",
      "https://shop.batcon.org/cdn/shop/products/c4f0b233f2fc1fc220d0dbe02fe51608.jpg?v=1681441593&width=1946",
      "https://www.spoiltrottenpets.com/cdn/shop/files/mediumzoomedcopy.jpg?v=1700482674&width=416",
    ],
  },
  {
    id: 13,
    name: "Natural Oatmeal Shampoo",
    price: "RSD500",
    img: "https://naturaldog.com/cdn/shop/products/SSOS-01.jpg?crop=center&height=630&v=1680361336&width=1200",
    description:
      "Soothing natural oatmeal shampoo that gently cleanses and nourishes your pet’s coat, leaving it soft, shiny, and healthy.",
    images: [
      "https://naturaldog.com/cdn/shop/products/SSOS-01.jpg?crop=center&height=630&v=1680361336&width=1200",
      "https://onlydogsallowed.co.uk/cdn/shop/products/SensitiveSkinShampoo-WebsiteNEW_563x563_61ae76b3-14e9-4fa7-a386-e731d1bf4eb2_600x600.jpg?v=1611551380",
      "https://creaturelandstore.com/cdn/shop/products/natural-dog-company-unscented-itchy-dog-shampoo-12oz-360427.jpg?v=1644387372&width=2048",
      "https://naturaldog.com/cdn/shop/files/SHLV-01.jpg?crop=center&height=630&v=1705442219&width=1200",
    ],
  },
  {
    id: 14,
    name: "Paw Soother",
    price: "RSD650",
    img: "https://naturaldog.com/cdn/shop/products/PAWS4T.png?v=1619895180&width=1024",
    description:
      "Gentle paw soother to moisturize and protect your pet’s paws, keeping them soft and healthy after walks or playtime.",
    images: [
      "https://naturaldog.com/cdn/shop/products/PAWS4T.png?v=1619895180&width=1024",
      "https://down-sg.img.susercontent.com/file/sg-11134207-7rbk0-lku9n3f7e4ag67",
      "https://naturaldog.com/cdn/shop/products/SNSR4T.png?v=1619895004&width=1024",
      "https://www.baxterbaileycompany.com/cdn/shop/products/PawSootherImage1.jpg?v=1585183393",
    ],
  },
  {
    id: 15,
    name: "Pet Grooming Clippers KIt",
    price: "RSD3000",
    img: "https://i.ebayimg.com/images/g/eXYAAeSwyydoYe~a/s-l400.png",
    description:
      "Complete pet grooming kit for keeping your furry friends clean, healthy, and looking their best. Perfect for all coat types.",
  },
];

if (window.location.pathname.includes("sproduct.html") && productId) {
  const product = productsList.find((p) => p.id == productId);

  if (product) {
    const mainImg = document.getElementById("MainImg");
    mainImg.src = product.img;

    document.querySelector(".single-pro-details h4").innerText = product.name;
    document.querySelector(".single-pro-details h2").innerText = product.price;
    document.querySelector(".single-pro-details span").innerText =
      product.description;

    const smallImgsContainer = document.getElementById("smallImgs");
    smallImgsContainer.innerHTML = "";

    product.images.forEach((imgSrc) => {
      const div = document.createElement("div");
      div.classList.add("small-img-col");
      div.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="Product image" />`;
      smallImgsContainer.appendChild(div);
    });

    const smallImgs = document.querySelectorAll(".small-img");
    smallImgs.forEach((img) => {
      img.addEventListener("click", () => {
        mainImg.src = img.src;
      });
    });
  } else {
    document.querySelector(".single-pro-details h4").innerText =
      "Product not found.";
  }
}

// Cart
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCart = document.querySelector(".icon-cart");
let iconCartSpan = document.querySelector(".icon-cart span");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");

let listProducts = [];
let cart = [];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToHTML = () => {
  // add new datas
  listProductHTML.innerHTML = "";
  if (listProducts.length > 0) {
    // if has data
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `<div onclick="window.location.href='sproduct.html?id=${product.id}';"><img src="${product.img}" alt=""></div>
                <h2>${product.name}</h2>
                <div class="price">${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
      listProductHTML.appendChild(newProduct);
    });
  } else {
    console.log("No data");
  }
};
listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let id_product = positionClick.parentElement.dataset.id;
    addToCart(id_product);
  }
});
const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
};
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.id = item.product_id;

      let info = productsList.find((p) => p.id == item.product_id);
      if (!info) console.log("Nema proizvoda");

      let priceNumber = info.price
        ? Number(info.price.replace("RSD", "").trim())
        : 0;
      listCartHTML.appendChild(newItem);
      newItem.innerHTML = `
            <div class="image">
                    <img src="${info.img}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">${priceNumber * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
    });
  }
  iconCartSpan.innerText = totalQuantity;
};

listCartHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantityCart(product_id, type);
  }
});
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    let info = cart[positionItemInCart];
    switch (type) {
      case "plus":
        cart[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
};

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
    });
};
initApp();
