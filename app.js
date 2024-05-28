
const priceKg = "£/KG";
const pieceEach = "Pound/each";

const priceFruits = [4.01,6.23,15,45,8.19];
const priceVegetables = [2.99,2.55,3.44,5.79,4.19];
const priceBakery = [3.99,4.99,6.01,1.85,2.76];
const priceDrinks = [5.01,6.02,5.23,6.33,6,88];
const priceMeats = [15.99,10.65,17.00,37.02,11.10];
const priceSweets = [3.01,7.21,5.25,4.89,2.72];


// Constructor function to get the card item and options value 
function itemsInfo(name,price,newPrice,unit){
    this.itemName = name;
    this.itemPrice = price;
    this.newPrice = newPrice;
    this.unit = unit
    let options = [];
    let addItems = document.querySelector(".itemsAdded");
    let result = document.querySelector(".result");
    // Item option method to loop through each form and add the option value inside the empty array options [];
    this.itemOption = function(){
        let selectElement = this.itemName;
        for(let i = 0; i < selectElement.options.length; i++){
          options.push(selectElement.options[i].value)
        }
        console.log(options);
    }
    // Trigger Method to addapt the price based on option value selected.
    this.trigger = function(){
       this.itemOption();
        this.itemName.addEventListener("change", (e) => {
         if(options[0] === e.target.value){
             this.itemPrice.innerHTML = `${this.newPrice[0]}`
         }
         else if(options[1] === e.target.value){
            this.itemPrice.innerHTML = `${this.newPrice[1]}`
         }
         else if(options[2] === e.target.value){
            this.itemPrice.innerHTML = `${this.newPrice[2]}`
         }
         else if(options[3] === e.target.value){
            this.itemPrice.innerHTML = `${this.newPrice[3]}`
         }
         else if(options[4] === e.target.value){
            this.itemPrice.innerHTML = `${this.newPrice[4]}`
         }
         else if(options[5] === e.target.value){
            this.itemPrice.innerHTML = `${this.newPrice[5]}`
         }
        })
    }
    //On button click + add the value to the right side that the client selected and added 
    this.addValue = function(userValue,userQty){
       userValue.addEventListener("click", () => {
        let productName = this.itemName.value;
        let finalPrice = userQty.value * Number(this.itemPrice.textContent);
        let productLi = document.createElement('p');
        productLi.classList.add("item-cost")
        productLi.innerHTML = `
         <span>${productName}: ${userQty.value} ${this.unit === priceKg ? 'kg' : 'each'} </span>  <span>£ </span> <span class="priceOfProduct"> ${finalPrice.toFixed(2)}</span>`
        addItems.appendChild(productLi);
        this.totalValue(finalPrice);
        // Deleting a product and updating the total price
        productLi.addEventListener("click",function(){
           productLi.remove(document.querySelector(".item-cost"));
           updatePrice();
        })
      })
    }
   //  It calculates and show the total price of all products added in the list.
    this.totalValue = function(item){
      let resultN = Number(result.textContent);
      let total = resultN + item;
      result.innerHTML = `${total.toFixed(2)}`;
    }
    //Update Total Bill Price
   function updatePrice(){
      let resultTotalPrice = Number(result.textContent);
      let productPrice = Number(document.querySelector(".priceOfProduct").textContent);
      let updatedPrice = resultTotalPrice - productPrice;
      result.innerHTML = `${updatedPrice.toFixed(2)}`
   }
}

const fruits = new itemsInfo(document.querySelector(".card-selector1"),document.querySelector(".price-frt-value"),priceFruits,priceKg);
const vegetables = new itemsInfo(document.querySelector(".card-selector2"),document.querySelector(".price-veg-value"),priceVegetables,priceKg);
const bakery = new itemsInfo(document.querySelector(".card-selector3"),document.querySelector(".price-bak-value"),priceBakery,pieceEach);
const drinks = new itemsInfo(document.querySelector(".card-selector4"),document.querySelector(".price-bev-value"),priceDrinks,pieceEach);
const meats = new itemsInfo(document.querySelector(".card-selector5"),document.querySelector(".price-meat-value"),priceMeats,priceKg);
const sweets = new itemsInfo(document.querySelector(".card-selector6"),document.querySelector(".price-swt-value"),priceSweets,pieceEach);
fruits.trigger();
vegetables.trigger();
bakery.trigger();
drinks.trigger();
meats.trigger();
sweets.trigger();


fruits.addValue(document.querySelector(".add-item1"),document.querySelector(".frt-user-value"));
vegetables.addValue(document.querySelector(".add-item2"),document.querySelector(".veg-user-value"));
bakery.addValue(document.querySelector(".add-item3"),document.querySelector(".bek-user-value"));
drinks.addValue(document.querySelector(".add-item4"),document.querySelector(".bev-user-value"));
meats.addValue(document.querySelector(".add-item5"),document.querySelector(".meat-user-value"));
sweets.addValue(document.querySelector(".add-item6"),document.querySelector(".swt-user-value"));





  
