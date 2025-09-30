# Class Component and State

- Class Component
  - Syntax
- Handling Events in React
  - Syntax
- State
  - setState()

## Concepts in Focus

- **Components**
  - Functional Components
  - Class Components
- **React Events**
- **State**
  - Updating State
  - State Updates are Merged
  - Functional Components vs Class Components
- **Counter Application**

---

# 1. Components

There are two ways to write React Components.

They are:

- **Functional Components**
- **Class Components**

## 1.1 Functional Components

These are JavaScript functions that take props as a parameter if necessary and
return react element (JSX).

```jsx
const Welcome = () => <h1>Hello, User</h1>

export default Welcome
```

## 1.2 Class Components

These components are built using an ES6 class.

To define a React Class Component,

- Create an ES6 class that extends **React.Component**.
- Add a single empty method to it called **render()**.

### 1.2.1 `extends`

The **extends** keyword is used to inherit methods and properties from the
**React.Component**.

### 1.2.2 `render()`

The **render()** method is the only required method in a class component. It
returns the JSX element.

**Syntax:**

```jsx
import {Component} from 'react'

class MyComponent extends Component {
  render() {
    return JSX
  }
}
```

Use **this.props** in the **render()** body to access the props in a class
component.

```jsx
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}
```

> Note
>
> The component name should always be in the pascal case.

---

# 2. React Events

Handling events with React elements is very similar to handling events on DOM
elements. There are some syntax differences:

1. React events are named using **camelCase**, rather than **lowercase**.

**Example:**

| HTML     | JSX      |
| -------- | -------- |
| onclick  | onClick  |
| onblur   | onBlur   |
| onchange | onChange |

1. With JSX, you pass a **function** as the event handler rather than a
   **string**.

**Example (don’t do this):**

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

**Correct in JSX:**

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

We should not call the function when we add an event in JSX.

```jsx
class MyComponent extends Component {
  handleClick = () => {
    console.log('clicked')
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```

In the above function, the **handleClick** is passed as a reference. So, the
function is not being called every time the component renders.

### Providing Arrow Functions

To not change the context of **this**, we have to pass an arrow function to the
event.

```jsx
class MyComponent extends Component {
  handleClick() {
    console.log(this) // undefined
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```

```jsx
class MyComponent extends Component {
  handleClick = () => {
    console.log(this) // MyComponent { ... }
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```

---

# 3. State

The state is a JS object in which we store the component’s data that changes
over time.

When the state object changes, the component re-renders.

**Initialising State:**

```jsx
class Counter extends Component {
  state = {count: 0}
  render() {
    const {count} = this.state
    return <p className="count">{count}</p>
  }
}
```

## 3.1 Updating State

We can update the state by using **setState()**. We can provide function/object
as an argument to set the state.

**Providing Function as an Argument (syntax):**

```jsx
this.setState(prevState => ({ ... }))

```

Here the previous state is sent as a parameter to the callback function.

```jsx
onIncrement = () => {
  this.setState(prevState =>
    console.log(`previous state value ${prevState.count}`),
  )
}
```

## 3.2 State Updates are Merged

State updates are merged. It means that when you update only one key–value pair
in the state object, it will not affect the other key–value pairs in the state
object.

```jsx
// For example let's say your state is as followed:
state = {key1: value1, key2: value2}

// if you use this.setState such as :
this.setState(prevState => ({key1: value3}))

// your new state will be :
state = {key1: value3, key2: value2}
```

## 3.3 Functional Components vs Class Components

| Functional Components         | Class Components                        |
| ----------------------------- | --------------------------------------- |
| Renders the UI based on props | Renders the UI based on props and state |

Use Class Components whenever the state is required. Otherwise, use the
Functional components.

---

# 4. Counter Application

**File: src/App.js**

```jsx
import Counter from './components/Counter'

const App = () => {
  return <Counter />
}

export default App
```

**File: src/components/Counter/index.js**

```jsx
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
```

---

Got it ✅ — you’ve shared your **React notes** (Components, Events, State,
Counter App), but they’re still written in the **older React style** (with
**class components**).

👉 I’ll **upgrade these notes to the latest React (React 18+) industry
practices**, meaning:

- Prefer **Functional Components + Hooks (`useState`)** instead of Class
  Components.
- Keep examples modern and clean.
- Add **clear comments** to guide learning.
- Still explain class components briefly (since they’re legacy, but sometimes
  seen in codebases).

---

# 🚀 Updated Notes (Latest React Practices)

## Concepts in Focus

- **Components**

  - Functional Components ✅ (Preferred way)
  - Class Components (Legacy, less common)

- **React Events**
- **State with Hooks**

  - Updating State
  - State Updates are Merged
  - Functional vs Class Components

- **Counter Application (with Hooks)**

---

# 1. Components

In React, everything is a component. There are **two ways** to define them:

- **Functional Components (Modern, Recommended)**
- **Class Components (Older, Legacy)**

---

## 1.1 Functional Components (✅ Preferred in React 18+)

Functional components are **JavaScript functions** that return JSX. They can use
**Hooks** (`useState`, `useEffect`, etc.) for state and lifecycle logic.

```jsx
// Simple Functional Component
const Welcome = () => <h1>Hello, User 👋</h1>

export default Welcome
```

They’re simple, lightweight, and the **industry standard**.

---

## 1.2 Class Components (⚠️ Legacy)

Before Hooks (pre–React 16.8), we used **class components** for state and
lifecycle methods. Today, they are still supported but rarely used in new
projects.

```jsx
import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props // Access props via this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
```

> 🔑 **Takeaway:** Learn them for legacy codebases, but use **functional
> components + hooks** in new projects.

---

# 2. React Events

React events work almost like native DOM events, but with a few differences:

1. **CamelCase** is used (e.g., `onClick` not `onclick`).
2. You pass a **function** (not a string).

### Example:

```jsx
// ✅ Correct in React
const MyButton = () => {
  const handleClick = () => {
    console.log('Button clicked 🚀')
  }

  return <button onClick={handleClick}>Click Me</button>
}

export default MyButton
```

⚠️ **Don’t do this** (HTML way):

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

---

# 3. State (with Hooks)

State = data that changes over time, causing the component to re-render.

In **functional components**, we use the **`useState` hook**.

---

## 3.1 Initializing State

```jsx
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0) // Initial value = 0

  return <p>Count: {count}</p>
}

export default Counter
```

---

## 3.2 Updating State

We update state using the updater function (`setCount`).

```jsx
const onIncrement = () => {
  setCount(prevCount => prevCount + 1) // ✅ Correct way
}
```

✅ This ensures React uses the latest state (important in async updates).

---

## 3.3 State Updates are Merged

React automatically **merges state updates**, so updating one property doesn’t
remove others.

```jsx
const [user, setUser] = useState({name: 'Alice', age: 25})

// Update only age, name remains
setUser(prevUser => ({...prevUser, age: 26}))
```

---

## 3.4 Functional vs Class Components

| Feature   | Functional Components (Hooks) | Class Components                      |
| --------- | ----------------------------- | ------------------------------------- |
| State     | ✅ useState/useReducer        | this.state + setState                 |
| Lifecycle | ✅ useEffect                  | componentDidMount, componentDidUpdate |
| Code      | Cleaner, shorter              | Verbose                               |
| Usage     | Preferred (React 18+)         | Legacy support                        |

---

# 4. Counter Application (Modern Version ✅)

**File: `src/App.js`**

```jsx
import Counter from './components/Counter'

const App = () => <Counter />

export default App
```

**File: `src/components/Counter/index.js`**

```jsx
import {useState} from 'react'
import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(prev => prev + 1)
  const onDecrement = () => setCount(prev => prev - 1)

  return (
    <div className="container">
      <h1 className="count">Count: {count}</h1>
      <button className="button" onClick={onIncrement}>
        Increase
      </button>
      <button className="button" onClick={onDecrement}>
        Decrease
      </button>
    </div>
  )
}

export default Counter
```

---

✅ **Summary (Industry Practice)**

- Use **Functional Components + Hooks** (class components only for legacy).
- Always use **`key`** when rendering lists.
- Use **destructuring** for cleaner props handling.
- Use **Hooks (`useState`, `useEffect`, `useContext`)** for modern apps.
- Keep components **small and reusable**.

---

Would you like me to also **convert your notes into a clean "cheat sheet" format
(with tables, bullet points, and quick examples)** so it’s easy to revise later?
