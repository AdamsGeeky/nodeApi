# CRUD action 
for every resource. So, in the case of a Product, we want to create:

- GET product/:id 
 get a product by a given ID

- GET product 
get all the products (for an authenticated user)

- POST product
create a new product

- PUT product/:id 
 update or replace a product that matches a given ID

- DELETE product/:id 
delete a product by a give ID

This is how REST looks. However, when developing an API that's consumed only by a client that you and your team also created, using something like REST is probably redundant and tedious. 

There's nothing stopping you from just creating an API route to get all the data for every page, or every component, or whatever makes sense for your application.
 
Something like REST is great for external APIs so external developers can onboard more quickly because they know what to expect vs. having to learn some custom API design.

