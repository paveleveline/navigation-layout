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

            // un exemplu de cum poti face asta selectiv pentru meniul din dreapta, dar isi sugerez sa modifici structura sa fie impreuna cu Boundary si la acelasi nivel cu header
            if(dataContent === 'your-orders-container') {
                console.log(1)
                document.getElementsByClassName('right-top-navigation-menu')[0].classList.add('hidden');
            } else {
                console.log(2)
                document.getElementsByClassName('right-top-navigation-menu')[0].classList.remove('hidden');
            }

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
    //console.log(dataLink);
    const linkedElements = document.getElementsByClassName('content');
    
    // pagina o ia putin razna can e accesata, urca in sus, ti-am atasat si niste screenshoturi. structura ar trebui sa fie mai consistenta de atat, sa nu permita sa iasa din acel container in care sunt toate cele 5 pagini
    orderDetailsBtn.addEventListener('click', function() {
    for(let p = 0; p < linkedElements.length; p++) {
        if(linkedElements[p].classList.contains('hidden')) {
            continue;
        } else {
            linkedElements[p].classList.add("hidden");
        }
    }
    document.getElementsByClassName(dataLink)[0].classList.remove("hidden");
    // aici ai nevoie de o selectie manuala sa arati logo-ul pentru ca tu in rest il ascunzi
    // dataLink pe care te bazezi aici este "order-details-container" dar logo-ul tau il selectionezi de la "your-orders-container", din cauza aceasta iti dadea si eroarea pentru ca nu avea un obiect pe care sa actioneze proprietatea classList
    document.getElementsByClassName('logo-section')[0].getElementsByClassName('your-orders-container')[0].classList.remove("hidden");
});
    
});