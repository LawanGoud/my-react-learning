# Components & Props

- Components
  - Creating a Component
  - Reusable Components
  - Composable Components
- Props
  - Passing Props
  - Accessing Props
- Create React App
  - React Project Setup
  - Starting the Application

# ⚛️ React JS | Components & Third-party Packages (Upgraded)

## 📌 Concepts

- **Component**
  - Properties (Props)
  - Reusable Components
  - Composable Components
- **Third-party Packages**
  - create-react-app
  - Pre-configured tools

---

## 1. ⚛️ Component

A **Component** is a JavaScript function that returns JSX.

```jsx
const Welcome = () => <h1 className="message">Hello, User</h1>;
```

> ⚠️ Component names must start with a **capital letter**.  
> React treats lowercase names as HTML elements.

Render using React 18:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome />);
```

We can call the component with self-closing tags: `<Welcome />`.

---

### 1.1 Properties (Props)

Props allow us to pass dynamic information into a component.

#### 1.1.1 Passing Props

```jsx
<Welcome name="Rahul" greeting="Hello" />
```

#### 1.1.2 Accessing Props

```jsx
const Welcome = (props) => {
  const { name, greeting } = props;
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome name="Rahul" greeting="Hello" />);
```

> 💡 Tip: Destructure props for cleaner code.

---

### 1.2 Component is Reusable

A Component can be used multiple times:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Welcome name="Rahul" greeting="Hello" />
    <Welcome name="Ram" greeting="Hi" />
  </div>
);
```

---

### 1.3 Component is Composable

Components can be included inside other components:

```jsx
const Greetings = () => (
  <div>
    <Welcome name="Rahul" greeting="Hello" />
    <Welcome name="Ram" greeting="Hi" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings />);
```

---

## 2. 📦 Third-party Packages

Real-world apps require setup. **create-react-app** automates this.

### 2.1 create-react-app

**Installation:**

```bash
npm install -g create-react-app
```

**Create a new React app:**

```bash
create-react-app myapp --use-npm
cd myapp
npm start
```

> Open [http://localhost:3000](http://localhost:3000) to view the app.

---

### 2.2 React Application Folder Structure

- **public/** → static assets (images, icons, videos)
- **src/** → main React code (components, CSS)
- **node_modules/** → dependencies
- **package-lock.json** → exact dependency tree

**Entry point (React 18):**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### 2.3 Pre-configured Tools

`create-react-app` comes with:

- **Live Editing / Fast Refresh** → automatic updates
- **ESLint** → code quality & syntax checks
- **Prettier** → consistent code formatting
- **Babel** → compiles JSX into JS
- **Webpack** → bundles modules

> 💡 Tip: CRA allows you to focus on writing components without manual setup.

---

## 📊 Progress Tracker

- [ ] Components (Props, Reusable, Composable)
- [ ] Third-party Packages (create-react-app + Pre-configured tools)

---

# ⚛️ React JS | Components & Modern Setup (Upgraded)

## 📌 Concepts

- **Component**
  - Properties (Props)
  - Reusable Components
  - Composable Components
- **Modern React Setup**
  - Vite
  - Pre-configured tools

---

## 1. ⚛️ Component

A **Component** is a JavaScript function that returns JSX. Functional components are standard in React 18+.

```jsx
const Welcome = () => <h1 className="message">Hello, User!</h1>;
```

> ⚠️ Component names must start with a **capital letter**.  
> React treats lowercase names as HTML elements.

Render using React 18 syntax:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome />);
```

We can call a component with self-closing tags: `<Welcome />`.

---

### 1.1 Properties (Props)

Props allow passing dynamic data into components.

#### Passing Props

```jsx
<Welcome name="Rahul" greeting="Hello" />
```

#### Accessing Props

```jsx
const Welcome = ({ name, greeting }) => {
  return (
    <h1 className="message">
      {greeting}, {name}!
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome name="Rahul" greeting="Hello" />);
```

> 💡 Tip: Destructure props for cleaner code.

---

### 1.2 Reusable Components

The same component can be reused with different data:

```jsx
root.render(
  <div>
    <Welcome name="Rahul" greeting="Hello" />
    <Welcome name="Ram" greeting="Hi" />
  </div>
);
```

---

### 1.3 Composable Components

Components can include other components:

```jsx
const Greetings = () => (
  <div>
    <Welcome name="Rahul" greeting="Hello" />
    <Welcome name="Ram" greeting="Hi" />
  </div>
);

root.render(<Greetings />);
```

> 💡 Best Practice: Keep components **small and focused**, one responsibility per component.

---

## 2. 📦 Modern React Setup

### 2.1 Using Vite (Recommended)

Vite is the industry standard for modern React apps because it is **fast, lightweight, and easy to configure**.

#### Steps to create a new React app with Vite:

1. **Create the app:**

```bash
npm create vite@latest my-app -- --template react
```

_Alternative package managers:_

```bash
yarn create vite my-app --template react
pnpm create vite my-app --template react
```

2. **Navigate to your project:**

```bash
cd my-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start development server:**

```bash
npm run dev
```

Visit 👉 [http://localhost:5173](http://localhost:5173)

---

### 2.2 Folder Structure

- **index.html** → entry HTML file
- **src/** → main React components, App.js
- **node_modules/** → dependencies
- **package.json** → project configuration

**Entry point (React 18 + Vite):**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### 2.3 Pre-configured Tools

Vite comes with:

- **Fast Refresh / Hot Module Replacement** → automatic updates
- **ESLint / Prettier** → optional code quality & formatting tools
- **Babel** → JSX compilation
- **Bundling / Optimization** → handled by Vite internally

> 💡 Tip: Vite provides a modern setup with minimal configuration, preferred by industry professionals.

---

## 📊 Progress Tracker

- [ ] Components (Props, Reusable, Composable)
- [ ] Modern React Setup (Vite + Pre-configured tools)

---

You're absolutely right—the installation process for React has evolved, and **Create React App (CRA)** is now officially deprecated. The React team recommends using modern frameworks like **Vite**, **Next.js**, or **Parcel** for creating new React applications.

---

## 🚨 Create React App (CRA) is Deprecated

As of February 2025, CRA is no longer actively maintained due to limitations in building high-performance production apps. The React team recommends using modern frameworks like Vite, Next.js, or Parcel for creating new React applications. ([React][1])

---

## ✅ Recommended Installation Methods for React (2025)

### 1. **Using Vite (Recommended for Most Projects)**

Vite is a fast and modern build tool that offers excellent developer experience and performance.

**Steps:**

1. **Create a new React app:**

   ```bash
   npm create vite@latest my-app -- --template react
   ```

   _Alternatively, using Yarn or pnpm:_

   ```bash
   yarn create vite my-app --template react
   pnpm create vite my-app --template react
   ```

2. **Navigate into your project directory:**

   ```bash
   cd my-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Your app will be available at [http://localhost:5173](http://localhost:5173). ([DEV Community][2])

---

### 2. **Using Next.js (Ideal for Full-Stack and SSR Apps)**

Next.js is a powerful React framework that supports server-side rendering (SSR), static site generation (SSG), and API routes.

**Steps:**

1. **Create a new Next.js app:**

   ```bash
   npx create-next-app@latest my-next-app
   ```

2. **Navigate into your project directory:**

   ```bash
   cd my-next-app
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Your app will be available at [http://localhost:3000](http://localhost:3000). ([DEV Community][2])

---

### 3. **Using Parcel (Zero Configuration Bundler)**

Parcel is a web application bundler that requires zero configuration and offers fast builds.

**Steps:**

1. **Initialize a new project:**

   ```bash
   mkdir my-app
   cd my-app
   npm init -y
   ```

2. **Install React and ReactDOM:**

   ```bash
   npm install react react-dom
   ```

3. **Install Parcel as a development dependency:**

   ```bash
   npm install --save-dev parcel
   ```

4. **Create your project files:**

   - `index.html`:

     ```html
     <div id="root"></div>
     <script src="./index.js"></script>
     ```

   - `index.js`:

     ```jsx
     import React from "react";
     import ReactDOM from "react-dom";

     const App = () => <h1>Hello, React!</h1>;

     ReactDOM.render(<App />, document.getElementById("root"));
     ```

5. **Add a start script to your `package.json`:**

   ```json
   "scripts": {
     "start": "parcel index.html"
   }
   ```

6. **Start the development server:**

   ```bash
   npm start
   ```

   Your app will be available at [http://localhost:1234](http://localhost:1234).

---

## 📝 Summary

- **Create React App (CRA)**: Deprecated; not recommended for new projects.
- **Vite**: Fast, modern, and recommended for most React projects.
- **Next.js**: Ideal for full-stack applications with SSR/SSG.
- **Parcel**: Great for small projects or when zero configuration is desired.

For most new React projects, **Vite** is the recommended choice due to its speed and simplicity.

Let me know if you need further assistance with setting up any of these tools or have other questions!

[1]: https://react.dev/blog/2025/02/14/sunsetting-create-react-app?utm_source=chatgpt.com "Sunsetting Create React App"
[2]: https://dev.to/tahmidbintaslim/how-to-create-a-react-app-in-2025-1kei?utm_source=chatgpt.com "How to Create a React App in 2025"

I see what’s happening here 🚨

The error you’re running into:

```
SyntaxError: Unexpected token '??='
```

comes from the fact that the latest `create-vite` (v8.0.1) is using **modern JavaScript syntax** (`??=` = nullish coalescing assignment).
This syntax needs at least **Node.js v16.14+**. If you’re running an older Node version (like v14 or below), it will break.

---

### ✅ Fix

1. **Check your Node version**

   ```bash
   node -v
   ```

   If you see something like `v14.x` or lower, that’s the problem.

2. **Upgrade Node.js**

   - If you can use `nvm` (Node Version Manager):

     ```bash
     nvm install 18
     nvm use 18
     ```

     (Node.js 18 is LTS and fully supported by Vite 8)

   - Or update manually from [Node.js official site](https://nodejs.org/).

3. **Retry the Vite command**

   ```bash
   npm create vite@latest my-app-latest -- --template react
   ```

   This should scaffold your React + Vite project properly.

---

### ⚡️ Workaround (if you can’t upgrade Node right now)

You can install an **older Vite version** (like 5.x or 6.x), which supports Node 14:

```bash
npm create vite@6 my-app-latest -- --template react
```

---
