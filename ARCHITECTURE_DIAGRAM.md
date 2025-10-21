# Component Architecture Diagram

## Application Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         BROWSER                                 │
│                    http://localhost:3001                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      src/app/page.js                            │
│                     (Main Home Page)                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                    ┌────────────────┐
                    │  Main Layout   │
                    │  Container     │
                    └───────┬────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   ┌─────────┐         ┌────────┐         ┌─────────┐
   │ Header  │         │  Main  │         │ Footer  │
   └────┬────┘         └───┬────┘         └────┬────┘
        │                  │                    │
        │                  │                    │
```

## Component Tree

```
Home (page.js)
│
├── Header (layout/Header.jsx)
│   ├── Logo/Brand
│   ├── Navigation Links (from constants)
│   │   ├── About → #about
│   │   ├── Services → #services
│   │   ├── Principles → #principles
│   │   └── Contact → #contact
│   └── MenuIcon (mobile)
│
├── Main
│   │
│   ├── HeroSection (sections/HeroSection.jsx)
│   │   ├── Text Content
│   │   │   ├── Tagline
│   │   │   ├── Heading
│   │   │   ├── Subheading
│   │   │   ├── Description
│   │   │   └── CTA Button
│   │   └── ScholarCapIllustration
│   │       └── SVG with gradients & filters
│   │
│   ├── MissionVisionSection (sections/MissionVisionSection.jsx)
│   │   ├── Mission Column
│   │   │   ├── Heading
│   │   │   └── Text
│   │   └── Vision Column
│   │       ├── Heading
│   │       └── Text
│   │
│   ├── ServicesSection (sections/ServicesSection.jsx)
│   │   ├── Section Header
│   │   │   ├── Title
│   │   │   └── Description
│   │   └── Service Grid (3 cols → 2 cols → 1 col)
│   │       ├── ServiceCard (ui/ServiceCard.jsx)
│   │       │   ├── BookOpenIcon ───────┐
│   │       │   ├── Title               │
│   │       │   └── Description         │ × 6 cards
│   │       ├── ServiceCard             │
│   │       │   ├── DollarSignIcon      │
│   │       │   ├── Title               │
│   │       │   └── Description         │
│   │       ├── ServiceCard             │
│   │       │   ├── ShieldIcon          │
│   │       │   ├── Title               │
│   │       │   └── Description         │
│   │       ├── ServiceCard             │
│   │       │   ├── PlaneIcon           │
│   │       │   ├── Title               │
│   │       │   └── Description         │
│   │       ├── ServiceCard             │
│   │       │   ├── UsersIcon           │
│   │       │   ├── Title               │
│   │       │   └── Description         │
│   │       └── ServiceCard             │
│   │           ├── BriefcaseIcon       │
│   │           ├── Title               │
│   │           └── Description ────────┘
│   │
│   └── PrinciplesSection (sections/PrinciplesSection.jsx)
│       ├── Section Header
│       │   ├── Title
│       │   └── Description
│       └── Principles List
│           ├── PrincipleItem (ui/PrincipleItem.jsx) ┐
│           │   ├── Title (lime-400)                 │
│           │   └── Description                      │
│           ├── PrincipleItem                        │ × 5 items
│           ├── PrincipleItem                        │
│           ├── PrincipleItem                        │
│           └── PrincipleItem ───────────────────────┘
│
└── Footer (layout/Footer.jsx)
    ├── Section Header
    │   ├── Title
    │   └── Description
    ├── Contact Grid (2 columns)
    │   ├── Canada Office
    │   │   ├── Title
    │   │   ├── Address
    │   │   ├── Phone (tel: link)
    │   │   └── Email (mailto: link)
    │   └── Bangladesh Office
    │       ├── Title
    │       ├── Contact Person
    │       ├── Address
    │       ├── Phone (tel: link)
    │       └── Email (mailto: link)
    └── Copyright
```

## Data Flow

```
┌──────────────────────────────────────────────┐
│         src/data/constants.js                │
│  ┌────────────────────────────────────┐      │
│  │ • servicesData (array of objects)  │      │
│  │ • principlesData (array of objects)│      │
│  │ • navLinks (array of strings)      │      │
│  │ • contactInfo (nested object)      │      │
│  └────────────────────────────────────┘      │
└─────────────┬────────────────────────────────┘
              │
              │ imported by
              │
    ┌─────────┼─────────┬──────────────┐
    │         │         │              │
    ▼         ▼         ▼              ▼
┌────────┐ ┌──────┐ ┌─────────┐ ┌──────────┐
│ Header │ │Footer│ │Services │ │Principles│
└────────┘ └──────┘ └─────────┘ └──────────┘
```

## Icon System

```
src/components/icons/
│
├── BookOpenIcon.jsx ────────┐
├── DollarSignIcon.jsx       │
├── ShieldIcon.jsx           │
├── PlaneIcon.jsx            │  All exported via
├── UsersIcon.jsx            │  index.js
├── BriefcaseIcon.jsx        │
├── MenuIcon.jsx ────────────┘
└── index.js
         │
         │ imports all icons and re-exports
         │
         ▼
    Used in:
    • ServicesSection (6 icons)
    • Header (MenuIcon)
```

## Utility Flow

```
src/lib/utils.js
│
├── formatPhoneLink(phone) ──────┐
│   Input: "416-710-1032"        │
│   Output: "tel:4167101032"     │
│                                 │  Used in Footer
├── formatEmailLink(email) ──────┤  for contact links
│   Input: "email@example.com"   │
│   Output: "mailto:email@..."   │
│                                 │
└── cn(...classes) ──────────────┘
    Input: "class1", condition && "class2"
    Output: "class1 class2" or "class1"
```

## Import Pattern

```javascript
// Centralized imports from components
import {
  Header,              // from 'components/layout/Header'
  Footer,              // from 'components/layout/Footer'
  HeroSection,         // from 'components/sections/HeroSection'
  ServicesSection,     // from 'components/sections/ServicesSection'
  // ... etc
} from '@/components'; // index.js handles exports

// Data imports
import { 
  servicesData,
  principlesData,
  navLinks,
  contactInfo 
} from '@/data/constants';

// Utility imports
import { 
  formatPhoneLink,
  formatEmailLink,
  cn 
} from '@/lib/utils';
```

## File Size Distribution

```
📁 components/
├── 📄 icons/ (7 files)           ~100 lines each
│   Total: ~700 lines
├── 📄 layout/ (2 files)          ~50 lines each
│   Total: ~100 lines
├── 📄 sections/ (4 files)        ~50-80 lines each
│   Total: ~280 lines
├── 📄 ui/ (2 files)              ~15 lines each
│   Total: ~30 lines
├── 📄 illustrations/ (1 file)    ~60 lines
│   Total: ~60 lines
└── 📄 index.js                   ~20 lines
    Total: ~20 lines

📁 data/
└── 📄 constants.js               ~80 lines

📁 lib/
└── 📄 utils.js                   ~25 lines

📁 app/
└── 📄 page.js                    ~25 lines

TOTAL: ~1,320 lines (well organized)
Original: ~300 lines (monolithic)
```

## Responsive Breakpoints

```
Mobile First Approach:

┌────────────────┐  ┌──────────────────┐  ┌─────────────────────┐
│     Mobile     │  │      Tablet      │  │       Desktop       │
│   < 768px      │  │  768px - 1023px  │  │      ≥ 1024px       │
│   (default)    │  │     (md:)        │  │       (lg:)         │
└────────────────┘  └──────────────────┘  └─────────────────────┘
       │                     │                      │
       ▼                     ▼                      ▼
  Grid: 1 col          Grid: 2 cols           Grid: 3 cols
  Nav: Hidden          Nav: Hidden            Nav: Visible
  Text: Smaller        Text: Medium           Text: Larger
  Padding: Less        Padding: Medium        Padding: More
```

## State Management (Current)

```
No Global State (currently)
│
├── Component Level State (where needed)
│   └── Future: useState, useEffect hooks
│
└── Static Data
    └── Imported from constants.js

Future Enhancement:
│
├── React Context (for global state)
├── Form State (for contact form)
└── Animation State (for interactions)
```

## Build Process

```
Development:
npm run dev
    │
    ├── Next.js Fast Refresh
    ├── Hot Module Replacement
    └── Instant Updates

Production:
npm run build
    │
    ├── Optimize Components
    ├── Minify JavaScript
    ├── Generate Static Pages
    └── Create .next/ folder

npm start
    │
    └── Serve Production Build
```

## Key Design Decisions

```
1. Component Organization
   ├── By Function (icons, layout, sections, ui)
   └── Not by feature (keeps simple for now)

2. Data Centralization
   ├── All static data in one file
   └── Easy to move to CMS later

3. Styling Approach
   ├── Tailwind CSS (utility-first)
   └── No CSS modules (simpler)

4. No TypeScript (yet)
   ├── JavaScript for faster development
   └── Easy to add .ts later

5. No State Management Library
   ├── Static site (no complex state)
   └── Can add Redux/Zustand if needed
```

---

This architecture provides:
✅ Clear separation of concerns
✅ Easy to understand structure
✅ Simple to maintain
✅ Ready to scale
✅ Professional standards
