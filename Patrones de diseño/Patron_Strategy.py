from abc import ABC, abstractmethod

# Interfaz de estrategia
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

# Estrategias concretas
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Pagando ${amount} con tarjeta de crédito.")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Pagando ${amount} con PayPal.")

class CryptoPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Pagando ${amount} con criptomonedas.")


class ShoppingCart:
    def __init__(self, strategy: PaymentStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: PaymentStrategy):
        self.strategy = strategy

    def checkout(self, amount):
        self.strategy.pay(amount)

# Prueba del patrón Strategy
cart = ShoppingCart(CreditCardPayment())
cart.checkout(100)

cart.set_strategy(PayPalPayment())
cart.checkout(200)

cart.set_strategy(CryptoPayment())
cart.checkout(300)
