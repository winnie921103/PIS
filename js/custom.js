(function ($) {
    $(document).ready(function () {

        /*slick*/
        $('.slick-item').slick({
            dots: true,
            infinite: true
        });

        /*Iframe*/
        $('.footer .btn_all,.usefulTips_img').on('click',function(e){
            e.preventDefault();
            var srcLink = $(this).attr("href");
            $('#myIframe').attr("src", srcLink);
        }); 

        /*hamburger Menu*/
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');      
            $('#hamburger-menu').toggleClass('active');
        });
    }); 
})(this.jQuery);