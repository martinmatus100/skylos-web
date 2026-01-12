# 🐺 Skylos Web

Official website for **Skylos**, a digital first agency specializing in building great brands and digital experiences.

![Skylos Preview](public/images/hero-bg.png)

## 🚀 Technologies

This project is built with a modern frontend stack:

- **[React](https://reactjs.org/)** - UI Library
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[React-i18next](https://react.i18next.com/)** - Internationalization (English & Spanish)
- **Vanilla CSS** - Custom styling with a BEM-inspired methodology and responsive grid system.
- **GitHub Pages** - Static hosting and deployment.

## 🛠️ Installation & Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/martinmatus100/skylos-web.git
   cd skylos-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## 🌍 Internationalization (i18n)

The site supports **English (`en`)** and **Spanish (`es`)**.
Translation files are located in `src/locales/`.

- `en.json`: English translations.
- `es.json`: Spanish translations.

Language detection is automatic based on the browser, but can be manually toggled via the language switcher in the header.

## 📦 Deployment

This project is configured to deploy automatically to **GitHub Pages**.

### Manual Deployment

To deploy a new version manually:

```bash
npm run deploy
```

This script runs `npm run build` and then pushes the `dist` folder to the `gh-pages` branch.

### Environment Handling

The project handles asset paths dynamically for both root domains and subdirectories (like `/skylos-web/`) using `import.meta.env.BASE_URL` in React components and relative paths in CSS.

## 📂 Project Structure

```bash
src/
├── assets/         # Static assets imported in components
├── features/       # Feature-based architecture (Hero, Services, Contact, etc.)
├── locales/        # i18n JSON translation files
├── ui/             # Reusable UI components (SectionTitle, etc.)
└── index.css       # Global styles and Grid system
```

## 📄 License

[MIT](LICENSE)
