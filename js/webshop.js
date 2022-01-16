$(document).ready(function() {
    if (!$('#webshopContent') || !$('#webshopPage')) return false;
    initCarousel();
    createCard($('#popBooks'), books.slice(-3));

    createCard($('#webBooks'), books);
    preloadImages();

    $('#popBooks .card').hide();
    $('#popBooks .card:gt(-4)').show();
    if ($(document).width() < '1280') {
        $('#bFilter div h2').on('click', function() {
            $(this).siblings().toggle(1000);
        });
    }

    // click every card to go to every book page
    $('#popBooks .card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(books.slice(-3), index), '_blank');
        })
    });

    // click every card to go to every book page
    $('#webBooks .card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(books, index), '_blank');
        })
    });

    // create cards in webshopPagesection(andere boeken ook part) of every book page
    if ($('#webshopPage')) {
        switchBookImg();
        createCard($('#otherBooks'), books.slice(1));
    }

    if ($('#shoppingCartContent')) {

        calProductPrice();
    }
});

// every book page switch images, for simply-nigella.html
function switchBookImg() {
    if (!$('webshopPage')) return false;
    $('.imgGroup div').each(function() {
        $(this).on('click', function() {
            var imgDir = $(this).find('img').attr('src');
            console.log(imgDir);
            $('.bigImg img').attr('src', imgDir);
        });
    });
}

// caculate price in the shopping cart page
function calProductPrice() {
    $('.product').each(function(index) {
        $(this).find('input[type=number]').on('click', function() {
            // console.log(singlePrice)
            changeProductQuantity($(this));
        });

        // delete product when clicking verwijder icon
        $(this).find('.icon-delete').on('click', function() {
            var currentTotalPrice = Number($(this).parents('.product').find('.tPrice').html());
            var currentNoTaxPrice = Number($('#noTaxPrice').html());
            var currentPostPrice = Number($('#postPrice').html());

            var newNoTaxPrice = currentNoTaxPrice - currentTotalPrice;
            var newTax = newNoTaxPrice * 0.21;
            var newPostPrice = currentPostPrice;
            var newWithTaxPrice = newNoTaxPrice + newTax + newPostPrice;

            $('#tax').html(newTax.toFixed(2));
            $('#noTaxPrice').html(newNoTaxPrice.toFixed(2));
            $('#postPrice').html(newPostPrice.toFixed(2));
            $('#withTaxPrice').html(newWithTaxPrice.toFixed(2));

            $(this).parents('.product').remove();

        })
    });

    function changeProductQuantity(obj) {
        var singlePrice = Number(obj.parents('.product').find('.sPrice').html());
        var oldQuantity = parseInt(obj.attr('value'));
        var oldTotalPrice = oldQuantity * singlePrice;
        var newQuantity = parseInt(obj.val());
        obj.attr('value', newQuantity);
        var newTotalPrice = singlePrice * newQuantity;
        obj.parents('.product').find('.tPrice').html(newTotalPrice);
        var newNoTaxPrice = Number($('#noTaxPrice').html()) - oldTotalPrice + newTotalPrice;

        var tax = newNoTaxPrice * 0.21;
        $('#tax').html(tax.toFixed(2));

        $('#noTaxPrice').html(newNoTaxPrice.toFixed(2));
        var postPrice = Number($('#postPrice').html());
        $('#postPrice').html(postPrice.toFixed(2));
        var withTaxPrice = newNoTaxPrice + tax + postPrice;

        $('#withTaxPrice').html(withTaxPrice.toFixed(2));
    }
}