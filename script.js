$('button.toggle1').on('click', function(event) {

    var target = $(this.getAttribute('div.wrapper'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
