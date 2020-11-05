$ (function(){
    const overlay = $('.overlay');
    const imageOrder = $('.image-your-order');
    const productItems = $('.img-product');
    console.log(productItems);
    productItems.click(function(){
    imageOrder.css({backgroundImage: "url(assets/product-1/" + $(this).data('img') + ")"})   
    overlay.fadeIn();
    });
    
    imageOrder.click(function(e){
    e.stopPropagation();
    });
    
    overlay.click(function(){
    $(this).fadeOut();
    });
    
    });