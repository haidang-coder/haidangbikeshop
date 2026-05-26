
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cart-count');

let products=[];
let cart=[];

async function loadProducts(){
 const res = await fetch('/api/products');
 products = await res.json();
 renderProducts(products);
}

function renderProducts(items){
 productList.innerHTML='';

 items.forEach(p=>{
  productList.innerHTML += `
  <div class="card">
    <img src="${p.image}">

    <div class="info">
      <span class="badge">${p.category}</span>
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>

      <div class="actions">
        <button class="buy" onclick="buyNow('${p.name}')">Mua ngay</button>
        <button class="cart" onclick="addToCart()">🛒</button>
      </div>
    </div>
  </div>
  `;
 });
}

function addToCart(){
 cart.push(1);
 cartCount.innerText = cart.length;
}

function buyNow(name){
 alert('Đã mua ' + name);
}

searchInput.addEventListener('input',(e)=>{
 const key = e.target.value.toLowerCase();

 const filtered = products.filter(p=>
  p.name.toLowerCase().includes(key)
 );

 renderProducts(filtered);
});

function openLogin(){
 document.getElementById('loginModal').style.display='flex';
}

function openRegister(){
 document.getElementById('registerModal').style.display='flex';
}

function closeModal(id){
 document.getElementById(id).style.display='none';
}

function login(){
 alert('Đăng nhập thành công');
 closeModal('loginModal');
}

function register(){
 alert('Đăng ký thành công');
 closeModal('registerModal');
}

loadProducts();
