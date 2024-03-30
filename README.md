To Fetch Task:
URL : http://localhost:5000/fetch-task
Method: GET

 
URL: http://localhost:5000/fetch-task
Method : POST
Request :
{
    "title": "test",
    "description": "for test",
    "status":" Fetch"
}



To Create task:
URL: http://localhost:5000/create-task
Method : POST
Request: {
    "title": "POOOJA Mishra",
    "description": "distract",
    "status":"single"
}



To update task:
URL: http://localhost:5000/update-task
Method : PATCH
Request: 
{
  "find_args": {"title" : "test test"},
  "update_args": {
    "status": "update test test"
  }
}

{
  "find_args": {"status" : "test test"},
  "update_args": {
    "description": "update description"
  }
}


To Delete Task:
URL: http://localhost:5000/delete-task?deleteBy=title&deleteval=shoppping
Method: DELETE
