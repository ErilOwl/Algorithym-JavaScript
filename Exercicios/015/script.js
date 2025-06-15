let invoice = { //create a object on JSON to receive and push info for an invoice
  userName: "Guilherme Humerto",
  payment: 100.00,
  products: { //List the order product and price
    0: ["Triple Bancon", 8.50],
    1: ["Large Soda", 4.00],
    2: ["Dessert", 5.00]
  },
  taxes: 2.95,
  orderNumber: 10
}

generateInvoice(invoice) //Run the generateInvoice function

function generateInvoice(invoice){ 
  console.log(`Buyer name: ${invoice.userName}`)
  console.log(`---------------------------`);
  console.log(`Ordered products:`)

  let totalPrice = 0; //Variable to make a start point to total price

  for(let index in invoice.products){ //Creates a loop that sets the variables productName, productPrice from invoice.products listing them
      let [productName, productPrice] = invoice.products[index]
       totalPrice += productPrice //sums the value of each product
       console.log(`- ${productName}: $${productPrice.toFixed(2)}`)
  }
    console.log(`---------------------------`);
    let totalAfterTax = totalPrice + invoice.taxes; //Sums the subtotal with the taxes

    console.log(`Subtotal: $${totalPrice.toFixed(2)}`);
    console.log(`Total after taxes ($${invoice.taxes.toFixed(2)}): $${totalAfterTax.toFixed(2)}`);
    console.log(`---------------------------`);
    console.log(`Payment Metod: Cash - Paid: $${invoice.payment} - Exchange: $${invoice.payment-totalAfterTax}`)
}

console.log(``)
console.log(`Order N°:${invoice.orderNumber} ${invoice.userName}`) //Can be pushed to be shown on screen after the function