# MatchDay Project

MatchDay is a web application designed to provide users with information about upcoming football matches, allowing them to register, log in, and manage their favorite teams. This project showcases the application of corporate identity in web development.

## Features

- **User Registration and Login**: Users can create an account and log in to access personalized features.
- **Upcoming Matches**: Display a list of upcoming football matches.
- **Favorite Teams Management**: Users can add and manage their favorite teams.

## Project Structure

```
MatchDay
├── src
│   ├── server.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── matches.js
│   │   └── teams.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── matchController.js
│   │   └── teamController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── userModel.js
│   │   ├── matchModel.js
│   │   └── teamModel.js
│   ├── data
│   │   ├── users.json
│   │   ├── matches.json
│   │   └── teams.json
│   └── utils
│       └── helpers.js
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   └── assets
├── views
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── matchday.html
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd MatchDay
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Server**: 
   ```
   node src/server.js
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- Node.js
- Express.js
- JSON for data storage
- HTML, CSS, and JavaScript for frontend development

## Contribution

Feel free to contribute to this project by submitting issues or pull requests.