<script>//sticky sidebar yiannis
function sticky_fingers() {
    var window_top = $(window).scrollTop();
    var footer_lim = $("#category-articles-grid").offset().top; // we use our footer's id to specify untill which point our sidebar will scroll to
    var top_limit = $('#sticky-toplimit').offset().top; // we use our div that defines our sidebar's begining
    var side_height = $("#sidebar").height(); // we use our sidebar's id to calculate it's height
    var pad_bot = 32;  // sidebar's bottom padding 
    if (window_top + side_height > footer_lim - pad_bot) //if sidebar's height is bigger than the main content
        $('#sidebar').css({top: (window_top + side_height - footer_lim + pad_bot) * -1})
    else if (window_top > top_limit) {
        $('#sidebar').addClass('stickIt'); //you should customize this css class in styles.css to fit your website's sidebar needs
        $('#sidebar').css({top: 12}) //top padding
    } else {
        $('#sidebar').removeClass('stickIt');
    }
}
$(function () {
    $(window).scroll(sticky_fingers); // fire at will,eh on scroll
    sticky_fingers();
});
</script>