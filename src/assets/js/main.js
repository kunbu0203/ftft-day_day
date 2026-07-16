(function (targetWidth) {
    var deviceWidth = screen.width;
    var ratio = deviceWidth / targetWidth;
    var viewport = document.querySelector('meta[name="viewport"]');
    if (ratio < 1) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
    }
})(390);

(function () {
    $(window).on('resize.vh', function () {
        var vh = window.innerHeight * 0.01;
        $('html').css('--vh', vh + 'px');
    }).trigger('resize.vh');

    // window.addEventListener('load', () => {
    //     $('.banner').addClass('-enter');
    // });
    $(window).on('load', function () {
        $('.banner').addClass('-enter');
    });

    $(window).on('scroll.enter', function () {
        var windowScrollTop = $(window).scrollTop() + $(window).outerHeight() * 0.6;

        $('.block').each((i, el) => {
            var targetOffsetTop = $(el).offset().top;
            if ($(el).hasClass('-lateIn')) {
                windowScrollTop = $(window).scrollTop() + $(window).outerHeight() * 0.45;
            }

            if (windowScrollTop > targetOffsetTop) {
                $(el).addClass('-enter');
            }
        });
    }).trigger('scroll.enter');
})();