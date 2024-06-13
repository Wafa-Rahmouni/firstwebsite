var iconButtons = document.querySelectorAll('.fas');
for (var i = 0; i < iconButtons.length; i++) {
    iconButtons[i].addEventListener('click', function(event) {
        // Prevent the default action
        event.preventDefault();
    });
}

var shoppingCart = {
    items: [], // array to hold cart items
    addItem: function(product, quantity) {
        this.items.push({
            product: product,
            quantity: quantity
        });
        this.updateCart();
    },
    updateCart: function() {
        // update the cart count and total price
        var totalCount = 0;
        var totalPrice = 0;
        for (var i = 0; i < this.items.length; i++) {
            totalCount += this.items[i].quantity;
            totalPrice += this.items[i].product.price * this.items[i].quantity;
        }
        // update the cart count element
        document.getElementById('cart-count').innerText = totalCount;
    }
};

var addToCartButtons = document.querySelectorAll('.cart-btn');
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(event) {
        event.preventDefault();
        var productBox = this.parentElement.parentElement.parentElement;
        var productName = productBox.querySelector('.content h3').innerText;
        var productPrice = parseFloat(productBox.querySelector('.content .price').innerText.split('$')[1]);
        var product = {
            name: productName,
            price: productPrice
        };
        var quantity = 1; // replace with actual quantity
        shoppingCart.addItem(product, quantity);
    });
}

var likeList = {
    items: [], // array to hold liked items
    addItem: function(product) {
        this.items.push(product);
        this.updateLikes();
    },
    updateLikes: function() {
        // update the like count
        var totalCount = this.items.length;
        // update the like count element
        document.getElementById('like-count').innerText = totalCount;
    }
};

var likeButtons = document.querySelectorAll('.fas.fa-heart:not(.no-click)');
for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function(event) {
        event.preventDefault();
        var productBox = this.parentElement.parentElement.parentElement;
        var productName = productBox.querySelector('.content h3').innerText;
        var productPrice = parseFloat(productBox.querySelector('.content .price').innerText.split('$')[1]);
        var product = {
            name: productName,
            price: productPrice
        };
        likeList.addItem(product);
    });
}

var images = [
    'https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140630_1280.jpg',
    'https://img.freepik.com/premium-photo/abstract-floral-background-floral-art-abstract-wallpaper-background-floral-textured-flower-bg_71956-7035.jpg?w=826',
    'sakura-cherry-blossom-wallpaper-preview.jpg',
];
var currentImage = 0;
var homeSection = document.querySelector('.home');

setInterval(function() {
    currentImage = (currentImage + 1) % images.length;
    homeSection.style.background = 'url(' + images[currentImage] + ') no-repeat';
    homeSection.style.backgroundSize = 'cover';
    homeSection.style.backgroundPosition = 'center';
}, 5000);

var cartModal = document.getElementById("CartModal");
var likeModal = document.getElementById("LikeModal");
var cartBtn = document.getElementById("shop-list");
var likeBtn = document.getElementById("Like-btn"); 
var span = document.getElementsByClassName("close");

function showModal(modal, content) {
    // Get the modal content element
    var modalContent = modal.querySelector('.modal-content p');
    // Set the content of the modal content element
    modalContent.innerHTML = content;
    // Show the modal
    modal.style.display = "block";
}

cartBtn.onclick = function() {
    // Get the cart count from the shoppingCart object
    var cartCount = shoppingCart.items.length;
    showModal(cartModal, 'Number of items in the cart: ' + cartCount);
};

likeBtn.onclick = function() {
    // Get the like count from the likeList object
    var likeCount = likeList.items.length;
    showModal(likeModal, 'Number of liked items: ' + likeCount);
};

for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        cartModal.style.display = "none";
        likeModal.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
    if (event.target == likeModal) {
        likeModal.style.display = "none";
    }
};


// Get all the like buttons associated with items
var likeButtons = document.querySelectorAll('.box .fas.fa-heart'); 

for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function(event) {
        event.preventDefault();
        var likeCountElement = this.nextElementSibling; 
        var currentLikeCount = parseInt(likeCountElement.innerText);
        likeCountElement.innerText = currentLikeCount + 1;
    });
}

  