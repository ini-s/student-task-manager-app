
const container = $(".main-container")
const icon = $("#dark-mode")

icon.click(()=>{
    container.toggleClass("dark");
    if (container.hasClass("dark")){
        icon.removeClass("bi-moon-fill")
        icon.addClass("bi-brightness-high")
        theme = "dark"
    }
    else{
        icon.removeClass("bi-brightness-high")
        icon.addClass("bi-moon-fill")
        theme = "light"
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme))
})
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"))
if (GetTheme === "dark"){
    container.addClass("dark")
} 
