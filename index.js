
const container = $(".main-container")
const icon = $("#dark-mode")
icon.click(()=>{
    container.toggleClass("dark");
    if (container.hasClass("dark")){
        icon.removeClass("bi-moon-fill")
        icon.addClass("bi-brightness-high")
    }
    else{
        icon.removeClass("bi-brightness-high")
        icon.addClass("bi-moon-fill")
    }
})
