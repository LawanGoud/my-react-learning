Conditional Rendering

- Using an If...Else Statement
- Using Element Variables
- Using Ternary Operators
- Using Logical && Operator

Default Props

# 1. Conditional Rendering

**Conditional Rendering** allows us to render different elements or components
based on a condition.

Different ways to implement **Conditional Rendering** are:

- Using an If…Else Statement
- Using Element Variables
- Using Ternary Operators
- Using Logical && Operator

## 1.1 Using an If…Else Statement

```jsx
import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return <div className="container">{this.renderAuthButton()}</div>
  }
}

export default App
```

## 1.2 Using Element Variables

```jsx
import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }
    return (
      <div className="container">
        <h1>React JS</h1>
        {authButton}
      </div>
    )
  }
}

export default App
```

## 1.3 Using Ternary Operators

```jsx
import {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}

export default App
```

## 1.4 Using Logical && Operator

```jsx
import {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
```

> Note
>
> Conditional Rendering can be achieved using inline styles or adding classes
> with CSS `display` property with value `none`. However, it is not preferable.

---

# 2. Default Props

`defaultProps` is a property in React Component used to set default values for
the props. This is similar to adding default parameters to the function.

**Syntax:**

```jsx
// Component Definition

ComponentName.defaultProps = {
  propName1: 'propValue1',
  propName2: 'propValue2',
}

// Exporting Component
```

**Example**

**File: src/Welcome/index.js**

```jsx
const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'Rahul',
  greeting: 'Hello',
}

export default Welcome
```

**File: src/App.js**

```jsx
import {Component} from 'react'
import Welcome from './Welcome'

class App extends Component {
  state = {isLoggedIn: true}
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
      </div>
    )
  }
}

export default App
```

> Note
>
> While accessing the props, the correct prop name should be given.

---

Perfect 👍 — you’ve shared your notes on **Conditional Rendering** and **Default
Props** in React, but they’re still written in **class component style**.

👉 I’ll **upgrade your notes to React 18+ industry practices**:

- Prefer **Functional Components + Hooks**.
- Show how to do conditional rendering with modern syntax.
- Keep class component references only for context.
- Show **default props** using ES6 default parameters (preferred over
  `defaultProps`).
- Add comments for clarity.

---

# 🚀 Updated Notes (Latest React Practices)

## Concepts in Focus

- **Conditional Rendering**

  - Using If…Else
  - Using Element Variables
  - Using Ternary Operators
  - Using Logical && Operator

- **Default Props**

---

# 1. Conditional Rendering

Conditional rendering = displaying different UI based on a condition.

React provides multiple ways to handle it.

---

## 1.1 Using an If…Else Statement

```jsx
import {useState} from 'react'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    }
    return <button onClick={() => setIsLoggedIn(true)}>Login</button>
  }

  return <div className="container">{renderAuthButton()}</div>
}

export default App
```

✅ Best when you want more complex logic before rendering.

---

## 1.2 Using Element Variables

```jsx
import {useState} from 'react'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  let authButton
  if (isLoggedIn) {
    authButton = <button onClick={() => setIsLoggedIn(false)}>Logout</button>
  } else {
    authButton = <button onClick={() => setIsLoggedIn(true)}>Login</button>
  }

  return (
    <div className="container">
      <h1>React JS</h1>
      {authButton}
    </div>
  )
}

export default App
```

✅ Makes code more readable if there are multiple condition-based elements.

---

## 1.3 Using Ternary Operator

```jsx
import {useState} from 'react'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="container">
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default App
```

✅ Compact and good for inline rendering.

---

## 1.4 Using Logical && Operator

```jsx
import {useState} from 'react'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="container">
      {isLoggedIn && (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
      {!isLoggedIn && (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default App
```

✅ Best when you only want to render **one element if true**.

⚠️ For toggling between two values, ternary is cleaner.

---

> ℹ️ **Note:** You _could_ hide elements with CSS (`display: none`), but
> **conditional rendering is more efficient** since React won’t even create DOM
> nodes unnecessarily.

---

# 2. Default Props

In modern React, we usually use **default function parameters** instead of
`defaultProps`.

---

## 2.1 Using Default Parameters (✅ Recommended)

```jsx
const Welcome = ({name = 'Rahul', greeting = 'Hello'}) => {
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

export default Welcome
```

✅ Cleaner and works with functional components.

---

## 2.2 Using `defaultProps` (Legacy, still works)

```jsx
const Welcome = ({name, greeting}) => {
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'Rahul',
  greeting: 'Hello',
}

export default Welcome
```

---

## Usage Example

```jsx
import Welcome from './Welcome'

const App = () => (
  <div className="container">
    {/* greeting given, name defaults to "Rahul" */}
    <Welcome greeting="Hi" />

    {/* both use defaults */}
    <Welcome />
  </div>
)

export default App
```

---

✅ **Summary (Industry Practice)**

- Prefer **functional components** with `useState` for conditional rendering.
- Use **ternary** for toggling between two values.
- Use **logical &&** for rendering only if condition is true.
- For props defaults, use **function default parameters**
  (`({ name = "Rahul" })`) over `defaultProps`.

---

Great question 👍 — you’re noticing the _different flavors_ of conditional
rendering in React. They all achieve the same _goal_ (show/hide things based on
conditions), but the choice depends on **readability, complexity, and intent**.
Let’s break down the **use cases, pros, and cons** of each:

---

## 🔹 1. If…Else Statement

```jsx
if (isLoggedIn) {
  return <Logout />
} else {
  return <Login />
}
```

✅ **Use Case:**

- When you need **complex branching** logic before rendering.
- Useful if multiple conditions need to be handled (e.g., logged in, logged out,
  loading, error).

🔑 **Why:**

- Makes the logic explicit and easy to follow.
- Keeps JSX clean when multiple outcomes are possible.

⚠️ **Downside:** More verbose, not great for inline rendering.

---

## 🔹 2. Element Variables

```jsx
let button
if (isLoggedIn) {
  button = <Logout />
} else {
  button = <Login />
}
return <div>{button}</div>
```

✅ **Use Case:**

- When you want to **prepare a variable** (possibly combining multiple
  conditional elements) and then insert it into JSX.
- Good for readability if JSX is complex.

🔑 **Why:**

- Lets you separate **decision-making** from **rendering structure**.
- Avoids cluttering the return statement.

⚠️ **Downside:** Slightly more boilerplate than ternary.

---

## 🔹 3. Ternary Operator

```jsx
{
  isLoggedIn ? <Logout /> : <Login />
}
```

✅ **Use Case:**

- Perfect for **simple toggles** (A vs B).
- When you need **exactly one of two components**.

🔑 **Why:**

- Compact, clean, easy to inline.
- Works well in JSX for small conditions.

⚠️ **Downside:** Can get messy if conditions are long or nested.

---

## 🔹 4. Logical && Operator

```jsx
{
  isLoggedIn && <Logout />
}
{
  !isLoggedIn && <Login />
}
```

✅ **Use Case:**

- When you want to render something **only if a condition is true**, and render
  **nothing** otherwise.
- Example: show "Admin Panel" only if user is admin.

🔑 **Why:**

- Clean, avoids unnecessary `null` returns.
- Great for optional UI (badges, notifications, warnings).

⚠️ **Downside:** If you actually want to toggle between two values, ternary is
usually cleaner.

---

## 🎯 How to Decide?

- **Complex multi-step conditions?** → **If…Else**
- **Multiple elements in one variable?** → **Element Variable**
- **Simple true/false toggle (A vs B)?** → **Ternary**
- **Show only if true (optional render)?** → **Logical &&**

---

👉 Think of it like this:

- **If…Else** = Big branching decisions
- **Element Variable** = Preparing a “slot” ahead of time
- **Ternary** = Quick toggle
- **&&** = Show only if needed

---

Perfect 👍 Let’s make a **quick reference table** for conditional rendering in
React:

---

# ⚡ Conditional Rendering in React — Comparison Table

| Approach                | Best Use Case                                                | ✅ Pros                                                                                         | ⚠️ Cons                                                                                        |
| ----------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **If…Else Statement**   | Complex branching (e.g., login, loading, error, etc.)        | - Very explicit logic<br>- Keeps JSX clean<br>- Good for multiple conditions                    | - Verbose<br>- Not good for inline                                                             |
| **Element Variables**   | Preparing multiple condition-based elements before rendering | - Improves readability<br>- Separates logic from JSX<br>- Can hold complex UI fragments         | - Slightly more boilerplate<br>- Indirect (need variable assignment)                           |
| **Ternary Operator**    | Simple toggle (A vs B), e.g., Login/Logout                   | - Compact & inline<br>- Easy for two conditions<br>- Readable when short                        | - Becomes messy with nested/long conditions<br>- Harder to read if JSX is big                  |
| **Logical && Operator** | Show element only when condition is true (optional UI)       | - Very concise<br>- Great for optional UI (badges, alerts, admin panel)<br>- No need for `null` | - Not ideal for toggles (A vs B)<br>- Can confuse beginners with falsy values (0 also renders) |

---

## 🎯 Quick Rule of Thumb

- **If/Else** → Many outcomes
- **Element Variable** → Multiple prepared pieces
- **Ternary** → Simple toggle (one or the other)
- **&&** → Optional rendering (show only if true)

---

Got it 🚀 — here’s the **full comparison table** with **mini real-world
examples** under each approach so you can quickly map them to real coding
scenarios:

---

# ⚡ Conditional Rendering in React — Complete Guide

| Approach                | Best Use Case                                                      | ✅ Pros                                                                         | ⚠️ Cons                                            | 📝 Example                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **If…Else Statement**   | Complex branching (multiple conditions: loading, error, logged in) | - Very explicit logic<br>- Clean JSX<br>- Handles multiple states               | - Verbose<br>- Not inline                          | `jsx\nif (isLoading) return <p>Loading...</p>;\nelse if (error) return <p>Error!</p>;\nelse return <Dashboard />;\n`        |
| **Element Variables**   | Preparing multiple condition-based UI fragments before rendering   | - Improves readability<br>- Keeps return clean<br>- Can handle big chunks of UI | - Slightly more boilerplate                        | `jsx\nlet status;\nif (user.isAdmin) status = <AdminPanel />;\nelse status = <UserPanel />;\nreturn <div>{status}</div>;\n` |
| **Ternary Operator**    | Simple toggle (one of two elements, like Login/Logout)             | - Compact & inline<br>- Perfect for binary states                               | - Messy if nested<br>- Harder to read with big JSX | `jsx\n{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}\n`                                                                        |
| **Logical && Operator** | Show something only when a condition is true (optional UI)         | - Very concise<br>- Great for optional UI<br>- Avoids `null` checks             | - Not for toggles<br>- 0 renders (edge case)       | `jsx\n{isAdmin && <button>Manage Users</button>}\n`                                                                         |

---

## 🎯 Quick Rule of Thumb

- **If/Else** → When you have 3+ possible states (loading, error, success, etc.)
- **Element Variables** → When JSX is heavy and you want cleaner `return`
- **Ternary** → When exactly one of two elements should show
- **&&** → When you only want to show something optionally

---
