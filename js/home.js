$(document).ready(function() {
    if (!$('#homeContent')) return false;

    initCarousel();
    createCard($('#books'), books.slice(0, 3));
    createCard($('#news'), newsList.slice(0, 3));
    createCard($('#recipes'), recipes.slice(0, 3));

    // click card 
    $('#books .card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(books.slice(0, 3), index, 'webshop'), '_blank');
        });
    });
    $('#news .card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(newsList.slice(0, 3), index, 'nieuws'), '_blank');

        });
    });
    $('#recipes .card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(recipes.slice(0, 3), index, 'recepten'), '_blank');
        });
    });

    preloadImages();
});