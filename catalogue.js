const firebaseConfig = { databaseURL: "https://flashice-motor-db-default-rtdb.europe-west1.firebasedatabase.app/" };
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let allCars = [];
let filteredCars = [];
let currentPage = 1;
const itemsPerPage = 6;

const grid = document.getElementById('carGrid');

db.ref('voitures').on('value', (snapshot) => {
    const data = snapshot.val();
    allCars = [];
    if (data) {
        for (let id in data) {
            let car = data[id];
            car.numPrice = parseInt(car.price.toString().replace(/[^0-9]/g, '')) || 0;
            allCars.push(car);
        }
    }
    applyFilters();
});

function applyFilters() {
    let results = [...allCars];
    const term = document.getElementById('searchInput').value.toLowerCase();
    if (term) {
        results = results.filter(c => c.brand.toLowerCase().includes(term) || c.model.toLowerCase().includes(term));
    }
    const selectedCats = Array.from(document.querySelectorAll('.category-check')).filter(i => i.checked).map(i => i.value);
    if (selectedCats.length > 0) {
        results = results.filter(c => selectedCats.includes(c.type));
    }
    const sort = document.getElementById('priceSort').value;
    if (sort === "asc") results.sort((a, b) => a.numPrice - b.numPrice);
    if (sort === "desc") results.sort((a, b) => b.numPrice - a.numPrice);

    filteredCars = results;
    render();
}

function render() {
    grid.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredCars.slice(start, start + itemsPerPage);

    currentItems.forEach(car => {
        const div = document.createElement('div');
        div.className = "cards2 car-appear"; 

        div.innerHTML = `
            <div class="img-container">
                <img src="${car.img}" alt="${car.model}">
            </div>
            <div class="category-tag">${car.type}</div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="price-tag">${car.price}</div>
            <button><a href="https://discord.gg/qf2jkFFWmZ">Détails</a></button>
        `;
        grid.appendChild(div);
    });
    document.getElementById('pageInfo').innerText = `Page ${currentPage}`;
}

document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('priceSort').addEventListener('change', applyFilters);
document.querySelectorAll('.category-check').forEach(c => c.addEventListener('change', applyFilters));

document.getElementById('nextPage').onclick = () => { if (currentPage * itemsPerPage < filteredCars.length) { currentPage++; render(); } };
document.getElementById('prevPage').onclick = () => { if (currentPage > 1) { currentPage--; render(); } };