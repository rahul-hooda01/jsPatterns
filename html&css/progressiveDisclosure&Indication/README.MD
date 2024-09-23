### **Progressive Disclosure: Enhancing Usability by Revealing Information Gradually**

**What is Progressive Disclosure?**

Progressive disclosure is a design principle that involves presenting information gradually, rather than overwhelming users with all options and details at once. This approach helps users focus on the essential tasks at hand and access more complex or detailed information only when needed.

### **Use Cases for Progressive Disclosure**

1. **Forms**: Displaying only the most necessary fields initially, with options to expand for additional details (e.g., showing advanced options).
2. **Settings**: Providing basic settings upfront, with advanced settings hidden until the user opts to view them.
3. **Navigation**: Using expandable menus to show sub-options only when a user hovers or clicks.

### **Benefits of Progressive Disclosure**

- **Reduced Cognitive Load**: Minimizes the amount of information users must process at one time.
- **Improved User Experience**: Makes interfaces cleaner and easier to navigate.
- **Increased Engagement**: Encourages users to explore additional features without feeling overwhelmed.

### **Best Practices:**

- **Clear Labels**: Ensure that toggles and links are clearly labeled to indicate what additional information will be shown.
- **Consistency**: Use progressive disclosure consistently across your application for a uniform user experience.
- **Accessibility**: Ensure that hidden elements are accessible to screen readers and can be navigated with keyboard controls.

### **Explanation:**

1. **Initial Setup**: The main registration fields (username and email) are displayed by default, while the additional information section is hidden (`display: none`).
2. **Toggle Button**: A clickable span is used to toggle the visibility of the additional information section.
3. **Event Listener**: When the toggle button is clicked, it either shows or hides the additional information:
    - If hidden, it shows the additional fields and changes the button text to indicate that users can hide the information.
    - If visible, it hides the fields and changes the button text back to the original.