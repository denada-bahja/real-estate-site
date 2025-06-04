// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});



// animacioni i tekstit
const part1Text = "Ëndrrave ";
const part1 = document.getElementById("part1");
const speed = 400;

function typePart1() {
  part1.textContent = "";
  let j = 0;

  function type() {
    if (j < part1Text.length) {
      part1.textContent += part1Text.charAt(j);
      j++;
      setTimeout(type, speed);
    } else {
      setTimeout(typePart1, 2000);
    }
  }

  type();
}

typePart1();


// sherbimet fillimi
const cardContainer = document.getElementById("cardContainer");
let scrollSpeed = 1.5;
let autoScroll;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    cardContainer.scrollLeft += scrollSpeed;

    if (cardContainer.scrollLeft >= cardContainer.scrollWidth - cardContainer.clientWidth) {
      cardContainer.scrollLeft = 0;
    }

  }, 16);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

cardContainer.addEventListener("mouseenter", stopAutoScroll);
cardContainer.addEventListener("mouseleave", startAutoScroll);

startAutoScroll();
//sherbimet fundi


// faqs section
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

document.querySelectorAll('#faq [data-aos]').forEach(el => {
  el.classList.add('aos-init');
});

AOS.init({
  duration: 800,
  once: true,
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'aos-animate',
});

AOS.refresh();



// about us fillimi
function expandCard(clickedCard) {
  const isAlreadyOpen = clickedCard.classList.contains('open');
  const allCards = document.querySelectorAll('.about-card');

  allCards.forEach(card => card.classList.remove('open'));

  if (!isAlreadyOpen) {
    clickedCard.classList.add('open');
  }

  const allAccordionItems = clickedCard.querySelectorAll('.accordion-item');
  allAccordionItems.forEach(item => item.classList.remove('open'));
}

function toggleAccordion(event, clickedItem) {
  event.stopPropagation();

  const group = clickedItem.parentElement;
  const allItems = group.querySelectorAll('.accordion-item');

  allItems.forEach(item => {
    if (item !== clickedItem) {
      item.classList.remove('open');
    }
  });

  clickedItem.classList.toggle('open');
}
// about us fundi



//filtrat 
function goToFilteredProperties() {
  const type = document.getElementById('filterType').value;
  const city = document.getElementById('filterCity').value;
  const price = document.getElementById('filterPrice').value;

  const queryParams = new URLSearchParams();

  if (type) queryParams.append("type", type);
  if (city) queryParams.append("city", city);
  if (price) queryParams.append("price", price);

  window.location.href = `properties.html?${queryParams.toString()}`;
}

