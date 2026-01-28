# Mario Pizza - Backend Logic
pizza_menu = [
    {"name": "Margherita", "price": 10, "ingredients": ["tomato", "mozzarella", "basil"]},
    {"name": "Pepperoni", "price": 12, "ingredients": ["tomato", "mozzarella", "pepperoni"]},
    {"name": "Quattro Formaggi", "price": 15, "ingredients": ["mozzarella", "gorgonzola", "parmesan", "fontina"]},
    {"name": "Hawaiian", "price": 13, "ingredients": ["tomato", "mozzarella", "ham", "pineapple"]}
]

def calculate_total(order_list):
    total = 0
    for item in order_list:
        total += item['price']
    return total

def display_welcome():
    welcome_msg = "Welcome to Mario Pizza Backend System"
    print("*" * len(welcome_msg))
    print(welcome_msg)
    print("*" * len(welcome_msg))

# Simulating a large amount of data processing logic
for pizza in pizza_menu:
    print(f"Checking inventory for: {pizza['name']}...")
    for ingredient in pizza['ingredients']:
        print(f" - Ingredient {ingredient}: OK")

print("\nSystem ready. Awaiting orders from React Frontend...")
