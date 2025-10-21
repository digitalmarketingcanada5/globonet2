# Quick Reference Cheat Sheet

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Run production build
npm run lint             # Check code quality

# File Navigation
cd src/components        # Go to components
cd src/data             # Go to data files
cd src/app              # Go to pages
```

## 📝 Common Tasks

### Add a New Service

1. **Edit data file:**
```javascript
// src/data/constants.js
export const servicesData = [
  // ...existing services
  {
    id: 'new-service',
    title: "New Service Title",
    description: "Description here"
  }
];
```

2. **Add icon mapping:**
```javascript
// src/components/sections/ServicesSection.jsx
const serviceIcons = {
  // ...existing
  'new-service': <YourIcon />
};
```

### Add a New Principle

```javascript
// src/data/constants.js
export const principlesData = [
  // ...existing
  {
    id: 'new-principle',
    title: "Principle Title",
    description: "Description here"
  }
];
```

### Change Contact Info

```javascript
// src/data/constants.js
export const contactInfo = {
  canada: {
    title: "Canada Office",
    address: "Your new address",
    phone: "123-456-7890",
    email: "new@email.com"
  },
  // ...
};
```

### Add a New Icon

1. **Create icon file:**
```javascript
// src/components/icons/NewIcon.jsx
export const NewIcon = () => (
  <svg>...</svg>
);
```

2. **Export it:**
```javascript
// src/components/icons/index.js
export { NewIcon } from './NewIcon';
```

3. **Use it:**
```javascript
import { NewIcon } from '@/components/icons';
<NewIcon />
```

### Create a New Section

1. **Create component:**
```javascript
// src/components/sections/NewSection.jsx
export const NewSection = () => {
  return (
    <section id="new" className="py-20 lg:py-24">
      <h2 className="text-4xl font-extrabold">Title</h2>
      {/* Content */}
    </section>
  );
};
```

2. **Export:**
```javascript
// src/components/index.js
export { NewSection } from './sections/NewSection';
```

3. **Use in page:**
```javascript
// src/app/page.js
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

## 🎨 Common Styles

### Section Wrapper
```javascript
<section className="py-20 lg:py-24">
```

### Section Header
```javascript
<div className="text-center mb-16">
  <h2 className="text-4xl font-extrabold">Title</h2>
  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Description
  </p>
</div>
```

### Grid Layouts
```javascript
// 3 columns → 2 columns → 1 column
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 2 columns → 1 column
<div className="grid md:grid-cols-2 gap-12">
```

### Buttons
```javascript
// Primary CTA
<button className="bg-lime-400 text-black font-bold px-10 py-4 rounded-lg hover:bg-lime-300 transition-all duration-300">
  Click Me
</button>

// Secondary
<button className="border border-lime-400 text-lime-400 px-8 py-3 rounded-lg hover:bg-lime-400 hover:text-black transition-all">
  Learn More
</button>
```

### Cards
```javascript
<div className="bg-[#111111] p-8 rounded-xl border border-gray-800 hover:border-lime-400 hover:scale-105 transition-all duration-300">
  {/* Content */}
</div>
```

### Links
```javascript
// Navigation
<a href="#section" className="text-gray-400 hover:text-white transition-colors">
  Link
</a>

// Contact Links
<a href="tel:123-456-7890" className="hover:text-white">
  123-456-7890
</a>

<a href="mailto:email@example.com" className="hover:text-white">
  email@example.com
</a>
```

## 📁 File Locations Quick Reference

```
Where to find...

Icons:               src/components/icons/
Illustrations:       src/components/illustrations/
Layout (Header/Footer): src/components/layout/
Sections:            src/components/sections/
UI Components:       src/components/ui/
Data:                src/data/constants.js
Utils:               src/lib/utils.js
Main Page:           src/app/page.js
Global Styles:       src/app/globals.css
```

## 🔍 Import Shortcuts

```javascript
// Components (use @ alias)
import { Header, Footer } from '@/components';

// Data
import { servicesData, contactInfo } from '@/data/constants';

// Utils
import { formatPhoneLink } from '@/lib/utils';

// Icons (specific)
import { BookOpenIcon } from '@/components/icons';

// Icons (from main index)
import { BookOpenIcon } from '@/components';
```

## 🎯 Common Props Patterns

### ServiceCard
```javascript
<ServiceCard 
  icon={<BookOpenIcon />}
  title="Service Title"
  description="Service description text"
/>
```

### PrincipleItem
```javascript
<PrincipleItem 
  title="Principle Title"
  description="Principle description text"
/>
```

## 🎨 Color Reference

```javascript
// Backgrounds
"bg-[#080808]"    // Main background
"bg-[#111111]"    // Card background

// Text
"text-gray-100"   // Main text
"text-gray-400"   // Muted text
"text-lime-400"   // Accent/highlight

// Borders
"border-gray-800" // Default border
"border-lime-400" // Accent border
```

## 📱 Responsive Modifiers

```javascript
// Mobile first (default)
className="text-2xl"

// Tablet and up (md: ≥768px)
className="md:text-3xl"

// Desktop and up (lg: ≥1024px)
className="lg:text-4xl"

// Combined
className="text-2xl md:text-3xl lg:text-4xl"

// Grid responsive
className="grid md:grid-cols-2 lg:grid-cols-3"

// Hidden on mobile, visible desktop
className="hidden lg:block"

// Visible on mobile, hidden desktop
className="lg:hidden"
```

## 🔧 Debugging Tips

### Check if server is running
```bash
# Should see output with port number
# If not, run: npm run dev
```

### View in browser
```
http://localhost:3000  (or 3001 if 3000 is busy)
```

### Check for errors
```
1. Look at terminal output
2. Open browser console (F12)
3. Check Network tab for failed requests
4. Look for red error messages
```

### Common Errors & Fixes

**Error: Port in use**
```bash
# Solution: Use different port or kill process
npm run dev  # Next.js will auto-select available port
```

**Error: Cannot find module**
```bash
# Solution: Check import path
import { Component } from '@/components';  # Correct
import { Component } from 'components';     # Wrong
```

**Error: Module not found**
```bash
# Solution: Install dependencies
npm install
```

## ⚡ Hot Tips

```
1. Files auto-save in VS Code
2. Browser auto-refreshes on save
3. Check terminal for build errors
4. Use browser DevTools (F12)
5. Component names must start with capital letter
6. File names use .jsx for components
7. Use @ alias for src directory
```

## 📋 Checklist Before Pushing

```
□ Run npm run build (check for errors)
□ Test all links work
□ Check responsive on mobile/tablet/desktop
□ Verify no console errors
□ Check all images load
□ Test navigation smooth scroll
□ Verify contact info is correct
□ Check hover effects work
□ Test on different browsers
```

## 🆘 Quick Fixes

### Component not showing?
```
1. Check import path
2. Verify export in index.js
3. Check console for errors
4. Ensure component is called in page.js
```

### Styles not applying?
```
1. Check className spelling
2. Verify Tailwind classes are valid
3. Check for conflicting styles
4. Refresh browser (Ctrl+Shift+R)
```

### Data not updating?
```
1. Check constants.js file saved
2. Verify import statement
3. Check browser console
4. Hard refresh browser
```

## 📚 File Templates

### New Icon
```javascript
export const IconName = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="..." />
  </svg>
);
```

### New Section
```javascript
export const SectionName = () => {
  return (
    <section id="section-name" className="py-20 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold">Section Title</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Description
        </p>
      </div>
      {/* Content */}
    </section>
  );
};
```

### New UI Component
```javascript
export const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="bg-[#111111] p-8 rounded-xl">
      <h3>{prop1}</h3>
      <p>{prop2}</p>
    </div>
  );
};
```

---

## 🎓 Remember

- **Mobile First**: Start with mobile styles, then add md: and lg:
- **Component First**: Create reusable components
- **Data Driven**: Keep content in constants.js
- **DRY Principle**: Don't repeat yourself
- **Semantic HTML**: Use proper HTML tags
- **Accessibility**: Add aria-labels where needed

---

**Need More Help?**
- Check ARCHITECTURE.md for structure details
- Check DEVELOPMENT.md for detailed guides
- Check PROJECT_SUMMARY.md for overview
