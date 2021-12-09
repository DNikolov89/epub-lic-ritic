    # epub-lic-ritic
    ePUB/lic/ritic app

ePUB/ilc/ritic is a site that connects young authors and book lovers with their passion for ebooks.
The app is build on React with Express JS for backend and MongoDB Atlas for app database.


    ## Initial setup ##

1. Server - For initial setup enter the server directory with "cd server" on terminal and install all dependencies with "npm i";
2. Frontend - For initial setup enter the frontend direcotry with "cd frontend" on terminal and install all dependencies with "npm i";


    #App start#

1. To start the server - while in server directory in terminal enter "npm start" to start the server in production mode. By default the server starts on port 5000;
2. To start the react app - while in frontend directory in terminal enter "npm start". By default the app starts on http://localhost:3000;


    ## App map ##

  By default the app has two views - Guest and Logged user:

  1. Guest user view has access only to Main view with two-page carrossel /Welcome-About us and Register/. The only available links are Home, About, Register and Login.
  
  2. Logged user view has access to Main view with added section "Three last books" for the las three added books in the app. The availabe links for logged users are Home, 
  Categories, Add e-book, My e-books, About us, Logout and Welcome, @email message that serves as User profile section that allows for edit and delete functionality for the
  current logged user. For logged users there is search functionality available that searches by keyword in Title, Author and Description though all uploaded ebooks.


    ## Authentication ##
    
  The app comes preloaded with two user profiles as follows:
    
    email: dan@gmail.com
    password: 123456
    
    email: geremy@gmail.com
    password: 123456
    
  Initially the preloaded books are uploaded from dan@gmail.com who can edit/delete the uploaded books.
  From geremy@gmail.com you can view all books and vote as all the preloaded books are not uploaded from this profile.
