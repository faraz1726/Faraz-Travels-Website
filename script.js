/* ============================================
   script.js — Faraz Travels & Packers
   ============================================ */

// ─── 1. SCROLL REVEAL ANIMATION ─────────────────────────────────────────────
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(function (sec) {
    const distanceFromTop = sec.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
}

// Run on scroll and also immediately on page load
window.addEventListener("scroll", revealSections);
revealSections();


// ─── 2. TRAVEL BOOKING FORM ──────────────────────────────────────────────────
document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name       = document.getElementById("tname").value;
  const phone      = document.getElementById("tphone").value;
  const date       = document.getElementById("tdate").value;
  const passengers = document.getElementById("passengers").value;
  const service    = document.getElementById("tservice").value;
  const details    = document.getElementById("tdetails").value;

  const message =
    "Travel Booking:%0A" +
    "Name: "       + name       + "%0A" +
    "Phone: "      + phone      + "%0A" +
    "Date: "       + date       + "%0A" +
    "Passengers: " + passengers + "%0A" +
    "Service: "    + service    + "%0A" +
    "Details: "    + details;

  // Open WhatsApp in new tab, then redirect current tab to email client
  window.open("https://wa.me/919971668040?text=" + message);
  window.location.href =
    "mailto:faraztravels@gmail.com?subject=Travel Booking&body=" + message;
});


// ─── 3. PACKERS & MOVERS BOOKING FORM ───────────────────────────────────────
document.getElementById("packForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name   = document.getElementById("pname").value;
  const phone  = document.getElementById("pphone").value;
  const date   = document.getElementById("pdate").value;
  const pickup = document.getElementById("pickup").value;
  const drop   = document.getElementById("drop").value;
  const truck  = document.getElementById("truck").value;

  const message =
    "Packers Booking:%0A" +
    "Name: "   + name   + "%0A" +
    "Phone: "  + phone  + "%0A" +
    "Date: "   + date   + "%0A" +
    "Pickup: " + pickup + "%0A" +
    "Drop: "   + drop   + "%0A" +
    "Truck: "  + truck;

  // Open WhatsApp in new tab, then redirect current tab to email client
  window.open("https://wa.me/919971668040?text=" + message);
  window.location.href =
    "mailto:faraztravels@gmail.com?subject=Packers Booking&body=" + message;
});
