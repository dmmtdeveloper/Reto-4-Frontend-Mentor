const IconMenu = document.querySelector("#icon");
const menu = document.querySelector("#menu")

const menuStates = {
    open:"bg-menu-open",
    close:  "bg-menu-close",
}

IconMenu.addEventListener('click', function(){
    // alert("me diste click")

    if(IconMenu.classList.contains(menuStates["open"])){
        IconMenu.classList.remove(menuStates["open"]);

        IconMenu.classList.add(menuStates["close"]);


        menu.classList.remove('opacity-0', 'pointer-events-none')
    }

    else{
        IconMenu.classList.remove(menuStates["close"]);
        IconMenu.classList.add(menuStates["open"]);

        menu.classList.add('opacity-0', 'pointer-events-none')

    }
});

window.addEventListener('resize', function(){
    IconMenu.classList.remove(menuStates["close"]);
    IconMenu.classList.add(menuStates["open"]);

    menu.classList.add('opacity-0', 'pointer-events-none')
})