$(function() {
    const menuItems = $('.menu-item');
    const rightTopNavigationMenu = $('.right-top-navigation-menu');
    const leftCornerBoundary = $('.left-corner-boundary');
  
    Array.from(menuItems).forEach(function(menuItem){
        menuItem.addEventListener('click', function() {
            const navLinks = $('ul').find('a');
            navLinks.click(function(e) {
                e.preventDefault();
                navLinks.removeClass('selected');
                $(this).addClass('selected');
            }); 

        //    Nu merge data content
            const dataContent = menuItem.dataset.content;
            console.log('dataContent', dataContent);
            const contentElements = $('.content');
            for(let k = 0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            document.getElementsByClassName(dataContent)[1].classList.remove("hidden");
            document.getElementsByClassName(dataContent)[2].classList.remove("hidden");

            if(dataContent === 'your-orders-container') {
                console.log(1)
                rightTopNavigationMenu.addClass('hide'), 
                leftCornerBoundary.addClass('hide');
            } else {
                console.log(2)
                rightTopNavigationMenu.removeClass('hide');
                leftCornerBoundary.removeClass('hide');
            }
            //not working fadeIn/fadeOut
            // if(dataContent === 'your-orders-container') {
            //     rightTopNavigationMenu.fadeOut('slow'), 
            //     leftCornerBoundary.fadeOut('slow');
            // } else {
            //     rightTopNavigationMenu.fadeIn('slow'), 
            //     leftCornerBoundary.fadeIn('slow');
            // }
        });

    });
    const orderDetailsBtn = document.getElementById('orderDetailsLink');
    console.log(orderDetailsBtn);
    const dataLink = orderDetailsBtn.dataset.content;
    const linkedElements = document.getElementsByClassName('content');
     
    orderDetailsBtn.addEventListener('click', function() {
    for(let p = 0; p < linkedElements.length; p++) {
        if(linkedElements[p].classList.contains('hidden')) {
            continue;
        } else {
            linkedElements[p].classList.add("hidden");
        }
    }
    document.getElementsByClassName(dataLink)[0].classList.remove("hidden");
   document.getElementsByClassName('logo-section')[0].getElementsByClassName('your-orders-container')[0].classList.remove("hidden"); 
   leftCornerBoundary.removeClass('hidden');
   leftCornerBoundary.removeClass('hide');
   rightTopNavigationMenu.removeClass('hide');
});

});


