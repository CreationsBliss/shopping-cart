function productNumberUpdate(product,price,isUpdate){
  const productNumber = document.getElementById(product + "-number");
  let productNumberText = productNumber.value;
  if(isUpdate){
    productNumberText = parseInt(productNumberText) + 1;
  }
  else if(productNumberText > 0){
    productNumberText = parseInt(productNumberText) - 1;
  }
  productNumber.value = productNumberText;
  const productPrice = document.getElementById(product + "-price");
  productPrice.innerText = productNumberText * price;
  calculateTotal();
}

function productTotalNumber(product){
  const phoneNumber = document.getElementById(product + "-number");
  const phoneNumberValue = parseFloat(phoneNumber.value);
  return phoneNumberValue;
}
function calculateTotal(){
  const phoneTotalPrice = productTotalNumber("phone") * 1219;
  const caseTotalPrice = productTotalNumber("case") * 59;
  const subTotal = phoneTotalPrice + caseTotalPrice;
  const taxTotal = subTotal / 10;
  const Total = subTotal + taxTotal;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-total").innerText = taxTotal;
  document.getElementById("total").innerText = Total;
}

// Phone update
document.getElementById("phone-plus").addEventListener('click', function(){
  productNumberUpdate("phone",1219,true);
});
document.getElementById("phone-minus").addEventListener('click', function(){
  productNumberUpdate("phone",1219,false);
});

// Casing update
document.getElementById("case-plus").addEventListener('click', function(){
  productNumberUpdate("case",59,true);
});
document.getElementById("case-minus").addEventListener('click', function(){
  productNumberUpdate("case",59,false);
});