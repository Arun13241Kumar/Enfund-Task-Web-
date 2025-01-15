This is a Django-based chat application that allows users to sign up, log in, and send messages in real-time using WebSockets. The application features a user-friendly interface, a collapsible left menu displaying all registered users, and stores messages in the database.

Key Features:
User Authentication:

Users can sign up and log in.
Authentication is handled via Django's built-in authentication system.
Real-Time Chat:

The chat application uses WebSockets to enable real-time communication between users.
Messages are displayed immediately as they are sent.
Collapsible Left Menu:

A collapsible sidebar that displays a list of all registered users.
Logged-in users can select any user from the menu to start a chat.
Message History:

Old messages are retrieved from the database and displayed when users open a chat.
User Interface:

The chat interface is designed to be simple and intuitive, with a modern layout.
The user experience is enhanced with features like message notifications and smooth interactions.
Setup
Prerequisites
Python 3.6+
Django 5.1.4
Channels 3.0.5
Redis (for handling WebSockets)
