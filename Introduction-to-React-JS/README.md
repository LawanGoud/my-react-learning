# Introduction to React JS

- React JS

  - Why React JS?
  - Advantages of React JS

- Running JavaScript in HTML

- Creating Elements using React JS
  - React CDN
  - React.createElement()
  - ReactDOM.render()
- JSX
  - Babel
  - Embedding Variables and Expressions in JSX
  - Nesting JSX elements

---

Got it 👍
I’ll prepare **complete notes** for your given outline (only basics, no advanced until you ask).

---

# 📘 Introduction to React JS – Beginner Notes

---

## 1. React JS

### 🔹 What is React JS?

- React JS is a **JavaScript library** for building **user interfaces**.
- Created by **Facebook (Meta)** in 2013.
- Focuses on **component-based development** (breaking UI into small, reusable pieces).

---

### 🔹 Why React JS?

- In normal JavaScript + HTML, updating data (like a shopping cart count) needs lots of DOM manipulation.
- React makes it simple: update data → React updates the UI automatically.

👉 Example:

- Without React: Update cart → Find element → Change innerHTML.
- With React: Update state → React re-renders only that part of the page.

---

### 🔹 Advantages of React JS

1. **Fast updates** → Uses Virtual DOM.
2. **Reusable components** → Build once, use anywhere.
3. **Easy to learn** if you know JavaScript.
4. **Large community** → Many resources available.
5. **Strong ecosystem** → Works with many tools and libraries.

---

## 2. Running JavaScript in HTML

Before React, let’s recall **how JavaScript runs in HTML**.

✅ HTML can include JS in two ways:

1. **Inline Script**

   ```html
   <script>
     alert("Hello from JavaScript!");
   </script>
   ```

2. **External Script**

   ```html
   <script src="app.js"></script>
   ```

👉 This is important because React is also **JavaScript inside HTML** (with JSX).

---

## 3. Creating Elements using React JS

### 🔹 React CDN

To use React without installation, include **CDN links** in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Example</title>
    <!-- React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script>
      // React code goes here
    </script>
  </body>
</html>
```

---

### 🔹 React.createElement()

- React provides `React.createElement()` to create elements.

Syntax:

```js
React.createElement(type, props, children);
```

Example:

```js
const element = React.createElement("h1", null, "Hello React!");
ReactDOM.render(element, document.getElementById("root"));
```

👉 Output:
**Hello React!** (displayed inside the browser).

---

### 🔹 ReactDOM.render()

- Used to display React elements on the web page.

Syntax:

```js
ReactDOM.render(element, container);
```

Example:

```js
const para = React.createElement("p", null, "This is a paragraph.");
ReactDOM.render(para, document.getElementById("root"));
```

---

## 4. JSX (JavaScript XML)

### 🔹 What is JSX?

- A **JavaScript extension** that allows writing HTML-like code inside JS.
- Makes React code easier to write and read.

Without JSX:

```js
const element = React.createElement("h1", null, "Hello World!");
```

With JSX:

```js
const element = <h1>Hello World!</h1>;
```

---

### 🔹 Babel

- Browsers don’t understand JSX directly.
- **Babel** is a tool that converts JSX → Regular JavaScript.

CDN for Babel:

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

And use:

```html
<script type="text/babel">
  const element = <h1>Hello JSX!</h1>;
  ReactDOM.render(element, document.getElementById("root"));
</script>
```

---

### 🔹 Embedding Variables and Expressions in JSX

You can use `{ }` inside JSX to write JavaScript code.

Example:

```js
const name = "Lawan";
const element = <h1>Hello, {name}!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

👉 Output: **Hello, Lawan!**

You can also use expressions:

```js
const a = 10;
const b = 20;
const element = <p>Sum = {a + b}</p>;
```

👉 Output: **Sum = 30**

---

### 🔹 Nesting JSX elements

JSX elements can be nested just like HTML.

Example:

```js
const element = (
  <div>
    <h1>Welcome to React</h1>
    <p>This is nested JSX.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
```

👉 Output:

```
Welcome to React
This is nested JSX.
```

---

# ✅ Summary

You now know:

- What React is and why it’s useful.
- How JavaScript runs in HTML.
- How to create elements using React (`createElement`, `render`).
- JSX basics: Babel, embedding variables, and nesting elements.

---

Do you want me to continue building the notes into the **next level (React Components)** or should I stop here and create a **practice sheet with small coding exercises** for these basics first?

# ⚛️ React JS | JSX & React.createElement (Upgraded)

## 📌 Concepts

- JSX
  - Embedding Variables & Expressions
  - Nesting JSX Elements
  - JSX Rules
- React.createElement()
- ReactDOM.createRoot().render() (React 18)

---

## 1. ✨ JSX (JavaScript XML)

JSX is a syntax extension that allows writing **HTML-like code in JavaScript**.  
React uses JSX to describe the UI in a readable way.

```jsx
const element = <h1 className="greeting">Hello, World!</h1>;
```

JSX compiles into `React.createElement()`:

```javascript
const elementProps = { className: "greeting", children: "Hello, World!" };
const element = React.createElement("h1", elementProps);
```

---

### 1.1 JSX Rules

- Tags **must be closed** (`<br />`, `<img />`)
- Use **className** instead of `class`
- Use **htmlFor** instead of `for`

---

### 1.2 Embedding Variables & Expressions

#### Variables

```jsx
const name = "Rahul";
const className = "greeting";

const element = <h1 className={className}>Hello, {name}!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

#### Expressions

```jsx
const user = { firstName: "Rahul", lastName: "Attuluri" };
const fullName = (user) => user.firstName + " " + user.lastName;

const element = <h1>Hello, {fullName(user)}!</h1>;

root.render(element);
```

> 💡 Tip: JSX allows embedding **any valid JavaScript expression** inside `{}`.

---

### 1.3 Nesting JSX Elements

JSX elements must have **one root element**:

```jsx
const element = (
  <div>
    <h1 className="greeting">Hello!</h1>
    <p>Good to see you here.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

---

## 2. ⚛️ React.createElement()

`React.createElement()` creates **React elements manually**.  
JSX is just a **syntactic sugar** over `createElement`.

**Syntax:**

```javascript
React.createElement(type, props, ...children);
```

**Example:**

```javascript
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

> 💡 Tip: Using JSX is recommended for cleaner and readable code.  
> `React.createElement` is useful for understanding how JSX works under the hood.

---

## 3. ⚛️ Rendering in React 18

React 18 introduces `createRoot()` instead of the old `ReactDOM.render()`.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

> 💡 All JSX examples now use **React 18 syntax** with `createRoot().render()`.

---

## 📊 Progress Tracker

- [ ] JSX (Rules, Variables, Expressions, Nesting)
- [ ] React.createElement()
- [ ] Rendering with React 18 (`createRoot().render()`)

---
