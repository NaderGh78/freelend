$(document).ready(function () {

    var overlay = $('.overlay');

    var collapsing = $('.navbar-light .navbar-toggler-icon');

    var active_lang = $('ul.lang li a');

    var search_icon = $('.search-group').find('span');

    var expended_inp = $('input.search-control');

    var top_tabs_list = $('ul.top_tabs_ul li a');

    var close_tabs = $('span.close_tabs');

    var close_popup = $('.my_popup_content span.close_tabs');

    var tab_content = $('.tab-content');

    var blue_title = $('#blue_title');

    var top_tabs = $('.top_tabs');

    var show_popup = $('.show_popup');

    var my_popup = $('.my_popup');

    var back_link = $('.back_link');

    var send_msg = $('.send_msg');

    var green_link = $('.button_container .green_link');

    var spanX = $('.span_imgs_content').children('span');

    /*============================================================== */
    /*============================================================== */
    /*============================================================== */

    //show more option
    var size_item = $('.offered_single_product').length;

    var v = 3;

    $('.offered_single_product').hide(); // hide all divs with class `listing`

    // show the first 3 [offered_single_product] in page
    $('.offered_single_product:lt(' + v + ')').show();

    $('.loadMore').click(function () {

        // show [offered_single_product] one by one when click on load more
        v = (v + 1 <= size_item) ? v + 1 : size_item;

        console.log(v);

        $('.offered_single_product:lt(' + v + ')').show();

        // hide load more button if all [offered_single_product] are visible
        if ($(".offered_single_product:visible").length >= size_item) {

            $('.loadMore').hide();

        }

    });


    /*============================================================== */
    /*============================================================== */
    /*============================================================== */



    send_msg.on('click', function (e) {
        e.preventDefault();
        my_popup.show();
        close_popup.show();
        $('body.no_overflow').addClass('overfl');
    });
    /*============================================================== */
    //when click on back link to back to the previous page
    back_link.on('click', function (e) {
        e.preventDefault();
        history.back();
    });
    /*============================================================== */
    close_popup.on('click', function () {
        $(this).parent().parent().hide();
        $('body.no_overflow').removeClass('overfl');
    });
    /*============================================================== */

    show_popup.on('click', function (e) {
        e.preventDefault();
        my_popup.show();
        close_popup.show();
        $('body.no_overflow').addClass('overfl');
    });
    /*============================================================== */
    spanX.on('click', function () {
        $(this).siblings('img').remove();
        $(this).hide(1);
    });
    /*============================================================== */

    $('#up_foto,#things_up_foto').change(function () {

        // empty all content inside the span imgs content when upload the imgs
        //$(".span_imgs_content").empty();

        for (i = 0; i < this.files.length; i++) {

            var reader = new FileReader();

            reader.onload = imageIsLoaded;

            reader.readAsDataURL(this.files[i]);

        }

    });

    function imageIsLoaded(e) {

        var picture = `<img src="${e.target.result}">`;

        $(".span_imgs_content,#things .span_imgs_content").append(picture);

        spanX.show(1);

    }

    /*============================================================== */

    close_tabs.on('click', function () {

        top_tabs.removeClass('change_bg');

        tab_content.addClass('hide_tab_content');

        overlay.hide();

        $(this).hide();

        blue_title.show();

    });

    /*============================================================== */
    top_tabs_list.on('click', function () {

        $(this).addClass('list_active').parent('li').siblings().find('a').removeClass('list_active');

        overlay.show();

        blue_title.hide();

        top_tabs.addClass('change_bg');

        tab_content.removeClass('hide_tab_content');

        close_tabs.show();

    });

    /*============================================================== */

    //make the width of search input long by clicking on the search icon
    search_icon.on('click', function () {

        expended_inp.toggleClass('inpWidth');


        if (expended_inp.hasClass('inpWidth')) {

            //show the placeholder when the search input is long

            expended_inp.removeClass('red');
        } else {
            expended_inp.addClass('red');
            //hide the placeholder when the search input is short 

        }

    });

    /*===================================================================*/

    //remove the placeholder by focus from all inputs and textarea
    $("input ,textarea").each(

        function () {

            $(this).data('holder', $(this).attr('placeholder'));

            $(this).focusin(function () {

                $(this).attr('placeholder', '');

            });

            $(this).focusout(function () {

                $(this).attr('placeholder', $(this).data('holder'));

            });

        });

    /*============================================================== */

    // put the blue round bg arround the [ENG - FR] when change the lang of pages
    active_lang.on('click', function () {

        $(this).addClass('active_lang');

        $(this).parent().siblings().find('a').removeClass('active_lang');

    });


    //change the icon of navbar toggler to close icon in small device
    $('.navbar-toggler').click(function () {

        $('.navbar-toggler-icon i').toggleClass('la-bars la-times');

    });

    /*============================================================== */

    // hide the overflow on small device , wehen open the menu
    collapsing.on('click', function () {

        $('body,body.home').toggleClass('overfl');

    });

    
    /*============================================================== */
     // run owl carousel in offered view page
 $('.activity_user_content .owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
        '<i class="las la-arrow-left"></i>',
        '<span>NEXT</span><i class="las la-arrow-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
});
    /*============================================================== */
    // run owl carousel
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
        }
    });
    /*============================================================== */



    
   
   /*============================================================== */

}); //end document 