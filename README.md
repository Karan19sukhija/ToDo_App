# ToDo - App


Simple ToDo Application ( which follows the MVC Design Pattern ) created with Node.js, express, jquery ( To make AJAX calls ),
and MongoDB ( Cloud -Based : Database as a Service )

## Table of Contents

  - Features
  - Installation 
  - Technologies
  - Screenshots
  
  ## Features
  
  There are 3 main features of this application as shown below:
  - View Items: The user can see all the ToDo items stored in the database in the form of a list
  - Add Item: The user can add a new ToDo task that will be displayed in the ToDo list along with the already save ToDo Items
  - Delete Item: The user can delete any Todo task by clicking anywhere on the ToDo item ( as the item displayed in the list is a
                 block level item )
  
  ## Installation 
  
    ToDo requires `Node.js` to run.
    
    Install the devDependencies and start the server.The below following dependencies were installed on the local
    environment using npm manager
    
  #### To install: 
  
   ```sh
    npm i nodemon -d
    npm i express -save
    npm i ejs -save
    npm i express -save
    npm i mongoose -save
   ```
   #### Running the Development Server: 
   
   ```sh
    $ nodemon app
   ```
  
   ## Technologies 
   
   - The application was coded in the Visual Studio code IDE. 
   - The application was created using latest versions of Node.js(v10.15.3) and Express (4.17.1).
   - The application uses the cloud based database ( MongoDB atlas ) which provided database as service. 
   - Mongoose Middleware was used to intergrate the application with cloud based MongoDB
   - Jquery CDN was added as well to make the AJAX calls when user clicks the 'ADD/DELETE' Button
   
   ## Screenshots
   
   - GET To Do Items 
   ![Alt text](/Screenshots/Output_1.png?raw=true "Displaying all the To Do Items")
   - POST To Do Item
   ![Alt text](/Screenshots/Output_2.png?raw=true "Adding a To Do Item")
   - Delete To Do Item
   ![Alt text](/Screenshots/Output_3.png?raw=true "Deleting a To Do Item")
   
   
   
   
   
   
   
  
  
