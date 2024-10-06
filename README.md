# NestJS Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

A progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications using NestJS.

## Requirements

- **Node.js**: Make sure you have Node.js installed (preferably version 14 or later).
- **MongoDB**: A running instance of MongoDB is required for this application. You can run MongoDB locally or use a cloud-based solution.

## Setting Up MongoDB

### Running MongoDB Locally with Docker

To run MongoDB locally using Docker, use the following command:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### Connecting to MongoDB

The application connects to MongoDB running on `localhost:27017`. Ensure that your MongoDB instance is accessible from the application.

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

## Compile and Run the Project

To run the application, use the following command:

```bash
yarn start
```

This will start the NestJS application on port **3000**. You can access the application at `http://localhost:3000`.

## Fetch Users

To retrieve all users from the database, a script is provided. You can run this script using the following command:

```bash
node users.js
```

This script connects to your MongoDB instance, fetches all users from the `users` collection, and logs them to the console.

### Example User Schema

The `User` schema used in the application is defined as follows:

```javascript
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});
```

## Running Tests

To run the tests for the application, use the following commands:

```bash
# Unit tests
yarn test

# End-to-end tests
yarn test:e2e

# Test coverage
yarn test:cov
```

## Resources

For more information about NestJS, visit the [NestJS Documentation](https://docs.nestjs.com).


## Stay in Touch
- LinkedIn - [Shreyash Shetty](https://www.linkedin.com/in/shreyash-shetty/)

## License

This project is licensed under the MIT License.
