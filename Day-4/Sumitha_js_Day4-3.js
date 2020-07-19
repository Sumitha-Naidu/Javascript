shoppingList = ["Pen","Pencil","Book","Eraser"];
shoppingBasket = Array.from(shoppingList);
basket = ["Shoes","charger"]
for(var i=0;i<basket.length;i++)
{
    shoppingBasket.push(basket[i]);
}
console.log("The Initial list is  : "+shoppingList);
console.log("The add ons are : "+basket);
console.log("The Final Shopping Basket is  : "+shoppingBasket);