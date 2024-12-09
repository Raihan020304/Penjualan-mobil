let cartItems = [];

// Fungsi untuk menambahkan mobil ke keranjang
function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCartDisplay();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartList.innerHTML = ''; // Clear list

    if (cartItems.length === 0) {
        emptyMessage.style.display = 'block';
        checkoutBtn.style.display = 'none';
    } else {
        emptyMessage.style.display = 'none';
        checkoutBtn.style.display = 'block';

        // Menampilkan setiap item dalam keranjang
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartList.appendChild(listItem);
        });
    }
}

// Fungsi untuk membuka formulir checkout
function openForm() {
    document.getElementById('checkout-form').style.display = 'block';
}

// Fungsi untuk mengirim pesanan
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    alert(`Pesanan Anda telah diterima! 
Nama: ${name} 
Email: ${email} 
Nomor HP: ${phone} 
Alamat: ${address}`);
    
    // Reset form and cart
    document.getElementById('orderForm').reset();
    cartItems = [];
    updateCartDisplay();
    document.getElementById('checkout-form').style.display = 'none';
}
