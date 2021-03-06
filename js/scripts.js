/*!
    Title: Dev Portfolio Template
    Version: 1.1.2
    Last Change: 03/21/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/
function continueToExternal(url) {
    var conf = confirm("Now leaving riordanpawley.com. \rNavigating to " + url);
    if (conf) {
        window.location.href = url;
        document.body.style.cursor = "wait";
        console.log(this);
    }
}


(function ($) {


    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    $('.view-project').click(function () {
        var $projectPage = $(this).parent().find('.project-page');
        console.log($projectPage.length);
        // let projectPage = $(this).parent().find('.project-page') === $(this).parent().parent().find('.project-page');
        if ($projectPage.length === 0) {
            $(this).parent().parent().find('.project-page').toggle();
            $('html, body').animate({
                scrollTop: $(this).parent().parent().offset().top
            }, 500);
        } else {
            $projectPage.toggle();
            $('html, body').animate({
                scrollTop: $(this).parent().offset().top
            }, 500);
        }
    });
    $('.btn-project-toggle').click(function () {
        $this = $(this); // Store reference to this
        console.log($this.html());
        if ($this.html() == "Expand") {
            $this.parent().find('.view-project').html("Collapse");
            $this.html("Collapse");
        } else {
            $this.parent().parent().find('.view-project').html("Expand");
            $this.html("Expand");
        }
    });
    // Create timeline
    $('#experience-timeline').each(function () {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

})(jQuery);