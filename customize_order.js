const countdownElement = document.getElementById("countdownTimer");

const vanillaUpdate = document.getElementById("update_order_vanilla");
const cupButton = document.getElementById("type_cup");
const coneButton = document.getElementById("type_cone");

const chocolateUpdate = document.getElementById("update_order_chocolate");
const toppingSelect = document.querySelectorAll(".toppingSelect");

const totalPrice = document.getElementById("totalPrice");

basePrice = 6;

vanillaUpdate.addEventListener("click", ()=>{
    if(!cupButton.checked && !coneButton.checked){
        alert("You must select one type of base");
    }
})

chocolateUpdate.addEventListener("click", ()=>{
    let oneSelsected = false;
    basePrice = 6;
    toppingSelect.forEach(topping => {
        if(topping.checked){
            oneSelsected = true;
            basePrice+= 1.5;
        }
    });
    if(!oneSelsected){
        alert("You must select at least one topping");
    }
    totalPrice.textContent = `Total Price: $${basePrice.toFixed(2)}`
})


const startingMinutes = 15;
let time = startingMinutes*60;



setInterval(updateCountdown, 1000);



function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds :seconds;
    countdownElement.textContent = `Order Time Left: ${minutes}:${seconds}`;
    time--;
    if(time <= 0) {
    window.location.href = "/order_summary.html";
}
}