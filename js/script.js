var windowWith = window.matchMedia('all and (max-width: 1023px)');
$(window).on('load', function () {
  $('.loader_inner').delay(1000).fadeOut(1000);
  $('.loader').delay(1500).fadeOut(1000);
  setTimeout(portfolioItemBlockShow, 2000);

  function portfolioItemBlockShow() {
    $('.portfolio__item_block').removeClass('portfolio__item_block_left');
    $('.portfolio__item_block').removeClass('portfolio__item_block_right');
  };

  function headerHide() {
    $('.header__photographer').addClass('header__photographer_active');
    $('.header__scroll').addClass('header__scroll_active');
    $('.header__img_wrap').addClass('header__img_wrap_active');
    $('.main__circle').addClass('main__circle_active');
    setTimeout(headerStatic, 3000);
  }

  function headerStatic() {
    $('.header__img_wrap').removeClass('header__img_wrap_active');
    $('.main__circle').removeClass('main__circle_active');
    $('.header__name').addClass('header__name_active');
    $('.header__img').addClass('header__img_active');
  }

  function sidebarShow() {
    $('.sidebar').fadeIn();
  }

  function portfolioShow() {
    $('.portfolio__block_wrap').removeClass('slide_left');
    $('.portfolio__block_wrap_rev').removeClass('slide_right');
  }

  function aboutShow() {
    $('.about__text_wrap').removeClass('about__text_wrap_active');
    $('.about__img_wrap').removeClass('about__img_wrap_show');
  }

  function contactsShowSidebar() {
    $('.contacts__sidebar').removeClass('contacts__sidebar_active');
    setTimeout(contactsShowContact, 1000);
  }

  function contactsShowContact() {
    $('.contacts__contact').removeClass('contacts__contact_active');
  }

  function contactsShowText() {
    $('.contacts__text_wrap').removeClass('contacts__text_wrap_active');
    $('.btn_close_nav').removeClass('btn_close_nav_active');
    setTimeout(contactsShowImg, 500);
  }

  function contactsShowImg() {
    $('.contacts__img_wrap').removeClass('contacts__img_wrap_active');
  }

  function contactsShow() {
    $('.contacts__circle_sm').removeClass('contacts__circle_sm_active');
    $('.contacts__circle_big').removeClass('contacts__circle_big_active');
    contactsShowText();
    setTimeout(contactsShowSidebar, 1500);
  }

  function pageRedirectPort() {
    window.location.replace("index.html#portfolio");
  }

  function pageRedirectAbout() {
    window.location.replace("index.html#about");
  }

  function pageRedirectContacts() {
    window.location.replace("index.html#contacts");
  }
  // Перевірка розміру екрану мобільна версія < 1024 ====================================================
  if (windowWith.matches) {
    if (window.location.href == 'http://lxocalhost:3000/index.html#portfolio') {
      history.pushState('', document.title, window.location.pathname);
      pageRedirectPort();
      $('.header').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        $('.portfolio').delay(500).fadeIn(1000);
        setTimeout(portfolioShow, 1500);
      }, 1000);
    } else if (window.location.href == 'http://localhost:3000/index.html#about') {
      $('.header').fadeOut(1000);
      // $('.portfolio').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        $('.about').delay(500).fadeIn(1000);
        setTimeout(aboutShow, 1500);
      }, 1000);
    } else if (window.location.href == 'http://localhost:3000/index.html#contacts') {
      $('.header').fadeOut(1000);
      // $('.portfolio').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        $('.contacts').delay(500).fadeIn(1000);
        setTimeout(contactsShow, 1500);
        // setTimeout(aboutShow, 1500);
      }, 1000);
    }
    // Перевірка розміру екрану мобільна версія > 1024 ================================================
  } else {
    if (window.location.href == 'http://localhost:3000/index.html#portfolio') {
      history.pushState('', document.title, window.location.pathname);
      pageRedirectPort();
      $('.header').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        setTimeout(sidebarShow, 1500);
        $('.portfolio').delay(500).fadeIn(1000);
        setTimeout(portfolioShow, 1500);
        $('.nav_about').hide();
        $('.nav_portfolio').show();
      }, 1000);
    }
    if (window.location.href == 'http://localhost:3000/index.html#about') {
      history.pushState('', document.title, window.location.pathname);
      pageRedirectAbout();
      $('.header').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        setTimeout(sidebarShow, 1500);
        $('.about').delay(500).fadeIn(1000);
        setTimeout(aboutShow, 1500);
        $('.nav_about').show();
        $('.nav_portfolio').hide();
      }, 1000);
    }
    if (window.location.href == 'http://localhost:3000/index.html#contacts') {
      history.pushState('', document.title, window.location.pathname);
      pageRedirectContacts();
      $('.header').fadeOut(1000);
      headerHide();
      setTimeout(function () {
        $('.contacts').delay(500).fadeIn(1000);
        setTimeout(contactsShow, 1500);
      }, 1000);
    }
  }
});
$(document).ready(function () {
  $('.photosession__img_wrap').magnificPopup({
    type: 'image',
    closeOnContentClick: false,
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find('img');
      }
    }
  });
  $('.portfolio').hide();
  $('.about').hide();
  $('.contacts').hide();
  $('.sidebar').hide();

  function sidebarShow() {
    $('.sidebar').fadeIn();
  }

  function showScrollEffect() {
    $('.scroll__effect').fadeIn();
    $('.scroll__effect').delay(1000).addClass('scroll__effect_active');
  }

  function hideScrollEffect() {
    $('.scroll__effect').hide();
    $('.scroll__effect').removeClass('scroll__effect_active');
  }

  function sidebarHide() {
    $('.sidebar').delay(1000).fadeOut(500);
  }
  //header show
  function headerShow() {
    $('.header__photographer').removeClass('header__photographer_active');
    $('.header__scroll').removeClass('header__scroll_active');
    $('.header__name').removeClass('header__name_active');
    $('.header__img').removeClass('header__img_active');
  }

  function headerHide() {
    $('.header__photographer').addClass('header__photographer_active');
    $('.header__scroll').addClass('header__scroll_active');
    $('.header__img_wrap').addClass('header__img_wrap_active');
    $('.main__circle').addClass('main__circle_active');
    setTimeout(headerStatic, 3000);
  }

  function headerStatic() {
    $('.header__img_wrap').removeClass('header__img_wrap_active');
    $('.main__circle').removeClass('main__circle_active');
    $('.header__name').addClass('header__name_active');
    $('.header__img').addClass('header__img_active');
  }

  function portfolioShow() {
    $('.portfolio__block_wrap').removeClass('slide_left');
    $('.portfolio__block_wrap_rev').removeClass('slide_right');
  }

  function portfolioStatic() {
    $('.portfolio__block_wrap').addClass('slide_left');
    $('.portfolio__block_wrap_rev').addClass('slide_right');
  }
  //show about ==============================================
  function aboutShow() {
    $('.about__text_wrap').removeClass('about__text_wrap_active');
    $('.about__img_wrap').removeClass('about__img_wrap_show');
  }

  function aboutStatic() {
    $('.about__img_wrap').removeClass('about__img_wrap_hide');
    $('.about__text_wrap').addClass('about__text_wrap_active');
    $('.about__img_wrap').addClass('about__img_wrap_show');
  }

  function aboutHide() {
    $('.about__img_wrap').addClass('about__img_wrap_hide');
  }

  function contactsShowSidebar() {
    $('.contacts__sidebar').removeClass('contacts__sidebar_active');
    setTimeout(contactsShowContact, 1000);
  }

  function contactsShowContact() {
    $('.contacts__contact').removeClass('contacts__contact_active');
  }

  function contactsShowText() {
    $('.contacts__text_wrap').removeClass('contacts__text_wrap_active');
    $('.btn_close_nav').removeClass('btn_close_nav_active');
    setTimeout(contactsShowImg, 500);
  }

  function contactsShowImg() {
    $('.contacts__img_wrap').removeClass('contacts__img_wrap_active');
  }

  function contactsShow() {
    $('.contacts__circle_sm').removeClass('contacts__circle_sm_active');
    $('.contacts__circle_big').removeClass('contacts__circle_big_active');
    contactsShowText();
    setTimeout(contactsShowSidebar, 1500);
  }
  $('.nav_about').hide();

  function showAside() {
    $('.aside__menu_sidebar').addClass('aside__menu_sidebar_active');
  }

  function showAsideStatic() {
    $('.aside__menu_sidebar').removeClass('aside__menu_sidebar_active');
  }

  function showContent() {
    $('.aside__nav_content').addClass('aside__nav_content_active');
  }

  function showContentStatic() {
    $('.aside__nav_content').removeClass('aside__nav_content_active');
  }

  function showContentContact() {
    $('.aside__contact').addClass('aside__contact_active');
  }

  function showContentContactStatic() {
    $('.aside__contact').removeClass('aside__contact_active');
  }

  function showContentAnim() {
    $('.aside__content_wrap_anim').addClass('aside__content_wrap_anim_active');
  }

  function showContentAnimtStatic() {
    $('.aside__content_wrap_anim').removeClass('aside__content_wrap_anim_active');
  }

  function portfolioItemBlockHide() {
    $('.portfolio__item_block').addClass('portfolio__item_block_left');
    $('.portfolio__item_block').addClass('portfolio__item_block_right');
  };

  // Перевірка розміру екрану мобільна версія < 1024 =============================================================
  if (windowWith.matches) {
    $('.humburger__logo').click(function () {
      $(this).toggleClass('open');
      if ($('.main__menu_mob').is(':visible')) {
        $('.main__menu_mob').slideUp(600);
      } else {
        $('.main__menu_mob').slideDown(600);
      }
    });
    $('.menu__link').click(function () {
      $('.main__menu_mob ').slideUp(200);
      $('.humburger__logo').removeClass('open');
    });
    $('.sidebar').hide();
    $('.menu__link[href="#portfolio"],  .social_mob_link[href="#portfolio"], .header__btn_mob[href="#portfolio"]').click(function () {
      $('.header').fadeOut(1000);
      $('.contacts').fadeOut(1000);
      $('.about').fadeOut(1000);
      $('.humburger__logo_wrap').fadeOut().delay(2000).fadeIn();
      $('.social_mob').fadeOut().delay(2000).fadeIn();
      $('.portfolio').delay(2000).fadeIn(1000);
      setTimeout(showScrollEffect, 1000);
      setTimeout(portfolioShow, 3000);
      setTimeout(hideScrollEffect, 3000);
    });
    $('.menu__link[href="#about"]').click(function () {
      $('.header').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      $('.contacts').fadeOut(1000);
      $('.humburger__logo_wrap').fadeOut().delay(2000).fadeIn();
      $('.social_mob').fadeOut().delay(2000).fadeIn();
      setTimeout(showScrollEffect, 1000);
      $('.about').delay(2000).fadeIn(1000);
      setTimeout(aboutShow, 3000);
      setTimeout(hideScrollEffect, 3000);
    });
    $('.menu__link[href="#contacts"], .social_mob_link[href="#contacts"]').click(function () {
      $('.header').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      $('.about').fadeOut(1000);
      $('.humburger__logo_wrap').fadeOut().delay(2000).fadeIn();
      $('.social_mob').fadeOut().delay(2000).fadeIn();
      setTimeout(showScrollEffect, 1000);
      $('.contacts').delay(2000).fadeIn(1000);
      setTimeout(contactsShowText, 3000);
      setTimeout(hideScrollEffect, 3000);
    });
  } else {
    // Перевірка розміру екрану десктопна > 1024 версія =============================================================
    var latestKnownScrollY = $('.portfolio__content').scrollTop();
    $('.portfolio__content').on("scroll", function () {
      latestKnownScrollY = $('.portfolio__content').scrollTop();
    });
    $('.portfolio__content').on("mousewheel DOMMouseScroll", function (event) {
      var scrollTo,
        scrollDistance = 400,
        delta;
      if (event.type == 'mousewheel') {
        delta = event.originalEvent.wheelDelta / 200;
      } else if (event.type == 'DOMMouseScroll') {
        delta = -event.originalEvent.detail / 3;
      }
      scrollTo = latestKnownScrollY - delta * scrollDistance;
      if (scrollTo) {
        event.preventDefault();
        event.stopPropagation();
        $('.portfolio__content').stop().animate({
          scrollTop: scrollTo
        }, 500);
      }
    });

    var latestScrollY = $('.portfolio__content_item').scrollTop();
    $('.portfolio__content_item').on("scroll", function () {
      latestScrollY = $('.portfolio__content_item').scrollTop();
    });
    $('.portfolio__content_item').on("mousewheel DOMMouseScroll", function (event) {
      var scrollTo,
        scrollDistance = 400,
        delta;
      if (event.type == 'mousewheel') {
        delta = event.originalEvent.wheelDelta / 200;
      } else if (event.type == 'DOMMouseScroll') {
        delta = -event.originalEvent.detail / 3;
      }
      scrollTo = latestScrollY - delta * scrollDistance;
      if (scrollTo) {
        event.preventDefault();
        event.stopPropagation();
        $('.portfolio__content_item').stop().animate({
          scrollTop: scrollTo
        }, 500);
      }
    });

    var latestKnownY = $('.photosession__content_wrap').scrollTop();
    $('.photosession__content_wrap').on("scroll", function () {
      latestKnownY = $('.photosession__content_wrap').scrollTop();
    });
    $('.photosession__content_wrap').on("mousewheel DOMMouseScroll", function (event) {
      var scrollTo,
        scrollDistance = 400,
        delta;
      if (event.type == 'mousewheel') {
        delta = event.originalEvent.wheelDelta / 200;
      } else if (event.type == 'DOMMouseScroll') {
        delta = -event.originalEvent.detail / 3;
      }
      scrollTo = latestKnownY - delta * scrollDistance;
      if (scrollTo) {
        event.preventDefault();
        event.stopPropagation();
        $('.photosession__content_wrap').stop().animate({
          scrollTop: scrollTo
        }, 500);
      }
    });
    $('.header__btn, .menu__link[href="#portfolio"]').click(function () {
      headerHide();
      $('.header').delay(1000).fadeOut(1000);
      setTimeout(sidebarShow, 2000);
      setTimeout(showScrollEffect, 1000);
      $('.portfolio').delay(2000).fadeIn(1000);
      setTimeout(portfolioShow, 3000);
      setTimeout(hideScrollEffect, 3000);
      $('.nav_about').hide();
      $('.nav_portfolio').show();
    });
    $('.btn_next[href="#about"]').click(function () {
      $('.nav_about').show();
      $('.nav_portfolio').hide();
      $('.portfolio').delay(1000).fadeOut(1000);
      // setTimeout(portfolioStatic, 2000);
      $('.about').delay(2000).fadeIn(1000);
      sidebarHide();
      hideScrollEffect();
      portfolioStatic();
      setTimeout(sidebarShow, 2000);
      setTimeout(showScrollEffect, 1000);
      setTimeout(aboutShow, 3000);
    });
    $('.btn_prev[href="#header"]').click(function () {
      $('.portfolio').delay(1000).fadeOut(1000);
      setTimeout(portfolioStatic, 2000);
      $('.header').delay(2000).fadeIn(1000);
      sidebarHide();
      portfolioStatic();
      setTimeout(headerShow, 3000);
      setTimeout(hideScrollEffect, 3000);
      setTimeout(showScrollEffect, 1000);
    });
    $('.menu__link[href="#about"]').click(function () {
      headerHide();
      $('.header').delay(1000).fadeOut(1000);
      setTimeout(sidebarShow, 2000);
      setTimeout(showScrollEffect, 1000);
      $('.about').delay(2000).fadeIn(1000);
      setTimeout(aboutShow, 3000);
      $('.nav_about').show();
      $('.nav_portfolio').hide();
    });
    $('.btn_next[href="#contacts"]').click(function () {
      $('.about').delay(1000).fadeOut(1000);
      aboutHide();
      setTimeout(aboutStatic, 2000);
      $('.contacts').delay(2000).fadeIn(1000);
      setTimeout(contactsShow, 3000);
      sidebarHide();
      hideScrollEffect();
    });
    $('.btn_prev[href="#portfolio"]').click(function () {
      $('.nav_about').hide();
      $('.nav_portfolio').show();
      $('.about').delay(1000).fadeOut(1000);
      setTimeout(aboutStatic, 2000);
      $('.portfolio').delay(2000).fadeIn(1000);
      sidebarHide();
      hideScrollEffect();
      aboutHide();
      setTimeout(showScrollEffect, 1000);
      setTimeout(sidebarShow, 2000);
      setTimeout(portfolioShow, 3000);
      setTimeout(hideScrollEffect, 3000);
    });
    $('.menu__link[href="#contacts"]').click(function () {
      headerHide();
      $('.header').delay(1000).fadeOut(1000);
      setTimeout(headerStatic, 3000);
      $('.contacts').delay(2000).fadeIn(1000);
      setTimeout(contactsShow, 3000);
      sidebarHide();
      hideScrollEffect();
    });
    $('.btn_close_nav, .btn_prev_contact, .contacts__link_logo').click(function () {
      $('.contacts').delay(1000).fadeOut(1000);
      $('.header').delay(2000).fadeIn(1000);
      contactsHide();
      sidebarHide();
      hideScrollEffect();
    });

    function contactsHide() {
      $('.contacts__logo').addClass('contacts__logo_hide');
      $('.contacts__btn').addClass('contacts__btn_hide');
      setTimeout(contactsStatic, 3000);
      setTimeout(headerShow, 3000);
    }

    function contactsStatic() {
      $('.contacts__img_wrap').addClass('contacts__img_wrap_active');
      $('.contacts__text_wrap').addClass('contacts__text_wrap_active');
      $('.btn_close_nav').addClass('btn_close_nav_active');
      $('.contacts__contact').addClass('contacts__contact_active');
      $('.contacts__sidebar').addClass('contacts__sidebar_active');
      $('.contacts__circle_sm').addClass('contacts__circle_sm_active');
      $('.contacts__circle_big').addClass('contacts__circle_big_active');
      $('.contacts__logo').removeClass('contacts__logo_hide');
      $('.contacts__btn').removeClass('contacts__btn_hide');
    }
    $('.about__main_link').click(function () {
      aboutHide();
      hideScrollEffect();
      sidebarHide();
      setTimeout(aboutStatic, 2000);
      $('.about').delay(1000).fadeOut(1000);
      $('.header').delay(2000).fadeIn(1000);
      setTimeout(headerShow, 3000);
    });
    $('.sidebar__nav_menu').click(function () {
      showAside();
      setTimeout(showContentContact, 1000);
      setTimeout(showContent, 1500);
      setTimeout(showContentAnim, 3500);
    });
    $('.btn_prev_aside, .aside__btn_close').click(function () {
      showContentStatic();
      setTimeout(showContentAnimtStatic, 1000);
      setTimeout(showContentContactStatic, 1000);
      setTimeout(showAsideStatic, 1500);
    });
    $('.aside__nav_link[href="#header"]').click(function () {
      showContentStatic();
      setTimeout(showContentAnimtStatic, 1000);
      setTimeout(showContentContactStatic, 1000);
      setTimeout(showAsideStatic, 1500);
      $('.portfolio').fadeOut(1000);
      $('.about').fadeOut(1000);
      setTimeout(portfolioStatic, 1000);
      setTimeout(aboutStatic, 1000);
      $('.header').delay(2000).fadeIn(1000);
      sidebarHide();
      portfolioStatic();
      setTimeout(headerShow, 3000);
      setTimeout(hideScrollEffect, 3000);
      setTimeout(showScrollEffect, 1000);
    });
    $('.aside__nav_link[href="#portfolio"]').click(function () {
      if ($('.portfolio').is(':visible')) {
        showContentStatic();
        setTimeout(showContentAnimtStatic, 1000);
        setTimeout(showContentContactStatic, 1000);
        setTimeout(showAsideStatic, 1500);
        sidebarHide();
        setTimeout(sidebarShow, 2000);
        setTimeout(showScrollEffect, 1000);
        $('.portfolio').delay(2000).fadeIn(1000);
        setTimeout(hideScrollEffect, 3000);
        $('.nav_about').hide();
        $('.nav_portfolio').show();
      } else {
        showContentStatic();
        setTimeout(showContentAnimtStatic, 1000);
        setTimeout(showContentContactStatic, 1000);
        setTimeout(showAsideStatic, 1500);
        sidebarHide();
        hideScrollEffect();
        setTimeout(sidebarShow, 2000);
        setTimeout(showScrollEffect, 1000);
        $('.about').fadeOut(1000);
        $('.portfolio').delay(2000).fadeIn(1000);
        setTimeout(portfolioShow, 3000);
        setTimeout(hideScrollEffect, 3000);
        $('.nav_about').hide();
        $('.nav_portfolio').show();
      }
    });
    $('.aside__nav_link[href="#about"]').click(function () {
      if ($('.about').is(':visible')) {
        alert(1);
        showContentStatic();
        setTimeout(showContentAnimtStatic, 1000);
        setTimeout(showContentContactStatic, 1000);
        setTimeout(showAsideStatic, 1500);
        sidebarHide();
        // $('.header').delay(1000).fadeOut(1000);
        setTimeout(sidebarShow, 2000);
        setTimeout(showScrollEffect, 1000);
        $('.about').delay(2000).fadeIn(1000);
        setTimeout(hideScrollEffect, 3000);
        $('.nav_about').show();
        $('.nav_portfolio').hide();
      } else {
        showContentStatic();
        setTimeout(showContentAnimtStatic, 1000);
        setTimeout(showContentContactStatic, 1000);
        setTimeout(showAsideStatic, 1500);
        sidebarHide();
        hideScrollEffect();
        setTimeout(sidebarShow, 2000);
        setTimeout(showScrollEffect, 1000);
        $('.about').fadeOut(1000);
        // $('.portfolio').delay(2000).fadeIn(1000);
        setTimeout(aboutShow, 3000);
        setTimeout(hideScrollEffect, 3000);
        // $('.header').delay(1000).fadeOut(1000);
        $('.portfolio').fadeOut(1000);
        $('.about').delay(2000).fadeIn(1000);
        setTimeout(hideScrollEffect, 3000);
        $('.nav_about').show();
        $('.nav_portfolio').hide();
      }
    });
    $('.aside__nav_link[href="#contacts"]').click(function () {
      showContentStatic();
      setTimeout(showContentAnimtStatic, 1000);
      setTimeout(showContentContactStatic, 1000);
      setTimeout(showAsideStatic, 1500);
      $('.about').delay(1000).fadeOut(1000);
      $('.portfolio').delay(1000).fadeOut(1000);
      aboutHide();
      portfolioStatic();
      sidebarHide();
      hideScrollEffect();
      setTimeout(aboutStatic, 2000);
      $('.contacts').delay(2000).fadeIn(1000);
      setTimeout(contactsShow, 3000);
    });

    $('.portfolio__btn[href="weddingPage.html"]').click(function () {
      $('.sidebar').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      portfolioStatic();
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.portfolio__btn[href="weddingPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__btn[href="familyPage.html"]').click(function () {
      $('.sidebar').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      portfolioStatic();
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      console.log();
    });
    $('.portfolio__btn[href="familyPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__btn_rev[href="lovePage.html"]').click(function () {
      $('.sidebar').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      portfolioStatic();
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.portfolio__btn_rev[href="lovePage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__btn_rev[href="portraitPage.html"]').click(function () {
      $('.sidebar').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      portfolioStatic();
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.portfolio__btn_rev[href="portraitPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__item_block[href="weddingPhotosession.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      portfolioItemBlockHide();
    });
    $('.portfolio__item_block[href="weddingPhotosession.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__item_block[href="lovePhotosession.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      portfolioItemBlockHide();
    });
    $('.portfolio__item_block[href="lovePhotosession.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__item_block[href="familyPhotosession.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      portfolioItemBlockHide();
    });

    $('.portfolio__item_block[href="familyPhotosession.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.portfolio__item_block[href="portraitPhotosession.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      portfolioItemBlockHide();
    });

    $('.portfolio__item_block[href="portraitPhotosession.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_prev[href="index.html"]').click(function (e) {
      $('.sidebar__wedding').fadeOut(1000);
      $('.portfolio').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
      portfolioItemBlockHide();
    });
    $('.btn_prev[href="index.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });

    $('.btn_next[href="lovePage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_next[href="lovePage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_prev[href="weddingPage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_prev[href="weddingPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_next[href="familyPage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_next[href="familyPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_prev[href="lovePage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_prev[href="lovePage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_next[href="portraitPage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_next[href="portraitPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });
    $('.btn_prev[href="familyPage.html"]').click(function () {
      $('.sidebar__wedding').fadeOut(1000);
      showScrollEffect();
      setTimeout(hideScrollEffect, 1100);
    });
    $('.btn_prev[href="familyPage.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 1000);
    });


    $('.aside__nav_link_inner[href="index.html"]').click(function () {
      showContentStatic();
      setTimeout(showScrollEffect, 1000);
      $('.sidebar__wedding').fadeOut(1000);
      setTimeout(showContentAnimtStatic, 1000);
      setTimeout(showContentContactStatic, 1000);
      setTimeout(showAsideStatic, 1500);
      setTimeout(hideScrollEffect, 2500);
    });
    $('.aside__nav_link_inner[href="index.html"]').click(function (e) {
      e.preventDefault();
      var url = $(this).data('src');
      setInterval(function () {
        window.location = url;
      }, 2000);
    });

    $('.portfolio_main').hide();
    $('.portfolio__content').scroll(function () {
      let scrollHeight = $(this).height();
      let position = $(this).scrollTop();
      console.log(position);
      console.log(scrollHeight);
      if (position >= scrollHeight) {
        setTimeout(linneBottom, 500);
        $('.portfolio_main').fadeIn(200);
      } else {
        $('.portfolio_main').hide();
      }
    });
    // $('.portfolio_main').hide();
    $('.portfolio__content_item').scroll(function () {
      let scrollHeight = $(this).height();
      let position = $(this).scrollTop();
      if (position >= scrollHeight) {
        setTimeout(linneBottom, 500);
        $('.portfolio_main').fadeIn(200);
      } else {
        $('.portfolio_main').hide();
      }
    });
    // $('.portfolio_main').hide();
    $('.photosession__content_wrap').scroll(function () {
      let height = $(this).height();
      let scrollHeight = $('.photosession__content_item').height();
      let position = $(this).scrollTop() + height;
      console.log(position);
      console.log(scrollHeight);
      if (position >= scrollHeight) {
        setTimeout(linneBottom, 500);
        $('.portfolio_main').fadeIn(200);
      } else {
        $('.portfolio_main').hide();
      }
    });

    function linneBottom() {
      $('.portfolio__content, .portfolio__content_item, .photosession__content_wrap').addClass('bottom_active');
    }
  }
});