## 🎯 Objective
The objective of this task is to enhance a static webpage by integrating **interactive features** using **vanilla JavaScript**. The focus is on improving user experience through event handling, DOM manipulation, and implementing basic dynamic behaviors without relying on external libraries or frameworks.

---

## ✅ Deliverables
- `index.html` – The structured webpage containing static elements ready for interactivity.
- `style.css` – A clean, organized stylesheet for styling the page and its interactive components.
- `script.js` – A JavaScript file implementing interactivity like toggles, validations, and simple animations.
- `technical_doc.pdf` – A concise document explaining the logic, design choices, and challenges addressed.

---

## ⚙️ Features Implemented
### 1. **Navigation Menu Toggle**
- A mobile-friendly menu that opens and closes on clicking a button (hamburger icon).
- Implemented using `classList.toggle()` on navigation elements.

### 2. **Modal Popup**
- A button triggers a modal window with information or form content.
- Close functionality using a button or clicking outside the modal area.

### 3. **Form Validation**
- Real-time validation for user input (e.g., required fields, valid email format).
- Prevents submission if validations fail, with user feedback messages.

### 4. **Theme Toggle (Light/Dark Mode)**
- A switch to toggle between light and dark themes.
- Uses local storage to remember the user’s preference across sessions.

### 5. **Basic Animations**
- Smooth transitions on modal, buttons, and theme switching.
- CSS classes are toggled via JavaScript for animation control.

---

## 💻 How to Run
1. Open the project folder.
2. Launch `index.html` in your web browser.
3. Interact with the buttons, forms, and toggle switches to test features.
4. Open the browser console for debugging or to trace any errors.

---

## 🧠 Challenges & Solutions
- **Challenge:** Managing multiple event listeners without conflicts.
  - **Solution:** Used delegation and organized functions for modularity.
- **Challenge:** Ensuring modal focus trapping for accessibility.
  - **Solution:** Implemented basic keyboard navigation and `tabIndex` control.
- **Challenge:** Persisting theme mode across refreshes.
  - **Solution:** Utilized `localStorage` to save and retrieve the theme.

---

## 🧪 Testing & Debugging
- Used browser DevTools to debug DOM issues and inspect JavaScript behavior.
- Verified form validation with multiple invalid/valid inputs.
- Simulated user flows to ensure smooth experience.

---

## 🛠️ Technologies Used
- HTML5 for content structure
- CSS3 for styling and transitions
- JavaScript (ES6) for interactivity

---

## 📃 Author
**Swapnil Gupta**  
Frontend Web Developer Intern  
[GitHub](https://github.com/swapnil7500)

---