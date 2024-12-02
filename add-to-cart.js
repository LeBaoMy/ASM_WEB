const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const cardBody = event.target.closest('.card-body'); 
        const productTitle = cardBody.querySelector('.card-title').textContent.trim(); 
        const productCost = cardBody.querySelector('.card-text').textContent.trim(); 
        
  
        const product = {
            title: productTitle,
            cost: productCost
        };

        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productTitle} has been added to the cart!`);
    });
});