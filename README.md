# Event Planner 
A web application where users can create and manage scheduler events that comply to the iCalendar specification. uses a RESTful API for a backend service.

## Primary tools used
* NodeJS 
* Express
* MongoDB with Mongoose

## Getting Started 

### Prerequisites
* NodeJS 12.x 
* A mongoDB instance

### Setup
1) Install dependencies using `npm install`
2) Rename `.env.default` to `.env` and set environment variables such as your mongoDB instance uri.

### Scripts 
* `npm run start` - Spins up server.
* `npm run start-dev` - Spins up server using nodemon for hot reloading.
