$(document).ready(function(){
    const shopSlider = $('#shopSlider');
    shopSlider.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 500,
        autoplay: true,
    });

    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel',);
    })

    $('#shopSliderRight').click(function () {
        shopSlider.trigger('next.owl.carousel');
    })

});

