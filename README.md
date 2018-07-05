# Google Udacity Frontend Nanodegree Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, the developer incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, he took a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. He also added a service worker to begin the process of creating a seamless offline experience for users.

### Specification

He  was provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It didn’t include any standard accessibility features, and it didn’t work offline at all. The developer's job was to update the code to resolve these issues while still maintaining the included functionality. 

### How do I run the application?

In this folder, start up a simple HTTP server to serve up the site files on your local computer. 

Instructions on how to set up a simple http server are found at http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server

​	Download and install NodeJS:

If you haven't installed Node yet, download the latest stable release of NodeJS from <https://nodejs.org> and install using all the default options.

​	Install the http-server package from npm

Install the http-server globally on your machine using the node  package manager (npm) command line tool, this will allow you to run a  web server from anywhere on your computer.

Open a command prompt / command line window and enter the following:

`npm install -g http-server` 

​	Start a web server from a directory containing static website files

Change to the directory containing your static web files (e.g. HTML, JavaScript, CSS, etc.,) in the command line window, e.g:

`cd \projects\angular-registration-login-example` 

Start the server with this command:

`http-server` 

You should see something like the following:

`C:\projects\angular-registration-login-example>http-server`

`Starting up http-server, serving ./`

`Available on:`

`  ``http://192.168.0.5:8080`

`  ``http://127.0.0.1:8080`

`Hit CTRL-C to stop the server`



Open your browser and go to the address http://localhost:8080 and you should see your local website.



## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). The developer needed to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project had been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, an attempt was made to maintain use of ES6 in any additional JavaScript written. 



