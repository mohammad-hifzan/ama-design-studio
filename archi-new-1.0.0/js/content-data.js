(function ($) {
  "use strict";

  /**
   * ARCHI THEME CONTENT CONFIG
   *
   * Edit the objects below to update the site content
   * without touching the HTML structure.
   *
   * - To ADD an item: copy an existing object, paste it, and change the values.
   * - To UPDATE an item: just edit the text, image path, or links.
   * - To REMOVE an item: delete the whole object (including the surrounding { } and comma).
   *
   * All image paths are relative to the project root, e.g.
   *   "archi-new-1.0.0/images/portfolio-thumb-1.jpg"
   */

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

    portfolioItems: [
      {
        categories: ["construction", "interior"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-1.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 1."
      },
      {
        categories: ["construction"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-2.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 2."
      },
      {
        categories: ["construction"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-11.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 3."
      },
      {
        categories: ["construction"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-4.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 4."
      },
      {
        categories: ["interior"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-5.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 5."
      },
      {
        categories: ["design"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-6.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-1.jpg",
        title: "Sample Caption goes here for Portfolio Item 6."
      },
      {
        categories: ["design"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-7.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-1.jpg",
        title: "Sample Caption goes here for Portfolio Item 7."
      },
      {
        categories: ["design"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-8.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-1.jpg",
        title: "Sample Caption goes here for Portfolio Item 8."
      },
      {
        categories: ["design"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-9.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 9."
      },
      {
        categories: ["design"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-10.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 10."
      },
      {
        categories: ["landscape"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-1.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-1.jpg",
        title: "Sample Caption goes here for Portfolio Item 11."
      },
      {
        categories: ["landscape"],
        thumb: "archi-new-1.0.0/images/portfolio-thumb-8.jpg",
        large: "archi-new-1.0.0/images/portfolio-large-2.jpg",
        title: "Sample Caption goes here for Portfolio Item 12."
      }
    ],

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
      },
      {
        date: "Mar 27, 2021",
        title: "how to make your resort that looks outstanding",
        summary:
          "Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.",
        image: "archi-new-1.0.0/images/postimg3.jpg",
        url: "#"
      }
    ],

    footerGallery: [
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg1.jpg",
        title: "Calm Before The Storm (One Shoe Photography Ltd.)",
        alt: "house"
      },
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg2.jpg",
        title: "Grasmere Lake (Phil 'the link' Whittaker (gizto29))",
        alt: "house"
      },
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg3.jpg",
        title: "Grasmere Lake (Phil 'the link' Whittaker (gizto29))",
        alt: "house"
      },
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg4.jpg",
        title: "Grasmere Lake (Phil 'the link' Whittaker (gizto29))",
        alt: "house"
      },
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg5.jpg",
        title: "Grasmere Lake (Phil 'the link' Whittaker (gizto29))",
        alt: "house"
      },
      {
        href: "archi-new-1.0.0/images/spacejoy.jpg",
        src: "archi-new-1.0.0/images/postimg6.jpg",
        title: "Grasmere Lake (Phil 'the link' Whittaker (gizto29))",
        alt: "house"
      }
    ]
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
        '<img src="' +
        slide.image +
        '" alt="' +
        (slide.alt || "banner") +
        '" class="jarallax-img">' +
        '<div class="banner-content">' +
        '<h2 class="banner-title txt-fx">' +
        slide.title +
        "</h2>";

      if (slide.buttonText) {
        html +=
          '<div class="btn-wrap">' +
          '<a href="' +
          (slide.buttonLink || "#") +
          '" class="btn-with-line">' +
          slide.buttonText +
          "</a>" +
          "</div>";
      }

      html += "</div></div>";

      $slider.append(html);
    });
  }

  function renderPortfolio() {
    var data = window.archiContent && window.archiContent.portfolioItems;
    if (!data || !data.length) return;

    var $grid = $(".grid");
    if (!$grid.length) return;

    $grid.empty();

    $.each(data, function (index, item) {
      var classes = "col mb-4 portfolio-item";
      if (item.categories && item.categories.length) {
        classes += " " + item.categories.join(" ");
      }

      var html =
        '<div class="' +
        classes +
        '">' +
        '<a href="' +
        item.large +
        '" class="image-link" title="' +
        (item.title || "") +
        '">' +
        '<img src="' +
        item.thumb +
        '" class="img-fluid" alt="portfolio">' +
        "</a>" +
        "</div>";

      $grid.append(html);
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
        '<div class="col-md-4">' +
        '<div class="services-item">' +
        '<span class="number">' +
        (service.number || "") +
        "</span>" +
        "<h3>" +
        service.title +
        "</h3>" +
        "<p>" +
        service.text +
        "</p>" +
        "</div>" +
        "</div>";

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
        '<div class="col-md-4">' +
        '<article class="post-item">' +
        "<figure>" +
        '<a href="' +
        (post.url || "#") +
        '" class="image-hvr-effect">' +
        '<img src="' +
        post.image +
        '" alt="post" class="post-image">' +
        "</a>" +
        "</figure>" +
        '<div class="post-content">' +
        '<div class="meta-date">' +
        post.date +
        "</div>" +
        '<h3 class="post-title"><a href="' +
        (post.url || "#") +
        '">' +
        post.title +
        "</a></h3>" +
        "<p>" +
        post.summary +
        "</p>" +
        "</div>" +
        "</article>" +
        "</div>";

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
        '<a href="' +
        item.href +
        '" data-lightbox-gallery="gallery1" title="' +
        (item.title || "") +
        '" class="image-link">' +
        '<img src="' +
        item.src +
        '" alt="' +
        (item.alt || "") +
        '" class="gallery-image">' +
        "</a>";

      $gallery.append(html);
    });
  }

  $(document).ready(function () {
    // Build dynamic sections BEFORE theme plugins initialize
    renderHeroSlides();
    renderPortfolio();
    renderServices();
    renderBlogPosts();
    renderFooterGallery();
  });
})(jQuery);


