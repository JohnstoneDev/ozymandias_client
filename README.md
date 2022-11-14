# <em>Ozymandias Book Reviews </em>

## Client side react application for a Book Review Web App. 
<br>


#### This app is setup to communicate with an api at this github repository : https://github.com/JohnstoneDev/ozymandias_server
<br>

#### When the app loads it makes a call to the Google Books API here https://www.googleapis.com/books/v1/volumes?q=  which loads a list of books according to a predefined criteria. 
<br>

#### To change the criteria or search for a specific book, author or genre, there is a search field at the top of the page that provides that option.
<br>

#### A user has an option to add a book to their collection which will post the book to the API (`ozymandias_server`) which will add the book to a database linked to the API. 

#### After a book is posted to the API, A review form will appear and the user has the options to add a review or comment to the book..

#### All reviews by the user appear in a review page, linked on the navigation bar that will list all reviews in the database. A user has the option to update the comments they made on a book. 
<br/>

#### There is an authors page that lists all the authors in the database & the books the user has collected by them. 
<br/>

#### There are various delete routes in the API : deleting all the books in the database &  deleting a specific book in the database. 
<br/>

#### To run the project locally, clone this repo, with its API https://github.com/JohnstoneDev/ozymandias_server, run `npm install` to install the project dependencies for the frontend, and `bundle install` to install the dependencies for the backend. Run the server with `bundle exec rake server` which will start on a predefined `port:9292`. then you can start the client side with `npm start`. 
<br/>

#### The backend functionality is explained at it's github repository here : https://github.com/JohnstoneDev/ozymandias_server/blob/main/README.md


<br/>

#### A live link will be added to the project once it is deployed.


