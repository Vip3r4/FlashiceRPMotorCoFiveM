const cars = [
    { brand: "", model: "811s2", price: 90000, type: "Super-Car", img: "/images/véhicules/Super-Car/gb811s2.png" },
    { brand: "", model: "Banshees", price: 60000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbbanshees.png" },
    { brand: "Emerus", model: "Sb1", price: 100000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbemerussb1.png" },
    { brand: "", model: "Milano", price: 80000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbmilano.png" },
    { brand: "Neon", model: "CT", price: 80000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbneonct.png" },
    { brand: "Nexus", model: "RR", price: 80000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbnexusrr.png" },
    { brand: "", model: "Prospero", price: 85000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbprospero.png" },
    { brand: "Solace", model: "", price: 70000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbsolace.png" },
    { brand: "Solace", model: "V", price: 75000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbsolacev.png" },
    { brand: "Ten", model: "FR", price: 50000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbtenfr.png" },
    { brand: "TR", model: "3S", price: 65000, type: "Super-Car", img: "/images/véhicules/Super-Car/gbtr3s.png" },
    { brand: "Gresley", model: "STX", price: 60000, type: "SUV", img: "/images/véhicules/Suv/gbgresleystx.png" },
    { brand: "", model: "Starlight", price: 35000, type: "SUV", img: "/images/véhicules/Suv/gbstarlight.png" },
    { brand: "", model: "Boxboy", price: 60000, type: "Utile", img: "/images/véhicules/Utile/gbboxboy.png" },
    { brand: "Bison", model: "STX", price: 28000, type: "Off-Road", img: "/images/véhicules/Off-Road/gbbisonstx.png" },
    { brand: "Mojave", model: "", price: 45000, type: "Off-Road", img: "/images/véhicules/Off-Road/gbmojave.png" },
    { brand: "Bison", model: "HF", price: 40000, type: "Off-Road", img: "/images/véhicules/Off-Road/gbbisonhf.png" },
    { brand: "Club", model: "XR", price: 30000, type: "Sport", img: "/images/véhicules/Sport/gbclubxr.png" },
    { brand: "Dominator", model: "GSX", price: 35000, type: "Sport", img: "/images/véhicules/Sport/gbdominatorgsx.png" },
    { brand: "Harmann", model: "", price: 60000, type: "Sport", img: "/images/véhicules/Sport/gbharmann.png" },
    { brand: "Iris", model: "Z", price: 35000, type: "Sport", img: "/images/véhicules/Sport/gbirisz.png" },
    { brand: "Mogul", model: "RS", price: 29000, type: "Sport", img: "/images/véhicules/Sport/gbmogulrs.png" },
    { brand: "Raidillon", model: "", price: 29000, type: "Sport", img: "/images/véhicules/Sport/gbraidillon.png" },
    { brand: "Sapphire", model: "", price: 70000, type: "Sport", img: "/images/véhicules/Sport/gbsapphire.png" },
    { brand: "Schlagen", model: "R", price: 65000, type: "Sport", img: "/images/véhicules/Sport/gbschlagenr.png" },
    { brand: "Schlagen", model: "SP", price: 68000, type: "Sport", img: "/images/véhicules/Sport/gbschlagensp.png" },
    { brand: "Schwartzers", model: "", price: 43000, type: "Sport", img: "/images/véhicules/Sport/gbschwartzers.png" },
    { brand: "Sentinel", model: "GTS", price: 40000, type: "Sport", img: "/images/véhicules/Sport/gbsentinelgts.png" },
    { brand: "Sidewinder", model: "", price: 29000, type: "Sport", img: "/images/véhicules/Sport/gbsidewinder.png" },
    { brand: "Sultan", model: "RSX", price: 80000, type: "Sport", img: "/images/véhicules/Sport/gbsultanrsx.png" },
    { brand: "Admiral", model: "", price: 16000, type: "Sedan", img: "/images/véhicules/Sedan/gbadmiral.png" },
    { brand: "Impaler", model: "", price: 18000, type: "Sedan", img: "/images/véhicules/Sedan/gbimpaler.png" },
    { brand: "Schrauber", model: "", price: 22000, type: "Sedan", img: "/images/véhicules/Sedan/gbschrauber.png" },
    { brand: "Tahoma", model: "GT", price: 27000, type: "Sedan", img: "/images/véhicules/Sedan/gbtahomagt.png" },
    { brand: "Turismo", model: "GT", price: 33000, type: "Sedan", img: "/images/véhicules/Sedan/gbturismogt.png" },
    { brand: "Turismo", model: "GTS", price: 31000, type: "Sedan", img: "/images/véhicules/Sedan/gbturismogts.png" },
    { brand: "Briosof", model: "", price: 30000, type: "Compact", img: "/images/véhicules/Compact/gbbriosof.png" },
    { brand: "Issimetro", model: "", price: 35000, type: "Compact", img: "/images/véhicules/Compact/gbissimetro.png" },
    { brand: "Komoda", model: "GT", price: 24000, type: "Compact", img: "/images/véhicules/Compact/gbkomodagt.png" },
    { brand: "Vivant", model: "", price: 20000, type: "Compact", img: "/images/véhicules/Compact/gbvivant.png" },
    { brand: "Vivant", model: "GRB", price: 32000, type: "Compact", img: "/images/véhicules/Compact/gbvivantgrb.png" }
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredCars = [...cars];

const carGrid = document.getElementById('carGrid');
const searchInput = document.getElementById('searchInput');
const priceSort = document.getElementById('priceSort');
const checkboxes = document.querySelectorAll('.category-check');
const pageInfo = document.getElementById('pageInfo');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');

function displayCars(data) {
    carGrid.innerHTML = "";
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = data.slice(startIndex, endIndex);

    if (paginatedItems.length === 0) {
        carGrid.innerHTML = "<p style='color:white; grid-column: 1/-1;'>Aucun véhicule trouvé.</p>";
    }

    paginatedItems.forEach(car => {
        const card = document.createElement('div');
        card.className = "cards2 car-appear";
        
        const fullName = `${car.brand} ${car.model}`.trim();

        card.innerHTML = `
            <div class="img-container">
                <img src="${car.img}" alt="${fullName}" onerror="this.src='https://via.placeholder.com/350x200?text=Image+Indisponible'">
            </div>
            <h2>${fullName}</h2>
            <p class="price-tag">${car.price.toLocaleString()} $</p>
            <p class="category-tag">${car.type}</p>
            <button><a href="#">Voir détails</a></button>
        `;
        carGrid.appendChild(card);
    });

    updatePaginationControls(data.length);
}

function updatePaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if(pageInfo) pageInfo.innerText = `Page ${currentPage} sur ${totalPages || 1}`;
    
    if(prevBtn) prevBtn.disabled = (currentPage === 1);
    if(nextBtn) nextBtn.disabled = (currentPage >= totalPages || totalPages === 0);
}

function updateFilters() {
    currentPage = 1;
    
    let tempCars = [...cars];

    const query = searchInput.value.toLowerCase();
    tempCars = tempCars.filter(c => 
        c.brand.toLowerCase().includes(query) || 
        c.model.toLowerCase().includes(query)
    );

    const checkedCats = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    if (checkedCats.length > 0) {
        tempCars = tempCars.filter(c => checkedCats.includes(c.type));
    }

    if (priceSort.value === "asc") {
        tempCars.sort((a, b) => a.price - b.price);
    } else if (priceSort.value === "desc") {
        tempCars.sort((a, b) => b.price - a.price);
    }

    filteredCars = tempCars;
    displayCars(filteredCars);
}

searchInput.addEventListener('input', updateFilters);
priceSort.addEventListener('change', updateFilters);
checkboxes.forEach(cb => cb.addEventListener('change', updateFilters));

if(prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayCars(filteredCars);
            window.scrollTo({ top: 500, behavior: 'smooth' });
        }
    });
}

if(nextBtn) {
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCars(filteredCars);
            window.scrollTo({ top: 500, behavior: 'smooth' });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCars(filteredCars);
});