## Teleflex Pizza Order App

### How To Run

NPM and .NET core SDK 2.1 are required to run the application

-   from `./PizzaOrder/PizzaApi`:
    -   Run the backend server : `dotnet run`
-   from `./PizzaOrder/pizza-order-app`:
    -   Run npm install: `npm install`
    -   Run the client: `npm start`

### About the Frontend

The frontend is written in React with use of the following libraries:

-   Prime React - Used for a consistent UI framework
-   React Router - Handles navigation of the app between pages
-   Moment - Used for date formatting

#### Areas of Improvement

-   Currently all premium toppings are <i>displayed</i> at $1 because all the current prices are $1. If the prices change in the database the correct end price is calculated. However, the checkbox grouping title still states \$1. A better approach would be to list the price after each premium topping.

-   It is possible to add a pizza that contains no toppings resulting in a pizza that is just dough and sauce. This may be intended by the pizza business, but perhaps a requirement of at least one topping should be enforced.

##### Known issue:

https://github.com/facebook/react/issues/14369
Use Redux or another state management library. Occurs because a promise is being resolved after the component has unmounted (from changing pages)

#### Features

The order list page contains a list of all orders with each order containing a sublist of all pizzas included. The overall list will grow dynamically and pagination is enabled. The limit per page is 5 orders. The user may choose to sort the order list by several values including, order date (asc/desc), name, and order id.

The place order page allows the user to add 1 to many pizzas to an order, input the name, and submit the order. Once submitted the app redirects to the order list page and the new order is shown.

#### Validation

The place order page validates a size has been given on Add Pizza click. The Submit Order button validates that a name has been provided and the order contains 1 or more pizzas.

---

### Backend

The backend was written in C#/.NET core webAPI. The functionality is pretty straightforward using 3 controllers to handle orders, pizza size pricing, and topping pricing. I chose to use Json as the data storage for a small test app like this. The entire Json file for orders gets rewritten every time an order is placed. Obviously this is not performant at scale, but acceptable in the time and scope constraints of this project.

The operative databases reside in the /Database folder. Upon backend startup a check is made that the database files for orders, pizza price, and topping price. If they are not located then they will be copied from the provided /Startup folder. This gives an easy way to reset the backend data.
