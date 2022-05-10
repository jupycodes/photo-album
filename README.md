# photo-album

## RoboGarden Bootcamp - Module 2 Assignment
Using Bootstrap to create a website for a mock wedding photography business (front-end only)

*still to complete*
-button enable once all form fields are validated

## Assignment Prompt
Step (1)
In this project, you will create a photo album website. Moreover, you will find a snippet of code, which you will use to debug and fix. The website will contain three different sections:
Home page: in the home page you will find information about the website.
Feedback Page: in the feedback page the user can fill in the form with his name, image title, and their comment about that image.
Catalog: in the Catalog page the user will find different photos each with its title arranged in a grid view.
* Remember you can always debug your JavaScript and jQuery code using logs.


Step (2)
Create a project folder on your Desktop and open it in your favorite text editor. Afterward, create an empty HTML file. Call it startup_website.html.
This file should contain the basic HTML elements like the title, head, and body tags.

Step (3)
Create a CSS document and link it with your HTML document.

Step (4)
Setup the required configuration to use bootstrap and jQuery libraries.

Step (5)
Using bootstrap:
Insert a responsive web navigation bar contains (Home page, Catalog, Feedback) and navigate each of these tabs to a different page.
Insert a responsive jumbotron.
* Helpful links:
https://mdbootstrap.com/docs/jquery/navigation/navbar/
https://www.w3schools.com/bootstrap/bootstrap_jumbotron_header.asp
https://getbootstrap.com/docs/4.0/components/jumbotron/

Step (6)
Insert the following code in the home page and debug it using w3 CSS Validator, inspector, and breaking points.'


Step (7)
Create a grid view with three columns and three rows.
In each row create three images with their titles as shown in the description.
Using jQuery give each image a border and give the title a font family and colour.
Ensure you make the images and their titles responsive.
Using media query target multiple devices screens (laptop and inch 9 tablet).

Step (8)
Create a web form that cannot be submitted until the content of each field has been validated:
Username: must be at least 6 characters.
Image title: cannot be empty.
Comment: cannot be empty.
Create a span element that displays error messages for validation errors beside each field.
Use jQuery to hide the error messages initially.
Use the focusout() jQuery method to check if a field has been populated.
Validate the fields when they are populated.
Display the appropriate error message(s) if fields do not meet the validation criterion.
Activate the Submit button when all fields are populated and validated.
Using jQuery, give the submit button a border and a background color.
