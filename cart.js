const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');


function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];


    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {

        const itemPrice = parseFloat(item.cost) || 0;


        total += itemPrice;


        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>
                <h5>${item.title}</h5>
                <p>Price: ${item.cost} VND</p>
            </div>
            <div>
                <label for="quantity-${index}">Quantity:</label>
                <input type="number" id="quantity-${index}" class="quantity-input" value="1" min="1" data-price="${itemPrice}" />
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });


    totalPriceElement.textContent = total;
}


cartItemsContainer.addEventListener('input', (event) => {
    if (event.target.classList.contains('quantity-input')) {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        let updatedTotal = 0;

        quantityInputs.forEach(input => {
            const quantity = parseInt(input.value) || 1;
            const pricePerItem = parseFloat(input.dataset.price) || 0;
            updatedTotal += quantity * pricePerItem;
        });

        totalPriceElement.textContent = updatedTotal;
    }
});


cartItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const index = event.target.dataset.index;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
        loadCart(); 
    }
});


loadCart();