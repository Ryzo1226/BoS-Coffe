let menuContainer = document.querySelector("#container");
let modal = document.getElementById("myModal");
let viewCartButton = document.querySelector("#order-btn");
let placeOrderButton = document.getElementById("placeOrderBtn");
let tabButtons = document.querySelectorAll(".menu-tab");

let cart = [];
let cartItemCounts = {};

let menuData = {
    espresso: [
        { images: "1.png", name: "Caffe Americano", price: 135 },
        { images: "2.png", name: "Caffe Latte", price: 145 },
        { images: "3.png", name: "Caffe Mocha", price: 160 },
        { images: "4.png", name: "Cappuccino", price: 145 },
        { images: "5.png", name: "Caramel Latte", price: 170 },
        { images: "6.png", name: "White Chocolate Mocha", price: 170 }
    ],
    signature: [
        { images: "7.png", name: "Cold White Brew", price: 170 },
        { images: "8.png", name: "Iced Creamy Latte", price: 170 },

    ],
    froccino: [
        { images: "11.png", name: "Froccino Caramelo", price: 165 },
        { images: "12.png", name: "Froccino Mocha", price: 165 },
        { images: "13.png", name: "Froccino Coffee Jelly", price: 180 },
        { images: "14.png", name: "Froccino Cookies N' Cream", price: 175 },
        { images: "15.png", name: "Froccino White Chocolate Mocha", price: 185 }
    ],
    freeze: [
        { images: "16.png", name: "Artisanal Chocolate Freeze", price: 160 },
        { images: "17.png", name: "Cookies N' Cream Freeze", price: 165 },
        { images: "18.png", name: "Matcha Green Tea Freeze", price: 195 },
        { images: "19.png", name: "Strawberry Freeze", price: 160 },
        { images: "20.png", name: "Vanilla Freeze", price: 160 }
    ],
    tea: [
        { images: "25.png", name: "Matcha Green Tea Latte", price: 180 },
        { images: "26.png", name: "Apple Chia Black Tea", price: 185 },
        { images: "27.png", name: "Strawberry Slush Black Tea", price: 185 },
        { images: "28.png", name: "Tropical Fruit Black Tea", price: 185 },
        { images: "29.png", name: "Citrus Ginger Tea", price: 185 }
    ],
    chocolate: [
        { images: "30.png", name: "Hot Chocolate", price: 155 },
        { images: "31.png", name: "Iced Chocolate", price: 155 }
    ],
    nondairy: [
        { images: "32.png", name: "Oat Latte", price: 195 },
        { images: "33.png", name: "Soy Latte", price: 185 },
        { images: "34.png", name: "Cinnamon Honey Oat Latte", price: 220 }
    ],
    rtd: [
        { images: "35.png", name: "Iced Brew Mocha", price: 105 },
        { images: "36.png", name: "Iced Brew Macchiato", price: 105 },
        { images: "37.png", name: "Iced Brew Latte", price: 105 },
        { images: "38.png", name: "Vita Coco – Coco Juice", price: 90 },
        { images: "39.png", name: "Bundaberg – Lemon Lime & Bitters", price: 185 },
        { images: "40.png", name: "Bundaberg – Pink Grapefruit", price: 185 },
        { images: "41.png", name: "Kombucha – Ginger Lemon", price: 185 },
        { images: "42.png", name: "Red Bull", price: 145 }
    ],
    food: [
        { images: "43.png", name: "Bo's Breakfast Platter", price: 305 },
        { images: "44.png", name: "Bacon Breakfast Platter", price: 225 },
        { images: "45.png", name: "Corned Beef Breakfast Platter", price: 225 },
        { images: "46.png", name: "Bacon Pesto Pasta", price: 245 },
        { images: "47.png", name: "Spanish Sardines Pasta", price: 245 },
        { images: "48.png", name: "Arrabiata Pasta", price: 205 },
        { images: "49.png", name: "Gourmet Tuyo Pasta", price: 275 },
        { images: "50.png", name: "Grilled Cheese Tuna Sandwich", price: 245 },
        { images: "51.png", name: "Grilled BLT Sandwich", price: 255 },
        { images: "52.png", name: "Spam, Egg & Cheese Muffin", price: 230 },
        { images: "53.png", name: "Waffle Sandwich – Bacon", price: 260 }
    ],
    pastries: [
        { images: "54.png", name: "Butter Croissant", price: 85 },
        { images: "55.png", name: "Blueberry Calamansi Muffin", price: 130 },
        { images: "56.png", name: "Choco Banana Muffin", price: 120 },
        { images: "57.png", name: "Strawberry Muffin", price: 130 },
        { images: "58.png", name: "Chocolate Chip Almond Biscotti", price: 70 },
        { images: "59.png", name: "Craft Cookies Oatmeal Raisin", price: 70 },
        { images: "60.png", name: "Honey-Glazed Bacon Doughnut", price: 100 },
        { images: "61.png", name: "Walnut Raisin Banana Bread", price: 105 },
        { images: "62.png", name: "Cheddar Ensaymada", price: 110 },
        { images: "63.png", name: "Cheese Roll", price: 65 },
        { images: "64.png", name: "Carrot Bar", price: 105 },
        { images: "65.png", name: "Cranberry & Pistachio Bar", price: 95 }
    ],
    cakes: [
        { images: "66.png", name: "Blueberry Cheesecake", price: 170 },
        { images: "67.png", name: "Dulce de Leche Cheesecake", price: 195 },
        { images: "68.png", name: "Original Burnt Cheesecake", price: 165 }
    ],
    beans: [
        { images: "69.png", name: "Matutum Coffee Beans", price: 395 },
        { images: "70.png", name: "Mt. Apo Coffee Beans", price: 395 },
        { images: "71.png", name: "Kitanglad Coffee Beans", price: 395 },
        { images: "72.png", name: "Barako Coffee Beans", price: 390 },
        { images: "73.png", name: "Barista Blend", price: 290 },
        { images: "74.png", name: "Espresso Blend", price: 360 }
    ],
    merchandise: [
        { images: "75.png", name: "Bo's Coffee Tote Bag", price: 350 },
        { images: "76.png", name: "Bo's Coffee Tumbler", price: 650 },
        { images: "77.png", name: "Bo's Coffee Mug", price: 450 },
        { images: "78.png", name: "Vanilla Butter Cookies Jar (20 pcs)", price: 205 },
        { images: "79.png", name: "Mango Butter Cookies Jar (20 pcs)", price: 230 },
        { images: "80.png", name: "Almond Butter Cookies Jar (20 pcs)", price: 230 },
        { images: "81.png", name: "Macadamia Butter Cookies Jar (50 pcs)", price: 535 },
        { images: "82.png", name: "Red Velvet Crinkles Jar (15 pcs)", price: 210 },
        { images: "83.png", name: "Trail Mix", price: 90 },
        { images: "84.png", name: "Bar Nuts", price: 105 }
    ]
};

function renderMenu(items) {
    menuContainer.innerHTML = "";

    items.forEach(function(menuItem) {
        let card = document.createElement("div");
        card.className = "card";

        let image = document.createElement("img");
        image.className = "image";
        image.src = menuItem.images;
        image.alt = menuItem.name;

        let name = document.createElement("h4");
        name.className = "item";
        name.innerText = menuItem.name;

        let price = document.createElement("p");
        price.className = "price";
        price.innerText = "₱" + menuItem.price;

        let addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";
        addBtn.onclick = function() {
            addToCart(menuItem);
        };

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = function() {
            removeFromMenuCard(menuItem);
        };

        let buttonRow = document.createElement("div");
        buttonRow.className = "button-row";
        buttonRow.append(addBtn, removeBtn);

        let countLabel = document.createElement("p");
        countLabel.className = "item-count";
        countLabel.innerText = "Added: 0";

        card.append(image, name, price, buttonRow, countLabel);
        menuContainer.append(card);
    });

    updateCardCounts();
}

function addToCart(item) {
    cart.push(item);
    cartItemCounts[item.name] = (cartItemCounts[item.name] || 0) + 1;
    updateCardCounts();

    if (modal.style.display === "block") {
        renderCartModal();
    }
}

function removeFromMenuCard(item) {
    if (!cartItemCounts[item.name]) return;

    let index = cart.findIndex(function(cartItem) {
        return cartItem.name === item.name;
    });

    if (index !== -1) {
        cart.splice(index, 1);
        cartItemCounts[item.name] = Math.max(cartItemCounts[item.name] - 1, 0);

        if (cartItemCounts[item.name] === 0) {
            delete cartItemCounts[item.name];
        }

        updateCardCounts();

        if (modal.style.display === "block") {
            renderCartModal();
        }
    }
}

function removeFromCartByName(name) {
    if (!cartItemCounts[name]) return;

    let index = cart.findIndex(function(cartItem) {
        return cartItem.name === name;
    });

    if (index !== -1) {
        cart.splice(index, 1);
        cartItemCounts[name] = Math.max(cartItemCounts[name] - 1, 0);

        if (cartItemCounts[name] === 0) {
            delete cartItemCounts[name];
        }

        updateCardCounts();
    }
}

function renderCartModal() {
    let modalBody = document.getElementById("cart-body");
    modalBody.innerHTML = "";

    let title = document.querySelector(".modal-title");
    title.textContent = "Your Order";

    let totalDisplay = document.getElementById("cartTotal");
    let orderNote = document.getElementById("orderNo");
    orderNote.style.display = "none";

    let total = 0;

    if (Object.keys(cartItemCounts).length === 0) {
        modalBody.innerHTML = "<p style='color:#a0856b; margin-top: 16px;'>No items in cart.</p>";
        totalDisplay.textContent = "Total: ₱0";
        return;
    }

    let list = document.createElement("ul");
    list.style.cssText = "list-style: none; padding: 0; margin: 0;";

    Object.keys(cartItemCounts).forEach(function(name) {
        let count = cartItemCounts[name];
        let item = cart.find(function(cartItem) {
            return cartItem.name === name;
        });

        if (!item || !count) return;

        let li = document.createElement("li");
        li.style.cssText = "display:flex; align-items:center; gap:10px; margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid #f0ebe4;";

        li.innerHTML = `
            <img src="${item.images}" style="width:48px; height:48px; object-fit:cover; border-radius:8px;">
            <div style="flex:1;">
                <p style="margin:0; font-weight:500; font-size:14px;">${item.name}</p>
                <p style="margin:0; font-size:13px; color:#888;">₱${item.price} × ${count}</p>
            </div>
            <button data-name="${item.name}" style="padding:4px 12px; font-size:12px;">Remove</button>
        `;

        list.appendChild(li);
        total += item.price * count;
    });

    list.querySelectorAll("button[data-name]").forEach(function(btn) {
        btn.onclick = function() {
            removeFromCartByName(btn.getAttribute("data-name"));
            renderCartModal();
        };
    });

    modalBody.appendChild(list);
    totalDisplay.textContent = "Total: ₱" + total;
}

function placeOrderHandler() {
    if (cart.length === 0) {
        let modalBody = document.getElementById("cart-body");
        modalBody.innerHTML = "<p style='color:#c0392b; margin-top:16px;'>Please add items to your cart before placing an order.</p>";
        return;
    }

    let title = document.querySelector(".modal-title");
    title.textContent = "Thank you!";

    let modalBody = document.getElementById("cart-body");
    modalBody.innerHTML = "";

    let orderNote = document.getElementById("orderNo");
    orderNote.textContent = "Please wait for your order.";
    orderNote.style.display = "block";

    let totalDisplay = document.getElementById("cartTotal");
    totalDisplay.textContent = "Total: ₱0";

    cart = [];
    cartItemCounts = {};
    updateCardCounts();
}

function updateCardCounts() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let nameEl = card.querySelector(".item");
        let countEl = card.querySelector(".item-count");

        if (nameEl && countEl) {
            let count = cartItemCounts[nameEl.innerText] || 0;
            countEl.textContent = "Added: " + count;
        }
    });
}

tabButtons.forEach(function(tab) {
    tab.addEventListener("click", function() {
        tabButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        tab.classList.add("active");

        let category = tab.getAttribute("data-category");
        renderMenu(menuData[category]);
    });
});

viewCartButton.addEventListener("click", function() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        renderCartModal();
        modal.style.display = "block";
    }
});

placeOrderButton.addEventListener("click", placeOrderHandler);

document.getElementById("clear-all-btn").addEventListener("click", function() {
    if (cart.length === 0) return;
    cart = [];
    cartItemCounts = {};
    updateCardCounts();
    renderCartModal();
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

renderMenu(menuData.espresso);