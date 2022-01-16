$(document).ready(function() {
    if (!$('#recipesContent')) return false;
    createCard($('#mainRecipes'), recipes);
    foodFilter();
    preloadImages();

    $('.card').each(function(index) {
        $(this).on('click', function() {
            window.open(getUrl(recipes, index), '_blank');
        })
    });
});

// recipes filter, for recipes.html
function foodFilter() {
    if ($('#recipesContent')) {
        $('#rFilter input').on('change', function(e) {
            var theCheckBox = $(this);
            var numFoodType = $('[name=f-sort]:checked').length;
            var numCookType = $('[name=c-sort]:checked').length;
            var numEatNumber = $("#points").val();
            // console.log(numEatNumber);
            // console.log(numFoodType);
            // console.log(numCookType);
            // console.log(theCheckBox.val());
            $('#mainRecipes article').each(function() {
                var card = $(this);
                // console.log(card);
                var f_show = true;
                var c_show = true;
                var e_show = true;

                if (card.attr('data-food-type') == theCheckBox.val() && theCheckBox.is(':checked')) {
                    card.attr('data-food-flag', '1');
                } else if (card.attr('data-food-type') == theCheckBox.val() && !theCheckBox.is(':checked')) {
                    card.attr('data-food-flag', '0');
                }

                if (card.attr('data-cook-type') == theCheckBox.val() && theCheckBox.is(':checked')) {
                    card.attr('data-cook-flag', '1');
                } else if (card.attr('data-cook-type') == theCheckBox.val() && !theCheckBox.is(':checked')) {
                    card.attr('data-cook-flag', '0');
                }

                if (parseInt(numEatNumber) <= parseInt(card.attr('data-eat-number')[2])) {
                    card.attr('data-eat-flag', '1');
                } else {
                    console.log(1);
                    card.attr('data-eat-flag', '0');
                }

                if (card.attr('data-food-flag') == 0 && numFoodType != 0) {
                    f_show = false;
                }

                if (card.attr('data-cook-flag') == 0 && numCookType != 0) {
                    c_show = false;
                }
                if (card.attr('data-eat-flag') == 0) {
                    e_show = false;
                }

                if (f_show && c_show && e_show) {
                    card.show();
                } else {
                    card.hide();
                }


            });
        });
    }
}