# Architecture Documentation

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Section, Slider)
│   ├── layout/          # Layout components (Navbar, Footer, Layout)
│   ├── ui/              # Basic UI components (Button, Card)
│   └── index.js         # Component exports
├── pages/               # Page components
├── hooks/               # Custom React hooks
│   ├── useScrollEffect.js
│   ├── useFilter.js
│   └── index.js
├── utils/               # Utility functions
│   └── animations.js
├── data/                # Static data and mock data
│   ├── mentors.js
│   ├── courses.js
│   ├── reviews.js
│   └── index.js
├── constants/           # Application constants
│   └── index.js
├── context/             # React context providers
├── styles/              # CSS and styling files
├── App.js               # Main application component
└── index.js             # Application entry point
```

## Design Patterns

### 1. Component Architecture
- **Atomic Design**: Components are organized from basic UI elements to complex pages
- **Composition over Inheritance**: Components use composition for flexibility
- **Single Responsibility**: Each component has a single, well-defined purpose

### 2. State Management
- **Local State**: Using React hooks for component-specific state
- **Custom Hooks**: Extracting reusable stateful logic
- **Context API**: For global state when needed

### 3. Data Flow
- **Props Down**: Data flows down through props
- **Events Up**: Events bubble up through callbacks
- **Centralized Data**: Static data in dedicated files

## Key Features

### Custom Hooks
- `useScrollEffect`: Handles scroll-based effects
- `useFilter`: Manages filtering functionality

### Reusable Components
- `Button`: Configurable button with variants
- `Card`: Flexible card component with hover effects
- `Section`: Standardized page sections
- `Slider`: Continuous sliding animations

### Utility Functions
- `createRippleEffect`: Material design ripple animations
- `staggerAnimation`: Staggered element animations

## Performance Optimizations

1. **Component Splitting**: Modular architecture for better tree-shaking
2. **Lazy Loading**: Dynamic imports for code splitting
3. **Memoization**: React.memo for expensive components
4. **Efficient Re-renders**: Proper dependency arrays in hooks

## Styling Architecture

1. **CSS Modules**: Scoped styling approach
2. **Utility Classes**: Bootstrap integration
3. **Custom Properties**: CSS variables for theming
4. **Animation System**: Consistent animation patterns

## Development Guidelines

1. **File Naming**: PascalCase for components, camelCase for utilities
2. **Import Organization**: Grouped imports (external, internal, relative)
3. **Component Structure**: Props, state, effects, render
4. **Error Boundaries**: Graceful error handling