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
let count = 0;
function translateButton() {

    if (count % 2 === 0) {
        document.getElementById("about-para").innerHTML = "നാക് എ+ ഗ്രേഡോടെ വീണ്ടും അംഗീകാരം നേടിയ കൊച്ചി ശാസ്ത്ര-സാങ്കേതിക സർ" +
            "വകലാശാല(കുസാറ്റ്) അതിന്റെ വിവിധ വകുപ്പുകളിൽ നടത്തുന്ന ഊർജ്ജസ്വലവും സജീവവുമായ ഗവേഷണ പ്രവർത്തനങ്ങൾ പ്രദർശിപ്പിക്കുന്നതിനായി ശാസ്ത്രയാൻ  മൂന്നാം പതിപ്പ് സംഘടിപ്പിക്കുന്നു. " +"കുസാറ്റിൽ ലഭ്യമായ അത്യാധുനിക സൗകര്യങ്ങൾ, തത്സമയ പ്രദർശനങ്ങൾ, പ്രവർത്തന മാതൃകകൾ, അവതരണങ്ങൾ എന്നിവയോടെ പ്രദർശിപ്പിക്കും. സയൻസ്, എഞ്ചിനീയറിംഗ് മേഖലകളിൽ പ്രത്യേക താൽപ്പര്യമുള്ള വിദ്യാർത്ഥികൾക്ക് വിവിധ അത്യാധുനിക ഗവേഷണ മേഖലകളിൽ വിലപ്പെട്ട എക്സ്പോഷർ ലഭിക്കും. " +
            "കുസാറ്റ് കാമ്പസിലെ നിരവധി ഗവേഷണ ലബോറട്ടറികളിലും ഡിപ്പാർട്ട്‌മെന്റുകളിലും പ്രകാശിപ്പിക്കുന്ന സന്ദർശനങ്ങൾക്കൊപ്പം കുസാറ്റ് സെമിനാർ സമുച്ചയത്തിൽ ഒന്നിലധികം പ്രദർശന സ്റ്റാളുകൾ ക്രമീകരിക്കും. കരിയർ ഓറിയന്റേഷൻ, കുസാറ്റിലെ വിവിധ പ്രോഗ്രാമുകൾ, ഇൻഡസ്ട്രി അക്കാദമിയ പങ്കാളിത്തം തുടങ്ങി വിവിധ വിഷയങ്ങളിൽ വിദഗ്ധ സംഭാഷണങ്ങൾ ഉണ്ടായിരിക്കും. ഈ അവസരത്തിൽ പങ്കെടുക്കാൻ നിങ്ങളെ എല്ലാവരെയും ഞങ്ങൾ സ്വാഗതം ചെയ്യുന്നു."
    }
    else{
        document.getElementById("about-para").innerHTML="Cochin University of Science and Technology (CUSAT), re-accredited by NAAC\n" +
            "                        with A+ grade is organizing this third edition of SASTHRAYAAN to showcase the vibrant and\n" +
            "                        active research activities carried out in its various departments. The state-of-the-art\n" +
            "                        facilities available in CUSAT will be exhibited with live demonstrations, working models and\n" +
            "                        presentations. Students who are especially interested in Science and Engineering fields will\n" +
            "                        get a valuable exposure on various cutting-edge research areas. Multiple exhibition stalls\n" +
            "                        will be arranged at CUSAT Seminar complex along with illuminating visits to numerous\n" +
            "                        research laboratories and departments in CUSAT campus. There will be expert talks in\n" +
            "                        various topics including career orientation, various programmes in CUSAT,\n" +
            "                        Industry Academia partnership etc. We welcome all of you to grace the occasion."
    }
     count=count+1;
}
