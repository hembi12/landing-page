# React App with Lazy Loading and Dark Mode

This is a React application designed with modern best practices, including lazy loading for optimized performance, multi-language support with `react-i18next`, and a toggleable dark mode.

## Features

- **Lazy Loading**: Components are loaded dynamically to improve initial load times.
- **Dark Mode Support**: Theme is saved in localStorage and applied on load.
- **Multi-language Support**: Powered by `react-i18next` for internationalization.
- **React Router**: Manages navigation within the app.

## Components

### Main Components
- **Navbar**: The navigation bar displayed at the top of all pages.
- **Hero**: The hero section with a welcoming interface.
- **WebSolutions**: Displays web solutions offered.
- **Testimonials**: Section for user testimonials.
- **Benefits**: Highlights benefits of the services/products.
- **FAQ**: Frequently asked questions.
- **Contact**: Contact form or contact details.
- **Footer**: Footer displayed across all pages.

### Pages
- **PrivacyPolicy**: Standalone page for the Privacy Policy.

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd <project-folder>
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Usage

### Routing
- The root path (`/`) displays the main sections: Hero, Web Solutions, Testimonials, Benefits, FAQ, and Contact.
- The `/privacy-policy` path renders the Privacy Policy page.

### Localization
- Update the language files in the `public/locales` directory to add or modify translations.
- Change the default language using `useTranslation` from `react-i18next`.

### Dark Mode
- The app detects the theme setting in `localStorage` (`theme: 'dark'` or `theme: 'light'`).
- The theme can be toggled by updating the `theme` key in localStorage.

## File Structure

```
.
├── public
│   ├── index.html
│   └── locales
│       ├── en
│       │   └── translation.json
│       └── other-languages
│           └── translation.json
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Benefits.js
│   │   ├── WebSolutions.js
│   │   ├── Testimonials.js
│   │   ├── FAQ.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── pages
│   │   └── PrivacyPolicy.js
│   ├── App.js
│   ├── index.js
│   └── i18n.js
├── .env
├── package.json
└── README.md
```

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `react-i18next`
- `i18next`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

**Enjoy building with this template!**
