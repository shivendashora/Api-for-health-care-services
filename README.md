#Api-for-health-care-services
Clone the Repository using git clone https://github.com/shivendashora
Navigate to the Project Directory cd your-repo-name
Install Dependencies(eg npm and others for node and express)
Create a .env File for storing mongodb uri and port no
hit the command npm start to run the server if everything goes right the server would be running 
now for cheking the api endpoints Install Postman
Add a New Service (POST) URL: http://localhost:5000/api/services
Method: POST
Body (JSON)
Make a GET request on the postman to Retrieve All Services:
Method: GET
to update a service use PUT here since we are using mobgodb so the updataion would be done in terms of id of the stored item:
Method: PUT
To DELETE a service we use the delete service similarly with using id of the item using the id it would delete the requested item:
Method: DELETE
