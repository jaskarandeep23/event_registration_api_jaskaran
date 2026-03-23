## Overview

In this project, I added security using:

1. Helmet.js (for security headers)
2. CORS (to control who can access the API)

These help protect the API from common web security problems.

---

## Helmet.js Configuration

### Configuration Applied

```ts
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
    },
    noSniff: true,
    referrerPolicy: { policy: "no-referrer" },
  })
);


## Justification
contentSecurityPolicy: false
I disabled this because my API only returns JSON, not HTML pages.
frameguard: deny
Prevents the app from being opened inside an iframe → stops clickjacking.
hsts
Forces browser to use HTTPS → makes connection secure.
noSniff
Stops browser from guessing file types → improves security.
referrerPolicy: no-referrer
Prevents sharing request info with other sites.
Sources
https://helmetjs.github.io/
https://owasp.org/www-project-secure-headers/

## CORS Configuration
### Configuration Applied
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

## Justification 
origin
Only allows my frontend apps → blocks unknown websites.
methods
Only allows required HTTP methods → safer.
allowedHeaders
Only allows needed headers → prevents misuse.
credentials: false
No cookies needed → reduces risk.
OPTIONS handling
Supports preflight requests → required for browser security.
Sources
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://expressjs.com/en/resources/middleware/cors.html


## Summary

Helmet protects the API using security headers.

CORS controls who can access the API.

Together, they make the API more secure.