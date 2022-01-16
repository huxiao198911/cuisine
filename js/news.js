$(document).ready(function() {
    if (!$('#newsContent')) return false;

    createCard($('#mainNews'), newsList);
    preloadImages();

    $('.card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(newsList, index), '_blank');
        })
    });
});