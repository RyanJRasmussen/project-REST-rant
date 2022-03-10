# Project REST-Rant

REST-Rant is an app where users can review restaurants.

To-Do list of paths to add and their purposes, along with the method that will be used
| Method  | Path | Purpose |
| ------------- | ------------- | ------- |
| GET  | / | Content |
| GET  | /places  | Home page |
| POST  | /places  | Places index page |
| GET  | /places/new  | Create new place |
| GET  | /places/:id  | Form page for creating a new place |
| PUT  | /places/:id  | 	Details about a particular place |
| GET  | /places/:id/edit  | Update a particular place |
| DELETE | /places/:id | Form page for editing an existing place |
| POST  | /places/:id/rant  | Create a rant (comment) about a particular place |
| DELETE  | /places/:id/rant/:rantId  | Delete a rant (comment) about a particular place |
| GET  | * | 	404 page (matches any route not defined above) |