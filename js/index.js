function updateProductInput(product,isAdd,price) {
    const inputNumber = document.getElementById(product + "-number");
    let productNumber = inputNumber.value;
    if(isAdd){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    inputNumber.value = productNumber;

    const phonePrice = document.getElementById(product + "Price");
    phonePrice.innerText =productNumber * price;
    totalCalculation()
}




function productQuantity(quantity) {
    const inputProduct = document.getElementById(quantity + "-number")
    const productQuantityAmount = parseInt(inputProduct.value);
    return productQuantityAmount;
}

function totalCalculation(){
    const phoneAmount = productQuantity("phone") * 1099;
    const caseAmount = productQuantity("case") * 99;
    const subTotal = phoneAmount + caseAmount;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}

document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductInput("phone",true,1099)
})
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductInput("phone",false,1099)
})
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductInput("case",true,99)
})
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductInput("case",false,99)
})