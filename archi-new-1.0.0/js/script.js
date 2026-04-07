(function($) {

  "use strict";

  var filterPortfolio = function (filterValue) {
    var $grid = $('#portfolio .grid');
    if (!$grid.length) return;

    if (!filterValue || filterValue === '*') {
      $grid.find('.portfolio-item').show();
      return;
    }

    $grid.find('.portfolio-item').each(function () {
      var $item = $(this);
      if ($item.is(filterValue)) {
        $item.show();
      } else {
        $item.hide();
      }
    });
  };

  var initIsotope = function () {
    var $buttonGroup = $('#portfolio #filters');
    var $checked = $buttonGroup.find('.is-checked');
    var filterValue = $checked.attr('data-filter') || '*';

    filterPortfolio(filterValue);

    $buttonGroup.off('click', 'a').on('click', 'a', function (e) {
      e.preventDefault();
      filterValue = $(this).attr('data-filter');
      filterPortfolio(filterValue);
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  };

  $(document).on('portfolio:rendered', function () {
    var $buttonGroup = $('#portfolio #filters');
    var $checked = $buttonGroup.find('.is-checked');
    var filterValue = $checked.attr('data-filter') || '*';
    filterPortfolio(filterValue);
  });

  var initTexts = function(){
    // Wrap every letter in a span
     $('.txt-fx').each(function(){
      this.innerHTML = this.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    });

    anime.timeline()
      .add({
        targets: '.txt-fx .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 100,
        delay: (el, i) => 0
      });
  }
  var animateTexts = function(){

    anime.timeline()
      .add({
        targets: '.slick-current .txt-fx .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 30 * i
      });
  }

  var hideTexts = function(){

    anime.timeline()
      .add({
        targets: '.slick-current .txt-fx .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 30 * i
      })
  }

  // initialize all the sliders
  var initSlider = function() {
    // homepage slider | slick slider
    $('.main-slider').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      hideTexts();
      console.log('beforeChange');
    });

    $('.main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      animateTexts();
      console.log('afterChange');
    });
    
    initTexts();
    animateTexts();
  }

  // animate search box
  var searchButton = function() {
    // search box toggle
    $('#header-wrap').on('click', '.search-toggle', function(e) {
      var selector = $(this).data('selector');

      $(selector).toggleClass('show').find('.search-input').focus();
      $(this).toggleClass('active');

      e.preventDefault();
    });


    // close when click off of container
    $(document).on('click touchstart', function (e){
      if (!$(e.target).is('.search-toggle, .search-toggle *, #header-wrap, #header-wrap *')) {
        $('.search-toggle').removeClass('active');
        $('#header-wrap').removeClass('show');
      }
    });
  }

  // initialize tabs
  var jsTabs = function() {
    // portfolio tabs
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }

  // stick header on the top
  var stickyHeader = function() {
    // header menu
    var StickyHeader = new hcSticky('#header.fixed', {
      stickTo: 'body',
      top: 0,
      bottomEnd: 200,
      responsive: {
        1024: {
          disable: true
        }
      }
    });
  }

  //Overlay Menu Navigation
  var overlayMenu = function () {

    if(!$('.nav-overlay').length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }

  // init Chocolat light box
  var initChocolat = function() {
    var elements = document.querySelectorAll('.portfolio-link');
    console.log('Initializing Chocolat on', elements.length, 'portfolio elements');
    if (elements.length > 0) {
      // Initialize Chocolat on portfolio links
      Chocolat(elements, {
          imageSize: 'contain',
          loop: true,
      });
    }
  }

  $(document).ready(function(){

    stickyHeader();
    searchButton();
    initSlider();
    jsTabs();
    // Initialize Chocolat for static elements (like footer gallery)
    var staticElements = document.querySelectorAll('.image-link:not(.portfolio-link)');
    if (staticElements.length > 0) {
      Chocolat(staticElements, {
        imageSize: 'contain',
        loop: true,
      });
    }
    overlayMenu();

    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });

    initIsotope();

  }); // End of document ready

  // preloader
	$(window).on('load', function () {
		$(".preloader").fadeOut("slow");
		initIsotope();
	});

})(jQuery);