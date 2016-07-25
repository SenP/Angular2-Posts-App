#Posts App built on Angular 2 (RC1)

Developed using TypeScript.

Demonstrates usage of the following Angular 2 concepts/modules:

- Components
- Pipes
- Services / HTTP
- Change Detection
- Routing
- Forms and Data binding
- Interface/Class models
- Dependency Injection
- Providers
- Custom components (e.g. pagination), 
- Inter-Component communication using @Input, @Output
- View encapsulation
- Bootstrapping providers

Also demonstrates using RxJS Observables instead of Promises to handle async operations.

Features:

  - Show navigation bar with links for Users and Posts views
  - Users View:
    - Show list of users
    - Edit and Delete links for each user
    - Add a new User using a new form
  - Posts View:
  	- Show list of posts
    - Filter Posts by User
    - Pagination of Posts
    - Show associated comments on a Post when clicked

It uses http://jsonplaceholder.typicode.com to simulate HTTP calls.

As the backend is read-only, Add/Edit/Remove actions are currently in-memory simulations.

Screenshots:

Home:
![Home](https://github.com/SenP/Angular2-Posts-App/blob/master/images/home.PNG)

Users List:
![Users List](https://github.com/SenP/Angular2-Posts-App/blob/master/images/users.png)

Create User:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/create user.png)

New User added to the users list:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/new user added.png)

Edit User:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/edit user.png)

Edited user details updated in users list:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/edited user.png)

Delete user confirmation:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/delete user confirmation.png)

Deleted user removed from users list:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/after user delete.png)

Posts List:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/posts list.png)

Posts for Selected User:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/posts for user.png)

Post Detail and Comments Display:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/posts and comments.png)

Posts list navigation to last page:
![Screenshots](https://github.com/SenP/Angular2-Posts-App/blob/master/images/posts last page.png)

