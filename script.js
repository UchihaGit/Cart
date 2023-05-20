let cartBtn = document.querySelectorAll("button");

cartBtn.forEach((item) => {
  item.addEventListener("click", function() {

    let fullPath = event.target.parentElement.previousElementSibling.src;
    //console.log(fullPath);
    let indvalue = fullPath.indexOf('Cart') + 5;
    //console.log(indvalue);
    let imgName = fullPath.slice(indvalue);
    //console.log(imgName);
    let cartObj = {};

    cartObj.image = `${imgName}`;

    let price = event.target.parentElement.nextElementSibling.children[1].textContent;
    //console.log(price);
    cartObj.price = price;

    let lineName = event.target.parentElement.nextElementSibling.children[0].textContent;
    //console.log(lineName);
    cartObj.name = lineName;

    let cartItem = document.createElement("div");

    //cartItem.classList.add("");

    cartItem.innerHTML = `<div class="div2">
                            <div class = "cartImg"> <img src="${cartObj.image}" width="50" height="50" alt=""> </div>
                            <div class= "valueItem">
                              <p>${cartObj.name}</p>
                              <span> $</span><span class="priceitem" >${cartObj.price}</span>
                            </div>
                          </div>`

const cart = document.getElementById("cart");
const total = document.querySelector('.total');

//let insertedNode = parentNode.insertBefore(newNode, referenceNode)

cart.insertBefore(cartItem, total);
alert("added");

showTotal();

  })
});

function showTotal() {
let total = [];
let priceitem = document.querySelectorAll(".priceitem");
priceitem.forEach((item) => {
  total.push(parseFloat(item.textContent));
});

let totalAmount = total.reduce(function(accumulator,currvalue) {
  return accumulator + currvalue;
},0)
console.log(totalAmount);
document.querySelector(".priceChange").textContent = totalAmount;
document.querySelector(".priceChange1").textContent = totalAmount;
document.getElementById("item-count").textContent = total.length;

}
