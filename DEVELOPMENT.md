# Globonet Education Consulting - Development Guide

## 🚀 Quick Start

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📦 Component Architecture Overview

### Main Page Structure
The home page (`src/app/page.js`) imports all major sections:

```javascript
import {
  Header,          // Navigation bar
  Footer,          // Contact information
  HeroSection,     // Landing section with call-to-action
  MissionVisionSection,  // Company mission and vision
  ServicesSection, // Services offered
  PrinciplesSection      // Company principles
} from '@/components';
```

### Component Organization

#### 1. **Icons** (`src/components/icons/`)
Reusable SVG icon components:
- `BookOpenIcon` - For educational services
- `DollarSignIcon` - For financial services
- `ShieldIcon` - For insurance/protection
- `PlaneIcon` - For travel/visa services
- `UsersIcon` - For collaboration/community
- `BriefcaseIcon` - For professional services
- `MenuIcon` - For mobile navigation

**Usage:**
```javascript
import { BookOpenIcon } from '@/components/icons';
<BookOpenIcon />
```

#### 2. **Layout Components** (`src/components/layout/`)

**Header Component:**
- Responsive navigation
- Desktop menu (hidden on mobile)
- Mobile hamburger menu (hidden on desktop)
- Smooth scroll to sections

**Footer Component:**
- Contact information for both offices
- Clickable phone numbers and emails
- Copyright information
- Responsive grid layout

#### 3. **Section Components** (`src/components/sections/`)

**HeroSection:**
- Main landing area
- Call-to-action button
- Custom illustration
- Company tagline and description

**MissionVisionSection:**
- Two-column layout (desktop)
- Company mission statement
- Company vision statement

**ServicesSection:**
- Grid of service cards
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Hover effects on cards
- Icon integration

**PrinciplesSection:**
- List of company principles
- Separated with borders
- Highlighted titles
- Dark background section

#### 4. **UI Components** (`src/components/ui/`)

**ServiceCard:**
```javascript
<ServiceCard 
  icon={<BookOpenIcon />}
  title="Service Title"
  description="Service description"
/>
```

**PrincipleItem:**
```javascript
<PrincipleItem 
  title="Principle Title"
  description="Principle description"
/>
```

## 📊 Data Management

All static content is centralized in `src/data/constants.js`:

### Services Data
```javascript
import { servicesData } from '@/data/constants';
// Returns array of service objects
```

### Principles Data
```javascript
import { principlesData } from '@/data/constants';
// Returns array of principle objects
```

### Navigation Links
```javascript
import { navLinks } from '@/data/constants';
// Returns array of navigation items
```

### Contact Information
```javascript
import { contactInfo } from '@/data/constants';
// Returns object with canada and bangladesh office info
```

## 🛠️ Utility Functions

Located in `src/lib/utils.js`:

### formatPhoneLink
Converts phone numbers to proper tel: links:
```javascript
import { formatPhoneLink } from '@/lib/utils';
const link = formatPhoneLink('416-710-1032');
// Returns: "tel:4167101032"
```

### formatEmailLink
Creates mailto: links:
```javascript
import { formatEmailLink } from '@/lib/utils';
const link = formatEmailLink('email@example.com');
// Returns: "mailto:email@example.com"
```

### cn (className merger)
Conditionally combines class names:
```javascript
import { cn } from '@/lib/utils';
const classes = cn('base-class', isActive && 'active-class');
```

## 🎨 Styling Guidelines

### Color Scheme
- **Background**: `#080808` (very dark gray)
- **Surface**: `#111111` (dark gray)
- **Primary**: `lime-400` (#BEF264)
- **Secondary**: `emerald-400` (#34D399)
- **Text**: `gray-100` (light gray)
- **Muted**: `gray-400` (medium gray)
- **Borders**: `gray-800` (dark gray)

### Spacing System
- **Section Padding**: `py-20 lg:py-24`
- **Component Gap**: `gap-8` or `gap-12`
- **Card Padding**: `p-8`
- **Container**: `px-6 lg:px-8`

### Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Common Patterns

**Section Header:**
```javascript
<div className="text-center mb-16">
  <h2 className="text-4xl font-extrabold">Title</h2>
  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Description
  </p>
</div>
```

**Hover Effects:**
```javascript
className="hover:scale-105 transition-all duration-300"
className="hover:border-lime-400 transition-colors"
```

## 🔧 Customization Guide

### Adding a New Service

1. **Add data** in `src/data/constants.js`:
```javascript
export const servicesData = [
  // ... existing services
  {
    id: 'custom-service',
    title: "Custom Service",
    description: "Description here"
  }
];
```

2. **Create icon** (if needed) in `src/components/icons/`:
```javascript
export const CustomIcon = () => (
  <svg>...</svg>
);
```

3. **Map icon** in `ServicesSection.jsx`:
```javascript
const serviceIcons = {
  // ... existing
  'custom-service': <CustomIcon />
};
```

### Adding a New Section

1. **Create component** in `src/components/sections/`:
```javascript
// NewSection.jsx
export const NewSection = () => {
  return (
    <section id="new-section" className="py-20 lg:py-24">
      {/* Your content */}
    </section>
  );
};
```

2. **Export** in `src/components/index.js`:
```javascript
export { NewSection } from './sections/NewSection';
```

3. **Use in page** `src/app/page.js`:
```javascript
import { NewSection } from '@/components';

export default function Home() {
  return (
    <div>
      {/* ... */}
      <NewSection />
      {/* ... */}
    </div>
  );
}
```

### Modifying Contact Information

Edit `src/data/constants.js`:
```javascript
export const contactInfo = {
  canada: {
    title: "Canada Office",
    address: "New Address",
    phone: "New Phone",
    email: "new@email.com"
  },
  // ...
};
```

### Customizing Theme Colors

Edit Tailwind classes throughout components, or better yet, configure Tailwind theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#BEF264',
        secondary: '#34D399',
      }
    }
  }
}
```

## 📱 Responsive Design

### Mobile-First Approach
Base styles are for mobile, then enhanced for larger screens:

```javascript
className="text-2xl md:text-3xl lg:text-4xl"
className="grid md:grid-cols-2 lg:grid-cols-3"
className="hidden lg:block"
```

### Tested Breakpoints
- ✅ Mobile: 375px - 767px
- ✅ Tablet: 768px - 1023px
- ✅ Desktop: 1024px+

## 🧪 Development Tips

### Hot Reload
Next.js automatically refreshes when you save files. Changes to:
- Components: Instant refresh
- Data files: Instant refresh
- Config files: May require restart

### Debugging
1. Use React DevTools browser extension
2. Check browser console for errors
3. Use `console.log()` in components
4. Check Next.js error overlay

### Performance Optimization
- Images: Use Next.js `<Image>` component (when needed)
- Lazy loading: Use `dynamic()` for heavy components
- Code splitting: Automatic with Next.js
- Icons: Already optimized as inline SVG

## 📁 File Naming Conventions

- **Components**: `PascalCase.jsx`
- **Pages**: `lowercase.js` (Next.js convention)
- **Utilities**: `camelCase.js`
- **Constants**: `camelCase.js`
- **Styles**: `lowercase.css`

## 🚦 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run lint         # Check code quality

# Production
npm run build        # Build for production
npm start            # Run production build
```

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

## ✅ Checklist for Development

Before deploying:
- [ ] Test all sections on mobile
- [ ] Test all sections on tablet
- [ ] Test all sections on desktop
- [ ] Verify all links work
- [ ] Check all phone numbers/emails
- [ ] Test navigation smooth scrolling
- [ ] Verify no console errors
- [ ] Check page load performance
- [ ] Test hover effects
- [ ] Verify responsive images

---

**Happy Coding! 🚀**
