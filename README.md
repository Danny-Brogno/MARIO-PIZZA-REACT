# MARIO PIZZA WEBSITE

A high-performance, fully responsive web application built for **Mario's Pizza**, a local pizzeria. Built with React, Vite, CSS3, and modern frontend tools, this application serves as an interactive online ordering platform and digital storefront, allowing customers to explore the menu, build custom pizzas, manage cart items, and interact with the restaurant.

**Frontend Repo:** [https://github.com/Danny-Brogno/MARIO-PIZZA-REACT.git](https://github.com/Danny-Brogno/MARIO-PIZZA-REACT.git)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Overview

### Motivation
Local restaurants often rely on third-party food delivery services with heavy fees or static menu PDFs that lack engagement. I built this project to provide a dedicated, modern, and interactive digital storefront for Mario's Pizza, allowing customers to easily explore menu items, build custom pizzas, and interact with the business online.

### Objective
This application addresses key digital needs for small dining establishments:
* **Interactive Ordering Experience:** Features a custom pizza builder ("Make Your Own Pizza") alongside standard menu items, giving users full control over their selections.
* **Customer Engagement & Information:** Provides clear navigation for special promotions, staff introductions, location details, menu downloads, and customer feedback.
* **Seamless Cart State Management:** Implemented centralized context management (`NavContext`) to track items added to the cart across different sections and calculate real-time totals.

### Learning Outcomes
* **React State & Context Management:** Structured global state using React Context to handle cart item additions, removals, and component-level updates.
* **Modular Component Architecture:** Designed a reusable suite of frontend components (carousels, banners, cart displays, and menu item listings).
* **Responsive Styling & UI/UX Design:** Implemented page-specific CSS and responsive layouts to deliver a clean mobile, tablet, and desktop viewing experience.
* **Modern Bundling with Vite:** Utilized Vite for fast local development, hot module replacement (HMR), and optimized production builds.

---

## Features

- **Responsive Design:** Seamless layout adaptivity across Desktop, Tablet, and Mobile devices.
- **Custom Pizza Builder:** Interactive interface enabling customers to select custom pizza toppings and sizes.
- **Cart Management:** Full cart functionality allowing users to add, review, and adjust menu items before checkout.
- **Interactive Promotions & Carousels:** Dynamic banners, promotional displays, staff showcases, and interactive feedback components.
- **Menu PDF Access:** Embedded access to the downloadable restaurant menu directly from the public assets.

---

## Tech Stack

### Frontend
- **React.js** (Client-side UI library)
- **Vite** (Build tool & development server)
- **CSS3** (Custom styling and responsive layouts)
- **HTML5** (Semantic structure & PDF asset serving)

### Tools & Hosting
- **Git & GitHub** (Version control & repository management)
- **Atom** (IDE / Code Editor)
- **npm** (Package management)

---

## Architecture

```text

├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── public
│   ├── Mario_Pizza_Menu.pdf
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── style-aboutUs.css
    ├── style-cart.css
    ├── style-contact.css
    ├── style-global.css
    ├── style-homepage.css
    ├── style-orderOnline.css
    ├── style-summary.css
    ├── components
    │   ├── banner1.js
    │   ├── banner2.js
    │   ├── cart-empty.js
    │   ├── cart-items-list.js
    │   ├── contact-form.js
    │   ├── contact-map.js
    │   ├── drinks.js
    │   ├── footer.js
    │   ├── header.js
    │   ├── jumbotron.js
    │   ├── jumbotronScrollingCarousel.js
    │   ├── jumbotronStaticImage.js
    │   ├── makeYourOwnPizza.js
    │   ├── meetOurStaffContainer.js
    │   ├── sides.js
    │   ├── template.js
    │   ├── threeBoxContainerAboutUs.js
    │   ├── threeBoxContainerHomepage.js
    │   ├── underHeaderAboutUs.js
    │   ├── underHeaderHomepage.js
    │   └── underHeaderOrderOnline.js
    ├── context
    │   └── NavContext.js
    ├── img
    │   └── [assets...]
    └── pages
        ├── aboutUs
        │   └── aboutUs.js
        ├── cart
        │   └── cart.js
        ├── contact
        │   └── contact.js
        ├── homepage
        │   └── homepage.js
        ├── orderOnline
        │   └── orderOnline.js
        └── summary
            └── summary.js

```

## Installation

Clone the Repository.

From your terminal run these commands:

```bash
git clone git clone https://github.com/Danny-Brogno/MARIO-PIZZA-REACT.git
```

```bash
cd MARIO-PIZZA-REACT
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm start
```

## Usage

Browse Menu & Promotions: Explore the home page carousel, special promotions, and staff introductions.

Customize Pizza: Navigate to the "Order Online" section to use the "Make Your Own Pizza" feature.

Manage Cart: Add items to your order, view itemized totals in the cart, and proceed to the order summary section.

Contact & Information: Access restaurant location details, send messages through the contact form, or download the full PDF menu.

## Future Improvements

Implement user authentication for saved delivery addresses and order history.

Add unit and integration testing.

## Credits
Developer: Danny Brogno

GitHub: https://github.com/Danny-Brogno

## License
This project is licensed under the MIT License.
