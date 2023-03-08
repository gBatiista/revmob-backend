# What is RevMob Backend #
1 - This application is a REST API made with Node.JS using Express to connect the frontend and the MongoDB database, being able to create, delete and view advertisements.

# How to use #
1 - First you need to create an .env file with the variable `DB_URL` its value will be the connection URL with your MongoDB database after that you are ready to go.

# Routes # 
1 - Method: `POST` in `('/')` to create a new campaign you need to pass in the body of the request a JSON with:
 - {
 
  `title: String`,
  
  `description: String`,
  
  `image: String`,
  
  `conversion_type: String`,
  
  `bid: Number`,
  
  `country: String`
  
}

2 - Method: `DELETE` in `('/')` to delete an existing campaign you need to pass a JSON with the `id` of the campaign to be deleted in the request body.

3 - Method: `'GET'` in `('/fetch')` you will receive the best published campaign, and if you want to specify which country you want the best campaign from you add a filter by query for example:
 - `('/fetch?country=br')` you will receive the best campaign for Brazil.

4 - Method: `'GET'` in `('/fetch/all')` you will receive a list of all published campaigns.
