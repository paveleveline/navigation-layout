 $(function() {
    const menuItems = $('.menu-item');
    const rightTopNavigationMenu = $('.right-top-navigation-menu');
    const leftCornerBoundary = $('.left-corner-boundary');
  
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        
        menuItem.addEventListener('click', function() {
           
            const navLinks = $('ul').find('a');
            navLinks.click(function(e) {
                e.preventDefault();
                navLinks.removeClass('selected');
                $(this).addClass('selected');
            }); 

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
            // Aici n-am reusit sa schimb cu selector jquery - dataContent
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            document.getElementsByClassName(dataContent)[1].classList.remove("hidden");
            document.getElementsByClassName(dataContent)[2].classList.remove("hidden");

            if(dataContent === 'your-orders-container') {
                console.log(1)
                rightTopNavigationMenu.addClass('hide');
            } else {
                console.log(2)
                rightTopNavigationMenu.removeClass('hide');
            }

            if(dataContent === 'your-orders-container') {
                console.log(1)
                leftCornerBoundary.addClass('hide');
            } else {
                console.log(2)
                leftCornerBoundary.removeClass('hide');
            }
        });
    }
    // N-am reusit sa schimb cu selector jquery, fiindca daca puneam, la click pe event nu-mi mai deschidea pagina Order Details 
    //nu iti mai deschidea pentru ca nu mai vede dataset pe un obiect jQuery, hai sa le inlocuim pe toate cu ce amvazut data trecuta si sa vedem de acolo
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
