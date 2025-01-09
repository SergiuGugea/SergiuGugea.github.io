// Preserve Dark Mode Across Pages
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });
  
  // Toggle Dark Mode
  function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  }
  
  // Show Help Message
  function showHelp() {
    alert("Need help? Contact us via the form on the Contact Us page.");
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Funcție pentru a derula în partea de jos a paginii
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  // Ascunde/Arată butonul "Up" când utilizatorul derulează
  const scrollUpButton = document.getElementById("scroll-up");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  // Lista cu locațiile și identificatorii elementelor pentru fiecare review
const reviewsDatabase = [
  { page: "Template_DM.html", id: "Cyberpunk", keywords: ["cyberpunk", "cd projekt", "bugs"] },
  { page: "Template_DM.html", id: "Witcher", keywords: ["witcher", "cd projekt", "RPG"] },
  { page: "Template_DM.html", id: "Hades", keywords: ["hades", "rogue", "challange"] },
  { page: "upcoming.html", id: "Elden-Ring", keywords: ["elden ", "fromsoftware", "Rpg"] },
  { page: "upcoming.html", id: "Dark", keywords: ["doom", "bethesda", "medieval"] },
  { page: "upcoming.html", id: "GTA6", keywords: ["gta", "rockstar"] },
  { page: "Template_DM.html", id: "Eternal", keywords: ["eternal", "combat", "shooter"] },
  { page: "Template_DM.html", id: "Gow", keywords: ["god", "2018", "kratos"] },
  { page: "Template_DM.html", id: "Kcd", keywords: ["kingdom", "bohemia",] },

  
];

// Funcție pentru căutare
function searchReview(query) {
  const lowerQuery = query.toLowerCase();

  // Caută în baza de date review-ul corespunzător
  const result = reviewsDatabase.find(review =>
    review.keywords.some(keyword => keyword.includes(lowerQuery))
  );

  if (result) {
    // Redirecționează utilizatorul către pagina care conține review-ul
    window.location.href = `${result.page}#${result.id}`;
  } else {
    alert("No matching review found.");
  }
}

// Event pentru input-ul de căutare
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value;
    if (query.trim() !== "") {
      searchReview(query);
    } else {
      alert("Please enter a search term.");
    }
  }
}

function toggleMenu() {
  const navList = document.getElementById("navList");
  navList.classList.toggle("show");
}

  
  
  


  