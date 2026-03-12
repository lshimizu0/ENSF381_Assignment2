let addButton = document.querySelectorAll(".add_btn");
let removeButton = document.querySelectorAll(".remove_btn");
let cart = document.getElementById("cart");
let countDownTimer = getElementByID("countdownTimer");

let cartItems = [];
let prices = {"Peppermint Snow": 5, "Caramel Apple Crunch": 6, "Maple Pecan Delight": 7};
console.log(prices["cock"]);

function updateCart() {
    cart.innerHTML = "";
    if (cartItems.length === 0) {
        cart.innerHTML = "<p>Your cart is currently empty.</p>";
    } else {
        cartItems.forEach(item => {
            const p = document.createElement("p");
            p.className = "cartItem";
            p.textContent = `${item[0]}x ${item[1]} - $${prices[item[1]]*item[0]}`;
            cart.appendChild(p);
        });
    }
}

let index = 0;
function in2dList(inList, theList){
    let found = false;
    index = 0;
    for(index; index<theList.length;index++){
                if(theList[index][1]==inList[1]){
                    found = true;
                    break;
                }
            }
            return found;

}

addButton.forEach(button => {
    button.addEventListener("click", () => {
        let item = button.parentElement.parentElement.querySelector("h3").textContent;
        let itemList = [1, item];
        let exists = in2dList(itemList, cartItems);
        if(!exists){
            cartItems.push(itemList);
        }else{
            cartItems[index][0] += 1;
            
        }
        
        
        updateCart();
    });
});

removeButton.forEach(button => {
    button.addEventListener("click", () => {
        let item = button.parentElement.parentElement.querySelector("h3").textContent;
        let itemList = [1, item];
        let exists = in2dList(itemList, cartItems);
        if(exists){
            if(cartItems[index][0]==1){
                cartItems.splice(index, 1);
            }else{
                cartItems[index][0] -= 1;
            }
            
        }
        
        
        updateCart();
    });
});

