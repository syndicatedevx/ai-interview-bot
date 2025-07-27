# AI Interview Bot

A modern, polished AI-powered interview application built with React Router and TypeScript. This application provides a complete interview experience from resume upload to AI-powered interviews.

## ✨ Features

- 🔐 **Authentication System** - Login and signup with form validation
- 📄 **Resume Upload** - Drag & drop resume upload with preview
- 📅 **Interview Scheduling** - Functional calendar with date selection and time slots
- 🤖 **AI Interview Chatbot** - Interactive AI interviewer with progress tracking
- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔄 **Navigation** - Intuitive back/next navigation between screens

## 🚀 Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🎯 Application Flow

1. **Login/Signup** - User authentication with form validation
2. **Home** - Resume upload and preview with drag & drop functionality
3. **Schedule** - Interactive calendar for interview scheduling
4. **Chatbot** - AI-powered interview with progress tracking

## 🛠️ Technical Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router v7
- **Styling**: Glassmorphism design with custom gradients
- **Icons**: Material Symbols
- **Build Tool**: Vite

## 🎨 UI Components

- **Glassmorphism Cards** - Semi-transparent cards with backdrop blur
- **Gradient Buttons** - Beautiful gradient buttons with hover effects
- **Interactive Calendar** - Functional calendar with date selection
- **Progress Indicators** - Visual progress tracking for interviews
- **Custom Scrollbars** - Styled scrollbars for better UX

## 📦 Building for Production

Create a production build:

```bash
npm run build
```

## 🐳 Docker Deployment

To build and run using Docker:

```bash
docker build -t ai-interview-bot .

# Run the container
docker run -p 3000:3000 ai-interview-bot
```

## 🔧 Backend Integration Ready

The frontend is fully prepared for backend integration with:
- Form validation and state management
- Navigation flow between screens
- UI components ready for API integration
- Proper TypeScript types and interfaces

---

Built with ❤️ using React Router and modern web technologies.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
