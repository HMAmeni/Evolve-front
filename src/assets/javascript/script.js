!function(i) {
    "use strict";
    var e,
    a,
    s=i(window).width();
    i(".bg_image_holder").each(function() {
        var s=i(this), e=s.children().attr("src");
        s.css( {
            "background-image": "url("+e+")", opacity: "1"
        }
        ).children().attr("alt", e)
    }
    ),
    s<992&&(e=".nav-item.dropdown .nav-link", i(".navbar "+(a=".mega-menu,.dropdown-menu")).slideUp(), i(e).removeAttr("data-toggle"), i(".navbar "+e).on("click", function(s) {
        s.preventDefault(), i(this).toggleClass("active").siblings(a).slideToggle().parent().siblings(".dropdown").children(a).slideUp().siblings(e).removeClass("active")
    }
    )),
    i("img.svg").each(function() {
        var a=i(this), t=a.attr("id"), l=a.attr("class"), s=a.attr("src");
        i.get(s, function(s) {
            var e=jQuery(s).find("svg");
            void 0!==t&&(e=e.attr("id", t)), void 0!==l&&(e=e.attr("class", l+" replaced-svg")), e=e.removeAttr("xmlns:a"), a.replaceWith(e)
        }
        , "xml")
    }
    ),
    i(".carousel-one").owlCarousel( {
        items:3, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    }
    ),
    i(".carousel-two").owlCarousel( {
        items:3, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    }
    ),
    i(".carousel-three").owlCarousel( {
        items:1, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-circle", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".carousel-four").owlCarousel( {
        items:1, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".portfolio-carousel").owlCarousel( {
        items:4, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 550: {
                items: 2
            }
            , 768: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    }
    ),
    i(".image-carousel-one").owlCarousel( {
        items:1, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-circle", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".image-carousel-two").owlCarousel( {
        items:1, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".testimonial-carousel-one").owlCarousel( {
        items:1, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".testimonial-carousel-two").owlCarousel( {
        items:2, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle dot-light", responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    }
    ),
    i(".testimonial-carousel-three").owlCarousel( {
        items:3, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square nav-square-dark", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 992: {
                items: 3
            }
        }
    }
    ),
    i(".testimonial-carousel-four").owlCarousel( {
        items:1, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".testimonial-carousel-five").owlCarousel( {
        items:2, nav:!1, dots:!1, autoplay:!0, responsive: {
            0: {
                items: 1
            }
            , 992: {
                items: 2
            }
        }
    }
    ),
    i(".team-carousel-one").owlCarousel( {
        items:3, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square nav-square-dark", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    }
    ),
    i(".team-carousel-two").owlCarousel( {
        items:4, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 992: {
                items: 4
            }
        }
    }
    ),
    i(".logo-carousel-one").owlCarousel( {
        items:4, autoplay:!0, loop:!0, margin:30, nav:!1, dots:!1, responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 768: {
                items: 3
            }
            , 992: {
                items: 4
            }
        }
    }
    ),
    i(".logo-carousel-two").owlCarousel( {
        items:2, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    }
    ),
    i(".logo-carousel-three").owlCarousel( {
        items:4, margin:30, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square nav-square-dark", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 992: {
                items: 4
            }
        }
    }
    ),
    i(".logo-carousel-dark").owlCarousel( {
        items:4, nav:!1, dots:!1, autoplay:!0, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    }
    ),
    i(".blog-carousel-one").owlCarousel( {
        items:3, margin:30, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    }
    ),
    i(".blog-carousel-two").owlCarousel( {
        items:3, autoplay:!0, margin:30, nav:!1, dots:!1, responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 3
            }
        }
    }
    ),
    i(".twitter-feeds-carousel").owlCarousel( {
        items:1, autoplay:!0, loop:!0, nav:!0, navText:['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'], navContainerClass:"nav-square", dots:!1, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".twitter-feeds-carousel2").owlCarousel( {
        items:1, autoplay:!0, loop:!0, nav:!1, dots:!0, dotsClass:"owl-dots dot-circle", responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    ),
    i(".image-view-carousel").owlCarousel( {
        items: 1, center: !0, loop: !1, nav: !1, dots: !1, URLhashListener: !0, startPosition: "#image1"
    }
    ),
    i(".addresses_carousel").owlCarousel( {
        items:4, dots:!0, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 4
            }
        }
    }
    ),
    i('[data-toggle="tooltip"]').tooltip();
    var t=i("#numberInput");
    i(".pcount").on("click", function() {
        var s=parseInt(t.val());
        "plus"===i(this).data("operation")?isNaN(s)?t.val(1): t.val(s+1): 0<s&&t.val(s-1)
    }
    ),
    i(document).ready(function() {
        i(".select2_default").select2( {
            placeholder: "Multiple Select", width: "100%", containerCssClass: "form-control"
        }
        ), i(".select2_tagged").select2( {
            multiple: !0, placeholder: "Select options", containerCssClass: "form-control"
        }
        ), i(".selection_with_icon").select2( {
            templateResult:function(s) {
                return s.id?i("<span><span class='la la-"+s.element.value+"'></span>"+s.text+"</span>"): s.text
            }
            , containerCssClass:"form-control", dropdownCssClass:"custom_select_with_icon"
        }
        )
    }
    ),
    i(".count_up").counterUp(),
    i(".give_rating").barrating( {
        theme: "fontawesome-stars"
    }
    ),
    i("#bgndVideo").YTPlayer(),
    i("#slider-range1").slider( {
        range:!0, min:0, max:500, values:[75, 300], slide:function(s, e) {
            i("#amount1").val("$"+e.values[0]+" - $"+e.values[1])
        }
    }
    ),
    i("#amount1").val("$"+i("#slider-range1").slider("values", 0)+" - $"+i("#slider-range1").slider("values", 1)),
    i("#slider-range2").slider( {
        range:!0, min:0, max:500, values:[75, 300], slide:function(s, e) {
            i("#amount2").val("$"+e.values[0]+" - $"+e.values[1])
        }
    }
    ),
    i("#amount2").val("$"+i("#slider-range2").slider("values", 0)+" - $"+i("#slider-range2").slider("values", 1)),
    i("#text-editor").trumbowyg(),
    i(".countdown").countdown("2019/11/25", function(s) {
        i(this).html(s.strftime("<li><span>%D</span> <span>Days</span></li>  <li><span>%H</span> <span>Hours</span></li>  <li><span>%M</span> <span>Minutes</span></li>  <li><span>%S</span> <span>Seconds</span></li> "))
    }
    ),
    i(".search_trigger").on("click", function() {
        i(this).toggleClass("la-search la-close"), i(this).parent(".search_module").children(".search_area").toggleClass("active")
    }
    ),
    i(".video-iframe").magnificPopup( {
        type:"iframe", iframe: {
            markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>', patterns: {
                youtube: {
                    index: "youtube.com/", id: "v=", src: "http://www.youtube.com/embed/%id%?autoplay=1"
                }
            }
            , srcAction:"iframe_src"
        }
    }
    ),
    i(".filter-sort ul li").on("click", function() {
        i(".filter-sort ul li").removeClass("active"), i(this).addClass("active")
    }
    ),
    i(".filter-sort2 ul li").on("click", function() {
        i(".filter-sort2 ul li").removeClass("active"), i(this).addClass("active")
    }
    );
    var l=i(".go_top");
    i(window).on("scroll", function() {
        117<i(document).scrollTop()?l.fadeIn(400): l.fadeOut(400)
    }
    ),
    l.on("click", function() {
        return i("html, body").animate( {
            scrollTop: 0
        }
        , 800), !1
    }
    )
}
/*
(jQuery);
!function() {
    "use strict";
    function e(e, t, l, r) {
        var s=new google.maps.LatLng(t, l),
        o= {
            center:s,
            zoom:13,
            scrollwheel:!1,
            styles:r||[ {
                featureType:"water",
                elementType:"geometry",
                stylers:[ {
                    color: "#e9e9e9"
                }
                ,
                {
                    lightness: 17
                }
                ]
            }
            ,
            {
                featureType:"landscape",
                elementType:"geometry",
                stylers:[ {
                    color: "#f5f5f5"
                }
                ,
                {
                    lightness: 20
                }
                ]
            }
            ,
            {
                featureType:"road.highway",
                elementType:"geometry.fill",
                stylers:[ {
                    color: "#ffffff"
                }
                ,
                {
                    lightness: 17
                }
                ]
            }
            ,
            {
                featureType:"road.highway",
                elementType:"geometry.stroke",
                stylers:[ {
                    color: "#ffffff"
                }
                ,
                {
                    lightness: 29
                }
                ,
                {
                    weight: .2
                }
                ]
            }
            ,
            {
                featureType:"road.arterial",
                elementType:"geometry",
                stylers:[ {
                    color: "#ffffff"
                }
                ,
                {
                    lightness: 18
                }
                ]
            }
            ,
            {
                featureType:"road.local",
                elementType:"geometry",
                stylers:[ {
                    color: "#ffffff"
                }
                ,
                {
                    lightness: 16
                }
                ]
            }
            ,
            {
                featureType:"poi",
                elementType:"geometry",
                stylers:[ {
                    color: "#f5f5f5"
                }
                ,
                {
                    lightness: 21
                }
                ]
            }
            ,
            {
                featureType:"poi.park",
                elementType:"geometry",
                stylers:[ {
                    color: "#dedede"
                }
                ,
                {
                    lightness: 21
                }
                ]
            }
            ,
            {
                elementType:"labels.text.stroke",
                stylers:[ {
                    visibility: "on"
                }
                ,
                {
                    color: "#ffffff"
                }
                ,
                {
                    lightness: 16
                }
                ]
            }
            ,
            {
                elementType:"labels.text.fill",
                stylers:[ {
                    saturation: 36
                }
                ,
                {
                    color: "#333333"
                }
                ,
                {
                    lightness: 40
                }
                ]
            }
            ,
            {
                elementType:"labels.icon",
                stylers:[ {
                    visibility: "off"
                }
                ]
            }
            ,
            {
                featureType:"transit",
                elementType:"geometry",
                stylers:[ {
                    color: "#f2f2f2"
                }
                ,
                {
                    lightness: 19
                }
                ]
            }
            ,
            {
                featureType:"administrative",
                elementType:"geometry.fill",
                stylers:[ {
                    color: "#fefefe"
                }
                ,
                {
                    lightness: 20
                }
                ]
            }
            ,
            {
                featureType:"administrative",
                elementType:"geometry.stroke",
                stylers:[ {
                    color: "#fefefe"
                }
                ,
                {
                    lightness: 17
                }
                ,
                {
                    weight: 1.2
                }
                ]
            }
            ]
        }
        ,
        y=new google.maps.Map(document.getElementById(e), o),
        f=new google.maps.Marker( {
            position: s, icon: "img/mpc.png"
        }
        );
        new google.maps.InfoWindow( {
            content: "united-states"
        }
        );
        f.setMap(y)
    }
    $(".map").length&&google.maps.event.addDomListener(window, "load", function() {
        $("#map1").length&&e("map1", 50.797897, -1.077641);
        $("#map2").length&&e("map2", 50.797897, -1.077641, [ {
            featureType:"all", elementType:"labels.text.fill", stylers:[ {
                saturation: 36
            }
            , {
                color: "#333333"
            }
            , {
                lightness: 40
            }
            ]
        }
        , {
            featureType:"all", elementType:"labels.text.stroke", stylers:[ {
                visibility: "on"
            }
            , {
                color: "#ffffff"
            }
            , {
                lightness: 16
            }
            ]
        }
        , {
            featureType:"all", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                color: "#fefefe"
            }
            , {
                lightness: 20
            }
            ]
        }
        , {
            featureType:"administrative", elementType:"geometry.stroke", stylers:[ {
                color: "#fefefe"
            }
            , {
                lightness: 17
            }
            , {
                weight: 1.2
            }
            ]
        }
        , {
            featureType:"landscape", elementType:"geometry", stylers:[ {
                color: "#dce1dc"
            }
            , {
                lightness: 20
            }
            ]
        }
        , {
            featureType:"poi", elementType:"geometry", stylers:[ {
                color: "#f5f5f5"
            }
            , {
                lightness: 21
            }
            ]
        }
        , {
            featureType:"poi.park", elementType:"geometry", stylers:[ {
                color: "#dedede"
            }
            , {
                lightness: 21
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                color: "#ffffff"
            }
            , {
                lightness: 17
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"geometry.stroke", stylers:[ {
                color: "#ffffff"
            }
            , {
                lightness: 29
            }
            , {
                weight: .2
            }
            ]
        }
        , {
            featureType:"road.highway.controlled_access", elementType:"geometry", stylers:[ {
                color: "#cdcdcd"
            }
            ]
        }
        , {
            featureType:"road.arterial", elementType:"geometry", stylers:[ {
                color: "#ffffff"
            }
            , {
                lightness: 18
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"geometry", stylers:[ {
                color: "#dadada"
            }
            , {
                lightness: 16
            }
            ]
        }
        , {
            featureType:"transit", elementType:"geometry", stylers:[ {
                color: "#f2f2f2"
            }
            , {
                lightness: 19
            }
            ]
        }
        , {
            featureType:"water", elementType:"geometry", stylers:[ {
                color: "#d1d1d1"
            }
            , {
                lightness: 17
            }
            ]
        }
        ]);
        $("#map3").length&&e("map3", 40.7128, -73.935242, [ {
            featureType:"all", elementType:"labels.text.fill", stylers:[ {
                color: "#ffffff"
            }
            ]
        }
        , {
            featureType:"all", elementType:"labels.text.stroke", stylers:[ {
                visibility: "on"
            }
            , {
                color: "#424b5b"
            }
            , {
                weight: 2
            }
            , {
                gamma: "1"
            }
            ]
        }
        , {
            featureType:"all", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"administrative", elementType:"geometry", stylers:[ {
                weight: .6
            }
            , {
                color: "#545b6b"
            }
            , {
                gamma: "0"
            }
            ]
        }
        , {
            featureType:"landscape", elementType:"geometry", stylers:[ {
                color: "#545b6b"
            }
            , {
                gamma: "1"
            }
            , {
                weight: "10"
            }
            ]
        }
        , {
            featureType:"poi", elementType:"geometry", stylers:[ {
                color: "#666c7b"
            }
            ]
        }
        , {
            featureType:"poi.park", elementType:"geometry", stylers:[ {
                color: "#545b6b"
            }
            ]
        }
        , {
            featureType:"road", elementType:"geometry", stylers:[ {
                color: "#424a5b"
            }
            , {
                lightness: "0"
            }
            ]
        }
        , {
            featureType:"transit", elementType:"geometry", stylers:[ {
                color: "#666c7b"
            }
            ]
        }
        , {
            featureType:"water", elementType:"geometry", stylers:[ {
                color: "#2e3546"
            }
            ]
        }
        ]), $("#map4").length&&e("map4", 50.797897, -1.077641)
    }
    )
}
();
!function(e) {
    "use strict";
    var i;
    !function() {
        function e() {
            void 0===i&&(i=jQuery),
            null==i("#rev_slider_15_1").revolution?revslider_showDoubleJqueryError("#rev_slider_15_1"):i("#rev_slider_15_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:7500, navigation: {
                    keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"off", bullets: {
                        enable: !0, hide_onmobile: !1, style: "hermes", hide_onleave: !1, direction: "horizontal", h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 20, space: 5, tmp: ""
                    }
                }
                , visibilityLevels:[1200, 1199, 992, 768, 576], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", parallax: {
                    type: "mouse", origo: "enterpoint", speed: 400, speedbg: 0, speedls: 0, levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55], disable_onmobile: "on"
                }
                , shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_17_1").revolution?revslider_showDoubleJqueryError("#rev_slider_17_1"):i("#rev_slider_17_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"off", bullets: {
                        enable: !0, hide_onmobile: !1, style: "hermes", hide_onleave: !1, direction: "horizontal", h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 20, space: 5, tmp: ""
                    }
                }
                , visibilityLevels:[1200, 1199, 992, 768], responsiveLevels:[1200, 1199, 992, 768], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", parallax: {
                    type: "mouse", origo: "enterpoint", speed: 400, speedbg: 0, speedls: 0, levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55], disable_onmobile: "on"
                }
                , shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_24_1").revolution?revslider_showDoubleJqueryError("#rev_slider_24_1"):i("#rev_slider_24_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"off", arrows: {
                        style:"custom", enable:!0, hide_onmobile:!1, hide_onleave:!1, tmp:"", left: {
                            h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                        }
                        , right: {
                            h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                        }
                    }
                }
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_26_1").revolution?revslider_showDoubleJqueryError("#rev_slider_26_1"):i("#rev_slider_26_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    onHoverStop: "off"
                }
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_27_1").revolution?revslider_showDoubleJqueryError("#rev_slider_27_1"):i("#rev_slider_27_1").show().revolution( {
                sliderType:"hero", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {}
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_30_1").revolution?revslider_showDoubleJqueryError("#rev_slider_30_1"):i("#rev_slider_30_1").show().revolution( {
                sliderType:"hero", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {}
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_31_1").revolution?revslider_showDoubleJqueryError("#rev_slider_31_1"):i("#rev_slider_31_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"off", arrows: {
                        style:"hesperiden", enable:!0, hide_onmobile:!1, hide_onleave:!0, hide_delay:200, hide_delay_mobile:1200, tmp:"", left: {
                            h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                        }
                        , right: {
                            h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                        }
                    }
                    , thumbnails: {
                        style:"hesperiden", enable:!0, width:150, height:60, min_width:100, wrapper_padding:5, wrapper_color:"transparent", tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !1, direction: "horizontal", span: !1, position: "inner", space: 5, h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 20
                    }
                }
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_32_1").revolution?revslider_showDoubleJqueryError("#rev_slider_32_1"):i("#rev_slider_32_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    onHoverStop: "off"
                }
                , visibilityLevels:[1200, 1199, 992, 768, 576], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", parallax: {
                    type: "mouse", origo: "enterpoint", speed: 400, speedbg: 0, speedls: 0, levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55], disable_onmobile: "on"
                }
                , shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_33_1").revolution?revslider_showDoubleJqueryError("#rev_slider_33_1"):i("#rev_slider_33_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    onHoverStop: "off"
                }
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            ),
            null==i("#rev_slider_34_1").revolution?revslider_showDoubleJqueryError("#rev_slider_34_1"):i("#rev_slider_34_1").show().revolution( {
                sliderType:"standard", sliderLayout:"fullwidth", dottedOverlay:"none", delay:9e3, navigation: {
                    keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"off", arrows: {
                        style:"hephaistos", enable:!0, hide_onmobile:!1, hide_onleave:!1, tmp:"", left: {
                            h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                        }
                        , right: {
                            h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                        }
                    }
                }
                , visibilityLevels:[1240, 1024, 778, 480], responsiveLevels:[1200, 1199, 992, 768, 576], gridwidth:[1140, 960, 720, 540], gridheight:[700, 650, 600, 400], lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
                    simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
                }
            }
            )
        }
        /loaded|interactive|complete/.test(document.readyState)?e():document.addEventListener("DOMContentLoaded", e)
    }
    ()
}

(jQuery);
*/