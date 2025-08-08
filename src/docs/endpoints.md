# API Endpoints Documentation

## User Endpoints

### Retrieve User List
- **URL**: `/api/users`
- **Method**: `GET`
- **Description**: Retrieves a list of all registered users.
- **Response Codes**: `200 OK`

### Create New User
- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Creates a new user with unique username and email.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response Codes**: `201 Created`

## Authentication Endpoints

### User Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response Codes**: `200 OK`, `401 Unauthorized`

## Media Endpoints

### Upload a New Snap
- **URL**: `/api/snaps`
- **Method**: `POST`
- **Description**: Uploads a new snap (photo or video).
- **Response Codes**: `201 Created`

### Retrieve a Specific Snap
- **URL**: `/api/snaps/{id}`
- **Method**: `GET`
- **Description**: Retrieves details of a specific snap by ID.
- **Response Codes**: `200 OK`, `404 Not Found`

## Chat Endpoints

### Retrieve Chat History
- **URL**: `/api/chats`
- **Method**: `GET`
- **Description**: Retrieves chat history for authenticated user.
- **Response Codes**: `200 OK`

### Send a New Message
- **URL**: `/api/chats`
- **Method**: `POST`
- **Description**: Sends a new chat message to a specified user.
- **Request Body**:
  ```json
  {
    "message": "string",
    "receiverId": "integer"
  }
  ```
- **Response Codes**: `201 Created`

## Stories Endpoints

### Retrieve User Stories
- **URL**: `/api/stories`
- **Method**: `GET`
- **Description**: Retrieves all stories of authenticated user.
- **Response Codes**: `200 OK`

### Upload a New Story
- **URL**: `/api/stories`
- **Method**: `POST`
- **Description**: Uploads a new story (photo or video) for the user.
- **Response Codes**: `201 Created`