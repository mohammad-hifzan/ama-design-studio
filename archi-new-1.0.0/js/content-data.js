(function ($) {
  "use strict";

  /**
   * ARCHI THEME CONTENT CONFIG
   *
   * ============================================
   * PORTFOLIO SECTION - POWERED BY SANITY.IO
   * ============================================
   */

  var PORTFOLIO_CATEGORY_ORDER = [
    "construction",
    "interior",
    "landscape",
    "design"
  ];

  var galleriesLoaded = 0;

  window.archiContent = {
    heroSlides: [
      {
        title: "Modern Designs",
        image: "archi-new-1.0.0/images/main-banner1.jpg",
        buttonText: "View Project",
        buttonLink: "#",
        alt: "Modern architectural design"
      },
      {
        title: "Clean & Minimal",
        image: "archi-new-1.0.0/images/main-banner2.jpg",
        buttonText: "View Project",
        buttonLink: "#",
        alt: "Clean and minimal interior"
      },
      {
        title: "Personalize and Customize",
        image: "archi-new-1.0.0/images/main-banner3.jpg",
        buttonText: "View Project",
        buttonLink: "#",
        alt: "Custom architecture concept"
      }
    ],

    // This array starts empty and gets populated by Sanity
    portfolioItems: [],

    services: [
      {
        number: "01",
        title: "Architecture Portfolio",
        text: "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui."
      },
      {
        number: "02",
        title: "Planning Process",
        text: "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui."
      },
      {
        number: "03",
        title: "Unique Design",
        text: "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui."
      }
    ],

    blogPosts: [
      {
        date: "Mar 30, 2021",
        title: "modern vibes bedrooms, todays trending design",
        summary:
          "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
        image: "archi-new-1.0.0/images/postimg1.jpg",
        url: "#"
      },
      {
        date: "Mar 29, 2021",
        title: "How to make minimalist living rooms pop-out",
        summary:
          "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
        image: "archi-new-1.0.0/images/postimg2.jpg",
        url: "#"
      }
    ],

    // This array starts empty and gets populated by Sanity
    footerGallery: []
  };

  function renderHeroSlides() {
    var data = window.archiContent && window.archiContent.heroSlides;
    if (!data || !data.length) return;
    var $slider = $(".main-slider");
    if (!$slider.length) return;
    $slider.empty();
    $.each(data, function (index, slide) {
      var html =
        '<div class="slider-item jarallax" data-speed="0.2">' +
        '<img src="' + slide.image + '" alt="' + (slide.alt || "banner") + '" class="jarallax-img">' +
        '<div class="banner-content">' +
        '<h2 class="banner-title txt-fx">' + slide.title + "</h2>";
      if (slide.buttonText) {
        html += '<div class="btn-wrap"><a href="' + (slide.buttonLink || "#") + '" class="btn-with-line">' + slide.buttonText + "</a></div>";
      }
      html += "</div></div>";
      $slider.append(html);
    });
  }

  function renderPortfolio() {
    var data = window.archiContent && window.archiContent.portfolioItems;
    if (!data || !data.length) return;
    var $grid = $("#portfolio .grid");
    if (!$grid.length) return;
    $grid.empty();
    $.each(data, function (index, item) {
      var classes = "col mb-4 portfolio-item";
      if (item.categories && item.categories.length) {
        classes += " " + item.categories.join(" ");
      }
      var galleryGroup = "portfolio-" + ((item.categories && item.categories[0]) || "all");
      var html =
        '<div class="' + classes + '">' +
        '<a href="' + item.large + '" data-lightbox-gallery="' + galleryGroup + '" class="image-link portfolio-link" title="' + (item.title || "") + '">' +
        '<img src="' + item.thumb + '" class="img-fluid" alt="portfolio">' +
        "</a>" +
        "</div>";
      $grid.append(html);
    });

    var $images = $grid.find('img');
    var imagesLeft = $images.length;
    var layoutPortfolio = function () {
      if ($grid.data('isotope')) {
        $grid.isotope('reloadItems').isotope('layout');
        window.requestAnimationFrame(function () {
          $grid.isotope('layout');
        });
        setTimeout(function () {
          $grid.isotope('layout');
        }, 80);
      }

      // ✅ Trigger filter system
      $(document).trigger('portfolio:rendered');

      galleriesLoaded++;
      if (galleriesLoaded === 2) {
        // Initialize Chocolat for all galleries after both are loaded
        if (typeof Chocolat !== "undefined") {
          if (window.chocolatInstance) {
            window.chocolatInstance.destroy();
          }
          window.chocolatInstance = Chocolat(
            document.querySelectorAll('[data-lightbox-gallery]'),
            {
              imageSize: 'contain',
              loop: true,
            }
          );
        }
      }
    };

    if (!imagesLeft) {
      layoutPortfolio();
      return;
    }

    $images.each(function () {
      if (this.complete && this.naturalWidth) {
        if (!--imagesLeft) layoutPortfolio();
      } else {
        $(this).one('load error', function () {
          if (!--imagesLeft) layoutPortfolio();
        });
      }
    });
  }

  function renderServices() {
    var data = window.archiContent && window.archiContent.services;
    if (!data || !data.length) return;
    var $row = $("#services .container > .row").eq(1);
    if (!$row.length) return;
    $row.empty();
    $.each(data, function (index, service) {
      var html =
        '<div class="col-md-4"><div class="services-item">' +
        '<span class="number">' + (service.number || "") + "</span>" +
        "<h3>" + service.title + "</h3><p>" + service.text + "</p>" +
        "</div></div>";
      $row.append(html);
    });
  }

  function renderBlogPosts() {
    var data = window.archiContent && window.archiContent.blogPosts;
    if (!data || !data.length) return;
    var $row = $("#latest-blog .post-grid .row");
    if (!$row.length) return;
    $row.empty();
    $.each(data, function (index, post) {
      var html =
        '<div class="col-md-4"><article class="post-item"><figure>' +
        '<a href="' + (post.url || "#") + '" class="image-hvr-effect">' +
        '<img src="' + post.image + '" alt="post" class="post-image"></a></figure>' +
        '<div class="post-content"><div class="meta-date">' + post.date + "</div>" +
        '<h3 class="post-title"><a href="' + (post.url || "#") + '">' + post.title + "</a></h3>" +
        "<p>" + post.summary + "</p></div></article></div>";
      $row.append(html);
    });
  }

  function renderFooterGallery() {
    var data = window.archiContent && window.archiContent.footerGallery;
    if (!data || !data.length) return;
    var $gallery = $("#footer .gallery");
    if (!$gallery.length) return;
    $gallery.empty();
    $.each(data, function (index, item) {
      var html =
        '<a href="' + item.large + '" data-lightbox-gallery="footer-gallery" title="' + (item.title || "") + '" class="image-link footer-link">' +
        '<img src="' + item.thumb + '" alt="' + (item.alt || "") + '" class="gallery-image"></a>';
      $gallery.append(html);
    });

    var $images = $gallery.find('img');
    var imagesLeft = $images.length;
    var finalizeGallery = function () {
      $(document).trigger('footer:rendered');
      galleriesLoaded++;
      if (galleriesLoaded === 2) {
        // Initialize Chocolat for all galleries after both are loaded
        if (typeof Chocolat !== "undefined") {
          if (window.chocolatInstance) {
            window.chocolatInstance.destroy();
          }
          window.chocolatInstance = Chocolat(
            document.querySelectorAll('[data-lightbox-gallery]'),
            {
              imageSize: 'contain',
              loop: true,
            }
          );
        }
      }
    };

    if (!imagesLeft) {
      finalizeGallery();
      return;
    }

    $images.each(function () {
      if (this.complete && this.naturalWidth) {
        if (!--imagesLeft) finalizeGallery();
      } else {
        $(this).one('load error', function () {
          if (!--imagesLeft) finalizeGallery();
        });
      }
    });
  }

  // ==========================================
  // SANITY.IO FETCH FUNCTION
  // ==========================================
  function fetchPortfolioFromSanity() {
    // 🔥 1. REPLACE THIS WITH YOUR 8-CHARACTER SANITY PROJECT ID
    const projectId = "aqcd5swq"; 
    const dataset = "production";

    // This GROQ query says: "Get all projects. Give me the title, category, and resolve the actual URLs for the gallery images"
    const groqQuery = '*[_type == "project"]{ title, category, "imageUrls": gallery[].asset->url }';
    const encodedQuery = encodeURIComponent(groqQuery);
    
    // The standard Sanity HTTP API URL
    const url = `https://${projectId}.api.sanity.io/v2024-04-05/data/query/${dataset}?query=${encodedQuery}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.result) return;
        
        const allItems = [];
        // Loop over every project your friend created
        data.result.forEach(project => {
          const categoryClass = (project.category || "").toLowerCase();
          const projectTitle = project.title || "";
          // Loop over every image inside that project's gallery
          if (project.imageUrls && project.imageUrls.length > 0) {
            project.imageUrls.forEach(imgUrl => {
              
              allItems.push({
                categories: [categoryClass], // E.g., 'construction'
                // Sanity automatically resizes and optimizes images if you add queries to the URL!
                thumb: imgUrl + "?w=600&h=600&fit=crop&auto=format", 
                large: imgUrl + "?w=1600&auto=format",
                title: projectTitle
              });
              
            });
          }
        });

        // Push the formatted items into the theme's content engine and render
        window.archiContent.portfolioItems = allItems;
        renderPortfolio();
      })
      .catch(err => console.error("Error fetching from Sanity:", err));
  }

  function fetchFooterGalleryFromSanity() {
    const projectId = "aqcd5swq"; 
    const dataset = "production";

    // This GROQ query says: "Get all footer gallery items"
    const groqQuery = `
      *[_type == "project"]{
        title,
        "imageUrls": gallery[].asset->url
      }
      `;
    const encodedQuery = encodeURIComponent(groqQuery);
    
    // The standard Sanity HTTP API URL
    const url = `https://${projectId}.api.sanity.io/v2024-04-05/data/query/${dataset}?query=${encodedQuery}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.result) return;
        const allItems = [];

        // Loop over every footer gallery item
        data.result.forEach(project => {
          const projectTitle = project.title || "";
          // Loop over every image inside that project's gallery
          if (project.imageUrls && project.imageUrls.length > 0) {
            project.imageUrls.forEach(imgUrl => {
              
              allItems.push({
                // Sanity automatically resizes and optimizes images if you add queries to the URL!
                thumb: imgUrl + "?w=600&h=600&fit=crop&auto=format", 
                large: imgUrl + "?w=1600&auto=format",
                title: projectTitle
              });
              
            });
          }
        });

        // Push the formatted items into the theme's content engine and render
        window.archiContent.footerGallery = allItems;
        renderFooterGallery();
      })
      .catch(err => console.error("Error fetching footer gallery from Sanity:", err));
  }

  $(document).ready(function () {
    // Build dynamic sections BEFORE theme plugins initialize
    renderHeroSlides();
    fetchPortfolioFromSanity(); // Call Sanity instead of Cloudinary
    renderServices();
    renderBlogPosts();
    fetchFooterGalleryFromSanity(); // Fetch footer gallery from Sanity
  });
})(jQuery);