(function($) {
    $(function() {
        $('.jcarousel')
            .jcarousel({
                vertical: true
            });

        // jcarousel
        //     .on('jcarousel:reload jcarousel:create', function () {
        //         var carousel = $(this),
        //             height= carousel.innerHeight();

        //         if (width >= 1200) {
        //             width = width / 8;
        //         } else if (width >= 820) {
        //             width = width / 7;
        //         } else if (width >= 750) {
        //             width = width / 6;
        //         } else if (width >= 570) {
        //             width = width / 5;
        //         } else if (width >= 450) {
        //             width = width / 4;
        //         } else if (width >= 300) {
        //             width = width / 3;
        //         } else if (width >= 200) {
        //             width = width / 2;
        //         }
            //     carousel.jcarousel('items').css('height', Math.ceil(height) + 'px');
            // })
            // .jcarousel({
            //     wrap: 'circular'
            // });


        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=3'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=3'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);