
/*This function cancels an order with a click of a button. it sets the cookies value to 0
then it displays it to the element in the HTML */
function cancelOrder(){
    Cookies.set("Sugar", 0)
    document.getElementById("cookiecount").innerHTML  ="Amount of Sugar Cookies: "+ 0;
    Cookies.set("Chocolate", 0)
    document.getElementById("chococookiecount").innerHTML  ="Amount of Chocolate Cookies: "+ 0;
    Cookies.set("Lemon", 0)
    document.getElementById("lemoncookiecount").innerHTML  ="Amount of Lemon Cookies: "+ 0;
}
/*This function checks if the cookie value exists, if it does exist it sets it to 0 */
if (!Cookies.get("Sugar")) {
    Cookies.set("Sugar",0)
}
/*This function is activated on click. it takes the value in the input field on button click 
it then adds that to the cookie value but the amount it receives is a string that needs to be turned into an interger. It then sets the cookie value and puts it in the element of the html*/
function OrderSugarCookie() {
    orderSugar = document.sugarForm.sugarCustomer.value
   var totalSugar = parseInt(Cookies.get("Sugar" )) + parseInt(orderSugar)
    Cookies.set("Sugar",totalSugar)
    document.getElementById("cookiecount").innerHTML  ="Amount of Sugar Cookies: "+ totalSugar;
   }

   if (!Cookies.get("Chocolate")) {
       Cookies.set("Chocolate",0)
   }
function OrderChocolateCookie(){
    orderChoco = document.chocoForm.chocoCustomer.value
    var totalChoco = parseInt(Cookies.get("Chocolate")) + parseInt(orderChoco)
    Cookies.set("Chocolate", totalChoco)
    document.getElementById("chococookiecount").innerHTML ="Amount of Chocolate Cookies: " + totalChoco;
}

if (!Cookies.get("Lemon")) {
    Cookies.set("Lemon",0)
}
function OrderLemonCookie() {
    orderLemon = document.lemonForm.lemonCustomer.value
    var totalLemon = parseInt(Cookies.get("Lemon")) + parseInt(orderLemon)
    Cookies.set("Lemon", totalLemon)
    document.getElementById("lemoncookiecount").innerHTML = "Amount of Lemon Cookies " + totalLemon;
}


//this function will display cookie value after the page loads again.
function displayCookie(){

    document.getElementById("cookiecount").innerHTML  = "Amount of Sugar Cookies: "+ Cookies.get("Sugar")
    document.getElementById("chococookiecount").innerHTML  = "Amount of Chocolate Cookies: "+ Cookies.get("Chocolate")
    document.getElementById("lemoncookiecount").innerHTML  = "Amount of Lemon Cookies: "+ Cookies.get("Lemon")

}

displayCookie();
