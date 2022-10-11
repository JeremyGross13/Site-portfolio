var themeOther = "<link id='theme' rel='stylesheet' href='sombre.css' />";

window.addEventListener("load", switchTheme_avanced_init);

function switchTheme_avanced_onClick(e){
    e.preventDefault();

    var localStorage_theme =localStorage.getItem("theme");

    if (localStorage_theme === undefined || localStorage_theme === "main"){
        localStorage_theme = "sombre";
    } else {
        localStorage_theme = "main";
    }

    localStorage.setItem("theme", localStorage_theme);

    window.location.reload();
}

function switchTheme_avanced_init () {
    var localStorage_theme = localStorage.getItem("theme");
    var hhead = document.getElementsByTagName("head")[0];

    if (localStorage_theme === "sombre"){
        hhead.innerHTML = hhead.innerHTML + themeOther;
    }

    setTimeout(function(){
        document.getElementById("style_temporaire").remove();
    }, 100);
}