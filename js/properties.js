// Initialize AOS
AOS.init();



// Lista e pronave
const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1609740699990-436c2cbf7151?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Qira",
    title: "Garsoniere moderne",
    city: "Tiranë",
    location: "Komuna e Parisit",
    size: "45 m²",
    beds: 1,
    baths: 1,
    price: 250

  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1643319602530-7425f2168125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Shitje",
    title: "Vile buze detit",
    city: "Durrës",
    location: "Plazh",
    size: "200 m²",
    beds: 4,
    baths: 3,
    price: 180000
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?q=80&w=2072",
    label: "Qira",
    title: "Apartament modern",
    city: "Shkodër",
    location: "Qendër",
    size: "70 m²",
    beds: 2,
    baths: 1,
    price: 300
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1631528858266-5ebeb8bfc6f5?q=80&w=1920",
    label: "Shitje",
    title: "Apartament",
    city: "Vlorë",
    location: "Lungomare",
    size: "90 m²",
    beds: 2,
    baths: 2,
    price: 95000
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    label: "Qira",
    title: "Studio e vogël",
    city: "Elbasan",
    location: "Qendër",
    size: "35 m²",
    beds: 1,
    baths: 1,
    price: 180
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1638030802076-41493b4764dd?q=80&w=1974",
    label: "Shitje",
    title: "Shtëpi tradicionale",
    city: "Korçë",
    location: "Pazari i Vjetër",
    size: "150 m²",
    beds: 3,
    baths: 2,
    price: 120000
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1667552750442-3b33eb38e00f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGFnZSUyMGhvdXNlfGVufDB8fDB8fHwy",
    label: "Shitje",
    title: "Shtëpi fshati",
    city: "Berat",
    location: "Mangalem",
    size: "110 m²",
    beds: 3,
    baths: 1,
    price: 75000
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?q=80&w=2070",
    label: "Shitje",
    title: "Apartament i rinovuar",
    city: "Gjirokastër",
    location: "Qyteti i Vjetër",
    size: "70 m²",
    beds: 2,
    baths: 1,
    price: 68000
  }

];

// struktura e pronave properties.html
function displayProperties(filteredProps) {
  const container = document.getElementById("propertyList");
  container.innerHTML = "";

  if (filteredProps.length === 0) {
    container.innerHTML = '<p>Nuk u gjet asnjë pronë.</p>';
    return;
  }

  filteredProps.forEach(property => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-4 col-sm-6  p-3";
    card.innerHTML = `
          <div class="card properties-card shadow-sm h-100">
            <img src="${property.image}" class="services-img card-img-top" alt="${property.title}">
            <div class="card-body">
              <span class="badge bg-${property.label === 'Qira' ? 'warning' : 'success'} text-white p-2 mb-2">${property.label}</span>
              <h5 class="card-title">${property.title}</h5>
              <p class="text-muted">📍 ${property.city}, ${property.location}</p>
              <p>📐 ${property.size} &nbsp;&nbsp; 🛏 ${property.beds} &nbsp;&nbsp; 🛁 ${property.baths}</p>
              <h6 class="text-warning fw-bold">${property.price.toLocaleString()} €${property.label === 'Qira' ? '/muaj' : ''}</h6>
              <a href="detaje.html?id=${property.id}" class="btn btn-sm btn-dark">Detaje</a>
            </div>
          </div>`;
    container.appendChild(card);
  });
}

function filterProperties() {
  const type = document.getElementById('filterType').value;
  const city = document.getElementById('filterCity').value;
  const priceRange = document.getElementById('filterPrice').value;

  let filtered = properties;

  if (type) {
    filtered = filtered.filter(p => p.label === type);
  }

  if (city) {
    filtered = filtered.filter(p => p.city === city);
  }

  if (priceRange) {
    const [min, max] = priceRange.split('-');
    filtered = filtered.filter(p => {
      return p.price >= parseInt(min) && (max === '' || p.price <= parseInt(max));
    });
  }

  displayProperties(filtered);
}

function resetFilters() {
  document.getElementById('filterType').value = '';
  document.getElementById('filterCity').value = '';
  document.getElementById('filterPrice').value = '';
  displayProperties(properties);
}


//butonat e filtrit
function filterByCategory(categoryKeyword) {
  const filtered = properties.filter(p => p.type.toLowerCase().includes(categoryKeyword.toLowerCase()));
  displayProperties(filtered);
}

function filterByCategory(categoryKeyword) {
  let keywordLower = categoryKeyword.toLowerCase();

  const filtered = properties.filter(p => {
    const labelLower = p.label.toLowerCase();
    return (
      (keywordLower === "bli" && labelLower === "shitje") ||
      (keywordLower === "qera" && labelLower === "qira")
    );
  });

  displayProperties(filtered);
}


// Shfaq fillimisht të gjitha
document.addEventListener('DOMContentLoaded', () => {
  displayProperties(properties);
});

// filtrimi nga faqja kryesore 
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const city = params.get("city");
  const priceRange = params.get("price");

  let filtered = properties;

  if (type) filtered = filtered.filter(p => p.label.toLowerCase() === type.toLowerCase());
  if (city) filtered = filtered.filter(p => p.city === city);
  if (priceRange) {
    const [min, max] = priceRange.split("-");
    filtered = filtered.filter(p => {
      return p.price >= parseInt(min) && (max === '' || p.price <= parseInt(max));
    });
  }

  displayProperties(filtered);
});
