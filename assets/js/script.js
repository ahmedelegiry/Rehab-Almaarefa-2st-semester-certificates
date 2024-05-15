function f1(){
    form2.cname.value =form1.cname.value;
    form2.cnum.value =form1.cnum.value;
    var price=100;
    var total = price * form1.cnum.value;
    form2.tprice.value = price;
    form2.totalprice.value =total;
    var selectElement = document.getElementById("place");
    var selectedOption = selectElement.value;
    form2.place.value = selectedOption;

}
function f2(){
    alert("مرحبا "+form1.cname.value+"\nتم حجز التذاكر/ة بنجاح");
    window.location.href = "home.html";

}