MedDot - Health Information and Entertainment App

MedDot is a versatile React application that offers users access to health-related information and entertainment features. This README provides an overview of the main components, functionalities, and instructions for installation.

Table of Contents
1.Introduction
2.Installation
3.Dependencies
4.Features

Card Component: Health Information
HealthNews Component: Latest Health Updates
LameJoke Component: Lame Joke Generator
Navbar Component: Navigation Bar


Introduction

MedDot is a React application that combines health-related data fetching and entertainment features. It utilizes various APIs to provide users with essential health information, latest news updates, and random lame jokes for amusement.

Installation
1.To run the MedDot application locally:

2.Clone this repository to your local machine.

3.Navigate to the project directory in the terminal.

4.Run the following command to install dependencies:" npm install "

5.After the installation is complete, start the development server: " npm start "

Dependencies
The MedDot application requires the following dependencies:

react: JavaScript library for building user interfaces.
react-dom: Entry point to the React library for web applications.
xml-parser: Library for parsing XML data.
bootstrap: CSS framework for responsive and modern designs.

To install the required dependencies, run the following command:

"  npm install react react-dom xml-parser bootstrap   "


Features
Navbar Component: Navigation Bar
	Provides a navigation bar with links to different sections of the application.
	Includes links for "Home," "Documentation," "Source Code," and "API Collection."
	Offers a search feature with an input field and a "Search" button.
Card Component: Health Information
	Fetches and displays data about essential life-saving medicines, hospital names, and blood bank details from different APIs.
	Allows users to explore these key features through buttons that trigger data display.
	Utilizes conditional rendering to show the relevant data table based on user selections.
HealthNews Component: Latest Health Updates
	Fetches and displays the latest health-related news articles from an external API.
	Provides a button to trigger the retrieval of news updates.
	Renders news articles in responsive cards, each featuring the article's title, image, source name, and published date.
LameJoke Component: Lame Joke Generator
	Fetches and displays random lame jokes from an external joke API.
	Offers a button to retrieve a new joke and enjoy a moment of humor.
	Presents the joke in a visually appealing container with a setup and punchline.



API Documentation

Healthcare Centers API

Base URL:https://script.google.com/macros/s/AKfycbxFwBrk6_EllJ_ig_GTFxHaKe_cIcEryfPXuw8rJ648lHggZb70KeVaUzgNMJpXBVz5YQ/exec
Endpoints:Get Healthcare Centers
Endpoint: /healthcare-centers
Method: GET
Description: Retrieve a list of healthcare centers along with their corresponding state, city, district, hospital name, address, and contact details
Response:

Status: 200 OK
Data: An array of healthcare center objects, each containing the following fields:
State (string): The state where the healthcare center is located.
City (string): The city where the healthcare center is located.
District (string): The district where the healthcare center is located.
h_name (string): The name of the healthcare center or hospital.
Address (string): The address of the healthcare center.
Contact (string): Contact details for the healthcare center.


Joke API
Base URL :https://official-joke-api.appspot.com
Endpoints: Get Random Joke
Endpoint: /random_joke
Method: GET
Description: Retrieve a random joke with a type, setup, punchline, and ID.
Response:

Status: 200 OK
Data: An object containing the following fields:
type (string): The type of the joke.
setup (string): The setup of the joke.
punchline (string): The punchline of the joke.
id (number): The unique ID of the joke.


NewsAPI
Base URL:https://newsapi.org/v2
Endpoints:Get News Articles
Endpoint: /everything
Method: GET
Description: Retrieve news articles related to the specified topic.
Parameters:
q (string, required): The search query for news articles.
apiKey (string, required): Your API key for accessing the data.
Response:

Status: 200 OK
Data: An object containing the following fields:
status (string): The status of the response.
totalResults (number): The total number of news articles.
articles (array): An array of news article objects.


Healthcare Centers API

### Base URL: `https://script.google.com/macros/s/AKfycbxFwBrk6_EllJ_ig_GTFxHaKe_cIcEryfPXuw8rJ648lHggZb70KeVaUzgNMJpXBVz5YQ/exec`

### Endpoints: Get Healthcare Centers

**Endpoint:** `/healthcare-centers`

**Method:** GET

**Description:** Retrieve a list of healthcare centers along with their corresponding state, city, district, hospital name, address, and contact details.



