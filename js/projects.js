(function($) {
    function repositionClose(close, img) {
        var position = img.position();
        var width    = img.width();

        close.css('top', position.top - 15);
        close.css('left', position.left + width - 20);
    }

    function enlargeImg(url) {
        var img     = $('<img src="' + url + '" />');
        var overlay = $('<div class="overlay"><span class="helper"></span></div>');
        overlay.append(img);
        $('body').append(overlay);

        var close = $('<div class="close"></div>');
        repositionClose(close, img);
        overlay.append(close);

        $(window).on('resize', function() {
            repositionClose(close, img);
        });

        overlay.on('click', function() {
            overlay.remove();
        });
    }

    $('.six.columns img').each(function() {
        var img = $(this);
        img.css('cursor', 'pointer');

        img.on('click', function() {
            enlargeImg(this.src);
        });
    });
})(jQuery);
