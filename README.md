# Huroca – Autonomous Precision Vaccination

Welcome to the official website repository for **Huroca**, a robotics startup based in Lethbridge, Alberta, revolutionizing the cattle industry with automated vaccination systems.

This project is built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Spline 3D**.

---

## 🛠 Tech Stack

- **Framework:** Next.js 14  
- **Styling:** Tailwind CSS  
- **3D Elements:** Spline (`@splinetool/react-spline`)  
- **Icons:** Lucide React  
- **Forms:** Formspree  
- **Package Manager:** pnpm  

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js v18 or higher**
- **pnpm** (install globally if needed):

```bash
npm install -g pnpm

### 2. Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### 3. Run the Development Server

Start the local dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```
├── app/
│   ├── layout.js      # Main layout (Navbar, Footer, SEO metadata)
│   ├── page.js        # Homepage (Hero, Features, Team, Contact)
│   └── globals.css    # Global styles & Tailwind directives
├── public/            # Static assets (Images, Logos, Icons)
│   ├── Huroca-Icon.png
│   ├── SIM.png
│   └── ...
├── next.config.mjs    # Next.js configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies and scripts
```

---

## 🎨 Customization Guide

### 3D Model (Spline)

The hero section uses a 3D robotic arm scene hosted on Spline.

* Update the model by editing the `scene` prop in `app/page.js` inside the `<Spline />` component.
* Ensure the URL points to a valid `.splinecode` file.

### Contact Form

The project uses **Formspree** for contact form submissions.

* Open `app/page.js`.
* Locate the `handleSubmit` function.
* Replace:

```
https://formspree.io/f/
```

with your own new Formspree endpoint ID.

### Images

* Add all static images (team photos, logos, etc.) to the `public/` directory.
* Reference them using absolute paths beginning with `/`, e.g.:

```
/portraits/emilio.jpeg
```

---

## 📦 Building for Production

Create an optimized production build:

```bash
pnpm build
```

Run the production server locally:

```bash
pnpm start
```

---

## ☁️ Deployment

Deploying to **Vercel**:

1. Push your repository to GitHub.
2. Vercel will automatically Deploy.

---

## 📄 License

© 2025 Huroca Technologies Inc. All rights reserved.

```
