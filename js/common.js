$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    //Parallax
    var bg_clients = $('.clients_slider'),
        bg_about_work = $('.about_work_bg'),
        bg_inner_page = $('.s_inner_page');

    $(window).scroll(function() {
        //Parallax Clients
        var scroll_top = $(document).scrollTop();
        bg_clients.css({
            "backgroundPosition": "0 " + (-scroll_top / 6) + 'px'
        });
        //Parallax About_Work
        bg_about_work.css({
            "backgroundPosition": "16% " + (-1000 + (scroll_top / 3)) + 'px'
        });

        bg_inner_page.css({
            "backgroundPosition": "0 " + (scroll_top / 3) + 'px'
        });

    });

    //   ---------   Sliders   ---------   //

    //Header Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });
    //Clients Slidder
    $('.owl_clients').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplaySpeed: 500,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                900: {
                    items: 4
                },
                1170: {
                    items: 4
                }
            }
        })
        //Home Reviews Slider
    $('.owl_reviews').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: true,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })




}); // ---- end $(function(){}) ---- //

$(document).ready(function() {


    // Clone menu items from main menu
    var cont = $(".nav_container").children().clone();
    cont.appendTo($('#mobile_menu'));


    //init mobile menu script
    $("#mobile_menu").mmenu({
        extensions: ['widescreen', 'theme-dark', 'effect-menu-slide', 'pagedim-black', 'pageshadow', 'tileview'],
        counters: true,
        iconPanels: true,
        navbar: {
            title: "Меню",

        },
        offCanvas: {
            pageSelector: "#my-page",
            position: "right"
        },
        counters: true,
        columns: true
    });


    var API = $("#mobile_menu").data("mmenu");
    var opened = false;

    $(".toggle-mnu").click(function() {
        $(".toggle-mnu").toggleClass("on");

        if (opened) {
            API.close();
            opened = false;
        } else {
            API.open();
            opened = true;
        }
        return false;

    });

    $("body").bind("click", function() {
        if (opened) {
            $(".toggle-mnu").toggleClass("on");
            opened = false;
        }
    });

    $('ul.sf-menu').superfish({
        delay: 300, // задержка в миллисекунду
        animation: { opacity: 'show', height: 'show' }, // fade-in и slide-down анимация
        speed: 'fast', // увеличение скорости анимации
        autoArrows: false, // отключает стрелку подменю
        dropShadows: true // отключает тень
    });

    ///Start Back To Top
    $(window).scroll(function() {

        if ($(document).scrollTop() > 1100) {
            $("#back_to_top").fadeIn('slow');
        } else {
            $("#back_to_top").fadeOut('fast');
        }

    });



    /// End Back To Top



    var top_pos = $("nav.header_nav").offset().top;

    $(window).scroll(function() {

        var top_scroll = $(document).scrollTop();

        if (top_scroll > top_pos) {
            $("header nav.header_nav").addClass('fixed_menu');
            $(".header_main").css({
                "margin-top": "53px"
            });
        } else {
            $("header nav.header_nav").removeClass('fixed_menu');
            $(".header_main").css({
                "margin-top": "0"
            });
        }
    });

    $("#back_to_top").click(function() {

        $("body, html").animate({
            scrollTop: $("body").offset().top
        }, 1200);
    });

    $('.grid-item').imagefill();
    $('#container').imagesLoaded(function() {
        // images have loaded

        $('.grid').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });


        var $grid = $('.grid').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });
        // change size of item by toggling gigante class
        // $grid.on( 'click', '.grid-item', function() {
        //   $(this).toggleClass('gigante');
        //   // trigger layout after item size changes
        //   $grid.masonry('layout');
        // });

    });


    //$('.grid-item img').magnificPopup({type:'image'})
    $('.grid-item a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /// Set iframes "width" atribute on 100%

    $("iframe[width]").attr("width", function() {
        return $(this).attr("width").replace("", "100%");
    });
    $("iframe[height]").attr("height", function() {
        return $(this).attr("height").replace("", "300px");
    });


}); //End Document Ready Function
