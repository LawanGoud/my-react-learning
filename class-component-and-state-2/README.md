# Class Component and State Part 2

- Searchable Users List
  - Searching User
  - Deleting User
- setState()
  - Object Syntax
- Components
  - Passing Callbacks

## Concepts in Focus

- **setState()** — Object Syntax
- **Sending Function as Callback**
- **Input Element**
- **Searchable Users List Application**

---

## 1. `setState()` Object Syntax

The **setState()** object syntax can be used while updating the state to the
value that is independent of the previous state.

**Syntax:**

```jsx
this.setState(
  {propertyName1: propertyValue1},
  {propertyName2: propertyValue2},
  // and many more...
)
```

### 1.1 Callback vs Object

**Callback:**

```jsx
this.setState(prevState => {
  return {count: prevState.count + 1}
})
```

Used when the new value depends on the previous state.

**Object:**

```jsx
this.setState({quantity: 2})
```

Used when updating to a static value.

---

## 2. Sending Function as Callback

We can pass functions as props to child components.

**Syntax:**

```jsx
<ComponentName functionName={this.functionName} />
```

---

## 3. Input Element

In React, the input element **value** can be handled in two ways:

- **Controlled Input**
- **Uncontrolled Input**

### 3.1 Controlled Input

If the input element **value** is handled by React state then it is called
**Controlled Input** (suggested way).

**Example:**

```jsx
import {Component} from 'react'

class App extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <input
        type="text"
        onChange={this.onChangeSearchInput}
        value={searchInput}
      />
    )
  }
}

export default App
```

### 3.2 Uncontrolled Input

If the input element **value** is handled by the browser itself then it is
called **Uncontrolled Input**. Value can be set only by a user, not
programmatically.

**Example:**

```jsx
<input type="text" />
```

---

## 4. Searchable Users List Application

**File: src/App.js**

```jsx
import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({usersDetailsList: filteredUsersData})
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
```

**File: src/components/UserProfile/index.js**

```jsx
import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default UserProfile
```

---

## Concepts in Focus

- **Components** (prefer Functional + Hooks)
  - Functional Components
  - (Legacy) Class Components
- **React Events** (same ideas; functions, camelCase)
- **State** (useState hook)
  - Updating State with setter functions
  - **Note:** `useState` **does not auto-merge objects**
  - Functional vs Class Components (modern guidance)
- **Counter Application** (hooks + `createRoot`)

---

# 1. Components (modern)

### Functional Components (preferred)

```jsx
export default function Welcome({name = 'User'}) {
  return <h1>Hello, {name}</h1>
}
```

### Class Components (legacy)

Still work, but new code should prefer functions + hooks.

---

# 2. React Events (modern)

- Use **camelCase** names (`onClick`, `onChange`, `onBlur`).
- Pass a **function reference**, not a string or immediate call.

```jsx
function MyComponent() {
  const handleClick = () => console.log('clicked')
  return <button onClick={handleClick}>Click Me</button>
}
```

(Classes require arrow methods or explicit binding to preserve `this`, but with
functions you avoid that problem.)

---

# 3. State (modern with Hooks)

- Use the **`useState`** hook inside function components.
- State updates with the setter are **asynchronous** and can use a **functional
  update** when based on previous state.
- Unlike `this.setState`, **`useState` does not merge** object state—**you must
  spread** manually.

**Initialize + read:**

```jsx
import {useState} from 'react'

function CounterReadOnly() {
  const [count, setCount] = useState(0)
  return <p className="count">{count}</p>
}
```

**Updating via functional form:**

```jsx
setCount(prev => prev + 1)
```

**Object state (no auto-merge):**

```jsx
const [state, setState] = useState({key1: 1, key2: 2})
setState(prev => ({...prev, key1: 3})) // keep key2
```

### Functional vs Class (modern view)

| Functional (Hooks)                                | Class                                            |
| ------------------------------------------------- | ------------------------------------------------ |
| Preferred; simpler, no `this`, better composition | Legacy; still supported                          |
| `useState`, `useEffect`, etc.                     | `this.state`, `this.setState`, lifecycle methods |

---

# 4. Counter Application (Hooks + React 18 render)

**src/main.jsx (or index.js)**

```jsx
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
```

**src/App.jsx**

```jsx
import Counter from './components/Counter'
export default function App() {
  return <Counter />
}
```

**src/components/Counter/index.jsx**

```jsx
import {useState} from 'react'
import './index.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(prev => prev + 1)
  const onDecrement = () => setCount(prev => prev - 1)

  return (
    <div className="container">
      <h1 className="count">Count {count}</h1>
      <button className="button" onClick={onIncrement}>
        Increase
      </button>
      <button className="button" onClick={onDecrement}>
        Decrease
      </button>
    </div>
  )
}
```

## Want these two sections saved as separate Markdown files for Notion? I can generate downloadable files instantly.

Perfect 👍 — you’ve gathered a **set of core React concepts** with a practical
app example. Let me walk you through **why each concept matters**, **when to use
it**, and **how the Searchable Users List ties them all together**.

---

# 🔹 Concepts in Focus (Explained Clearly)

---

## 1. `setState()` Object Syntax

### Why it matters:

- In class components, `this.setState()` is the **only way** to update state.
- Two common patterns:

  1. **Object syntax** → When setting a new static value.
  2. **Callback syntax** → When the new value depends on the previous state.

### When to use:

- **Object syntax:**

  ```js
  this.setState({quantity: 2})
  ```

  👉 Use when the update doesn’t depend on previous state.

- **Callback syntax:**

  ```js
  this.setState(prevState => ({count: prevState.count + 1}))
  ```

  👉 Use when new state **depends on old state** (e.g., counters, toggles).

⚠️ If you don’t use the callback form in these cases, you may get **stale state
bugs** because React batches state updates.

---

## 2. Sending Function as Callback

### Why it matters:

- Parent → Child communication in React is done via **props**.
- A parent can send a **function** down to a child.
- The child can call this function → triggers an action in the parent.

Example:

```jsx
<UserProfile deleteUser={this.deleteUser} />
```

👉 `deleteUser` is defined in the parent. Child just **calls it** when needed
(on button click). This keeps logic **centralized** in the parent, while the
child remains **reusable & dumb**.

---

## 3. Input Element

React inputs can be **controlled** or **uncontrolled**.

- **Controlled Input** ✅ (preferred)

  - React manages the value through state.
  - You can modify programmatically & validate easily.
  - Example:

    ```jsx
    <input value={searchInput} onChange={this.onChangeSearchInput} />
    ```

- **Uncontrolled Input**

  - Browser manages the value.
  - You can’t easily track or reset programmatically.
  - Example:

    ```jsx
    <input type="text" />
    ```

👉 Always use **controlled inputs** in serious apps because they give **full
control over UI state**.

---

## 4. Searchable Users List Application

This mini-project **combines all the concepts**:

### 🛠️ How the pieces fit:

1. **State Management with setState()**

   - `searchInput` → keeps track of what user types.
   - `usersDetailsList` → stores the list of users.
   - Updating happens with **object syntax** in most cases.

2. **Controlled Input**

   - The search input’s value comes from state (`searchInput`).
   - Every keystroke triggers `onChangeSearchInput`, updating state.

3. **Filtering (Derived State)**

   ```jsx
   const searchResults = usersDetailsList.filter(eachUser =>
     eachUser.name.includes(searchInput),
   )
   ```

   - React doesn’t store “filtered list” separately.
   - Instead, filter logic is applied **inside render()** → keeps state minimal.

4. **Passing Function as Prop**

   - `deleteUser` is passed from `App` to `UserProfile`.
   - Child calls it with `uniqueNo` → parent updates state (removes that user).

   ```jsx
   <UserProfile deleteUser={this.deleteUser} />
   ```

5. **Dynamic Rendering with `.map()`**

   - List of users rendered dynamically.
   - Each needs a **unique key** (`key={eachUser.uniqueNo}`) so React can track
     efficiently.

---

# 🎯 Why this approach is solid?

- Uses **controlled inputs** → reliable, predictable.
- Keeps **single source of truth** in parent component (`App`).
- Handles **list rendering + deletion** cleanly.
- Uses **functions as props** for child-parent communication → standard React
  pattern.
- Code is **scalable**: you can add features like sorting, roles filtering, or
  pagination easily.

---

✅ **Bottom line:** This project is a **practical demonstration** of:

- How to handle input properly in React.
- How to manage state with `setState()`.
- How to pass functions to children for handling actions.
- How to dynamically filter and render a list.

---

Do you want me to also **rewrite this whole app in modern functional component
style with `useState` & hooks**, so you can see the old **class vs new function
approach** side by side?

Perfect 👍 Let’s **upgrade your notes** from **class-based React** (older style)
to **modern functional components with hooks**, which is the **industry standard
today**. I’ll keep the same structure you shared but rewrite with the latest
practices.

---

# 🚀 Upgraded React Notes (Hooks Version)

---

## 1. `useState()` vs `setState()`

### Old (Class Component)

```jsx
this.setState({quantity: 2})
this.setState(prevState => ({count: prevState.count + 1}))
```

### New (Function Component with `useState`)

```jsx
// Static value update
const [quantity, setQuantity] = useState(0)
setQuantity(2)

// Value depends on previous state
const [count, setCount] = useState(0)
setCount(prevCount => prevCount + 1)
```

✅ Hooks replace `this.setState`. ✅ `useState` gives you **value + setter**. ✅
Same callback vs static update logic still applies.

---

## 2. Sending Function as Prop (Parent → Child)

### Old

```jsx
<UserProfile deleteUser={this.deleteUser} />
```

### New

```jsx
<UserProfile deleteUser={deleteUser} />
```

No `this.` needed in function components → **simpler syntax**. Functions still
get passed down as props exactly the same way.

---

## 3. Input Element (Controlled vs Uncontrolled)

### Controlled Input (✅ Recommended)

```jsx
const [searchInput, setSearchInput] = useState('')

<input
  type="text"
  value={searchInput}
  onChange={e => setSearchInput(e.target.value)}
/>
```

### Uncontrolled Input (⚠️ Rarely used in modern apps)

```jsx
<input type="text" />
```

👉 Always prefer controlled → easier validation, resets, and state sync.

---

## 4. Searchable Users List Application (Hooks Version)

### File: `src/App.js`

```jsx
import {useState} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [users, setUsers] = useState(initialUserDetailsList)

  const onChangeSearchInput = e => setSearchInput(e.target.value)

  const deleteUser = id => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  const searchResults = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-container">
      <h1 className="title">Users List</h1>
      <input type="search" value={searchInput} onChange={onChangeSearchInput} />
      <ul className="list-container">
        {searchResults.map(user => (
          <UserProfile
            key={user.id}
            userDetails={user}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
```

---

### File: `src/components/UserProfile/index.js`

```jsx
import './index.css'

const UserProfile = ({userDetails, deleteUser}) => {
  const {id, imageUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt={name} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
      <button className="delete-button" onClick={() => deleteUser(id)}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default UserProfile
```

---

# 🆚 Class vs Function (At a Glance)

| Feature            | Class Components (Old)                    | Function Components (New) |
| ------------------ | ----------------------------------------- | ------------------------- |
| State              | `this.state`, `this.setState()`           | `useState()` hook         |
| Lifecycle Methods  | `componentDidMount`, `componentDidUpdate` | `useEffect()` hook        |
| Functions as Props | `this.methodName`                         | `methodName` (no `this`)  |
| Input Handling     | Controlled via state                      | Controlled via state      |
| Boilerplate        | More (constructor, `this`, bindings)      | Less, cleaner             |

---

# 🎯 Key Takeaways

- **Always prefer function components with hooks** in modern React apps.
- `useState` replaces `this.setState` → simpler syntax, no `this`.
- Controlled inputs are still the **industry standard**.
- Passing functions as props is unchanged → just cleaner in function components.
- The **Searchable Users List app** is a perfect mini-project showing state,
  props, controlled inputs, and list rendering — in both old and new styles.

---

Do you want me to also **add `useEffect` lifecycle equivalents** (like what
would replace `componentDidMount`/`componentDidUpdate`) in these upgraded notes
so they’re fully future-proof?
