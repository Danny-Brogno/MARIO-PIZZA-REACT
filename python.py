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

print(f"System ready. Awaiting orders from React Frontend...")

print("--------------------------------------------------------------------------------------------")

x = 1
y = 2
sum = x + y
subtraction = y - x
multiplication = y * x 
division = y / x 

print(f"Sum -> 1+2={sum}   Subtraction -> 2-1={subtraction}   Multiplication -> 2x1={multiplication}   Division -> 2/1={division}")

if x > y:
    print(f"{x} is bigger than {y}")
elif x == y:
    print(f"{x} and {y} are the same")
else:
    print(f"{y} is bigger than {x}")
print("--------------------------------------------------------------------------------------------")

fruits = ["banana", "cherry", "oranges"]
x, y, z = fruits
print(fruits)
print(x,y,z)

print("--------------------------------------------------------------------------------------------")

a = 1
b = "hello"
is_raining = True

print(b, a, is_raining)
print(f"{b} {a} {is_raining}")

print("--------------------------------------------------------------------------------------------")

#string
c = str(1)
#integer
d = int(2)
#float (number as well, but DECIMAL)
e = float(3.1)
#complex (number as well, but mixed)
cde = 12j
print(f"{cde} IS A {type(cde)}")
print(f"{c} and {d} and {e}")
#CONVERSION
print(int(c))
print(str(c))

print("--------------------------------------------------------------------------------------------")

f = "awesome"

def myFunction():
    print(f"Python is {f}")
myFunction()

print("--------------------------------------------------------------------------------------------")

#MY EXERCISE
def dannyBrogno():
    name = "Danny"
    surname = "Brogno"
    age = 38
    city = "Edinburgh"
    hobby = "running"
    is_italian = True
    print(f"The 'name' variable is a {type(name)} = {name}")
    print(f"The 'age' variable is a {type(age)} = {age}")
    print(f"The 'is_italian' variable is a {type(is_italian)} = {is_italian}")
    print(f"My name is {name}, my surname is {surname}, I am {age} years old and I live in {city}. In my free time I like {hobby}")
dannyBrogno()

print("--------------------------------------------------------------------------------------------")

import random

# Generating a random number between 1 and 100
random_number = random.randrange(1,101)

# Printing the random number along with its data type
print(f"Random Number: {random_number}")
print("Data Type:", type(random_number))