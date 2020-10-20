document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    console.log('menuItems', menuItems)
    
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        
        menuItem.addEventListener('click', function() {
            for(let j = 0; j < menuItems.length; j++) {
                if(menuItems[j].classList.contains('selected')){
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");

            const dataContent = menuItem.dataset.content;
            console.log('dataContent', dataContent);
            const contentElements = document.getElementsByClassName("content");
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


            for(let m = 0; m < contentElements.length; m++) {
                if(contentElements[m].classList.contains('hide')) {
                    contentElements[m].classList.add("hide");
                } else {
                    contentElements[m].classList.remove("hide");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hide");
        });

    }

    const orderDetailsBtn = document.getElementById('orderDetailsLink');
    console.log(orderDetailsBtn);
    const dataLink = orderDetailsBtn.dataset.content;
    console.log(dataLink);
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


});
    
});

