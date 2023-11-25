const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Use the cors middleware with appropriate options
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with the origin of your frontend application
    methods: ['GET', 'POST'], // Specify the HTTP methods allowed
    credentials: true, // Allow credentials (cookies, headers, etc.) to be sent cross-origin
  })
);

// Configure session middleware
app.use(
  session({
    secret: 'your_secret_key', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Configure Passport.js with the Google OAuth2 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // This function is called when a user is authenticated via Google OAuth2.
      // You can handle the user's information and decide what to do next.
      // For example, create or update a user in your database.
      // Call done() with the user object or an error if applicable.
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        // Add more user properties as needed
      };
      return done(null, user);
    }
  )
);

// Initialize Passport.js and session management
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // 100 requests per hour
  message: 'Too many requests from this IP, please try again later.',
});

// Define your routes and middleware
app.get('/', limiter, (req, res) => {
  res.send('Home Page');
});

// Initiate Google OAuth2 authentication
app.get('/auth/google', limiter, passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth2 callback
app.get(
  '/auth/google/callback',
  limiter,
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Authentication successful, redirect or respond as needed
    res.redirect('/dashboard');
  }
);

// Dashboard route (accessible after successful authentication)
app.get('/dashboard', limiter, (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome, ${req.user.displayName}!`);
  } else {
    res.redirect('/');
  }
});

// Logout route
app.get('/logout', limiter, (req, res) => {
  req.logout();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
