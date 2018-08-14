
 //this function will make a Cookie 
function OrderSugarCookie() {
    orderSugar = document.sugarForm.sugarCustomer.value
    Cookies.set("Sugar",orderSugar)
    document.getElementById("cookiecount").innerHTML  ="Amount of Sugar Cookies: "+ orderSugar;
   }

function OrderChocolateCookie(){
    orderChoco = document.chocoForm.chocoCustomer.value
    Cookies.set("Chocolate",orderChoco)
    document.getElementById("chococookiecount").innerHTML  = "Amount of Chocolate Cookies: "+ Cookies.get("Chocolate")
}
function OrderLemonCookie(){
    orderLemon = document.lemonForm.lemonCustomer.value
    Cookies.set("Lemon", orderLemon)
    document.getElementById("lemoncookiecount").innerHTML ="Amount of Lemon Cookies: "+
    orderLemon;
}
    // orderChoco = document.chocoForm.chocoCustomer.value
    // Cookies.set("Chocolate",orderChoco)
    // orderLemon = document.lemonForm.lemonCustomer.value
    // Cookies.set("Lemon",orderLemon)



//this function will display the amount after the page loads again.
function DisplayCookie(){
    document.getElementById("cookiecount").innerHTML  = "Amount of Sugar Cookies: "+ Cookies.get("Sugar")
    document.getElementById("chococookiecount").innerHTML  = "Amount of Chocolate Cookies: "+ Cookies.get("Chocolate")
    document.getElementById("lemoncookiecount").innerHTML  = "Amount of Lemon Cookies: "+ Cookies.get("Lemon")
}

function DisplayAll () {
    document.getElementById("cookietotal").innerHTML  = Cookies.get("Sugar") + Cookies.get("Chocolate") + Cookies.get("Lemon")
}
