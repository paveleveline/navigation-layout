$(function() {
    const menuItems = $('.menu-item');
    const contentElements = $('.content');
    const rightTopNavigationMenu = $('.right-top-navigation-menu nav');
    const leftCornerBoundary = $('.left-corner-boundary div');

    menuItems.on('click', function(){
    menuItems.removeClass('selected');
    $(this).addClass('selected');
    const dataContent = $(this).attr('data-content');
    console.log(dataContent);
    contentElements.addClass('hidden');
    contentElements.each(function(index, elem){
      if($(elem).hasClass(dataContent)){
          $(elem).removeClass('hidden');
      }  
    });

    if(dataContent === 'your-orders-container') {
        console.log(1)
        rightTopNavigationMenu.addClass('hidden'), 
        leftCornerBoundary.addClass('hidden');
    } else {
        console.log(2)
        rightTopNavigationMenu.removeClass('hidden');
        leftCornerBoundary.removeClass('hidden');
    }
});

const orderDetailsBtn = $('#orderDetailsLink');
console.log(orderDetailsBtn);
orderDetailsBtn.on('click', function(){
contentElements.addClass('hidden');
contentElements.filter('.order-details-container').removeClass('hidden');
rightTopNavigationMenu.removeClass('hidden');
leftCornerBoundary.removeClass('hidden');
const logoImage = $('.logo-image').filter('.your-orders-container');
logoImage.removeClass('hidden');
});
});


