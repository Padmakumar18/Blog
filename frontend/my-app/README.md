# Modern Blog Website

A beautiful, responsive single-page blog website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion with performance optimization
- **Interactive Components**:
  - Fixed navigation with smooth scrolling
  - Animated hero section
  - Blog post grid with hover effects
  - Contact form with validation
  - Social media integration

## Sections

1. **Header/Navbar**: Fixed top navigation with smooth scrolling links
2. **Hero Section**: Eye-catching introduction with call-to-action buttons
3. **Blog Section**: Grid-based blog post listing with featured post
4. **About Section**: Personal introduction with animated skills and fun facts
5. **Contact Section**: Contact form with validation and contact information
6. **Footer**: Minimalist footer with social links and newsletter signup

## Technologies Used

- **React 19**: Latest version with functional components and hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent iconography
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:

   ```bash
   cd frontend/my-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── Blog.jsx        # Blog posts section
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main application component
├── App.css             # Custom styles
├── index.css           # Tailwind CSS imports
└── main.jsx            # Application entry point
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary colors: Blue gradient
- Secondary colors: Gray scale
- Custom gradient text effects

### Content

- Blog posts are currently hardcoded in `Blog.jsx`
- Contact information in `Contact.jsx`
- About content in `About.jsx`

### Animations

All animations are implemented using Framer Motion with performance optimization:

- Staggered animations for lists
- Hover effects with scale transforms
- Smooth page transitions
- Loading states

## Performance Features

- **Optimized Animations**: All animations use `transform` and `opacity` for GPU acceleration
- **Lazy Loading**: Images and components load as needed
- **Responsive Images**: Optimized image sizes for different screen sizes
- **Smooth Scrolling**: Native CSS smooth scrolling with fallbacks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

If you have any questions or need help, please open an issue on GitHub.
