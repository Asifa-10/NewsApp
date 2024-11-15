# NewsWeb App
A single-page ReactJS news web app that displays top headlines across various categories using the NewsAPI. The app supports both desktop and mobile views, with a collapsible navigation menu for category selection and a responsive layout that adapts to different screen sizes.

## Features
* ***News Categories:*** Browse news across categories like Business, Entertainment, General, Health, Science, Sports, and Technology.
* ***Responsive Design:*** Adapts to desktop and mobile screens with a collapsible side navigation menu.
* ***Dynamic Content:*** Fetches news from the NewsAPI, updating based on the selected category.
* ***Article Preview:*** Click on a news card to preview the article content.
  * _Desktop:_ Preview appears on the right side of the screen.
  * _Mobile:_ Preview appears in a popup.

## Technologies Used
* ***ReactJS:*** Core front-end framework
* ***Axios:*** For API requests
* ***Material-UI:*** For UI components and responsive design

## Prerequisites
* Node.js and npm installed on your local machine
* An API Key from NewsAPI



# Getting Started
## 1. Clone the Repository
```
  git clone https://github.com/your-username/news-web-app.git
  cd news-web-app
```
## 2. Install Dependencies
Install required packages by running:
```
  npm install
```
## 3. Add NewsAPI key
Add your NewsAPI key in the NewsPage.js file:
```
  const API_KEY = 'your_newsapi_key';
```
## 4. Run the App
Start the development server:
```
  npm start
```
The app will be running at http://localhost:3000.



# Project Structure
```
src/
├── components/
│   ├── NavBar.js           // Collapsible navigation bar
│   ├── NewsCard.js         // Individual news card component
│   ├── NewsList.js         // List of news cards
│   └── NewsPreview.js      // News article preview component
├── pages/
│   └── NewsPage.js         // Main news page
└── App.js                  // Main App component
```


# API Integration
This app uses the NewsAPI Top Headlines Endpoint to fetch news. The API key is required to access the API and should be stored in an NewsPage.js file.

Example API Request:
```
  axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      category: 'technology',
      country: 'us',
      apiKey: API_KEY
    }
  });
```

## Usage
* ***Choose a Category:*** Use the side navigation bar to select a news category.
* ***View News Articles:*** Articles are listed as clickable cards.
* ***Read Full Article:***
  * On desktop, the article preview appears on the right side of the screen.
  * On mobile, the article opens in a popup dialog.
 
## Contributing
If you'd like to contribute, please fork the repository and create a pull request with your changes.
* Fork the project.
* Create your feature branch (git checkout -b feature/YourFeature).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature/YourFeature).
* Open a pull request.

## Acknowledgments
* NewsAPI for providing the news data.
* Material-UI for the user interface components.

## 
Enjoy reading the news! 😊
