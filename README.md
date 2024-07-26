
# Weather App

A simple and responsive weather application built with React.js. This app allows users to check the current weather of their location or search for the weather of any city worldwide.

## Features

- **User Location Weather**: Automatically fetches and displays weather information for the user's current location upon granting access.
- **City Weather Search**: Allows users to search for weather information by city name.
- **Loading Indicator**: Displays a loading animation while fetching weather data.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Screenshots

![Home](./public/assets/screenshot-home.png)
![Search](./public/assets/screenshot-search.png)

## Technologies Used

- React.js
- Tailwind CSS
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
weather-app/
├── public/
│   ├── assets/
│   │   ├── location.png
│   │   ├── loading.gif
│   │   ├── search.png
│   │   ├── wind.png
│   │   ├── humidity.png
│   │   ├── cloud.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GrantAccess.js
│   │   ├── Loading.js
│   │   ├── SearchForm.js
│   │   ├── Tab.js
│   │   └── WeatherInfo.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .gitignore
├── package.json
└── README.md
```

## Components

- **App**: The main component managing state and rendering child components based on the active tab.
- **Tab**: A reusable tab component for switching between user weather and search weather views.
- **GrantAccess**: A component prompting the user to grant location access.
- **Loading**: A component displaying a loading animation while fetching data.
- **SearchForm**: A component with a form for searching weather by city name.
- **WeatherInfo**: A component displaying weather information for the given data.

## Usage

### Granting Location Access

When you first open the app, you will be prompted to grant location access. This is necessary to fetch the weather information for your current location. If you deny access, you can still use the search functionality to look up weather data for any city.

### Searching for City Weather

Switch to the "Search Weather" tab and enter the city name in the search bar. The app will fetch and display the weather information for the entered city.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the content as per your project's specific details and requirements.
