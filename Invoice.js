export default class Invoice {
  //A classe Invoice tem quatro atributos:
  //itemNumber, itemDescription, quantity e price.

  //O construtor recebe esses quatro atributos como parâmetros e os inicializa.
  constructor(itemNumber, itemDescription, quantity, price) {
    this.itemNumber = itemNumber
    this.itemDescription = itemDescription
    this.quantity = quantity > 0 ? quantity : 0
    this.price = price > 0 ? price : 0.0
  }

  //Os métodos get e set são fornecidos para cada um dos atributos.
  getItemNumber() {
    return this.itemNumber
  }

  setItemNumber(itemNumber) {
    this.itemNumber = itemNumber
  }

  getItemDescription() {
    return this.itemDescription
  }

  setItemDescription(itemDescription) {
    this.itemDescription = itemDescription
  }

  getQuantity() {
    return this.quantity
  }

  setQuantity(quantity) {
    this.quantity = quantity > 0 ? quantity : 0
  }

  getPrice() {
    return this.price
  }

  setPrice(price) {
    this.price = price > 0 ? price : 0.0
  }

  //O método getInvoiceAmount calcula o valor da fatura,
  //multiplicando a quantidade pelo preço por item.
  getInvoiceAmount() {
    return this.quantity * this.price
  }
}
