/*  ---------------------------------------------------
    Template Name: Sasthrayaan
    Description: Sasthrayaan Event HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
		Partner Slider
    ----------------------- */
    $(".partner-logo").owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 116,
        responsive: {
            320: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });


    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: false,
        autoplay: false,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
     var timerdate = "2023/01/23";

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

})(jQuery);
function translateButton(){
    document.getElementById("about-para").innerHTML="കൊച്ചി ശാസ്ത്ര-സാങ്കേതിക സർ" +
        "വകലാശാലയിെല എല്ലാ പഠനഗേവഷണ വിഭാഗšളƧം െപാതുജനšൾŚായി തുറŹുെകാടുŚുŹു.\n" +
        "2023 ജനുവരി 23, 24, 25 തീയതികളിൽ. വിദŖാർഥികൾ, അധŖാപകർ,\n" +
        "രŜകർŮാŚൾ, വŖവസായികൾ അšെന ആർŚും കുസാƃിൽ\n" +
        "വŹ് േകരളŮിെല ഏƃവും മികŢ ശാŏŗത-സാേŠതിക\n" +
        "സർƅകലാശാലെയ കŪറിയാം. വിവിധ വിഭാഗšൾ കൂടാെത\n" +
        "െസŀററുകൾ, േഹാƊലുകൾ, ൈലŗബറി, കളിƉലšൾ, കാŀറീൻ,\n" +
        "െസമിനാർ േകാംƗĭŏ എŹിšെന എലīാെമലīാം ആ ദിവസšളിൽ\n" +
        "നിšൾŚ് സřാഗതേമാതും. കുŨികൾŚ് അവരുെട\n" +
        "സřŁനകരിയറിെനŚുറിŢ് അവിെടയുƄ വിദŖാർഥികളƧമായും,\n" +
        "ഗേവഷകരുമായും, അധŖാപകരുമായും ഒരു േമശņŚ് ചുƃƧമിരുŹ്\n" +
        "സംസാരിŚാം. പരിƉിതി സൗഹൃദവും, വിദŖാർůിസൗഹൃദവുമായ\n" +
        "കŖാംപŏ അടുŮറിയാം.\n" +
        "സർƅകലാശാലയും സമൂഹവും തƁിലുƄ അകലം ഇവിെട\n" +
        "േനർŮതാവുŹു. േനർŮുേനർŮില\n" +
        "īാതാവുŹു. ഏവർŚും സřാഗതം.."
}
