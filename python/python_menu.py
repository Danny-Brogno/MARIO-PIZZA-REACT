from fpdf import FPDF

class MarioMenu(FPDF):
    def header(self):
        # DRAW THE BACKGROUND FIRST (The Paper)
        self.set_fill_color(247, 197, 49) # Pizza Yellow
        self.rect(0, 0, 210, 297, 'F') 
        
        # DRAW THE LOGO
        self.image('mario-pizza-logo.png', 10, 8, 30) 
        
        # DRAW THE TITLE (Red)
        self.set_font('Arial', 'B', 24)
        self.set_text_color(214, 40, 40) # Pizza Red
        self.cell(0, 20, 'MARIO PIZZA MENU', 0, 1, 'C')
        self.ln(10)

    def section_title(self, title):
        self.set_font('Arial', 'B', 16)
        self.set_text_color(58, 90, 64)   # Pizza Green (Text)
        self.set_fill_color(214, 40, 40)   # Pizza Red (Box background)
        self.cell(0, 10, f"  {title}", 0, 1, 'L', True) # True means use fill color
        self.ln(4)

    def menu_item(self, name, price):
        self.set_font('Arial', '', 12)
        self.set_text_color(46, 46, 46)   # Pizza Dark (Text)
        self.cell(0, 8, f"{name} ................................. {price}", 0, 1)

# --- EXECUTION ---
pdf = MarioMenu()
pdf.add_page() # This automatically runs the header() above

# Start writing the content
pdf.section_title("PIZZAS")
items = [
    ("Margherita", "£5"),
    ("Pepperoni", "£7"),
    ("Sausage & turnip greens", "£8"),
    ("Bufala mozzarella", "£9"),
    ("Prosciutto crudo & mozzarella", "£10"),
    ("Primavera", "£10"),
    ("Yellow tomatoes & burrata", "£8"),
    ("Sundried tomatoes & bresaola", "£9"),
    ("Four cheeses", "£8")
]
for name, price in items:
    pdf.menu_item(name, price)

# SIDES
pdf.ln(5)
pdf.section_title("SIDES")
sides = [
    ("French fries", "£4"),
    ("Chichen wings", "£5"),
    ("Chicken poppers", "£6"),
    ("Fried pizza strips", "£7"),
    ("Quesadilla", "£5")
]
for name, price in sides:
    pdf.menu_item(name, price)

# DRINKS
pdf.ln(5)
pdf.section_title("DRINKS")
drinks = [
    ("Coca cola can", "£2"),
    ("Sprite can", "£2"),
    ("Fanta can", "£2"),
    ("7Up can", "£2"),
    ("Root beer (300ml)", "£4")
]
for name, price in drinks:
    pdf.menu_item(name, price)

pdf.output("Mario_Pizza_Menu.pdf")
print("PDF Generated Successfully!")