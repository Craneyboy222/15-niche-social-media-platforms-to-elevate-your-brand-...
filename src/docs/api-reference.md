# API Reference

This document provides detailed information on the API endpoints available in the Enterprise Application.

## Authentication

### POST /api/auth/login
- **Description**: Authenticates a user and returns a JWT token.
- **Parameters**:
  - `username`: The user's username.
  - `password`: The user's password.
- **Response**:
  - `200 OK`: Returns a JWT token.
  - `401 Unauthorized`: Authentication failed.

## User Management

### GET /api/users
- **Description**: Retrieves a list of all users.
- **Response**:
  - `200 OK`: Returns a list of users.

### POST /api/users
- **Description**: Creates a new user.
- **Parameters**:
  - `username`: The new user's username.
  - `password`: The user's password.
  - `email`: The user's email address.
- **Response**:
  - `201 Created`: User created successfully.

## Media Management

### POST /api/snaps
- **Description**: Uploads a new snap (photo or video).
- **Parameters**:
  - `file`: The media file to upload.
- **Response**:
  - `201 Created`: Snap uploaded successfully.

### GET /api/snaps/{id}
- **Description**: Retrieves a specific snap by ID.
- **Response**:
  - `200 OK`: Snap details.
  - `404 Not Found`: Snap not found.

## Chat

### GET /api/chats
- **Description**: Retrieves chat history.
- **Response**:
  - `200 OK`: List of chat messages.

### POST /api/chats
- **Description**: Sends a new chat message.
- **Parameters**:
  - `message`: The message content.
  - `receiverId`: The ID of the receiver.
- **Response**:
  - `201 Created`: Message sent successfully.

## Stories

### GET /api/stories
- **Description**: Retrieves user stories.
- **Response**:
  - `200 OK`: List of stories.

### POST /api/stories
- **Description**: Uploads a new story.
- **Parameters**:
  - `file`: The media file to upload.
- **Response**:
  - `201 Created`: Story uploaded successfully.

## Error Handling
- All endpoints return appropriate HTTP status codes.
- Common error codes:
  - `400 Bad Request`: Invalid input.
  - `401 Unauthorized`: Authentication required.
  - `404 Not Found`: Resource not found.
  - `500 Internal Server Error`: Unexpected server error.

## Logging
- All requests and responses are logged for audit purposes.
- Sensitive information such as passwords are never logged.

## Security
- JWT is used for securing endpoints.
- HTTPS is enforced for all API communications.
- User input is validated and sanitized to prevent security vulnerabilities.