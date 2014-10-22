             // SLIDER 
     
            $(document).ready(function () {
                $(document).on('init.slides', function () {
                    $('.loading-container').fadeOut(function () {
                        $(this).remove();
                    });
                });
                $('#slides').superslides({
                    animation: "fade",
                    slide_speed: 300,
                    pagination: true,
                    hashchange: true,
                    scrollable: true,
                    play: 50000
                });
            });

            // OffCanvas Navigation 

            $(document).ready(function () {
                $(".close").css("display", "none");
                var isMenuOpen = false;
                $('.menu_btn').click(function () {
                    if (isMenuOpen == false) {
                        //alert('je suis dans le bon cas')
                        $("#menu").clearQueue().animate({
                            right: '0'
                        })
                        $("#page").clearQueue().animate({
                            "margin-left": '-240px'
                        })
                        $(this).fadeOut(200);
                        $(".close").fadeIn(300);
                        isMenuOpen = true;
                    }
                });


                $('.close').click(function () {
                    if (isMenuOpen == true) {
                        $("#menu").clearQueue().animate({
                            right: '-240px'
                        })
                        $("#page").clearQueue().animate({
                            "margin-left": '0px'
                        })
                        $(this).fadeOut(200);
                        $(".menu_btn").fadeIn(300);
                        isMenuOpen = false;
                    }
                });
            });



            // Change Navbar background color
            (function ($) {
                "use strict";
                $(document).scroll(function () {
                    var scroll = $(this).scrollTop();
                    if (scroll >= 100) {
                        setTimeout('$(document).find("#nav").removeClass("navbar-default").addClass("navbar-inverse")', 150);
                    } else {
                        setTimeout('$(document).find("#nav").addClass("navbar-default").removeClass("navbar-inverse")', 150);
                    }
                });
            })(jQuery);



            // Text Rotate 
            var TxtRotate = function (el, toRotate, period) {
                    this.toRotate = toRotate;
                    this.el = el;
                    this.loopNum = 0;
                    this.period = parseInt(period, 10) || 2000;
                    this.txt = '';
                    this.tick();
                    this.isDeleting = false;
                };
            TxtRotate.prototype.tick = function () {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
                this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
                var that = this;
                var delta = 300 - Math.random() * 100;
                if (this.isDeleting) {
                    delta /= 2;
                }
                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }
                setTimeout(function () {
                    that.tick();
                }, delta);
            };
            window.onload = function () {
                var elements = document.getElementsByClassName('txt-rotate');
                for (var i = 0; i < elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-rotate');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                        new TxtRotate(elements[i], JSON.parse(toRotate), period);
                    }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".txt-rotate> .wrap { border-right: 1px solid #fff }";
                document.body.appendChild(css);
            };



            // Onepage Nav adjust speed 
            jQuery('#menu').onePageNav({
                scrollSpeed: 1200,
                currentClass: 'active',
                changeHash: true,
                filter: ':not(.external)'
            });
       
