// Payment strategies
class CreditCardPayment {
    pay(amount) {
      console.log('Processing credit card payment of', amount);
    }
  }
  
  class PayPalPayment {
    pay(amount) {
      console.log('Processing PayPal payment of', amount);
    }
  }
  
  // Shopping cart
  class ShoppingCart {
    constructor(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    checkout(amount) {
      this.paymentStrategy.pay(amount);
    }
  }
  
  const paid1 = new ShoppingCart(new CreditCardPayment());
  paid1.checkout(100); // Outputs: Processing credit card payment of 100
  const paid2 = new ShoppingCart(new PayPalPayment());
  paid2.checkout(20000); // Outputs: Processing PayPal payment of 20000