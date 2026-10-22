/* ==========================================================================
   EB GAMES PROTOTYPE - JAVASCRIPT
   Contemporary Web Design 2 - Assignment 2 (Testing)
   Mid-fidelity prototype based on Sketch 1 (Homepage) & Sketch 2 (Games / Flow)
   ========================================================================== */

if (window.__ebPrototypeInitialized) {
  // Prevent duplicate execution if both js/script.js and script.js are included
  console.info("EB Games prototype already initialized.");
} else {
  window.__ebPrototypeInitialized = true;

  // Default Local JSON Data (Embedded fallback ensures zero CORS errors when opening file directly)
  const defaultGamesData = {
    nintendo: [
      {
        id: "nin-1",
        title: "Mario Kart",
        platform: "Nintendo",
        price: 79.99,
        genre: "Racing",
        rating: "E for Everyone",
        image: "Nintendo Mario Kart 8 Deluxe.jpg",
        description: "Hit the road with Mario, Luigi, and friends in the ultimate multiplayer kart racing experience.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "nin-2",
        title: "Super Mario",
        platform: "Nintendo",
        price: 79.99,
        genre: "Platformer",
        rating: "E for Everyone",
        image: "New Super Mario Bros. U Deluxe Switch.jpg",
        description: "Join Mario on a massive, globe-trotting 3D adventure to save Princess Peach.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "nin-3",
        title: "Street Fighter 6",
        platform: "Nintendo",
        price: 69.99,
        genre: "Fighting",
        rating: "T for Teen",
        image: "Street Fighter 30th Anniversary Collection.jpg",
        description: "Experience the next evolution of Street Fighter with redesigned world tour combat and classic brawls.",
        stock: 6,
        maxStock: 15,
        inventory: "6/15"
      }
    ],
    xbox: [
      {
        id: "xb-1",
        title: "Halo Infinite",
        platform: "Xbox Series X",
        price: 79.99,
        genre: "First-Person Shooter",
        rating: "T for Teen",
        image: "Halo Infinite Xbox Series X.jpg",
        description: "The legendary Master Chief returns to explore the Zeta Halo ring and battle the Banished on Xbox Series X.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "xb-2",
        title: "Minecraft",
        platform: "Xbox Series X",
        price: 29.99,
        genre: "Sandbox / Adventure",
        rating: "E10+ for Everyone 10+",
        image: "Minecraft Xbox Series X.jpg",
        description: "Build anything you can imagine, mine for resources, and survive against nocturnal mobs on Xbox Series X.",
        stock: 13,
        maxStock: 15,
        inventory: "13/15"
      },
      {
        id: "xb-3",
        title: "Star Wars Jedi Survivor",
        platform: "Xbox Series X",
        price: 79.99,
        genre: "Action / Adventure",
        rating: "T for Teen",
        image: "Star Wars Jedi Survivor Xbox Series X.jpg",
        description: "Pick up your lightsaber and fight against the Empire across galactic worlds.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "xb-4",
        title: "Gears of War: E-Day",
        platform: "Xbox Series X",
        price: 79.99,
        genre: "Action / Shooter",
        rating: "M for Mature",
        image: "Gears of War E-Day.jpg",
        description: "Experience the emergence of the Locust Horde through the eyes of Marcus Fenix and Dom Santiago on Emergence Day.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      }
    ],
    playstation: [
      {
        id: "ps-1",
        title: "Spider-Man",
        platform: "PlayStation",
        price: 79.99,
        genre: "Action / Adventure",
        rating: "T for Teen",
        image: "Spiderman 2 PS5.jpg",
        description: "Swing through Marvel's New York City as Peter Parker facing iconic supervillains.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "ps-2",
        title: "The Last of Us",
        platform: "PlayStation",
        price: 89.99,
        genre: "Action / Survival",
        rating: "M for Mature",
        image: "the last of us part 2.jpg",
        description: "Experience the emotional, post-pandemic story of Joel and Ellie crossing a ruined America.",
        stock: 13,
        maxStock: 15,
        inventory: "13/15"
      },
      {
        id: "ps-3",
        title: "Street Fighter 6",
        platform: "PlayStation",
        price: 69.99,
        genre: "Fighting",
        rating: "T for Teen",
        image: "Street fighter 6.jpg",
        description: "Capcom's premier fighting game franchise returns with next-gen graphics and deep fighting mechanics.",
        stock: 6,
        maxStock: 15,
        inventory: "6/15"
      },
      {
        id: "ps-4",
        title: "Ghost of Tsushima",
        platform: "PlayStation",
        price: 79.99,
        genre: "Action / Adventure",
        rating: "M for Mature",
        image: "Ghost of Tsushima.jpg",
        description: "Explore feudal Japan as Jin Sakai and fight to protect Tsushima from invading forces.",
        stock: 15,
        maxStock: 15,
        inventory: "15/15"
      },
      {
        id: "ps-5",
        title: "God of War Ragnarök",
        platform: "PlayStation",
        price: 79.99,
        genre: "Action / Adventure",
        rating: "M for Mature",
        image: "God of War Ragnarok.jpg",
        description: "Embark on an epic journey with Kratos and Atreus as they face the might of the Norse gods.",
        stock: 0,
        maxStock: 15,
        inventory: "0/15"
      }
    ],
    accessories: [
      {
        id: "acc-1",
        title: "PS5 Pulse Elite Wireless Headset",
        platform: "PlayStation",
        price: 149.99,
        genre: "Wireless Headset",
        rating: "In Stock",
        image: "PS5 Pulse Elite Wireless.jpg",
        description: "Experience immersive gaming audio with the PS5 Pulse Elite Wireless Headset."
      },
      {
        id: "acc-2",
        title: "DualSense PS5 Charging Station",
        platform: "PlayStation",
        price: 129.99,
        genre: "Charging Dock",
        rating: "In Stock",
        image: "DualSense PS5 charging station.jpg",
        description: "Charge up to two DualSense wireless controllers simultaneously with the DualSense PS5 Charging Station."
      },
      {
        id: "acc-3",
        title: "PS5 Stand & Cooling Station",
        platform: "PlayStation",
        price: 39.99,
        genre: "Charging Dock",
        rating: "In Stock",
        image: "Cooling Station with LED Controller Charging Station for PlayStation 5 Console, Slim and Pro.jpg",
        description: "PS5, PS5 Slim, and PS5 Pro stand and cooling station with LED controller charging station for PlayStation 5 console, controller charger, and 3-level cooling fan."
      },
      {
        id: "acc-11",
        title: "PS5 5TB External Hard Drive",
        platform: "PlayStation",
        price: 129.99,
        genre: "External Storage",
        rating: "In Stock",
        image: "PS5 External HDD USB Hard drive.jpg",
        description: "Expand your PS5 game storage with a 5TB external hard drive."
      },
      {
        id: "acc-12",
        title: "PS5 Charging Cable",
        platform: "PlayStation",
        price: 19.99,
        genre: "Charging Cable",
        rating: "In Stock",
        image: "PS5 Controller Charger.jpg",
        description: "High-quality charging cable for charging and connecting PlayStation 5 controllers."
      },
      {
        id: "acc-4",
        title: "Xbox Wireless Controller",
        platform: "Xbox",
        price: 74.99,
        genre: "Wireless Controller",
        rating: "In Stock",
        image: "",
        description: "Experience modernized textured grips, hybrid D-pad, and refined geometry for Xbox Series X and PC."
      },
      {
        id: "acc-5",
        title: "Xbox Wireless Headset",
        platform: "Xbox",
        price: 129.99,
        genre: "Wireless Headset",
        rating: "In Stock",
        image: "",
        description: "Experience high-quality audio with low-latency, 100% wireless connection to your Xbox console."
      },
      {
        id: "acc-6",
        title: "Xbox Rechargeable Battery + USB-C",
        platform: "Xbox",
        price: 29.99,
        genre: "Battery & Cable",
        rating: "In Stock",
        image: "",
        description: "Keep the action going with the Xbox Rechargeable Battery and included 9-foot USB-C cable."
      },
      {
        id: "acc-18",
        title: "Rechargeable Xbox Controller Battery Pack",
        platform: "Xbox",
        price: 24.99,
        genre: "Battery & Power",
        rating: "In Stock",
        image: "Rechargeable Xbox Controller Battery Pack.jpg",
        description: "High-capacity rechargeable battery pack designed for continuous gameplay with Xbox Series X|S wireless controllers."
      },
      {
        id: "acc-19",
        title: "Seagate Game Drive for Xbox 4TB External Hard Drive",
        platform: "Xbox",
        price: 149.99,
        genre: "External Storage",
        rating: "In Stock",
        image: "Seagate Game Drive for Xbox 4TB External Hard Drive.jpg",
        description: "High-speed 4TB external hard drive officially licensed for Xbox Series X|S and Xbox One storage expansion."
      },
      {
        id: "acc-20",
        title: "Xbox Controller Stand",
        platform: "Xbox",
        price: 19.99,
        genre: "Display Stand",
        rating: "In Stock",
        image: "",
        description: "Sleek and sturdy display stand custom-molded to showcase and store your Xbox wireless controller."
      },
      {
        id: "acc-7",
        title: "Nintendo Switch Pro Controller",
        platform: "Nintendo",
        price: 89.99,
        genre: "Pro Controller",
        rating: "In Stock",
        image: "",
        description: "Premium controller featuring motion controls, HD rumble, built-in amiibo functionality, and ergonomic grip."
      },
      {
        id: "acc-8",
        title: "Joy-Con Charging Grip",
        platform: "Nintendo",
        price: 39.99,
        genre: "Charging Grip",
        rating: "In Stock",
        image: "",
        description: "Combine your left and right Joy-Con into one comfortable controller while keeping them charged during gameplay."
      },
      {
        id: "acc-9",
        title: "SanDisk 128GB MicroSDXC Card",
        platform: "Nintendo",
        price: 34.99,
        genre: "Memory Storage",
        rating: "In Stock",
        image: "",
        description: "Officially licensed memory card for Nintendo Switch providing dependable, high-performance storage."
      },
      {
        id: "acc-10",
        title: "RIG 300 PRO HC Universal Gaming Headset",
        platform: "Multi-Platform",
        price: 49.99,
        genre: "Wired Gaming Headset",
        rating: "In Stock",
        image: "RIG 300 PRO HC Universal Gaming Headset.jpg",
        description: "High-quality 40mm over-ear speakers with flip-to-mute mic compatible with PlayStation, Xbox, and Nintendo Switch."
      },
      {
        id: "acc-14",
        title: "USB-C Gaming Charging Cable",
        platform: "Multi-Platform",
        price: 14.99,
        genre: "Charging Cable",
        rating: "In Stock",
        image: "",
        description: "Durable braided 10-foot USB-C fast charging cable compatible with all modern gaming platforms."
      },
      {
        id: "acc-15",
        title: "Controller Thumb Grips",
        platform: "Multi-Platform",
        price: 12.99,
        genre: "Controller Accessories",
        rating: "In Stock",
        image: "",
        description: "High-traction silicone analog thumb grips designed for PlayStation, Xbox, and Switch controllers."
      },
      {
        id: "acc-16",
        title: "Gaming Keyboard",
        platform: "Multi-Platform",
        price: 69.99,
        genre: "Mechanical Keyboard",
        rating: "In Stock",
        image: "",
        description: "RGB backlit mechanical gaming keyboard offering tactile switches and multi-platform compatibility."
      },
      {
        id: "acc-17",
        title: "Gaming Mouse",
        platform: "Multi-Platform",
        price: 39.99,
        genre: "Optical Mouse",
        rating: "In Stock",
        image: "",
        description: "Precision high-DPI optical gaming mouse with programmable buttons and dynamic RGB lighting."
      }
    ]
  };

  // Application State
  const state = {
    gamesData: defaultGamesData,
    selectedPlatform: "playstation", // Default platform matching PlayStation active selection
    selectedAccessoryFilter: "playstation",
    cart: [],
    selectedPaymentMethod: "Credit Card",
    lastCompletedOrder: null
  };

  // DOM Content Loaded Handler
  document.addEventListener("DOMContentLoaded", () => {
    initData();
    setupNavigation();
    setupHeaderActions();
    setupPlatformSelector();
    setupAccessoriesSelector();
    setupCartActions();
    setupCheckoutActions();
    setupSearch();
    renderProducts();
    renderAccessories();
    updateCartBadge();
    setupPromoCarousel();
    setupHomepageBackgroundSlideshow();
  });

  /* --------------------------------------------------------------------------
     DATA INITIALIZATION
     Attempts to load local data/games.json, falls back to embedded dataset
     -------------------------------------------------------------------------- */
  async function initData() {
    try {
      const response = await fetch("data/games.json");
      if (response.ok) {
        const data = await response.json();
        state.gamesData = data;
        renderProducts();
        renderAccessories();
      }
    } catch (err) {
      // Expected when opening index.html directly from local filesystem (file:// protocol)
      console.info("Using embedded local JSON dataset for prototype.");
    }
  }

  /* --------------------------------------------------------------------------
     VIEW ROUTING & SWITCHING
     -------------------------------------------------------------------------- */
  function showView(viewId) {
    const views = [
      "homepage-view",
      "games-view",
      "accessories-view",
      "category-placeholder-view",
      "cart-view",
      "checkout-view",
      "confirmation-view"
    ];

    views.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        if (id === viewId) {
          el.classList.remove("hidden");
          el.classList.add("active");
        } else {
          el.classList.add("hidden");
          el.classList.remove("active");
        }
      }
    });

    // Close hamburger menu if open
    closeHamburgerMenu();

    // Scroll to top of main content
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* --------------------------------------------------------------------------
     NAVIGATION & CATEGORY BUTTONS
     -------------------------------------------------------------------------- */
  function setupNavigation() {
    // Brand Logo click -> Homepage
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
      brandLogo.addEventListener("click", (e) => {
        e.preventDefault();
        showView("homepage-view");
      });
    }

    // Games rectangular button (Homepage)
    const btnGames = document.getElementById("btn-games");
    if (btnGames) {
      btnGames.addEventListener("click", () => {
        showView("games-view");
        renderProducts();
      });
    }

    // Accessories rectangular button (Homepage)
    const btnAccessories = document.getElementById("btn-accessories");
    if (btnAccessories) {
      btnAccessories.addEventListener("click", () => {
        showView("accessories-view");
        renderAccessories();
      });
    }

    // Back to Homepage button from Games view
    const backHomeBtn = document.getElementById("back-to-home-btn");
    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", () => {
        showView("homepage-view");
      });
    }

    // Back to Homepage button from Accessories view
    const accBackHomeBtn = document.getElementById("accessories-back-to-home-btn");
    if (accBackHomeBtn) {
      accBackHomeBtn.addEventListener("click", () => {
        showView("homepage-view");
      });
    }

    // Other rectangular category buttons (Consoles, Gift Cards, etc.)
    const categoryButtons = document.querySelectorAll(
      ".nav-rect-btn:not(#btn-games):not(#btn-accessories):not(#btn-other)"
    );
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const catName = btn.getAttribute("data-category") || "Category";
        showCategoryPlaceholder(catName);
      });
    });

    // Category placeholder view actions
    const catToGamesBtn = document.getElementById("placeholder-to-games-btn");
    if (catToGamesBtn) {
      catToGamesBtn.addEventListener("click", () => {
        showView("games-view");
        renderProducts();
      });
    }

    const backHomeTriggers = document.querySelectorAll(".back-home-trigger");
    backHomeTriggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        showView("homepage-view");
      });
    });

    // Return to homepage from Confirmation view ("All Done!")
    const orderCompleteHomeBtn = document.getElementById(
      "order-complete-home-btn"
    );
    if (orderCompleteHomeBtn) {
      orderCompleteHomeBtn.addEventListener("click", () => {
        state.cart = [];
        updateCartBadge();
        showView("homepage-view");
      });
    }
  }

  function showCategoryPlaceholder(categoryName) {
    const titleEl = document.getElementById("category-view-title");
    if (titleEl) {
      titleEl.textContent = `EB Games - ${categoryName}`;
    }
    showView("category-placeholder-view");
  }

  /* --------------------------------------------------------------------------
     PROMOTIONAL CAROUSEL (Directly Below Category Navigation)
     -------------------------------------------------------------------------- */
  function setupPromoCarousel() {
    const track = document.getElementById("promo-carousel-track");
    if (!track) return;

    const slides = track.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dot");
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");

    if (!slides.length) return;

    let currentSlide = 0;
    let autoPlayTimer = null;

    function goToSlide(index) {
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add("active");
          dot.setAttribute("aria-selected", "true");
        } else {
          dot.classList.remove("active");
          dot.setAttribute("aria-selected", "false");
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
        restartTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
        restartTimer();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const targetIndex = parseInt(dot.getAttribute("data-slide-index"), 10);
        if (!isNaN(targetIndex)) {
          goToSlide(targetIndex);
          restartTimer();
        }
      });
    });

    // Slide CTA buttons
    const ctaGames = document.getElementById("slide-cta-games");
    if (ctaGames) {
      ctaGames.addEventListener("click", () => {
        showView("games-view");
        renderProducts();
      });
    }

    const ctaAcc = document.getElementById("slide-cta-accessories");
    if (ctaAcc) {
      ctaAcc.addEventListener("click", () => {
        showView("accessories-view");
        renderAccessories();
      });
    }

    const ctaCollectibles = document.getElementById("slide-cta-collectibles");
    if (ctaCollectibles) {
      ctaCollectibles.addEventListener("click", () => {
        showCategoryPlaceholder("Collectibles");
      });
    }

    function startTimer() {
      stopTimer();
      autoPlayTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000);
    }

    function stopTimer() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    function restartTimer() {
      stopTimer();
      startTimer();
    }

    const carouselContainer = document.querySelector(".promo-carousel");
    if (carouselContainer) {
      carouselContainer.addEventListener("mouseenter", stopTimer);
      carouselContainer.addEventListener("mouseleave", startTimer);
      carouselContainer.addEventListener("focusin", stopTimer);
      carouselContainer.addEventListener("focusout", startTimer);
    }

    startTimer();
  }

  /* --------------------------------------------------------------------------
     HOMEPAGE DYNAMIC BACKGROUND SLIDESHOW
     Sequence: Neon City.jpg -> Blaze Through Neon.jpg -> Space War.jpg -> Loop
     Each image displays for ~5s, then smoothly crossfades into the next image.
     -------------------------------------------------------------------------- */
  function setupHomepageBackgroundSlideshow() {
    const slideshow = document.querySelector(".homepage-bg-slideshow");
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll(".bg-slide");
    if (!slides || slides.length < 2) return;

    let currentIndex = 0;
    const slideDuration = 5000; // ~5 seconds per image

    setInterval(() => {
      const prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % slides.length;

      // Keep previous slide active while incoming slide dissolves in on top
      slides.forEach((s) => s.classList.remove("top-layer"));
      slides[prevIndex].classList.add("active");
      slides[currentIndex].classList.add("top-layer", "active");

      // Once the crossfade transition completes, hide previous slide
      setTimeout(() => {
        slides[prevIndex].classList.remove("active");
      }, 1600);
    }, slideDuration);
  }

  /* --------------------------------------------------------------------------
     HEADER ACTIONS (Hamburger, Utility Icons, Modals)
     -------------------------------------------------------------------------- */
  function setupHeaderActions() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const sideMenu = document.getElementById("side-menu");
    const menuBackdrop = document.getElementById("menu-backdrop");

    if (hamburgerBtn && sideMenu && menuBackdrop) {
      hamburgerBtn.addEventListener("click", () => {
        sideMenu.classList.add("open");
        menuBackdrop.classList.add("active");
        sideMenu.setAttribute("aria-hidden", "false");
      });

      closeMenuBtn.addEventListener("click", closeHamburgerMenu);
      menuBackdrop.addEventListener("click", closeHamburgerMenu);
    }

    // Side menu navigation links
    const sideMenuHome = document.querySelector(".nav-item-home");
    if (sideMenuHome) {
      sideMenuHome.addEventListener("click", (e) => {
        e.preventDefault();
        showView("homepage-view");
      });
    }

    const sideMenuGames = document.querySelector(".nav-item-games");
    if (sideMenuGames) {
      sideMenuGames.addEventListener("click", (e) => {
        e.preventDefault();
        showView("games-view");
        renderProducts();
      });
    }

    const sideMenuCats = document.querySelectorAll(".nav-item-cat");
    sideMenuCats.forEach((catLink) => {
      catLink.addEventListener("click", (e) => {
        e.preventDefault();
        const catName = catLink.getAttribute("data-category") || "Category";
        if (catName.toLowerCase() === "accessories") {
          showView("accessories-view");
          renderAccessories();
        } else {
          showCategoryPlaceholder(catName);
        }
      });
    });

    const menuCartLink = document.getElementById("menu-cart-link");
    if (menuCartLink) {
      menuCartLink.addEventListener("click", (e) => {
        e.preventDefault();
        openCartView();
      });
    }

    const menuHelpLink = document.getElementById("menu-help-link");
    if (menuHelpLink) {
      menuHelpLink.addEventListener("click", (e) => {
        e.preventDefault();
        closeHamburgerMenu();
        showModal(
          "Help & Customer Support",
          "<p><strong>EB Games Support:</strong><br>Toll-Free: 1-877-442-6303<br>Email: EBgamesbusiness@gmail.com<br>Hours: Monday - Friday 9:00 AM - 6:00 PM EST.</p>"
        );
      });
    }

    // Utility icons in header
    const iconLocation = document.getElementById("icon-location");
    if (iconLocation) {
      iconLocation.addEventListener("click", () => {
        showModal(
          "Store Locator",
          "<p><strong>Nearest Store Selected:</strong><br>EB Games - Toronto Eaton Centre<br>220 Yonge St, Toronto, ON M5B 2H1<br><br>Status: <strong>Open Today (10:00 AM - 9:00 PM)</strong><br>In-store pickup available for online pre-orders.</p>"
        );
      });
    }

    const iconLanguage = document.getElementById("icon-language");
    if (iconLanguage) {
      iconLanguage.addEventListener("click", () => {
        showModal(
          "Language & Region",
          "<p><strong>Current Selection:</strong> English (Canada / CAD $)<br><br>Alternative: Français (Canada).<br><em>This is a prototype demonstration.</em></p>"
        );
      });
    }

    const iconSupport = document.getElementById("icon-support");
    if (iconSupport) {
      iconSupport.addEventListener("click", () => {
        showModal(
          "Customer Support",
          "<p><strong>How can we help you?</strong><br>Phone: 1-877-442-6303<br>Email: <strong>EBgamesbusiness@gmail.com</strong><br>Live Chat: 9:00 AM - 8:00 PM EST.</p>"
        );
      });
    }

    const iconAccount = document.getElementById("icon-account");
    if (iconAccount) {
      iconAccount.addEventListener("click", () => {
        showModal(
          "EB Games Edge Rewards Account",
          "<p><strong>Member Profile:</strong><br>Name: Neil (Student Demo)<br>Level: <strong>Onyx Member</strong><br>Reward Points: <strong>1,250 pts</strong><br>Active Pre-orders: 0</p>"
        );
      });
    }

    // Cart icon click
    const iconCart = document.getElementById("icon-cart");
    if (iconCart) {
      iconCart.addEventListener("click", () => {
        openCartView();
      });
    }

    // Modal close handlers
    const infoModal = document.getElementById("info-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalOkBtn = document.getElementById("modal-ok-btn");

    if (infoModal && modalCloseBtn && modalOkBtn) {
      modalCloseBtn.addEventListener("click", () => infoModal.classList.add("hidden"));
      modalOkBtn.addEventListener("click", () => infoModal.classList.add("hidden"));
      infoModal.addEventListener("click", (e) => {
        if (e.target === infoModal) {
          infoModal.classList.add("hidden");
        }
      });
    }
  }

  function closeHamburgerMenu() {
    const sideMenu = document.getElementById("side-menu");
    const menuBackdrop = document.getElementById("menu-backdrop");
    if (sideMenu && menuBackdrop) {
      sideMenu.classList.remove("open");
      menuBackdrop.classList.remove("active");
      sideMenu.setAttribute("aria-hidden", "true");
    }
  }

  function showModal(title, bodyHtml) {
    const infoModal = document.getElementById("info-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    if (infoModal && modalTitle && modalBody) {
      modalTitle.textContent = title;
      modalBody.innerHTML = bodyHtml;
      infoModal.classList.remove("hidden");
    }
  }

  /* --------------------------------------------------------------------------
     SEARCH FUNCTIONALITY
     -------------------------------------------------------------------------- */
  function setupSearch() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    if (searchForm && searchInput) {
      const handleSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
          showView("games-view");
          renderProducts();
          return;
        }

        showView("games-view");

        // Find matching games across all platforms and accessories
        const allGames = [
          ...state.gamesData.nintendo,
          ...state.gamesData.xbox,
          ...state.gamesData.playstation,
          ...(state.gamesData.accessories || defaultGamesData.accessories || [])
        ];

        const matches = allGames.filter(
          (g) =>
            g.title.toLowerCase().includes(query) ||
            g.platform.toLowerCase().includes(query) ||
            g.genre.toLowerCase().includes(query)
        );

        const headingEl = document.getElementById("current-platform-heading");
        const counterEl = document.getElementById("platform-item-count");
        const productsGrid = document.getElementById("products-grid");

        if (headingEl) headingEl.textContent = `Search Results: "${query}"`;
        if (counterEl) counterEl.textContent = `${matches.length} result(s) found`;

        if (matches.length === 0) {
          productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <p style="font-size: 1.1rem; color: var(--eb-text-muted);">No games found matching "<strong>${escapeHtml(query)}</strong>".</p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="resetSearch()">View All Platform Games</button>
          </div>
        `;
        } else {
          productsGrid.innerHTML = matches.map((game) => createProductCardHtml(game)).join("");
          attachAddToCartListeners();
        }
      };

      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleSearch();
      });

      searchInput.addEventListener("input", () => {
        if (searchInput.value.trim().length > 1) {
          handleSearch();
        } else if (searchInput.value.trim().length === 0) {
          renderProducts();
        }
      });
    }
  }

  window.resetSearch = function () {
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    renderProducts();
  };

  /* --------------------------------------------------------------------------
     PLATFORM SELECTION (Sketch 2: PlayStation, Xbox, Nintendo)
     -------------------------------------------------------------------------- */
  function setupPlatformSelector() {
    const platformButtons = document.querySelectorAll("#games-view .platform-btn");
    platformButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const platformKey = btn.getAttribute("data-platform");
        if (platformKey) {
          state.selectedPlatform = platformKey;

          // Update active class and aria-pressed on buttons
          platformButtons.forEach((b) => {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");

          renderProducts();
        }
      });
    });
  }

  function renderProducts() {
    const productsGrid = document.getElementById("products-grid");
    const headingEl = document.getElementById("current-platform-heading");
    const counterEl = document.getElementById("platform-item-count");

    if (!productsGrid) return;

    const currentPlatformKey = state.selectedPlatform.toLowerCase();
    const platformDisplayName =
      currentPlatformKey === "xbox"
        ? "Xbox"
        : currentPlatformKey === "playstation"
          ? "PlayStation"
          : "Nintendo";

    // Update active state in platform buttons
    document.querySelectorAll("#games-view .platform-btn").forEach((btn) => {
      if (btn.getAttribute("data-platform") === currentPlatformKey) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    const games = state.gamesData[currentPlatformKey] || [];

    if (headingEl) {
      headingEl.textContent = `${platformDisplayName} Games`;
    }
    if (counterEl) {
      counterEl.textContent = `${games.length} games available`;
    }

    productsGrid.innerHTML = games.map((game) => createProductCardHtml(game)).join("");
    attachAddToCartListeners();
  }

  /* --------------------------------------------------------------------------
     ACCESSORIES SELECTION & RENDERING (Replicates Games Behavior)
     -------------------------------------------------------------------------- */
  function setupAccessoriesSelector() {
    const filterButtons = document.querySelectorAll("#accessories-view .acc-filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filterKey = btn.getAttribute("data-platform");
        if (filterKey) {
          state.selectedAccessoryFilter = filterKey;

          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          renderAccessories();
        }
      });
    });
  }

  function renderAccessories() {
    const grid = document.getElementById("accessories-grid");
    const headingEl = document.getElementById("current-accessory-heading");
    const counterEl = document.getElementById("accessory-item-count");

    if (!grid) return;

    const filter = (state.selectedAccessoryFilter || "playstation").toLowerCase();

    // Update active state in accessory filter buttons
    document.querySelectorAll("#accessories-view .acc-filter-btn").forEach((btn) => {
      const btnPlatform = (btn.getAttribute("data-platform") || "").toLowerCase();
      if (btnPlatform === filter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const allAccessories = state.gamesData.accessories || defaultGamesData.accessories || [];

    const filtered = allAccessories.filter((item) => {
      const p = item.platform.toLowerCase();
      if (filter.includes("multi")) {
        return p.includes("multi") || p.includes("universal");
      }
      return p.includes(filter);
    });

    const titlePrefix =
      filter === "xbox"
        ? "Xbox"
        : filter === "playstation"
          ? "PlayStation"
          : filter === "nintendo"
            ? "Nintendo"
            : "Multi-Platform";

    if (headingEl) {
      headingEl.textContent = `${titlePrefix} Accessories`;
    }
    if (counterEl) {
      const count = filtered.length;
      counterEl.textContent = `${count} ${count === 1 ? "accessory" : "accessories"} available`;
    }

    grid.innerHTML = filtered.map((item) => createProductCardHtml(item)).join("");
    attachAddToCartListeners();
  }

  /* --------------------------------------------------------------------------
     AVAILABILITY STATUS HELPER
     Calculates availability status, label, color class, and stock values
     -------------------------------------------------------------------------- */
  function getAvailabilityInfo(game) {
    if (!game || (game.id && game.id.startsWith("acc-"))) {
      return null;
    }

    let stock = game.stock;
    let maxStock = game.maxStock !== undefined ? game.maxStock : 15;

    if (stock === undefined && game.inventory) {
      const parts = String(game.inventory).split("/");
      stock = parseInt(parts[0], 10);
      if (parts[1]) maxStock = parseInt(parts[1], 10);
    }

    // Default inventory lookup for specific games if stock not provided
    if (stock === undefined) {
      const titleLower = (game.title || "").toLowerCase();
      if (titleLower.includes("god of war")) {
        stock = 0;
        maxStock = 15;
      } else if (titleLower.includes("street fighter")) {
        stock = 6;
        maxStock = 15;
      } else if (titleLower.includes("last of us")) {
        stock = 13;
        maxStock = 15;
      } else if (titleLower.includes("spider-man") || titleLower.includes("spiderman")) {
        stock = 15;
        maxStock = 15;
      } else {
        stock = 15;
        maxStock = 15;
      }
    }

    let statusText = "Available";
    let statusClass = "status-available";
    let isAvailable = true;

    if (stock === 0) {
      statusText = "Unavailable";
      statusClass = "status-unavailable";
      isAvailable = false;
    } else if (stock <= 6) {
      statusText = "Low Stock";
      statusClass = "status-low";
      isAvailable = true;
    } else {
      statusText = "Available";
      statusClass = "status-available";
      isAvailable = true;
    }

    return {
      stock,
      maxStock,
      inventoryText: `${stock}/${maxStock}`,
      statusText,
      statusClass,
      isAvailable
    };
  }

  function createProductCardHtml(game) {
    const platformLower = game.platform.toLowerCase();
    const platformClass = platformLower.includes("xbox")
      ? "tag-xbox"
      : platformLower.includes("playstation")
        ? "tag-playstation"
        : platformLower.includes("nintendo")
          ? "tag-nintendo"
          : "tag-multi";

    const mediaHtml = game.image
      ? `
      <div class="product-art-placeholder has-image">
        <span class="product-platform-tag ${platformClass}">${escapeHtml(game.platform)}</span>
        <img src="${escapeHtml(game.image)}" alt="${escapeHtml(game.title)} - ${escapeHtml(game.platform)}" class="product-cover-img" loading="lazy" onerror="this.onerror=null;this.src='images/${escapeHtml(game.image)}';">
      </div>
    `
      : `
      <div class="product-art-placeholder">
        <span class="product-platform-tag ${platformClass}">${escapeHtml(game.platform)}</span>
        <div class="product-cover-graphic">EB</div>
        <span class="product-art-label">${escapeHtml(game.title)}</span>
      </div>
    `;

    const avail = getAvailabilityInfo(game);
    const availabilityHtml = avail
      ? `
        <div class="product-availability">
          <span class="availability-label">Availability:</span>
          <span class="availability-status ${avail.statusClass}">${avail.statusText}</span>
          <span class="availability-inventory ${avail.statusClass}">(${avail.inventoryText})</span>
        </div>
      `
      : "";

    const isDisabled = avail && !avail.isAvailable;
    const disabledAttr = isDisabled ? 'disabled aria-disabled="true" title="Item is unavailable"' : "";

    return `
    <article class="product-card" data-id="${game.id}">
      ${mediaHtml}
      <div class="product-info">
        <h3 class="product-title">${escapeHtml(game.title)}</h3>
        <p class="product-genre">${escapeHtml(game.genre)} &bull; ${escapeHtml(game.rating)}</p>
        <p class="product-desc">${escapeHtml(game.description)}</p>
        ${availabilityHtml}
        <div class="product-footer">
          <span class="product-price">$${game.price.toFixed(2)} CAD</span>
          <button class="btn-add-cart" ${disabledAttr} data-id="${game.id}" data-title="${escapeHtml(game.title)}" data-platform="${escapeHtml(game.platform)}" data-price="${game.price}">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
  }

  function attachAddToCartListeners() {
    const addButtons = document.querySelectorAll(".btn-add-cart");
    addButtons.forEach((btn) => {
      if (btn.__cartListenerAttached) return;
      btn.__cartListenerAttached = true;
      btn.addEventListener("click", () => {
        if (btn.disabled || btn.hasAttribute("disabled")) return;
        const id = btn.getAttribute("data-id");
        const title = btn.getAttribute("data-title");
        const platform = btn.getAttribute("data-platform");
        const price = parseFloat(btn.getAttribute("data-price"));

        addToCart({ id, title, platform, price });
      });
    });
  }

  /* --------------------------------------------------------------------------
     SHOPPING CART LOGIC
     -------------------------------------------------------------------------- */
  function addToCart(item) {
    if (!item || item.id === "ps-5" || (item.title && item.title.toLowerCase().includes("god of war"))) {
      return;
    }

    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.cart.push({
        id: item.id,
        title: item.title,
        platform: item.platform,
        price: item.price,
        quantity: 1
      });
    }

    updateCartBadge();
    showToast(`Added ${item.title} (${item.platform}) to cart!`);

    const cartView = document.getElementById("cart-view");
    if (cartView && cartView.classList.contains("active")) {
      renderCart();
    }
  }

  function removeFromCart(itemId) {
    if (!itemId) return;
    const itemIndex = state.cart.findIndex((item) => String(item.id) === String(itemId));
    if (itemIndex === -1) return;
    state.cart.splice(itemIndex, 1);
    updateCartBadge();
    renderCart();
    showToast("Item removed from cart");
  }

  function removeAllFromCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    updateCartBadge();
    renderCart();
    showToast("All items removed from cart!");
  }

  window.removeAllFromCart = function () {
    removeAllFromCart();
  };

  function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cart-count-badge");
    const menuCount = document.querySelector(".menu-cart-count");

    if (badge) {
      badge.textContent = totalCount;
    }
    if (menuCount) {
      menuCount.textContent = totalCount;
    }
  }

  function openCartView() {
    renderCart();
    showView("cart-view");
  }

  function renderCart() {
    const cartList = document.getElementById("cart-items-list");
    const emptyMsg = document.getElementById("cart-empty-message");
    const contentWrapper = document.getElementById("cart-content-wrapper");
    const clearAllBtn = document.getElementById("clear-all-cart-btn");
    const subtotalEl = document.getElementById("summary-subtotal");
    const shippingEl = document.getElementById("summary-shipping");
    const taxEl = document.getElementById("summary-tax");
    const totalEl = document.getElementById("summary-total");

    if (!cartList) return;

    if (state.cart.length === 0) {
      cartList.innerHTML = "";
      if (subtotalEl) subtotalEl.textContent = "$0.00 CAD";
      if (shippingEl) shippingEl.textContent = "$0.00 CAD";
      if (taxEl) taxEl.textContent = "$0.00 CAD";
      if (totalEl) totalEl.textContent = "$0.00 CAD";
      if (emptyMsg) emptyMsg.classList.remove("hidden");
      if (contentWrapper) contentWrapper.classList.add("hidden");
      if (clearAllBtn) clearAllBtn.classList.add("hidden");
      return;
    }

    if (emptyMsg) emptyMsg.classList.add("hidden");
    if (contentWrapper) contentWrapper.classList.remove("hidden");
    if (clearAllBtn) clearAllBtn.classList.remove("hidden");

    let subtotal = 0;

    cartList.innerHTML = state.cart
      .map((item) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
        <div class="cart-item-row" data-id="${item.id}">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${escapeHtml(item.title)}</h4>
            <div class="cart-item-meta">Platform: <strong>${escapeHtml(item.platform)}</strong> &bull; Qty: ${item.quantity}</div>
          </div>
          <div class="cart-item-price">$${itemTotal.toFixed(2)} CAD</div>
          <button type="button" class="btn-remove-item" data-id="${item.id}" onclick="removeItemFromCart('${item.id}')" aria-label="Remove ${escapeHtml(item.title)}">
            Remove
          </button>
        </div>
      `;
      })
      .join("");

    const shipping = state.cart.length > 0 ? 9.99 : 0.0;
    const taxableAmount = subtotal + shipping;
    const tax = taxableAmount * 0.13; // 13% Canadian HST/GST on subtotal plus shipping
    const total = taxableAmount + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)} CAD`;
    if (shippingEl) shippingEl.textContent = `$${shipping.toFixed(2)} CAD`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)} CAD`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)} CAD`;
  }

  window.removeItemFromCart = function (itemId) {
    removeFromCart(itemId);
  };

  function setupCartActions() {
    const clearAllCartBtn = document.getElementById("clear-all-cart-btn");
    if (clearAllCartBtn) {
      clearAllCartBtn.addEventListener("click", () => {
        removeAllFromCart();
      });
    }

    const cartItemsList = document.getElementById("cart-items-list");
    if (cartItemsList) {
      cartItemsList.addEventListener("click", (e) => {
        const removeBtn = e.target.closest(".btn-remove-item");
        if (removeBtn) {
          e.preventDefault();
          const itemId = removeBtn.getAttribute("data-id");
          if (itemId) {
            removeFromCart(itemId);
          }
        }
      });
    }

    const proceedBtn = document.getElementById("proceed-to-checkout-btn");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", () => {
        if (state.cart.length === 0) {
          showToast("Your cart is empty! Please add a game first.");
          return;
        }
        prepareCheckout();
        showView("checkout-view");
      });
    }

    const continueShoppingBtn = document.getElementById("cart-back-btn");
    if (continueShoppingBtn) {
      continueShoppingBtn.addEventListener("click", () => {
        showView("games-view");
      });
    }

    const emptyCartToGames = document.getElementById("empty-cart-to-games-btn");
    if (emptyCartToGames) {
      emptyCartToGames.addEventListener("click", () => {
        showView("games-view");
      });
    }
  }

  /* --------------------------------------------------------------------------
     CHECKOUT FLOW (Sketch 2: Payment choice -> Address -> Place Order)
     -------------------------------------------------------------------------- */
  function prepareCheckout() {
    // Update totals in checkout view
    const totalAmountEl = document.getElementById("checkout-total-amount");
    const itemsSummaryEl = document.getElementById("checkout-items-summary");

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = state.cart.length > 0 ? 9.99 : 0.0;
    const taxableAmount = subtotal + shipping;
    const tax = taxableAmount * 0.13;
    const total = taxableAmount + tax;

    if (totalAmountEl) {
      totalAmountEl.textContent = `$${total.toFixed(2)} CAD`;
    }

    if (itemsSummaryEl) {
      const names = state.cart.map((item) => `${item.title} (${item.platform}) × ${item.quantity}`).join(", ");
      itemsSummaryEl.textContent = `Selected: ${names}`;
    }
  }

  function setupCheckoutActions() {
    // Payment choice toggle: Credit Card vs Debit Card
    const payCreditBtn = document.getElementById("pay-credit");
    const payDebitBtn = document.getElementById("pay-debit");

    if (payCreditBtn && payDebitBtn) {
      payCreditBtn.addEventListener("click", () => {
        state.selectedPaymentMethod = "Credit Card";
        payCreditBtn.classList.add("active");
        payCreditBtn.querySelector(".radio-indicator").textContent = "●";
        payDebitBtn.classList.remove("active");
        payDebitBtn.querySelector(".radio-indicator").textContent = "○";
      });

      payDebitBtn.addEventListener("click", () => {
        state.selectedPaymentMethod = "Debit Card";
        payDebitBtn.classList.add("active");
        payDebitBtn.querySelector(".radio-indicator").textContent = "●";
        payCreditBtn.classList.remove("active");
        payCreditBtn.querySelector(".radio-indicator").textContent = "○";
      });
    }

    // Card Number & Expiry helpers (flexible for testing without blocking random text)
    const cardNumberInput = document.getElementById("card-number");
    const cardExpiryInput = document.getElementById("card-expiry");

    // Back to Cart button
    const backToCartBtn = document.getElementById("back-to-cart-btn");
    if (backToCartBtn) {
      backToCartBtn.addEventListener("click", () => {
        openCartView();
      });
    }

    // Checkout Form Submission
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleOrderSubmission();
      });
    }
  }

  function handleOrderSubmission() {
    // Clear any existing error highlights
    document.querySelectorAll(".input-error").forEach((el) => el.classList.remove("input-error"));
    document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

    // Prototype Testing: Read whatever random values the user typed (or use friendly test defaults)
    const cardNameInput = document.getElementById("card-name");
    const cardNumberInput = document.getElementById("card-number");
    const cardExpiryInput = document.getElementById("card-expiry");
    const cardCvvInput = document.getElementById("card-cvv");

    const deliveryNameInput = document.getElementById("delivery-name");
    const deliveryStreetInput = document.getElementById("delivery-street");
    const deliveryCityInput = document.getElementById("delivery-city");
    const deliveryProvinceInput = document.getElementById("delivery-province");
    const deliveryPostalInput = document.getElementById("delivery-postal");

    // Capture user input or provide fallback for testing
    const cardName = (cardNameInput && cardNameInput.value.trim()) || "Demo Tester";
    const cardNumber = (cardNumberInput && cardNumberInput.value.trim()) || "4500 •••• •••• 9876";
    const cardExpiry = (cardExpiryInput && cardExpiryInput.value.trim()) || "12/28";
    const cardCvv = (cardCvvInput && cardCvvInput.value.trim()) || "123";

    const recipientName = (deliveryNameInput && deliveryNameInput.value.trim()) || cardName;
    const street = (deliveryStreetInput && deliveryStreetInput.value.trim()) || "123 University Avenue";
    const city = (deliveryCityInput && deliveryCityInput.value.trim()) || "Toronto";
    const province = (deliveryProvinceInput && deliveryProvinceInput.value) || "ON";
    const postal = (deliveryPostalInput && deliveryPostalInput.value.trim().toUpperCase()) || "M5V 2T6";

    // Ensure cart has at least one test item if user jumped directly to checkout during testing
    if (state.cart.length === 0) {
      state.cart.push({
        id: "xb-1",
        title: "Halo Infinite",
        platform: "Xbox Series X",
        price: 79.99,
        quantity: 1
      });
      updateCartBadge();
    }

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = state.cart.length > 0 ? 9.99 : 0.0;
    const taxableAmount = subtotal + shipping;
    const tax = taxableAmount * 0.13;
    const total = taxableAmount + tax;
    const orderNumber = "EB-" + Math.floor(100000 + Math.random() * 900000);

    // Mask card number for a realistic prototype display (e.g. shows last 4 chars)
    const displayCard = cardNumber.length > 4 ? `•••• •••• •••• ${cardNumber.slice(-4)}` : cardNumber;

    state.lastCompletedOrder = {
      orderNumber,
      paymentMethod: `${state.selectedPaymentMethod} (${displayCard})`,
      cardHolder: cardName,
      address: `${recipientName}, ${street}, ${city}, ${province} ${postal}`,
      items: [...state.cart],
      totalCAD: `$${total.toFixed(2)} CAD`
    };

    // Immediate progression to "All Done!" screen
    renderConfirmationView();
    showView("confirmation-view");
    showToast("Order placed successfully! (Prototype Test)");
  }

  /* --------------------------------------------------------------------------
     CONFIRMATION VIEW ("All Done!" - Sketch 2)
     -------------------------------------------------------------------------- */
  function renderConfirmationView() {
    const order = state.lastCompletedOrder;
    if (!order) return;

    const orderIdEl = document.getElementById("confirm-order-id");
    const payMethodEl = document.getElementById("confirm-payment-method");
    const cardNameEl = document.getElementById("confirm-card-name");
    const addressEl = document.getElementById("confirm-address");
    const totalEl = document.getElementById("confirm-total-amount");
    const itemsListEl = document.getElementById("confirm-items-list");

    if (orderIdEl) orderIdEl.textContent = `#${order.orderNumber}`;
    if (payMethodEl) payMethodEl.textContent = order.paymentMethod;
    if (cardNameEl) cardNameEl.textContent = order.cardHolder || "Demo User";
    if (addressEl) addressEl.textContent = order.address;
    if (totalEl) totalEl.textContent = order.totalCAD;

    if (itemsListEl) {
      itemsListEl.innerHTML = order.items
        .map(
          (item) => `
        <li>
          <strong>${escapeHtml(item.title)}</strong> (${escapeHtml(item.platform)}) &bull; Qty: ${item.quantity} &bull; $${(item.price * item.quantity).toFixed(2)} CAD
        </li>
      `
        )
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     HELPER UTILITIES
     -------------------------------------------------------------------------- */
  function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const msgEl = document.getElementById("toast-message");

    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.remove("hidden");

    // Clear any existing timer
    if (window.toastTimer) {
      clearTimeout(window.toastTimer);
    }

    window.toastTimer = setTimeout(() => {
      toast.classList.add("hidden");
    }, 3200);
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
