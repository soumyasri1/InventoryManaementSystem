# Product API Documentation

## Base URL
http://localhost:8000


## Fetch and Store External Products


GET http://localhost:8000/api/fetch-and-store-external-products

---Description---------
Fetches data from an external API (https://dummyjson.com/products) and stores it in the local database.

### Response
- **Success (200 OK):**

{
"message": "External products fetched and stored successfully."
}


- **Error (500 Internal Server Error):**
{
"error": "Internal Server Error"
}


## CRUD Operations for Products

### Create a Product

####Endpoint
POST http://localhost:8000/api/products

-----Description---------
Creates a new product.

#### Request Body
- **Fields:**
- title (string, required)
- description (string)
- price (number, required)
- discountPercentage (number)
- rating (number)
- stock (number)
- brand (string, required)
- category (string, required)
- thumbnail (string, required)
- images (string, comma-separated URLs)

Eg - { "id":4,
"title": "MackBook",
"description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
"price": 1660,
"discountPercentage": 15.34,
"rating": 3,
"stock": 7,
"brand": "Microsoft",
"category": "laptops",
"thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.pngg",
"images": "https://cdn.dummyjson.com/product-images/6/1.png,https://cdn.dummyjson.com/product-images/6/2.jpg,https://cdn.dummyjson.com/product-images/6/3.png,https://cdn.dummyjson.com/product-images/6/4.jpg" }

#### Response
- **Success (201 Created):**
{
"id": 1,
"title": "Product Title",
// Other product details
}


- **Error (400 Bad Request):**
{
"error": "Title, price, category, and brand are required fields."
}
- **Error (400 Bad Request):**
{
"error": " Title, category, and brand must be strings."
}

- **Error (400 Bad Request):**
{
"error": " Price must be a positive number."
}

- **Error (400 Bad Request):**
{
"error": " Discount percentage must be a non-negative number."
}

- **Error (400 Bad Request):**
{
"error": " Rating must be a number between 0 and 5." 
}
- **Error (400 Bad Request):**
{
"error": " Stock must be a non-negative number."
}





### Get All Products

####Endpoint
GET http://localhost:8000/api/products

----Description----
Fetches all products.

#### Response
- **Success (200 OK):**
[
{
"id": 1,
"title": "Product Title 1",
// Other products
},
// Other products
]


- **Error (500 Internal Server Error):**
{
"error": "Internal Server Error"
}


### Get Product by ID

####Endpoint
GET http://localhost:8000/api/products/:id

-----Description------
Fetches a product by its ID.

#### Response
- **Success (200 OK):**
{
"id": 1,
"title": "Product Title",
// Other product details
}


- **Error (404 Not Found):**
{
"error": "Product not found"
}



### Update a Product

####Endpoint
PUT http://localhost:8000/api/products/:id


#### Description
Updates an existing product by its ID.

#### Request Body
- **Fields:**
- Same as the request body for creating a product

#### Response
- **Success (200 OK):**
{
"id": 1,
"title": "Updated Product Title",
// Other updated product details
}


- **Error (404 Not Found):**
{
"error": "Product not found"
}



### Delete a Product

#### Endpoint
DELETE http://localhost:8000/api/products/:id


#### Description
Deletes a product by its ID.

#### Response
- **Success (200 OK):**
{
"success": true,
"message": "Product deleted successfully."
}


- **Error (404 Not Found):**
{
"error": "Product not found"
}


## Product Details

### Get Product Details by ID

#### Endpoint
GET http://localhost:8000/api/products/details/:id

markdown
Copy code

#### Description
Fetches detailed information about a product by its ID.

#### Response
- **Success (200 OK):**
{
"id": 1,
"title": "Product Title",
// Other detailed product information
}


- **Error (404 Not Found):**
{
"error": "Product not found"
}


## Categories

### Get Unique Categories

#### Endpoint
GET http://localhost:8000/categories


#### Description
Fetches category names from the products table.

#### Response
- **Success (200 OK):**
{
"categories": [
"Category 1",
"Category 2",
// Other categories
]
}


- **Error (500 Internal Server Error):**
{
"error": "Internal Server Error"
}



### Get Products by Category

#### Endpoint
GET http://localhost:8000/api/products-by-category/:category


#### Description
Fetches products by a specific category.

#### Response
- **Success (200 OK):**
[
{
"id": 1,
"title": "Product Title 1",
// Other products in the category
},
// Other products in the category
]


- **Error (500 Internal Server Error):**
{
"error": "Internal Server Error"
}
