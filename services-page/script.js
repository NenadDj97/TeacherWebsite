   
   /* navbar sticky */
   $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 610){
            $('.navbar').addClass("hidden");
        }else{
            $('.navbar.hidden').removeClass("hidden");
        }
        if(this.scrollY > 900){
            $('.navbar-sticky').addClass("shown");
        }
        else{
            $('.navbar-sticky.shown').removeClass("shown");
        }
    });
});

/* learn btn */

$('#learn-btn a').click(function(){
    $('#lvl-table').fadeTo(990,0);
    $('#learn-btn').fadeTo(1000,0);
    setTimeout(function(){
    $('#lvl-table').css('display','none');
    $('#learn-btn').css('display','none');},999);
    setTimeout(function(){
        $('#replace2').fadeTo(1000,1);
        $('#unlearn-btn').fadeTo(1000,1);}
        ,1000);
    
    
});

$('#unlearn-btn a').click(function(){
    $('#replace2').fadeTo(990,0);
    $('#unlearn-btn').fadeTo(1000,0);
    setTimeout(function(){
    $('#replace2').css('display','none');
    $('#unlearn-btn').css('display','none');},999);
    setTimeout(function(){
        $('#lvl-table').fadeTo(1000,1);
        $('#learn-btn').fadeTo(1000,1);}
        ,1000);
    
    
});

    /* tab swap */
    
    $('#kids-tab').click(function(){
            $('#adults').fadeTo(500,0);
            $('#kids-tab').addClass("active");
            $('#adults-tab').removeClass("active");
            setTimeout(function(){
            $('#kids').css('display', 'flex')
            .hide()
            .fadeTo(500,1);
            },499);
            setTimeout(function(){
            $('#adults').css('display','none');},499);
        });

    $('#adults-tab').click(function(){
            $('#kids').fadeTo(500,0);
            $('#adults-tab').addClass("active");
            $('#kids-tab').removeClass("active");
            setTimeout(function(){
            $('#adults').fadeTo(500,1); 
            }, 499);
            setTimeout(function(){
            $('#kids').css('display','none');},499);
        });    

    