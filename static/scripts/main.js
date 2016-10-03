/**
 * Created by suxx_ on 29.09.2016.
 */
$(document).ready(function(){
    $(".user-tab").on('click', function () {
        $(this).closest('.user-tab').toggleClass('user-tab--selected');
    });

    $(".product-card__close-icon").on('click', function () {
        $(this).closest('.user-tab').removeClass('.user-tab--selected');
    });

    $(function () {
        var links = '.tabset li a', // set selector to the tab's links, i.e '.nav a'
            tabs = '.tab', // set selector to the tab's blocks, i.e '.tab'
            activeClass = 'active'; // set class name for active tab-link, i.e 'active-link'

        $(links).on('click', function (e) {
            var id = this.getAttribute('href');
            $(links).removeClass(activeClass).filter(this).addClass(activeClass);
            $(tabs).hide().filter(id).show();
            e.preventDefault();
        });

        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));

        $(".arrow").on('click', function () {
            $(this).closest('li').toggleClass('selected');
        });

        $(".more-info").on('click', function () {
            $(this).closest('li').toggleClass('gallery__items--selected');
        });

        $(".product-card__close-icon").on('click', function () {
            $(this).closest('li').toggleClass('gallery__items--selected');
            $(this).closest('.buttons-holder').toggleClass('buttons-holder--selected');
        });
        $("#add-new-product-button").on('click', function () {
            $(this).closest('.buttons-holder').toggleClass('buttons-holder--selected');
        });
    });

});
