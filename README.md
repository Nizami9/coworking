

# Coworking-Project 

READ ME - SITE FOR COWORKING SPACE



Description 

A site where you can find space for Working. One can see all the available space for work specific to location, book for a day or for months, also able to do the payment through this site.



**User Stories**

**Login**                     As an **ADMIN**  i can login to site and i am able to see all the Users and  bookings.

**Add new Space**   As an **Admin** i can add new spaces to the site.

**Edit Space**            As an **Admin** i can Edit or Delete an existing space.

**sign up**                  As a **USER**  i can sign up in the site to see all the available spaces that suits me.

**Login**                      As a **USER** i can  login to site to book a space and do the payments.

**Edit Booking**         As a **USER**  i can make changes in  the bookings.

**Edit User**               As a **USER** i can edit my profile, see all the bookings that i made.



**#Backlog**

- Login page
- profile 
- see all the spaces in map
- Reserve a space
- adding payment 
- add a chat with Admin



**# Client / Frontend**

**#React Router Routes**

| path              | Component    | Permissions | Behavior                                                     |
| ----------------- | ------------ | ----------- | ------------------------------------------------------------ |
| '/'               | LandingPage  | public      | Landing Page with search component                           |
| '/signup'         | SignupPage   | public      | Signup form, Link to Login,Navigate to home page after sign up |
| '/login'          | LoginPage    | public      | Login form,Link for Sign up, Navigate to homepage after signup |
| '/home'           | HomePage     | User/Admin  | Show Search bar                                              |
| '/spaces'         | ViewSpaces   | User        | List all the available spaces                                |
| '/spaces/:id'     | DetailedView | User        | show details of the selected space                           |
| '/book/:id'       | BookingPage  | User        | Booking options with Calendar                                |
| '/payment/:id'    | PaymentPage  | User        | Payment options                                              |
| '/confirmBooking' | ThankyouPage | User        | button to go to profile/account                              |
| '/profile/:Uid'   | UserProfile  | User        | Profile with booking details                                 |
| '/Edit/:id'       | EditBooking  | user        | User can edit bookings                                       |
| '/Edit/:Uid'      | EditProfile  | user        | user can edit account details                                |





**# Componenets**

- LandingPage
- Navbar
- SignupPage
- LoginPage
- HomePage
- ViewSpaces
- DetailedView
- BookingPage
- PaymentPage
- ThankyouPage
- UserProfilePage
- EditProfile
- EditBooking



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Booking Service
  - Spces.list()
  - Space.detailedView(id)
  - space.add(id)
  - space.delete(id)
  - space.edit(id)
- User Service
  - user.detail(id)



 # Server / Backend

## Models

User model

```
{
  userFirstName: {type: String, required: true},
  userLastName: {type: String, required: true},
  loginName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  bookings:{type:int},
  phone :{type :int}
 
}
```



Space model

```
{
  owner: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  spaceId: {type: int , required: true},
  address:{type :string, required:true},
  city:{type :string, required:true},
  country:{type :string, required:true},
  availableSeats:{type :int, required:true},
  area:{type :int, required:true},
  costPerDay:{type :int, required:true},
}
```



Booking model

```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  spaceId: {type: int , required: true},
  createdDate : date: { type: Date, default: Date.now }
  fromDate : date: { type: Date},
  toDate :  date: { type: Date},
}
```





## Backend routes

| HTTP Method | URL            | Request Body                | Success status | Error Status | Description                                                  |
| ----------- | -------------- | --------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                             | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` | {name, email, password}     | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}        | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)                     | 204            | 400          | Logs out the user                                            |
| POST        | /booking/:id   | {name,spaceid,date }        |                |              | Used to create one booking , using current logged in user id as a creator. |
| POST        | /payment/:id   | {name,spaceid,dates,}       |                |              | Used to do payment                                           |
| PUT         | /booking/:id   |                             |                |              | Used to edit the booking                                     |
| DELETE      | /booking/:id   |                             |                |              | Used to delete one exit point document by id                 |
| GET         | /user/id       | {username, email, password} |                |              | Used to edit  profile.                                       |
| PUT         | /users         |                             |                |              | use to see all users                                         |


