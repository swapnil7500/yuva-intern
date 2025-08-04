# Week 1 Task Report: Wireframe to Static Web Page

## Overview
This project is a simple landing page layout that mimics a common wireframe design with header, hero, content cards, and a footer.

## HTML Strategy
- Semantic tags used: `<header>`, `<nav>`, `<section>`, `<footer>`
- Clean hierarchy improves SEO and accessibility

## CSS Strategy
- Flexbox for responsive cards and navigation
- Colors: used blue (#007BFF) for primary elements
- Typography: Google Fonts (Roboto) for modern clean look
- Layout: Container pattern used for consistent width

## Responsiveness
- Media query at 768px:
  - Stack navigation vertically
  - Stack service cards
- Tested on mobile and tablet emulators

## Challenges
- Ensuring spacing consistency across cards
- Fixing float issues in the header (solved using `::after` clearfix)
- Fine-tuning button contrast for readability

## Tools Used
- VS Code
- Chrome Developer Tools
- Google Fonts

## Conclusion
The task helped me strengthen my layout and responsive design skills. In future iterations, I plan to improve accessibility (like skip links and ARIA labels).
