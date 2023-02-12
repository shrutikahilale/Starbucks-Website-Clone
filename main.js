let hamburgerMenu = document.getElementById('hamburger-menu');
let isMenuClose= true;

hamburgerMenu.addEventListener("click", ()=>{
    let fl = document.getElementById('fl');
    let sl = document.getElementById('sl');
    let tl = document.getElementById('tl');

    let menu = document.getElementById('menu-bar');

    let body = document.getElementsByTagName('body')[0];

    if(isMenuClose == true) {
        fl.style.transform = "translateY(6px) rotate(135deg)";        
        sl.style.visibility = "hidden";        
        tl.style.transform = " translateY(-6px) rotate(45deg)";    
        
        // open menu
        menu.style.transform = "translateX(-600px)"

        isMenuClose = false;

        // stop vertical scroll
        body.style.overflowY = "hidden";
    }
    else {
        fl.style.transform = "translateY(0px) rotate(0deg)";        
        sl.style.visibility = "visible";        
        tl.style.transform = " translateY(0px) rotate(0deg)";

        // close menu
        menu.style.transform = "translateX(0px)";

        // let scroll vertically now!
        body.style.overflowY = "scroll";
        isMenuClose = true;
    }
});


// open drop down menu
let dropDown = document.getElementsByClassName('contact-heading');

for(let i=0;i<dropDown.length;i++){
    let isDropDownOpen = false;

    dropDown[i].addEventListener('click', function(event){
        let e = event.target;
        let contactLinkDiv = e.parentElement.nextElementSibling;

        if(isDropDownOpen == false) {
            e.style.transform = "rotateZ(180deg)";
        
            contactLinkDiv.classList.add('show_');
            contactLinkDiv.classList.remove('hide_'); 
            isDropDownOpen = true;  
        }
        else {
            e.style.transform = "rotateZ(0deg)";

            contactLinkDiv.classList.add('hide_');
            contactLinkDiv.classList.remove('show_'); 
            isDropDownOpen = false;  
        }
    });
};

// green hover on image
let map = document.getElementById('map');
let mapIcon = document.getElementById('map-icon');
map.addEventListener('mouseover', ()=>{
    mapIcon.setAttribute('src', "img/map-icon-green.png");
});
map.addEventListener('mouseout', ()=>{
    mapIcon.setAttribute('src', "img/map-icon.png");
});

let mapForMob = document.getElementById('map-for-mobile');
let mapIconForMob = document.getElementById('map-icon-for-mobile');
mapForMob.addEventListener('mouseover', ()=>{
    mapIconForMob.setAttribute('src', "img/map-icon-green.png");
});
mapForMob.addEventListener('mouseout', ()=>{
    mapIconForMob.setAttribute('src', "img/map-icon.png");
});
