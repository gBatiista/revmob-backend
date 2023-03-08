# What is RevMob Backend #
1 - This application is a REST API made with node.js using express to connect the frontend and the MongoDB database, being able to create, delete and view advertisements.

# How to use #
1 - First you need to create an .env file with the variable `DB_URL` its value will be the connection URL with the MongoDB database after that you are ready to go.

# Routes # 
1 - Method: `POST` in `('/')` to create a new campaign you need to put in the body of the request a JSON with:
 - {
 
  `title: String`,
  
  `description: String`,
  
  `image: String`,
  
  `conversion_type: String`,
  
  `bid: Number`,
  
  `country: String`
  
}
