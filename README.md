# Event Planner 
A web application where users can create and manage scheduler events that comply to the iCalendar specification. Uses a RESTful API for a backend service.

## Primary tools used
* NodeJS 
* React
* Express
* MongoDB with Mongoose

## Getting Started 

### Prerequisites
* NodeJS 12.x 
* A mongoDB instance

### Setup
1) Install dependencies using `npm install`
2) Rename `.env.default` to `.env` and set environment variables such as your mongoDB instance uri.

### To run in development 
* Run `npm run start-client-dev` and `npm run start-server-dev` on two different terminals to spin up 
the backend server and create-react-app server.
## Scripts 
* `npm run start-client-dev` - spins up react-server that serves client code for hot reloading.
* `npm run start-server` - Spins up server.
* `npm run start-server-dev` - Spins up server using nodemon for hot reloading.
* `npm run build-client` - builds produciton-ready client code into `public/` dir.

#
