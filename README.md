# Lexman Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, powered by Vite for optimal development and build performance.

## 🌟 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark/light theme toggle
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Frontend**:

  - HTML5
  - CSS3 (with modern features like CSS Grid and Flexbox)
  - JavaScript (ES6+)
  - Vite (Build tool)

- **Development Tools**:
  - Git & GitHub
  - VS Code
  - npm/pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/lexman-portfolio.git
   cd lexman-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
lexman-portfolio/
├── public/              # Static assets
│   └── images/         # Image files
├── styles/             # CSS files
│   └── style.css      # Main stylesheet
├── scripts/            # JavaScript files
│   └── util.js        # Utility functions
├── index.html         # Main HTML file
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## 🎨 Customization

### Colors and Theme

The color scheme can be modified in `styles/style.css`:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
  /* ... other variables ... */
}
```

### Content

Update the content in `index.html` to reflect your personal information, projects, and experience.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- Mobile: < 480px
- Tablet: 480px - 768px
- Laptop: 768px - 992px
- Desktop: 992px - 1200px
- Large Desktop: > 1200px

## 🔧 Development

### Code Style

The project uses Prettier for code formatting. Configuration is in `.prettierrc`:

```json
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

### Git Workflow

1. Create a new branch for features/fixes
2. Make your changes
3. Commit with descriptive messages
4. Push to your branch
5. Create a pull request

## 👤 Author

**Alex Okhitoya**

- GitHub: [@lexmanthefirst](https://github.com/lexmanthefirst)
- LinkedIn: [okhitoya-alex](https://linkedin.com/in/okhitoya-alex)
- Twitter: [@lexmanthefirst](https://x.com/lexmanthefirst)

## 🙏 Acknowledgments

- Fonts from Google Fonts
- Icons from Lucide Icons
- Inspiration from various portfolio templates
