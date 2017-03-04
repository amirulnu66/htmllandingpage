$(document).ready(function() {
    $('#why-chose-us').waypoint(function(direction) {
        $(".custom-header").toggleClass("fixedhead");
    }, {
        offset: '25%',
    });
    $("#myModal").on("show.bs.modal", function() {
        console.log("Modal Showing");
    })
    // $(window).scroll(function(e){
    // 	if($(this).scrollTop()>500)
    // 	{
    // 		$(".custom-header").addClass("fixedhead");
    // 	}else{
    // 		$(".custom-header").removeClass("fixedhead");
    // 	}
    // })
    //back to top
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function() {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#back-to-top').tooltip('show');
    });
    //Smooth Scrool menu 
    $(document).ready(function() {
        var getHash = window.location.hash;
        if ($(getHash).length) {
            $('html, body').animate({
                scrollTop: $(getHash).offset().top - ($("#navbar-main").outerHeight())
            }, 800);
        }
        //alert(getHash);
        $("a").on('click', function(e) {
            e.preventDefault();
            if (this.hash !== "") {
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - ($("#navbar-main").outerHeight())
                }, 800);
            }
        });
    });





//animation bootstrap slider jquery

$('.carousel').carousel({
  interval: 10000
});

function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    //Variables on page load 
    var $myCarousel = $('#carousel-example-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        
    //Initialize carousel 
    $myCarousel.carousel();
    
    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    //$myCarousel.carousel('pause');
    
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });  



});

	$('.carousel').carousel({
		interval: 10000
	})