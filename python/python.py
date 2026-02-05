# Mario Pizza - Backend Logic
pizza_menu = [
    {"name": "Margherita", "price": 5, "ingredients": ["tomato", "mozzarella", "basil"]},
    {"name": "Pepperoni", "price": 7, "ingredients": ["tomato", "mozzarella", "pepperoni"]},
    {"name": "Sausage & turnip greens", "price": 8, "ingredients": ["mozzarella", "Italian sausage", "turnip greens"]},
    {"name": "Bufala mozzarella", "price": 9, "ingredients": ["tomato", "buffalo mozzarella", "extra virgin olive oil"]},
    {"name": "Prosciutto crudo & mozzarella", "price": 10, "ingredients": ["mozzarella", "prosciutto crudo", "basil"]},
    {"name": "Primavera", "price": 10, "ingredients": ["mozzarella", "cherry tomatoes", "rocket", "", "prosciutto crudo"]},
    {"name": "Yellow tomatoes & burrata", "price": 8, "ingredients": ["yellow tomatoes", "burrata cheese", "basil"]},
    {"name": "Sundried tomatoes & bresaola", "price": 9, "ingredients": ["mozzarella", "sundried tomatoes", "bresaola"]},
    {"name": "Four cheeses", "price": 8, "ingredients": ["mozzarella", "gorgonzola", "parmiggiano reggiano", "pecorino"]}
]

def display_welcome():
    welcome_msg = "Welcome to Mario Pizza Backend System"
    print("#" * len(welcome_msg))
    print(welcome_msg)
    print("#" * len(welcome_msg))

# --- EXECUTION ---
display_welcome()

for pizza in pizza_menu:
    print("---------------------------------------------------")
    # Join ingredients list into a single string separated by commas for better reading
    ingredients_str = ", ".join(pizza['ingredients'])
    # We use f-strings to show the Name, Price, and the Ingredients list
    print(f"NAME: {pizza['name']} -> PRICE: £{pizza['price']} -> INGREDIENTS: {ingredients_str}")

print("###################################################")
print(f"System ready. Awaiting orders from React Frontend.")
print("###################################################")
