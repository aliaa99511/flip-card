$(document).ready(function(){
    
    var scrollbutton=$("#scroll-top");
    
    $(window).scroll(function ()
     {
        if($(this).scrollTop()>=700)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
            
        }
        
    });
    
    scrollbutton.click(function()
	{
		
		$("html,body").animate({scrollTop:0},600);
	});
    
    
    
    
});