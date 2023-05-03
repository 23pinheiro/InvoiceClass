import Invoice from './Invoice.js'

export default function exibirFatura() {
  const invoice1 = new Invoice('1', 'Mouse Logitech', 2, 50.5)
  const invoice2 = new Invoice('2', 'Water Cooler', 2, 34.9)

  console.log('Item number:', invoice1.getItemNumber())
  console.log('Item description:', invoice1.getItemDescription())
  console.log('Quantity:', invoice1.getQuantity())
  console.log('Price:', invoice1.getPrice())
  console.log('Invoice amount:', invoice1.getInvoiceAmount())

  console.log('Item number:', invoice2.getItemNumber())
  console.log('Item description:', invoice2.getItemDescription())
  console.log('Quantity:', invoice2.getQuantity())
  console.log('Price:', invoice2.getPrice())
  console.log('Invoice amount:', invoice2.getInvoiceAmount())
}
