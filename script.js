
// FOODIEHUB - FOOD DELIVERY APPLICATION

const restaurants = [
    {
        id: 1,
        name: "Spice Garden",
        cuisine: "South Indian • Biryani • Chinese",
        rating: "4.8",
        time: "25-35 min",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700",
        description: "Authentic Indian flavours and delicious meals.",
        menu: [
            {
                id: 101, name: "Chicken Biryani",
                price: 180,
                image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
                desc: "Aromatic basmati rice with spicy chicken."
            },
            {
                id: 102, name: "Mutton Biryani",
                price: 250,
                image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
                desc: "Traditional biryani with tender mutton."
            },
            {
                id: 103, name: "Chicken Fried Rice",
                price: 150,
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
                desc: "Delicious fried rice with chicken."
            },
            {
                id: 104, name: "Paneer Butter Masala",
                price: 160,
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
                desc: "Creamy paneer in rich tomato gravy."
            },
            {
                id: 105, name: "Masala Dosa",
                price: 90,
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600",
                desc: "Crispy dosa stuffed with potato masala."
            },
            {
                id: 106, name: "Chicken 65",
                price: 170,
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
                desc: "Spicy and crispy chicken starter."
            }
        ]
    },
    {
        id: 2,
        name: "Pizza Palace",
        cuisine: "Pizza • Italian • Fast Food",
        rating: "4.6",
        time: "30-40 min",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
        description: "Freshly baked pizzas with delicious toppings.",
        menu: [
            {
                id: 201, name: "Margherita Pizza",
                price: 199,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
                desc: "Classic pizza with cheese and tomato."
            },
            {
                id: 202, name: "Farmhouse Pizza",
                price: 249,
                image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600",
                desc: "Loaded with fresh vegetables."
            },
            {
                id: 203, name: "Chicken Pizza",
                price: 299,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
                desc: "Chicken toppings with mozzarella cheese."
            },
            {
                id: 204, name: "Pepperoni Pizza",
                price: 329,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
                desc: "Classic pepperoni with extra cheese."
            },
            {
                id: 205, name: "Garlic Bread",
                price: 99,
                image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600",
                desc: "Freshly baked garlic bread."
            },
            {
                id: 206, name: "Cheese Burger",
                price: 149,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
                desc: "Juicy burger with melted cheese."
            }
        ]
    },
    {
        id: 3,
        name: "Burger House",
        cuisine: "Burgers • Sandwiches • Beverages",
        rating: "4.7",
        time: "20-30 min",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700",
        description: "Juicy burgers and tasty snacks.",
        menu: [
            {
                id: 301, name: "Classic Burger",
                price: 119,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
                desc: "Classic burger with fresh vegetables."
            },
            {
                id: 302, name: "Chicken Burger",
                price: 169,
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600",
                desc: "Crispy chicken patty with cheese."
            },
            {
                id: 303, name: "Double Cheese Burger",
                price: 219,
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600",
                desc: "Double cheese and double happiness."
            },
            {
                id: 304, name: "French Fries",
                price: 89,
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
                desc: "Golden crispy french fries."
            },
            {
                id: 305, name: "Chocolate Milkshake",
                price: 120,
                image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
                desc: "Rich and creamy chocolate milkshake."
            },
            {
                id: 306, name: "Club Sandwich",
                price: 149,
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
                desc: "Fresh sandwich with tasty filling."
            }
        ]
    }
];

// APPLICATION STATE

let selectedRestaurant = null;
let cart = [];
let lastOrder = null;

const $ = id => document.getElementById(id);

// FORMAT PRICE

function money(amount) {
    return "₹" + amount.toFixed(2);
}

// RENDER RESTAURANTS

function renderRestaurants(search = "") {
    const filtered = restaurants.filter(restaurant => {
        const text = (
            restaurant.name + " " +
            restaurant.cuisine + " " +
            restaurant.menu.map(food => food.name).join(" ")
        ).toLowerCase();

        return text.includes(search.toLowerCase());
    });

    $("restaurantList").innerHTML = filtered.length
        ? filtered.map(restaurant => `
            <div class="restaurant-card">
                <img src="${restaurant.image}"
                     alt="${restaurant.name}"
                     loading="lazy">

                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <p>${restaurant.cuisine}</p>

                    <div class="restaurant-meta">
                        <span class="rating">
                            <i class="fas fa-star"></i>
                            ${restaurant.rating}
                        </span>

                        <span>
                            <i class="far fa-clock"></i>
                            ${restaurant.time}
                        </span>
                    </div>

                    <button class="order-btn"
                        data-action="restaurant"
                        data-id="${restaurant.id}">
                        View Menu
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `).join("")
        : `<div class="empty-cart">No restaurants or dishes found.</div>`;
}

// OPEN RESTAURANT MENU

function openRestaurant(id) {
    selectedRestaurant = restaurants.find(r => r.id === id);

    if (!selectedRestaurant) return;

    $("restaurantTitle").textContent = selectedRestaurant.name;
    $("restaurantDescription").textContent =
        selectedRestaurant.description;

    $("restaurants").classList.add("hidden");
    $("searchInput").value = "";

    $("menu").classList.remove("hidden");
    $("menu").scrollIntoView({ behavior: "smooth" });

    renderMenu();
}

// RENDER MENU

function renderMenu(search = "") {
    if (!selectedRestaurant) return;

    const foods = selectedRestaurant.menu.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
    );

    $("foodList").innerHTML = foods.length
        ? foods.map(food => `
            <div class="food-card">
                <img src="${food.image}"
                     alt="${food.name}"
                     loading="lazy">

                <div class="food-info">
                    <h3>${food.name}</h3>
                    <p>${food.desc}</p>

                    <div class="food-bottom">
                        <span class="price">${money(food.price)}</span>

                        <button class="add-btn"
                            data-action="add"
                            data-id="${food.id}">
                            <i class="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `).join("")
        : `<div class="empty-cart">No dishes found.</div>`;
}

// ADD FOOD TO CART

function addToCart(foodId) {
    const food = selectedRestaurant.menu.find(
        item => item.id === foodId
    );

    if (!food) return;

    // One restaurant per order
    if (cart.length > 0 &&
        cart[0].restaurantId !== selectedRestaurant.id) {

        const change = confirm(
            "Your cart contains items from another restaurant. " +
            "Clear the cart and add this restaurant's food?"
        );

        if (!change) return;

        cart = [];
    }

    let existing = cart.find(item => item.id === foodId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...food,
            restaurantId: selectedRestaurant.id,
            quantity: 1
        });
    }

    updateCart();
}

// CHANGE QUANTITY

function changeQuantity(foodId, amount) {
    const item = cart.find(food => food.id === foodId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(food => food.id !== foodId);
    }

    updateCart();
}

// CALCULATE TOTAL

function getSubtotal() {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
}

function getDeliveryFee() {
    return cart.length ? 30 : 0;
}

// UPDATE CART COUNT AND TOTAL

function updateCart() {
    const count = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    $("cartCount").textContent = count;

    renderCart();
}

// RENDER CART

function renderCart() {
    const cartItems = $("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"
                   style="font-size:40px;color:#f4511e"></i>
                <h3>Your cart is empty!</h3>
                <p>Add delicious food to continue.</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${money(item.price)}</p>
                </div>

                <div class="quantity-controls">
                    <button data-action="quantity"
                        data-id="${item.id}"
                        data-amount="-1">-</button>

                    <strong>${item.quantity}</strong>

                    <button data-action="quantity"
                        data-id="${item.id}"
                        data-amount="1">+</button>
                </div>
            </div>
        `).join("");
    }

    const subtotal = getSubtotal();
    const delivery = getDeliveryFee();

    $("subtotal").textContent = money(subtotal);
    $("deliveryFee").textContent = money(delivery);
    $("grandTotal").textContent = money(subtotal + delivery);

    $("checkoutBtn").disabled = cart.length === 0;
    $("checkoutBtn").style.opacity =
        cart.length === 0 ? "0.5" : "1";
}

// OPEN / CLOSE CART

$("openCart").onclick = () => {
    renderCart();
    $("cartModal").classList.remove("hidden");
};

$("closeCart").onclick = () => {
    $("cartModal").classList.add("hidden");
};

$("cartModal").addEventListener("click", e => {
    if (e.target === $("cartModal")) {
        $("cartModal").classList.add("hidden");
    }
});

// BACK TO RESTAURANTS

$("backRestaurants").onclick = () => {
    $("menu").classList.add("hidden");
    $("restaurants").classList.remove("hidden");
    $("restaurants").scrollIntoView({ behavior: "smooth" });
};

// SEARCH RESTAURANTS AND DISHES

$("searchInput").addEventListener("input", function() {
    const search = this.value;

    if (!$("menu").classList.contains("hidden")) {
        renderMenu(search);
    } else {
        renderRestaurants(search);
    }
});

// CHECKOUT

$("checkoutBtn").onclick = () => {
    if (cart.length === 0) return;

    $("cartModal").classList.add("hidden");
    $("checkoutSection").classList.remove("hidden");
    $("checkoutSection").scrollIntoView({ behavior: "smooth" });

    $("checkoutSummary").innerHTML = `
        <h3>Order Summary</h3>
        <p>Restaurant: ${
            restaurants.find(r => r.id === cart[0].restaurantId).name
        }</p>
        <p>Items: ${cart.reduce((a, b) => a + b.quantity, 0)}</p>
        <p>Subtotal: ${money(getSubtotal())}</p>
        <p>Delivery: ${money(getDeliveryFee())}</p>
        <h3>Total: ${money(getSubtotal() + getDeliveryFee())}</h3>
    `;
};

// BACK TO CART

$("backCart").onclick = () => {
    $("checkoutSection").classList.add("hidden");
    $("cartModal").classList.remove("hidden");
};

// PLACE ORDER

$("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const name = $("customerName").value.trim();
    const phone = $("customerPhone").value.trim();
    const address = $("customerAddress").value.trim();
    const payment = $("paymentMethod").value;

    if (!name || !phone || !address) {
        alert("Please complete all delivery details.");
        return;
    }

    const orderId = "FH" + Date.now().toString().slice(-8);

    lastOrder = {
        id: orderId,
        name,
        phone,
        address,
        payment,
        items: [...cart],
        total: getSubtotal() + getDeliveryFee(),
        restaurant: restaurants.find(
            r => r.id === cart[0].restaurantId
        ).name
    };

    $("orderMessage").innerHTML = `
        Thank you, ${name}!<br>
        Your order ID is <strong>${orderId}</strong>.<br>
        Restaurant: ${lastOrder.restaurant}<br>
        Total: ${money(lastOrder.total)}<br>
        Payment: ${payment}<br>
        Your order has been recorded in this demo.
    `;

    $("checkoutSection").classList.add("hidden");
    $("successSection").classList.remove("hidden");

    cart = [];
    updateCart();
    $("orderForm").reset();

    $("successSection").scrollIntoView({ behavior: "smooth" });
});

// CONTINUE SHOPPING

$("continueShopping").onclick = () => {
    $("successSection").classList.add("hidden");
    $("restaurants").classList.remove("hidden");
    $("restaurants").scrollIntoView({ behavior: "smooth" });
};

// GLOBAL BUTTON EVENTS

document.addEventListener("click", function(e) {
    const button = e.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;
    const id = Number(button.dataset.id);

    if (action === "restaurant") {
        openRestaurant(id);
    }

    if (action === "add") {
        addToCart(id);
    }

    if (action === "quantity") {
        changeQuantity(id, Number(button.dataset.amount));
    }
});

// INITIALIZE

renderRestaurants();
updateCart();
