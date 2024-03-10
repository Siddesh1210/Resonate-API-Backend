import express from "express";
const router = express.Router();
// https://resonate-api.cyclic.app/products
router.get("/",(req,res)=>res.send("Product Home Route Working"))

//https://resonate-api.cyclic.app/products/best-seller
router.get("/best-seller", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/grenade-black-steel_1_360x.png?v=1687251706",
      productName: "Grenade",
      price: 1999,
      rating: 4.1,
      description: "1.39 Display | BT Calling",
    },
    {
      productId: 2,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/ultimate-black_1_360x.png?v=1683028277",
      productName: "Ultimate",
      price: 4499,
      rating: 4.7,
      description: "Amoled | BT Calling",
    },
    {
      productId: 3,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/dagger-luxe-black-ss_1_360x.png?v=1686048646",
      productName: "Luxe",
      price: 3999,
      rating: 4.4,
      description: "1.96 HD Display | BT Calling",
    },
    {
      productId: 4,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/supernova-black_1_360x.png?v=1673500420",
      productName: "Supernova",
      price: 1899,
      rating: 4.3,
      description: "1.12 Display | BT Calling",
    },
    {
      productId: 5,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-orange_1_360x.png?v=1692944180",
      productName: "Asteroid",
      price: 2499,
      rating: 4.6,
      description: "600 Nits Display | 600mAh Battery",
    },
    {
      productId: 6,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-call-pro-max_360x.png?v=1687756591",
      productName: "Ninja Pro",
      price: 1999,
      rating: 4.4,
      description: "123 Sports Mode | BT Calling",
    },
    {
      productId: 7,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ninja-calling-pro-plus-black_1_360x.png?v=1675430352",
      productName: "Tank",
      price: 1499,
      rating: 4.1,
      description: "AMOLED | BT Calling",
    },
  ];
  return res.status(200).json({ data: data });
});

//https://resonate-api.cyclic.app/products/hot-deals
router.get("/hot-deals", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://www.gonoise.com/cdn/shop/files/Artboard1_008d9734-950c-4f5b-ba52-89576e0d7e79_480x.png?v=1709904212",
      productName: "Aura Buds",
      price: 1599,
      rating: 4.4,
      description: "Quad Mic | 60Hr Battery",
    },
    {
      productId: 2,
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/3_2f362f6e-d3c4-43aa-98db-39bae2d807da_600x.png?v=1676449007",
      productName: "Airdopes 170",
      price: 1499,
      rating: 4.5,
      description: "13mm Drivers |  50Hr Battery ",
    },
    {
      productId: 3,
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1400-4_400x.png?v=1624086223",
      productName: "Earbud BE1400",
      price: 1399,
      rating: 4.2,
      description: "Auto-noise Cancellation",
    },
    {
      productId: 4,
      productImage:
        "https://www.gonoise.com/cdn/shop/products/Frame20_9881146b-ff21-4de0-9afb-1e017d7171ea_360x.png?v=1705293690",
      productName: "VS102 Pro",
      price: 1799,
      rating: 4.7,
      description: "ANC | 70Hr Battery",
    },
    {
      productId: 5,
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_600x.png?v=1697625863",
      productName: "Airdopes Pro",
      price: 2499,
      rating: 4.6,
      description: "IPX5 Sweat | 15mm Driver",
    },
    {
      productId: 6,
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1200-2_400x.png?v=1624082627",
      productName: "Earbuds BE1200",
      price: 1999,
      rating: 4.3,
      description: "8D Sound | 60Hr Battery",
    },
    {
      productId: 7,
      productImage:
        "https://www.gonoise.com/cdn/shop/files/1.1_2_d71572ff-643a-4c75-a836-da9dbd21543a_360x.png?v=1698042678",
      productName: "Buds-X-Prime",
      price: 1599,
      rating: 4.5,
      description: "Quad Mic | ANC",
    },
  ];
  return res.status(200).json({ data: data });
});

//https://resonate-api.cyclic.app/products/just-trending
router.get("/just-trending", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://m.media-amazon.com/images/I/712raiwnj9L._AC_UY327_FMwebp_QL65_.jpg",
      productName: "HP 15s",
      price: 53990,
      rating: 4.8,
      description: "i5 12Gen | 16GB DDR4",
    },
    {
      productId: 2,
      productImage:
        "https://m.media-amazon.com/images/I/51GGNToj7aL._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Acer Nitro V",
      price: 78977,
      rating: 4.6,
      description: "Core i5 | Graphics 6GB",
    },
    {
      productId: 3,
      productImage:
        "https://m.media-amazon.com/images/I/61LKYyGTn7L._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Dell Inspire",
      price: 37999,
      rating: 4.2,
      description: "i3 10Gen | 512SSD",
    },
    {
      productId: 4,
      productImage:
        "https://m.media-amazon.com/images/I/71HzM0aj+9L._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Lenovo IdeaPad",
      price: 53959,
      rating: 4.5,
      description: "i5 12Gen | FHD IPS",
    },
    {
      productId: 5,
      productImage:
        "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Asus VivoBook",
      price: 29999,
      rating: 4.4,
      description: "Intel Celeron | 256SSD",
    },
    {
      productId: 6,
      productImage:
        "https://m.media-amazon.com/images/I/61aaFLxqFKL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Honor MagicBook",
      price: 46990,
      rating: 4.2,
      description: "i5 12Gen | FHD IPS",
    },
    {
      productId: 7,
      productImage:
        "https://m.media-amazon.com/images/I/51+SoS8bWbL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Lenovo V15",
      price: 36999,
      rating: 4.7,
      description: "i3 12Gen | 512SSD",
    },
  ];
  return res.status(200).json({ data: data });
});

//https://resonate-api.cyclic.app/products/allwatches
router.get("/allwatches", (req, res) => {
  const data = [
    {
      productId: 1,
      productName: "Invincible Plus",
      mrp: 21999,
      salePrice: 5999,
      rating: 4.7,
      description:
        "INVINCIBLE PLUS - a true masterpiece of technology and design featuring an AMOLED Display, Bluetooth calling, 4 GB storage, and much more!",
      category: "luxury",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "4GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/metal-body.png?v=1629202789",
          title: "Full Metal Body",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-8_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/invincible-plus-steel-website-sizeArtboard-10_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-11_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-12_540x.png?v=1678186270",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/web1_copy.jpg?v=1694025837",
    },
    {
      productId: 2,
      productName: "Cyclone",
      mrp: 12999,
      salePrice: 1599,
      rating: 4.3,
      description:
        "Fire-Boltt Cyclone, which comes in vibrant colors. It features a 40.6mm (1.6) HD round display, Bluetooth calling, motion sensor gaming.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_1_400x.png?v=1687418762",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_2_540x.png?v=1687418760",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_3_540x.png?v=1687418758",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_5_540x.png?v=1687418764",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Cyclone-desktop-2.jpg?v=1693984661",
    },
    {
      productId: 3,
      productName: "Gladiator",
      mrp: 10999,
      salePrice: 1399,
      rating: 4.2,
      description:
        " Fire-Boltt Gladiator smartwatch that comes with a 49.7mm (1.96) HD large display, Bluetooth calling, 123 sports modes, voice assistant, and rotating crown metal body.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_1_400x.png?v=1672284246",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_2_540x.png?v=1672284251",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_3_540x.png?v=1672284244",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_4_540x.png?v=1672284248",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/gladiator-desktop-banner_f427703b-49d7-45d6-9585-517e729e1ac0.jpg?v=1675343770",
    },
    {
      productId: 4,
      productName: "Ninja Call 2",
      mrp: 13999,
      salePrice: 2999,
      rating: 4.5,
      description:
        "A 43mm (1.7″ inch) Full-Touch Display for better view. You can also enjoy wireless calling with the feature of Bluetooth Calling along with a built-in mic and speaker.",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/1_8ba02f4a-9e30-4d06-9b37-fe825036ffaa_400x.png?v=1645170761",
        "https://www.fireboltt.com/cdn/shop/products/ninjacall2_black_03_540x.png?v=1668412850",
        "https://www.fireboltt.com/cdn/shop/products/3_78ed4b5f-6e01-4f90-ab29-3ac0676f04d8_540x.png?v=1668412850",
        "https://www.fireboltt.com/cdn/shop/products/4_99cfb9c1-4f36-4a34-aebb-de1f99226cff_540x.png?v=1668412850",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/12-Top_banner_8e063657-2bfb-437e-aa5b-37c6f2f537c2.jpg?v=1685438875",
    },
    {
      productId: 5,
      productName: "Dagger",
      mrp: 18999,
      salePrice: 3799,
      rating: 4.8,
      description:
        " Fire-Boltt Dagger is a 1.43 AMOLED Display smartwatch with Bluetooth calling, a full metal body, 466*466 pixels high resolution,.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_1_540x.png?v=1675249296",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_2_540x.png?v=1675249298",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_3_540x.png?v=1675249295",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_4_540x.png?v=1675249296",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/dagger-01_6194770f-fe32-49e2-9f83-44c26d878d97.gif?v=1675424527",
    },
    {
      productId: 6,
      productName: "Sphere",
      mrp: 19999,
      salePrice: 1999,
      rating: 4.4,
      description:
        " Fire-Boltt Introducing the ultimate smartwatch for the adventurer in you! Our rugged smartwatch is designed to withstand even the toughest environments",
      category: "sport",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/Black_01_400x.png?v=1677243430",
        "https://www.fireboltt.com/cdn/shop/products/Black_02_540x.png?v=1677243427",
        "https://www.fireboltt.com/cdn/shop/products/Black_03_540x.png?v=1677243428",
        "https://www.fireboltt.com/cdn/shop/products/Black_04_540x.png?v=1677243431",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Sphere-desktop_2.jpg?v=1686136302",
    },
    {
      productId: 7,
      productName: "Ninja Pro Max",
      mrp: 5999,
      salePrice: 1499,
      rating: 4.2,
      description:
        "Ninja Pro Max Smartwatch features a large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor, heart rate monitoring, and much more.",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/25_8db87cd3-4e53-4ead-a784-a198596019d6_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/26_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/NinjaProMAx_pink_03_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/28_540x.png?v=1668413408",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Ninja_Pro_Max-web.jpg?v=1689855744",
    },
    {
      productId: 8,
      productName: "Blizzard Ultra",
      mrp: 20999,
      salePrice: 7999,
      rating: 4.9,
      description:
        "Blizzard Ultra features a 32.5mm (1.28) HD round display, bluetooth calling, stainless steel design, 120 sports modes, voice assistant, inbuilt games and more.",
      category: "luxury",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "4GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/metal-body.png?v=1629202789",
          title: "Full Metal Body",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_1_540x.png?v=1689334234",
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_2_540x.png?v=1689334232",
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_4_540x.png?v=1689334235",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/blizzard-ultra-desktop-2.jpg?v=1693939902",
    },
    {
      productId: 9,
      productName: "Asteroid",
      mrp: 15999,
      salePrice: 1999,
      rating: 4.7,
      description:
        "Asteroid Smartwatch - a fusion of style and tech, featuring a stunning 36.3mm (1.43) AMOLED display, Bluetooth calling and low power consumption.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_1_540x.png?v=1692944180",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_3_540x.png?v=1692944177",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_4_540x.png?v=1692944177",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_5_540x.png?v=1692944178",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-desktop_2.jpg?v=1692590811",
    },
    {
      productId: 10,
      productName: "Ninja Fit Pro",
      mrp: 10699,
      salePrice: 2999,
      rating: 4.6,
      description:
        "Fire-Boltt introduces Ninja Fit Pro with a 50.8mm (2.0) large display, BT calling, 600 nits peak brightness, 250mAh battery, Voice assistant, 100+ watch faces and much more. ",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_1_540x.png?v=1689325055",
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_3_540x.png?v=1689325055",
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_2_540x.png?v=1689325055",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-fit-pro-desktop_3_2d7791ab-01ee-4c2d-bd2f-76d121874122.jpg?v=1693974895",
    },
    {
      productId: 11,
      productName: "Expedition",
      mrp: 21999,
      salePrice: 1899,
      rating: 4.5,
      description:
        " Fire-boltt Expedition Smartwatch. 35.3mm(1.39) round display, inbuilt GPS, BT calling.",
      category: "sport",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_1_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_2_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_3_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_4_540x.png?v=1698733392",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/expedition-desktop_1.jpg?v=1697105475",
    },
  ];
  return res.status(200).json({ data: data });
});

router.get("/allearbuds", (req, res) => {
    const data = [
      {
        productId: 101,
        productName: "Ninja Pro",
        mrp: 3999,
        salePrice: 999,
        rating: 4.7,
        description:
          "Fire Pods Ninja Pro 403 comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "ninja",
        features: [
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
            title: "ENC Mode",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
            title: "30Hr Play",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
            title: "13mm Driver",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
            title: "Smart Control",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
            title: "IPX5 Water Res.",
          }
        ],
        images: [
          "https://www.fireboltt.com/cdn/shop/products/black-1_400x.png?v=1671021119",
          "https://www.fireboltt.com/cdn/shop/products/black-2_540x.png?v=1671021119",
          "https://www.fireboltt.com/cdn/shop/products/black-3_540x.png?v=1671021119",
          "https://www.fireboltt.com/cdn/shop/products/black-4_540x.png?v=1671021119",
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/top_Banner_web.jpg?v=1674046502",
      },
      {
        productId: 102,
        productName: "Aura Buds",
        mrp: 4999,
        salePrice: 1599,
        rating: 4.3,
        description:
          "Aura Buds, comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "nextgen",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.gonoise.com/cdn/shop/files/Artboard1_008d9734-950c-4f5b-ba52-89576e0d7e79.png?v=1709904212",
          "https://www.gonoise.com/cdn/shop/files/Artboard4_66c6d8d2-4d91-49bb-abc2-290ee68cb683.png?v=1709904212",
          "https://www.gonoise.com/cdn/shop/files/Artboard2_07f7e983-da1c-4ccc-a9f1-1e7282926bcb.png?v=1709904212",
          "https://www.gonoise.com/cdn/shop/files/Artboard3_5a2a5d92-1fa1-4486-a73b-dd7930432143.png?v=1709904212",
        ],
        coverImage:
          "https://www.gonoise.com/cdn/shop/files/Buds-Aura_Ui-web_01-min.webp?v=1700712611",
      },
      {
        productId: 103,
        productName: "Airdopes 163",
        mrp: 10999,
        salePrice: 1399,
        rating: 4.2,
        description:
          "Airdopes 163 comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "classic",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.boat-lifestyle.com/cdn/shop/products/main_black_1a9582f0-1870-4ab6-a0b0-5b977a8851a6_600x.png?v=1671193643",
          "https://www.boat-lifestyle.com/cdn/shop/products/AD161-FI_Black02_f16c31ae-2dd5-4405-9e85-47e5a7f1f319_1000x.jpg?v=1674118124",
          "https://www.boat-lifestyle.com/cdn/shop/products/AD161-FI_Black03_f5afffc7-0b71-4073-bcf2-017b8b7e8157_1000x.jpg?v=1674118125",
          "https://www.boat-lifestyle.com/cdn/shop/products/AD161-FI_Black02_f16c31ae-2dd5-4405-9e85-47e5a7f1f319_1000x.jpg?v=1674118124",
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/P401_top_banner_web.jpg?v=1671008322",
      },
      {
        productId: 104,
        productName: "RIGEL 711",
        mrp: 10999,
        salePrice: 1599,
        rating: 4.5,
        description:
          "Rigel 711 comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "premium",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.fireboltt.com/cdn/shop/products/black-3_96d74f62-66d7-4c31-9357-2aeb3802d0c7_400x.png?v=1671429904",
          "https://www.fireboltt.com/cdn/shop/products/black-1_3620c8b0-eb11-439a-aff7-92bf3a2f16d0_540x.png?v=1671429904",
          "https://www.fireboltt.com/cdn/shop/products/black-2_5bcc11a8-abe3-4252-acdc-b354ea09f10e_540x.png?v=1671429904",
          "https://www.fireboltt.com/cdn/shop/products/black-1_3620c8b0-eb11-439a-aff7-92bf3a2f16d0_540x.png?v=1671429904",
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/711R_top_banner_mobile.jpg?v=1671184883",
      },
      {
        productId: 105,
        productName: "VS102 Pro",
        mrp: 7999,
        salePrice: 1999,
        rating: 4.8,
        description:
          "VS102 Pro comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "premium",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.gonoise.com/cdn/shop/files/Artboard1_6cc79df8-390f-4394-b356-bf7c9d019500.png?v=1703575048",
          "https://www.gonoise.com/cdn/shop/files/Artboard1copy3_14d2c6f5-d36f-416d-a21f-fa40a607994e.png?v=1703575048",
          "https://www.gonoise.com/cdn/shop/files/Artboard1copy_bd21c227-6e02-4ca6-b1cc-114a9453861b.png?v=1703575048",
          "https://www.gonoise.com/cdn/shop/files/Artboard1copy3_14d2c6f5-d36f-416d-a21f-fa40a607994e.png?v=1703575048",
        ],
        coverImage:
          "https://www.gonoise.com/cdn/shop/files/6_96a84697-5214-4727-b168-a018fbce8b21_1900x.png?v=1684831573",
      },
      {
        productId: 106,
        productName: "Ninja VS-401",
        mrp: 4999,
        salePrice: 1999,
        rating: 4.4,
        description:
          " Ninja VS-401 comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "ninja",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.gonoise.com/cdn/shop/files/3_88bf2419-2700-41d2-8a84-e2d60c7955eb.png?v=1705041037",
          "https://www.gonoise.com/cdn/shop/files/4_e0cd973f-2014-4fe1-a238-51e3fd703f65.png?v=1705041037",
          "https://www.gonoise.com/cdn/shop/files/2_2bff9396-401a-4819-aae2-5540bc6e6a04.png?v=1705041037",
          "https://www.gonoise.com/cdn/shop/files/4_e0cd973f-2014-4fe1-a238-51e3fd703f65.png?v=1705041037",
        ],
        coverImage:
          "https://www.gonoise.com/cdn/shop/files/2_2a763ab4-f84f-4c5a-bfbc-f174c5b74fc4.webp?v=1686142126",
      },
      {
        productId: 107,
        productName: "Nirvana ion",
        mrp: 7999,
        salePrice: 2499,
        rating: 4.5,
        description:
          "Nirvana Ion comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "premium",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.boat-lifestyle.com/cdn/shop/products/ion-W_800x.png?v=1678780574",
          "https://www.boat-lifestyle.com/cdn/shop/files/ION_WHITE_600x.jpg?v=1702007882",
          "https://www.boat-lifestyle.com/cdn/shop/products/NirvanaION-FI_White02-a_1000x.png?v=1702007882",
          "https://www.boat-lifestyle.com/cdn/shop/files/ION_WHITE_600x.jpg?v=1702007882",
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Product_Highlights_WEB_64.jpg?v=1705487468",
      },
      {
        productId: 108,
        productName: "Airdopes 121",
        mrp: 4999,
        salePrice: 999,
        rating: 4.1,
        description:
          "Airdopes 121comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "nextgen",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.boat-lifestyle.com/cdn/shop/products/airdopes-121-v2-blue_600x.png?v=1678773275",
          "https://www.boat-lifestyle.com/cdn/shop/files/5_1_92105eb3-3362-491a-9fb4-257fa5631307_1000x.jpg?v=1685541325",
          "https://www.boat-lifestyle.com/cdn/shop/files/4_1_cc13a411-d41f-46ea-9cc2-6c194c52ed01_1000x.jpg?v=1685541325",
          "https://www.boat-lifestyle.com/cdn/shop/files/5_1_92105eb3-3362-491a-9fb4-257fa5631307_1000x.jpg?v=1685541325"
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/M501_top_banner_web.jpg?v=1671190833",
      },
      {
        productId: 109,
        productName: "Ninja 601",
        mrp: 5999,
        salePrice: 1999,
        rating: 4.7,
        description:
          "Ninja 601 comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant",
        category: "ninja",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.fireboltt.com/cdn/shop/files/Blue_01_9f602203-d600-4410-910a-0f3d6f812e16_540x.png?v=1706097074",
          "https://www.fireboltt.com/cdn/shop/files/Blue_02_f00fbb49-b6a9-4487-a09d-cd7651ff7de3_540x.png?v=1706097068",
          "https://www.fireboltt.com/cdn/shop/files/Blue_04_cb2ebfd8-70ef-4458-9805-38c17ca4718b_540x.png?v=1706097067",
          "https://www.fireboltt.com/cdn/shop/files/Blue_02_f00fbb49-b6a9-4487-a09d-cd7651ff7de3_540x.png?v=1706097068",
        ],
        coverImage:
          "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/601G_top_banner_web.jpg?v=1671176836",
      },
      {
        productId: 110,
        productName: "Bud X Prime",
        mrp: 10999,
        salePrice: 1399,
        rating: 4.6,
        description:
          "Bud X Prime comes with ENC mode, 30 hours of playtime, 13mm drivers, smart touch control, and IPX5 water resistant ",
        category: "classic",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://www.gonoise.com/cdn/shop/files/1.1_2_d71572ff-643a-4c75-a836-da9dbd21543a.png?v=1698042678",
          "https://www.gonoise.com/cdn/shop/files/3_ec43ccc1-c545-42e6-8995-3237cc4e265d.png?v=1698042678",
          "https://www.gonoise.com/cdn/shop/files/4_5fd263a4-f4b2-41ff-a5be-13f19dadbc9b.png?v=1698042678",
        ],
        coverImage:
          "https://www.gonoise.com/cdn/shop/files/Slice_7_076d28fe-3ea9-4366-abee-34817f053c98.webp?v=1697627242",
      }
    ];
    return res.status(200).json({ data: data });
  });


  router.get("/alllaptops", (req, res) => {
    const data = [
      {
        productId: 201,
        productName: "ASUS Vivobook 16X",
        mrp: 89999,
        salePrice: 55250,
        rating: 4.1,
        description:
          "ASUS Vivobook 16X AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home) M1603QA-MB712WS Notebook  (16 inch, Transparent Silver, 1.8 kg, With MS Office)",
        category: "notebook",
        features: [
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
            title: "ENC Mode",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
            title: "12Hr Battery",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
            title: "20mm Driver",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
            title: "Smart Control",
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
            title: "IPX5 Water Res.",
          }
        ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/7/v/m1603qa-mb712ws-notebook-asus-original-imagghmegygfygnb.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/6/b/j/m1603qa-mb712ws-notebook-asus-original-imagghme7gthcaxa.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/7/v/m1603qa-mb712ws-notebook-asus-original-imagghmegygfygnb.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 202,
        productName: "HP Victus",
        mrp: 678999,
        salePrice: 52899,
        rating: 4.7,
        description:
          "HP Victus AMD Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX 6500M/60 Hz) 15-fb0147AX Gaming Laptop  (15.6 Inch, Performance Blue, 2.37 Kg)",
        category: "gaming",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "22Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "30mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/j/q/x/-original-imagthcbb58yyja2.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/v/c/7/-original-imagua7exgfhwajf.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/j/q/x/-original-imagthcbb58yyja2.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 203,
        productName: "Acer Aspire 3",
        mrp: 44999,
        salePrice: 29999,
        rating: 4.2,
        description:
          "Acer Aspire 3 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) A315-59 Thin and Light Laptop  (15.6 inch, Pure Silver, 1.7 Kg)",
        category: "thinlight",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "20Hr Battery",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "22mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/t/h/j/-original-imagwyp2uee8zxez.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/w/4/2/-original-imagwyp2ajta58be.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/y/k/b/-original-imagwyp2x4mtgqya.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/w/4/2/-original-imagwyp2ajta58be.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 204,
        productName: "ASUS Chromebook",
        mrp: 31999,
        salePrice: 16999,
        rating: 4.5,
        description:
          "ASUS Chromebook Intel Celeron Dual Core N4500 - (8 GB/128 GB EMMC Storage/Chrome OS) CX1500CKA-EJ0247 Chromebook  (15.6 Inch, Transparent Silver, 1.80 Kg)",
        category: "chromebook",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "10Hr Battery",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/z/7/g/-original-imagtmsye5fumwdf.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/i/o/v/-original-imagsz5rj74vfkmq.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/l/0/l/-original-imagsz5rgtspbtnp.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/h/q/b/-original-imagsz5rh8eyh5hx.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 205,
        productName: "HP ZBook",
        mrp: 161999,
        salePrice: 131999,
        rating: 4.6,
        description:
          "HP HP ZBook Firefly Intel Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) ZBook Firefly 15U G7 Notebook  (15.6 inch, Black)",
        category: "notebook",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "30Hr Life",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "30mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/k/t/p/hp-zbook-firefly-15u-g7-notebook-hp-original-imaggy6fzqd29khg.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/w/9/k/hp-zbook-firefly-15u-g7-notebook-hp-original-imaggy6ftjhprabh.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/d/r/e/hp-zbook-firefly-15u-g7-notebook-hp-original-imaggy6fkgwhbqgt.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/h/h/g/hp-zbook-firefly-15u-g7-notebook-hp-original-imaggy6fn72dhjsm.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 206,
        productName: "ASUS Gaming F15",
        mrp: 79999,
        salePrice: 52999,
        rating: 4.4,
        description:
          "ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/70 TGP) FX506HF-HN076W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 kg)",
        category: "gaming",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "20Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "40mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/s/3/y/-original-imagt3tgpdzt75ag.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/f/l/-original-imagu7nasgkxafmx.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/s/3/y/-original-imagt3tgpdzt75ag.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 207,
        productName: "HP Ryzen 3 ",
        mrp: 47999,
        salePrice: 32948,
        rating: 4.5,
        description:
          "HP AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 Kg, With MS Office)",
        category: "thinlight",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "20Hr Battery",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "20mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/a/x/-original-imagykgpfafenrvw.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/z/j/-original-imagtun6kymwvwup.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/y/z/a/-original-imagtun6hy33vzwx.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/z/j/-original-imagtun6kymwvwup.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 208,
        productName: "HP Chromebook",
        mrp: 47999,
        salePrice: 30999,
        rating: 4.4,
        description:
          "HP Chromebook (2023) MediaTek Kompanio 1200 - (8 GB/256 GB SSD/Chrome OS) 13b-ca0006MU Chromebook  (13.3 Inch, Mica Silver, 1.49 Kg)",
        category: "chromebook",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "10Hr Battery",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "10mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/p/p/13b-ca0006mu-thin-and-light-laptop-hp-original-imagzyavzxwvddgw.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/x/j/o/13b-ca0006mu-thin-and-light-laptop-hp-original-imagzyavfveysh5p.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/u/u/c/13b-ca0006mu-thin-and-light-laptop-hp-original-imagzyavg97ebmqg.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/n/7/13b-ca0006mu-thin-and-light-laptop-hp-original-imagzyavsvgxxfge.jpeg?q=70&crop=false"
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 209,
        productName: "DELL Vostro",
        mrp: 85499,
        salePrice: 73999,
        rating: 4.2,
        description:
          "DELL Vostro Intel Core i5 12th Gen 1240P - (16 GB/512 GB SSD/Windows 11 Home) Vostro 5620 Notebook  (16 Inch, Titan gray, 1.91 Kg, With MS Office)",
        category: "notebook",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "20Hr Battery",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "20mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/l1mh7rk0/computer/w/5/m/vostro-5620-notebook-dell-original-imagd5kxzjhyw9hx.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/l1mh7rk0/computer/c/x/p/vostro-5620-notebook-dell-original-imagd5kx5uuayvyf.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/l1mh7rk0/computer/y/d/u/vostro-5620-notebook-dell-original-imagd5kxfbkx8wzu.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/l1mh7rk0/computer/c/x/p/vostro-5620-notebook-dell-original-imagd5kx5uuayvyf.jpeg?q=70&crop=false",
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      },
      {
        productId: 210,
        productName: "Lenovo Ideapad ",
        mrp: 31999,
        salePrice: 24999,
        rating: 4.1,
        description:
          "Lenovo Ideapad Slim 3 MediaTek Kompanio 520 - (8 GB/128 GB EMMC Storage/Chrome OS) 14M868 Chromebook  (14 inch, Abyss Blue, 1.3 Kg)",
        category: "chromebook",
        features: [
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/call-icon.png?v=1624516628",
              title: "ENC Mode",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/battery-Icons.png?v=1624514399",
              title: "12Hr Play",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/drivers-icon_c655ca03-16c0-4b13-a8e4-1ceae7561cfc.png?v=1624523520",
              title: "13mm Driver",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/full-touch-icon_7814cf20-4627-4130-ba10-7fbfd593ef9b.png?v=1623731203",
              title: "Smart Control",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/waterproof-icon_958c40ec-defc-49e8-9ffc-ce34713d4eaa.png?v=1623390066",
              title: "IPX5 Water Res.",
            }
          ],
        images: [
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/f/6/g/-original-imagy3tzbj3xgvu4.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/3/v/-original-imagy3tzkqhg3wen.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/i/6/i/-original-imagy3tzwhncdkqa.jpeg?q=70&crop=false",
          "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/3/v/-original-imagy3tzkqhg3wen.jpeg?q=70&crop=false"
        ],
        coverImage:
          "https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/banner1.webp",
      }
    ];
    return res.status(200).json({ data: data });
  });

export default router;
