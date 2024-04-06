/* Functional dependency of index.html */

/* for the menu functionality  */
function displayMenu(x, close) {
    var n = document.getElementById(x);
    if (close == true) {
        n.style.display = "none";
        n.className = n.className.replace("md-header__option--open", "md-header__option");
        document.getElementById("menu__button").style.display = "grid";
        document.getElementById("title-lastname").style.removeProperty("display");
        
    }
    else {
        n.style.display = "block";
        n.className = n.className.replace("md-header__option", "md-header__option--open");
        document.getElementById("menu__button").style.display = "none";
        document.getElementById("title-lastname").style.display = "none";
        
    }
}

/* section transitions  */
function section_transition_on_scroll(x) {
    var page_top = document.documentElement.getBoundingClientRect();
    var page_bottom = window.innerHeight;
    var div_list = document.getElementsByClassName(x);

    for (var i=0; i<div_list.length; i++)
    {
        var div_ = div_list[i].getBoundingClientRect();
        /*if (div_.position().top > page_top & div_.position().top < page_bottom*0.8)*/
        if(div_.top > 0 & div_.top < page_bottom * 0.8)
        {
            div_.className += "visible";
        }
        else
        {
            div_.className.replace("visible", '');
        }

    }
};

/*document.addEventListener("scroll", section_transition_on_scroll);
section_transition_on_scroll();*/