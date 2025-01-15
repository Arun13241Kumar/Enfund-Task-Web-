This project involves creating a responsive webpage with the following features:

A fixed navbar that does not move when scrolling.
A layout with three sections: a left menu, a main content area, and a right-side panel.
A collapsible left menu.
A footer at the bottom of the page.
A JavaScript function that adjusts the page's width based on screen size.
Features
1. Fixed Navbar
The navbar remains at the top of the page and does not move when the user scrolls down.
2. Layout with Three Sections
The page is divided into three sections:
Left Menu: A collapsible sidebar that contains navigation links or items.
Main Content Area: The central area of the page where the primary content is displayed.
Right-Side Panel: A section on the right side that can be used for additional information or widgets.
3. Collapsible Left Menu
The left menu can be collapsed to give more space to the main content. It is expandable again with a button.
4. Footer
A footer is placed at the bottom of the page, containing basic information or links.
5. JavaScript Resizing Function
The page layout dynamically shrinks based on the screen width:
If the screen width is between 992px and 1600px, shrink the page by 90%.
If the screen width is between 700px and 767px, shrink the page by 80%.
If the screen width is between 600px and 700px, shrink the page by 75%.
If the screen width is 600px or less, shrink the page to 50%.
Setup
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-folder>
2. Open the Project
Open the project folder in your preferred code editor.

3. HTML and CSS Setup
The project includes HTML and CSS files that you can edit to customize the layout:

index.html: The main HTML file.
styles.css: The CSS file for styling the page layout, navbar, left menu, main content, and footer.
4. JavaScript for Dynamic Resizing
The resize.js file contains the JavaScript function that dynamically adjusts the page width based on the screen size. It should be linked in the HTML file like this:

html
Copy code
<script src="resize.js"></script>
Ensure that the JavaScript file is included at the end of the body section of your HTML file so it runs after the page loads.

Usage
Running the Project Locally
To run the project locally, simply open the index.html file in a web browser. The page should load, and you can interact with the features like the fixed navbar, collapsible left menu, and responsive layout.

Screen Responsiveness
Test the resizing functionality by adjusting the width of your browser window. The page should shrink according to the specified breakpoints.

Collapsible Left Menu
The left menu can be toggled open or closed using the button provided. The menu's state (open/closed) is handled using CSS and JavaScript.
