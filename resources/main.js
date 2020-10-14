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
            console.log('dataContent', dataContent)
            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            // nu inteleg de ce lucrezi si pe 0 si pe 1, cu data-content ar trebui sa selectionezi in orice clipa acel section cu clasa respectiva data de link, nu?
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            document.getElementsByClassName(dataContent)[1].classList.remove("hidden");
        });
    }

});
