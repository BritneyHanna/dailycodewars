//In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!
//Need to Review 
function fuelPrice(litres, pricePerLitre) {
  
let litresDiscount = [2 , 4 , 6 , 8, 10] ; 
let centsDiscount = [0.05 , 0.10 , 0.15 , 0.20 , 0.25] ; 
let result = litres * pricePerLitre ;

for (let i = 0; litres >= litresDiscount[i]  ; i++) {
  result = ((litres * pricePerLitre) -  (centsDiscount[i]*litres)).toFixed(2)
    
}
  return parseFloat(result)
 }