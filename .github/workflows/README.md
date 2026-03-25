# Event Registration API

## Project Overview

The Event Registration API is a backend service that allows users to manage events. It provides functionality to create, read, update, and delete events with proper validation and structured responses.

This API solves the problem of managing event data efficiently in a centralized system. It ensures data integrity using Joi validation and provides secure access using best practices like Helmet.js and CORS configuration.

This API is designed for developers building frontend applications or services that need event management functionality.

---

##  Installation Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm installed
- Git

---

### Step 1: Clone the repository

```bash
git clone https://github.com/jaskarandeep23/event_registration_api_jaskaran.git
cd event_registration_api_jaskaran


### Step 2: Install dependencies
npm install

### Step 3: Setup environment variables
cp .env.example .env (must create port=3000)

### Step 4: Run the server
npm run dev


## API REQUEST EXAMPLES
### Get All events
Curl -X--GET http://localhost:3000/api/v1/events
Response (200 OK):

[
  {
    "id": "1",
    "name": "Tech Conference",
    "date": "2026-04-01",
    "location": "Winnipeg",
    "capacity": 100
  }
]

## Security Testing 

The API security configurations were tested using Postman to verify Helmet.js and CORS functionality.

### Helmet.js Security Headers

The following security headers were successfully verified in the API responses:

- X-Frame-Options: DENY → prevents clickjacking attacks  
- X-Content-Type-Options: nosniff → prevents MIME-type sniffing  
- Strict-Transport-Security → enforces HTTPS connections  
- Referrer-Policy: no-referrer → protects sensitive referrer data  
- X-DNS-Prefetch-Control → controls DNS prefetching  
- X-Permitted-Cross-Domain-Policies → restricts cross-domain policies  

These headers were confirmed on multiple endpoints:

- `/api/v1/health`
- `/api/v1/events`

This demonstrates that Helmet.js is applied globally across the application.

---

### CORS Configuration Testing

CORS headers were verified using Postman by sending requests with an origin:

- Access-Control-Allow-Origin: http://localhost:5173  
- Vary: Origin  

This confirms that only allowed origins can access the API.

---

### CORS Preflight Request (OPTIONS)

A preflight request was tested using the OPTIONS method:

- Status: 204 No Content  
- Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE  
- Access-Control-Allow-Headers: Content-Type, Authorization  

This confirms that the API correctly handles cross-origin preflight requests.

---

### Summary

The testing confirms that:

- Helmet.js is properly securing HTTP headers
- Security headers are applied globally across all endpoints
- CORS is correctly configured to allow controlled access
- Preflight requests are handled correctly

These configurations improve the overall security of the API and follow best practices recommended by OWASP and Helmet.js documentation.


### Link to public documentation
https://jaskarandeep23.github.io/event_registration_api_jaskaran/

### Local documentation Access
http://localhost:3000/api-docs/
