# 🚀 Portfolio Website

A customizable and modern **portfolio website** built with React. Showcase your skills, projects, and personal information with an elegant and user-friendly design.  
Easily personalize your website by editing a single configuration file!

---

## 🖼 Demo

[Visit Live Demo](https://amirmousavi.netlify.app)

---

## 🎯 Features

- **Customizable**: Update content like skills, projects, and personal information easily through a configuration file.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern Technologies**: Built with React, TailwindCSS, and other modern tools.
- **Fast & SEO-friendly**: Optimized for performance and search engines.
- **Deployable Anywhere**: Deploy on platforms like Netlify, Vercel, or GitHub Pages.

---

## 🛠 Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components and layouts.
- **Formspree**: For handling form submissions without the need for a backend.

---

## 📥 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/amirmousav1/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm start
```

The website will be available at http://localhost:3000.

---

## 🚀 Deployment

### 1. Build the project:

```bash
npm run build
```

### 2. Deploy the build folder to any hosting service (e.g., Netlify, Vercel, GitHub Pages).

---

## 🎨 Customization Guide

1. **Edit `CustomizePortfolio.js`:**

   - Update your personal information in the `myInformations` object:

     ```javascript
     export const myInformations = {
       fullName: "Your Name",
       bio: "A short bio about yourself",
       myEmail: "your-email@example.com",
       linkedinUrl: "https://www.linkedin.com/in/your-profile",
       githubUrl: "https://github.com/your-username",
       telegramUrl: "https://t.me/your-username",
       resumeUrl: "Link to your resume",
       aboutTitle: "A title for your 'About Me' section",
       aboutMe:
         "Details about yourself. You can include HTML tags for formatting.",
     };
     ```

   - Add or update your skills in the `skills` array:

     ```javascript
     export const skills = [
       { name: "React", icon: <React /> },
       { name: "JavaScript", icon: <JavaScript /> },
       // Add more skills as needed
     ];
     ```

   - Add or update your projects in the `projects` array:
     ```javascript
     export const projects = [
       {
         title: "Project Title",
         description: "Short description of the project",
         year: "2024",
         technologies: "Technologies used in the project",
         image: "./path-to-image.png",
         demoLink: "https://demo-link.com",
         githubLink: "https://github.com/your-repo",
       },
       // Add more projects as needed
     ];
     ```

2. **Change Theme Colors:**

   - Open the `tailwind.config.js` file and update the `colors` object to customize the theme:
     ```javascript
     module.exports = {
       theme: {
         extend: {
           colors: {
             primary: "#D3E97A", // Replace with your primary color
             secondary: "#222222", // Replace with your secondary color
             dark: "#0A0A0A", // Replace with your dark color
           },
         },
       },
     };
     ```

3. **Replace Images:**

   - Replace default images in the `/public` folder:
     - `image.jpg`: Replace this with your profile photo.
     - Project images: Replace `project1.png`, `project2.png`, etc., with screenshots of your projects.
   - Update the `image` field in the `projects` array to match the new image paths.

4. **Modify Other Static Assets:**

   - Replace or update icons located in the `src/assets` folder to match your branding or style.

5. **Connect Your Formspree Account:**
   - To connect your own Formspree account, replace the value in the `formspreeEndpoint` with the endpoint provided in your Formspree dashboard:
     ```javascript
     export const formspreeEndpoint = "your-formspree-endpoint";
     ```
   - You can find this endpoint in your Formspree dashboard after setting up the form.
