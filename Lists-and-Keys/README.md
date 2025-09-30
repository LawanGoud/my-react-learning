# Lists and Keys

- Lists
  - Preparing Data
  - Rendering lists
- Keys
  - Adding Unique Key
  - Key Attribute

---

# ⚛️ React JS | Keys & Users List Application

## 📌 Concepts in Focus

- **Keys**
  - Keys as Props
- **Users List Application**

---

## 1. Keys

**Keys** help React identify which items in a list have changed, been added, or
removed. They should be assigned to elements inside an array to give them a
**stable identity**.

> Best practice: Use a **unique identifier** from your data (e.g., `id` or
> `uniqueNo`) as the key.

**Example:**

```jsx
const userDetails = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
]
```

---

### 1.1 Keys as Props

- **Keys do NOT get passed** as a prop to the component.

```jsx
const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role, key} = userDetails

  console.log(key) // undefined

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
```

- ✅ If you need the key value inside the component, **pass it explicitly** with
  a different prop name:

```jsx
const UsersList = userDetailsList.map(userDetails => (
  <UserProfile
    key={userDetails.uniqueNo}
    uniqueNo={userDetails.uniqueNo}
    name={userDetails.name}
  />
))
```

> Note: Keys should be unique **among siblings**, not necessarily globally.

---

## 2. Users List Application

**File: `src/App.js`**

```jsx
import UserProfile from './components/UserProfile'

const userDetailsList = [
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
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
```

---

**File: `src/components/UserProfile/index.js`**

```jsx
import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
```

---

### ⚠️ React Warning: ENOSPC – System Limit for File Watchers

**Problem:** `create-react-app` tracks all files for live-reloading, which may
hit system limits.

**Fix:**

1. Increase max file watchers:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

2. Verify:

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

3. Config variable (not runnable):

```text
fs.inotify.max_user_watches=524288
```

---

## Concepts in Focus

- **Keys**
  - Keys as Props (not forwarded)
- **Users List Application**

---

# 1. Keys (React 18)

- Use a **stable, unique** value from data (e.g., `id`, `uniqueNo`) as the `key`
  when rendering lists.
- **Avoid** using array index as a key when items can be
  reordered/added/removed.
- Keys are used **internally by React** and **are not available as props**.

**Data:**

```jsx
const userDetailsList = [
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
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
```

**Keys don’t pass as props:**

```jsx
const UserProfile = ({user}) => {
  // user.key is undefined — key is not forwarded
  const {imageUrl, name, role} = user
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
```

If you need the same value inside the component, pass it explicitly:

```jsx
<UserProfile key={u.id} user={u} userId={u.id} />
```

---

# 2. Users List Application (React 18 rendering)

**src/main.jsx (or index.js in CRA)**

```jsx
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
```

**src/App.jsx**

```jsx
import UserProfile from './components/UserProfile'

const userDetailsList = [
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
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

export default function App() {
  return (
    <div className="list-container">
      <h1 className="title">Users List</h1>
      <ul>
        {userDetailsList.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
```

**src/components/UserProfile/index.jsx**

```jsx
import './index.css'

export default function UserProfile({user}) {
  const {imageUrl, name, role} = user
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
```

**Linux file-watcher error (same fix):**

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
cat /proc/sys/fs/inotify/max_user_watches
# Expect: 524288

```

If you want these as two separate Markdown files for Notion, say the word and
I’ll drop them in.

Yes ✅ — this is the **upgraded, React 18+ version** of your previous notes.

Here’s why it’s up-to-date:

1. **React 18 Rendering**

   - Uses `createRoot()` instead of the old `ReactDOM.render()`.
   - `src/main.jsx` (or `index.js` in CRA) shows the correct modern setup.

2. **Keys in Lists**

   - Uses stable, unique identifiers (`id`) instead of array indices.
   - Clearly explains that **keys are not forwarded as props**.
   - Shows how to pass the value explicitly if needed.

3. **Component Structure**

   - Functional components with modern ES6 syntax (`export default function`).
   - Props destructuring directly in function parameters (`{ user }`).

4. **Styling & File Structure**

   - Keeps `index.css` in component folder — common industry structure.

5. **Linux File Watcher Fix**

   - Same fix included for `ENOSPC` error (practical tip for development).

6. **Beginner-friendly but industry-standard**

   - No advanced hooks or state yet — exactly your learning scope.

---

If you want, I can **create two separate Markdown files formatted for Notion**:

- `Keys.md` → Covers Keys & Keys as Props
- `UsersListApp.md` → Covers Users List App & React 18 rendering

---

## **React JS Learning Topics (Beginner → Current)**

### **1. Introduction to React JS**

- What is React JS?
- Why React JS? (Benefits)
- Advantages of React JS (Easy to learn, community, toolset)

### **2. Running JavaScript in HTML**

- Using `<script>` tag
- External JS file inclusion
- Execution order and placement in HTML

### **3. Creating Elements in React**

- React CDN (latest links for React 18)
- `React.createElement()`
- Rendering elements:

  - Old: `ReactDOM.render()`
  - React 18+: `ReactDOM.createRoot().render()`

### **4. JSX Basics**

- What is JSX (JavaScript XML)
- JSX vs React.createElement()
- Rules (closing tags, `className` vs `class`)
- Babel (compile JSX to JS)

### **5. Embedding Variables and Expressions in JSX**

- Variables in JSX
- Expressions in JSX

### **6. Nesting JSX Elements**

- Single parent element requirement
- Fragments (`<> ... </>`)

### **7. Keys in Lists (React 18)**

- Purpose of keys (identify changes in list items)
- Using unique IDs (`id`, `uniqueNo`)
- Keys are **not forwarded as props**
- Passing key value explicitly as a separate prop if needed
- Avoid using array index as a key

### **8. Users List Application (React 18)**

- Mapping over data arrays to render components
- Functional component structure (`App`, `UserProfile`)
- React 18 rendering with `createRoot()`
- Component props destructuring
- File structure best practices (`index.jsx` for components)
- Handling Linux file-watcher limits (`ENOSPC` fix)

---
