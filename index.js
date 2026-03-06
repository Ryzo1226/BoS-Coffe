let menuContainer = document.querySelector("#container");
let modal = document.getElementById("myModal");
let viewCartButton = document.querySelector("#order-btn");
let placeOrderButton = document.getElementById("placeOrderBtn");
let tabButtons = document.querySelectorAll(".menu-tab");

let cart = [];
let cartItemCounts = {};

let menuData = {
    espresso: [
        { images: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", name: "Caffe Americano", price: 135 },
        { images: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop", name: "Caffe Latte", price: 145 },
        { images: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop", name: "Caffe Mocha", price: 160 },
        { images: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop", name: "Cappuccino", price: 145 },
        { images: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop", name: "Caramel Latte", price: 170 },
        { images: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop", name: "White Chocolate Mocha", price: 170 }
    ],
    signature: [
        { images: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop", name: "Cold White Brew", price: 170 },
        { images: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", name: "Iced Creamy Latte", price: 170 },
        { images: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", name: "Drip Coffee", price: 120 }
    ],
    froccino: [
        { images: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", name: "Froccino Caramelo", price: 165 },
        { images: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop", name: "Froccino Mocha", price: 165 },
        { images: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop", name: "Froccino Coffee Jelly", price: 180 },
        { images: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop", name: "Froccino Cookies N' Cream", price: 175 },
        { images: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop", name: "Froccino White Chocolate Mocha", price: 185 }
    ],
    freeze: [
        { images: "https://images.unsplash.com/photo-1542990253-a781e3ec0de8?w=400&h=400&fit=crop", name: "Artisanal Chocolate Freeze", price: 160 },
        { images: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop", name: "Cookies N' Cream Freeze", price: 165 },
        { images: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop", name: "Matcha Green Tea Freeze", price: 195 },
        { images: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop", name: "Strawberry Freeze", price: 160 },
        { images: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop", name: "Vanilla Freeze", price: 160 }
    ],
    tea: [
        { images: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", name: "Aged Earl Grey", price: 150 },
        { images: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop", name: "Tsaa Laya – Lemon Ginger Tea", price: 150 },
        { images: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop", name: "Tsaa Laya – Bughaw Tea", price: 150 },
        { images: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop", name: "Tsaa Laya – Tropical Summer Tea", price: 150 },
        { images: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop", name: "Matcha Green Tea Latte", price: 180 },
        { images: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop", name: "Apple Chia Black Tea", price: 185 },
        { images: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop", name: "Strawberry Slush Black Tea", price: 185 },
        { images: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop", name: "Tropical Fruit Black Tea", price: 185 },
        { images: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop", name: "Citrus Ginger Tea", price: 185 }
    ],
    chocolate: [
        { images: "https://images.unsplash.com/photo-1542990253-a781e3ec0de8?w=400&h=400&fit=crop", name: "Hot Chocolate", price: 155 },
        { images: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop", name: "Iced Chocolate", price: 155 }
    ],
    nondairy: [
        { images: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop", name: "Oat Latte", price: 195 },
        { images: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop", name: "Soy Latte", price: 185 },
        { images: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop", name: "Cinnamon Honey Oat Latte", price: 220 }
    ],
    rtd: [
        { images: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop", name: "Iced Brew Mocha", price: 105 },
        { images: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", name: "Iced Brew Macchiato", price: 105 },
        { images: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", name: "Iced Brew Latte", price: 105 },
        { images: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop", name: "Vita Coco – Coco Juice", price: 90 },
        { images: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", name: "Bundaberg – Lemon Lime & Bitters", price: 185 },
        { images: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop", name: "Bundaberg – Pink Grapefruit", price: 185 },
        { images: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop", name: "Kombucha – Ginger Lemon", price: 185 },
        { images: "https://images.unsplash.com/photo-1473215847952-20b5e4e55bfa?w=400&h=400&fit=crop", name: "Red Bull", price: 145 }
    ],
    food: [
        { images: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop", name: "Bo's Breakfast Platter", price: 305 },
        { images: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop", name: "Bacon Breakfast Platter", price: 225 },
        { images: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop", name: "Corned Beef Breakfast Platter", price: 225 },
        { images: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=400&fit=crop", name: "Bacon Pesto Pasta", price: 245 },
        { images: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&h=400&fit=crop", name: "Spanish Sardines Pasta", price: 245 },
        { images: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=400&fit=crop", name: "Arrabiata Pasta", price: 205 },
        { images: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop", name: "Gourmet Tuyo Pasta", price: 275 },
        { images: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop", name: "Grilled Cheese Tuna Sandwich", price: 245 },
        { images: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop", name: "Grilled BLT Sandwich", price: 255 },
        { images: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop", name: "Spam, Egg & Cheese Muffin", price: 230 },
        { images: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=400&fit=crop", name: "Waffle Sandwich – Bacon", price: 260 }
    ],
    pastries: [
        { images: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop", name: "Butter Croissant", price: 85 },
        { images: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop", name: "Blueberry Calamansi Muffin", price: 130 },
        { images: "https://images.unsplash.com/photo-1606101273945-e9eba5fa8b87?w=400&h=400&fit=crop", name: "Choco Banana Muffin", price: 120 },
        { images: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop", name: "Strawberry Muffin", price: 130 },
        { images: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop", name: "Chocolate Chip Almond Biscotti", price: 70 },
        { images: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop", name: "Craft Cookies Oatmeal Raisin", price: 70 },
        { images: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", name: "Honey-Glazed Bacon Doughnut", price: 100 },
        { images: "https://images.unsplash.com/photo-1511958122736-c6f70e7b6d7e?w=400&h=400&fit=crop", name: "Walnut Raisin Banana Bread", price: 105 },
        { images: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop", name: "Cheddar Ensaymada", price: 110 },
        { images: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop", name: "Cheese Roll", price: 65 },
        { images: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop", name: "Carrot Bar", price: 105 },
        { images: "https://images.unsplash.com/photo-1490323914169-4b57c5b05c2f?w=400&h=400&fit=crop", name: "Cranberry & Pistachio Bar", price: 95 }
    ],
    cakes: [
        { images: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop", name: "Blueberry Cheesecake", price: 170 },
        { images: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop", name: "Dulce de Leche Cheesecake", price: 195 },
        { images: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop", name: "Original Burnt Cheesecake", price: 165 }
    ],
    beans: [
        { images: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", name: "Matutum Coffee Beans", price: 395 },
        { images: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop", name: "Mt. Apo Coffee Beans", price: 395 },
        { images: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop", name: "Kitanglad Coffee Beans", price: 395 },
        { images: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", name: "Barako Coffee Beans", price: 390 },
        { images: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop", name: "Barista Blend", price: 290 },
        { images: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop", name: "Espresso Blend", price: 360 }
    ],
    merchandise: [
        { images: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", name: "Bo's Coffee Tote Bag", price: 350 },
        { images: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", name: "Bo's Coffee Tumbler", price: 650 },
        { images: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop", name: "Bo's Coffee Mug", price: 450 },
        { images: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", name: "Vanilla Butter Cookies Jar (20 pcs)", price: 205 },
        { images: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", name: "Mango Butter Cookies Jar (20 pcs)", price: 230 },
        { images: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", name: "Almond Butter Cookies Jar (20 pcs)", price: 230 },
        { images: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", name: "Macadamia Butter Cookies Jar (50 pcs)", price: 535 },
        { images: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop", name: "Red Velvet Crinkles Jar (15 pcs)", price: 210 },
        { images: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop", name: "Trail Mix", price: 90 },
        { images: "https://images.unsplash.com/photo-1531171074112-8b0f5f93b79b?w=400&h=400&fit=crop", name: "Bar Nuts", price: 105 }
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