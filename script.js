console.log(localStorage.getItem("income"));
if(localStorage.getItem("income")==null){
var income = 0;
}
else{
    var income=parseInt(localStorage.getItem("income"));
}
if(localStorage.getItem("expense")==null){
    var expense = 0;
}
else{
    var expense=parseInt(localStorage.getItem("expense"));
}
if(localStorage.getItem("balanceAmount")==null){
    var balanceAmount = 0;
}
else{
    var balanceAmount=parseInt(localStorage.getItem("balanceAmount"));
}

document.querySelector("#money-minus").innerHTML="-$"+Math.abs(localStorage.getItem("expense")).toFixed(2);
document.querySelector("#money-plus").innerHTML="+$"+Math.abs(localStorage.getItem("income")).toFixed(2);

if(balanceAmount>0){
    document.querySelector("#balance").innerHTML="+$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
}
else if(balanceAmount==0){
    document.querySelector("#balance").innerHTML="$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
}
else{
    document.querySelector("#balance").innerHTML="-$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
}

document.querySelector(".btn").addEventListener("click",function(){
    var key = document.querySelector("#text").value;
    var amount = parseInt(document.querySelector("#amount").value);
    console.log(key);
    console.log(amount);
    if(key!=''&&isNaN(amount)==false){   
        if(amount>0){
            var plusList = document.createElement("li");
            plusList.setAttribute("class","plus");
            var p1 = document.createElement("div");
            p1.appendChild(document.createTextNode(key));
            plusList.appendChild(p1);
            var p2 = document.createElement("div");
            p2.appendChild(document.createTextNode("+"+amount));
            plusList.appendChild(p2);
            document.getElementById("list").appendChild(plusList);
            localStorage.setItem(key,amount);
            income=income+amount;
            localStorage.setItem("income",income);
            document.querySelector("#money-plus").innerHTML="+$"+income.toFixed(2);

            balanceAmount = balanceAmount+amount;
            localStorage.setItem("balanceAmount",balanceAmount);
            if(balanceAmount>0){
                document.querySelector("#balance").innerHTML="+$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
            else if(balanceAmount==0){
                document.querySelector("#balance").innerHTML="$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
            else{
                document.querySelector("#balance").innerHTML="-$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
        }
        else{
            var minusList = document.createElement("li");
            minusList.setAttribute("class","minus");
            var m1 = document.createElement("div");
            m1.appendChild(document.createTextNode(key));
            minusList.appendChild(m1);
            var m2 = document.createElement("div");
            m2.appendChild(document.createTextNode(amount));
            minusList.appendChild(m2);
            document.getElementById("list").appendChild(minusList);
            localStorage.setItem(key,amount);
            expense=expense+amount;
            localStorage.setItem("expense",expense);
            document.querySelector("#money-minus").innerHTML="-$"+Math.abs(expense).toFixed(2);

            balanceAmount = balanceAmount-Math.abs(amount);
            localStorage.setItem("balanceAmount",balanceAmount);
            if(balanceAmount>0){
                document.querySelector("#balance").innerHTML="+$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
            else if(balanceAmount==0){
                document.querySelector("#balance").innerHTML="$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
            else{
                document.querySelector("#balance").innerHTML="-$"+Math.abs(localStorage.getItem("balanceAmount")).toFixed(2);
            }
        }
        var key = document.querySelector("#text").value="";
        var amount = document.querySelector("#amount").value="";
    }
    else if(key==''&&isNaN(amount)==false){
        alert("Please enter Text...");
    }
    else if(key!=''&&isNaN(amount)==true){
        alert("Please enter Amount...");
    }
    else if(key==''&&isNaN(amount)==true){
        alert("Please enter Text and Amount...");
    }
});
