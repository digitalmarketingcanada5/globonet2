# Globonet Education Consulting - Component Architecture

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Main home page
│   ├── layout.js               # Root layout
│   └── globals.css             # Global styles
│
├── components/
│   ├── icons/                  # SVG Icon components
│   │   ├── BookOpenIcon.jsx
│   │   ├── DollarSignIcon.jsx
│   │   ├── ShieldIcon.jsx
│   │   ├── PlaneIcon.jsx
│   │   ├── UsersIcon.jsx
│   │   ├── BriefcaseIcon.jsx
│   │   ├── MenuIcon.jsx
│   │   └── index.js            # Icon exports
│   │
│   ├── illustrations/          # Custom illustrations
│   │   └── ScholarCapIllustration.jsx
│   │
│   ├── layout/                 # Layout components
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Footer with contact info
│   │
│   ├── sections/               # Page sections
│   │   ├── HeroSection.jsx     # Hero/landing section
│   │   ├── MissionVisionSection.jsx
│   │   ├── ServicesSection.jsx
│   │   └── PrinciplesSection.jsx
│   │
│   ├── ui/                     # Reusable UI components
│   │   ├── ServiceCard.jsx
│   │   └── PrincipleItem.jsx
│   │
│   └── index.js                # Component exports
│
├── data/
│   └── constants.js            # Static data and constants
│
└── lib/
    └── utils.js                # Utility functions
```

## 🏗️ Architecture Design Principles

### 1. **Separation of Concerns**
- **Icons**: Isolated SVG components for reusability
- **Layouts**: Header and Footer separated for easy modification
- **Sections**: Each page section is its own component
- **UI Components**: Small, reusable components (cards, items)

### 2. **Data-Driven**
- All static content is centralized in `src/data/constants.js`
- Easy to update content without touching component logic
- Supports future internationalization

### 3. **Utility Functions**
- Helper functions in `src/lib/utils.js`
- Formatting utilities (phone, email, classnames)
- DRY principle applied

### 4. **Component Hierarchy**

```
Home (page.js)
├── Header
│   └── Navigation Links
├── Main
│   ├── HeroSection
│   │   └── ScholarCapIllustration
│   ├── MissionVisionSection
│   ├── ServicesSection
│   │   └── ServiceCard (×6)
│   │       └── Icons
│   ├── PrinciplesSection
│   │   └── PrincipleItem (×5)
│   └── Footer
│       └── Contact Information
```

## 🎨 Component Types

### Layout Components
- **Purpose**: Define the overall structure
- **Examples**: `Header`, `Footer`
- **Location**: `src/components/layout/`

### Section Components
- **Purpose**: Major page sections
- **Examples**: `HeroSection`, `ServicesSection`
- **Location**: `src/components/sections/`

### UI Components
- **Purpose**: Small, reusable pieces
- **Examples**: `ServiceCard`, `PrincipleItem`
- **Location**: `src/components/ui/`

### Icon Components
- **Purpose**: SVG icon wrappers
- **Location**: `src/components/icons/`

### Illustration Components
- **Purpose**: Complex SVG graphics
- **Location**: `src/components/illustrations/`

## 📝 Usage Examples

### Adding a New Service

1. Update `src/data/constants.js`:
```javascript
export const servicesData = [
  // ...existing services
  {
    id: 'new-service',
    title: "New Service Title",
    description: "Service description"
  }
];
```

2. Add icon mapping in `ServicesSection.jsx`:
```javascript
const serviceIcons = {
  // ...existing icons
  'new-service': <NewIcon />
};
```

### Creating a New Section

1. Create component: `src/components/sections/NewSection.jsx`
```javascript
export const NewSection = () => {
  return (
    <section id="new-section" className="py-20">
      {/* Content */}
    </section>
  );
};
```

2. Export in `src/components/index.js`
3. Import and use in `src/app/page.js`

## 🔧 Best Practices

### Component Guidelines
- ✅ Keep components small and focused
- ✅ Use descriptive prop names
- ✅ Extract repeated JSX into separate components
- ✅ Use constants for repeated values

### Styling
- ✅ Use Tailwind utility classes
- ✅ Maintain consistent spacing (py-20, gap-8, etc.)
- ✅ Use theme colors (lime-400, gray-800, etc.)

### Performance
- ✅ Use 'use client' directive only when needed
- ✅ Lazy load heavy components if necessary
- ✅ Optimize images with Next.js Image component

## 🚀 Future Enhancements

### Recommended Next Steps
1. **State Management**: Add React Context for global state
2. **Mobile Menu**: Implement responsive navigation
3. **Form Component**: Create contact form
4. **Animation**: Add Framer Motion for transitions
5. **SEO**: Add metadata and structured data
6. **Testing**: Add Jest and React Testing Library
7. **API Integration**: Connect to backend services
8. **CMS Integration**: Connect to headless CMS for content

### Scalability Considerations
- Easy to add new pages (create new page.js files)
- Easy to add new sections (create new section components)
- Easy to modify content (update constants.js)
- Easy to theme (Tailwind configuration)

## 📚 File Naming Conventions

- **Components**: PascalCase (e.g., `ServiceCard.jsx`)
- **Utilities**: camelCase (e.g., `utils.js`)
- **Constants**: camelCase (e.g., `constants.js`)
- **Pages**: lowercase (Next.js convention)

## 🎯 Component Props Pattern

### Consistent Prop Structure
```javascript
// UI Components receive data
<ServiceCard 
  icon={icon}
  title={title}
  description={description}
/>

// Section Components manage their own data
<ServicesSection /> // No props needed
```

This architecture provides:
- ✅ Easy maintenance
- ✅ Clear code organization
- ✅ Reusable components
- ✅ Scalable structure
- ✅ Professional standards
