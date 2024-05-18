
# Conditional rendering 

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Conditional rendering </title>

        <meta charset="utf-8"/>
        <meta name="viewport" charset="width=device-width, initial-scale=1"/>
        <meta name="description" charset="Displaying data"/>
        <meta name="author" charset="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
        <script src="./script/App.jsx" type="text/jsx" defer></script>
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```jsx
// scripts/App.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
const isLoggedIn = false;

root.render(
    <>
        <h1>Conditional rendering</h1>
        <LoadContent />
    </>
);

function LoadContent() {
    let content;
    if (isLoggedIn) {
        content = <AdminPanel />
    } else {
        content = <LoginForm />
    }

    return content
}

function AdminPanel() {
    return (
        <>
            <div>
                <h2>Admin panel</h2>
            </div>
        </>
    )
}

function LoginForm() {
    return (
        <>
            <div>
                <h2>Login form</h2>
            </div>
        </>
    )
}
```

If you prefer more compact code, you can use the conditional `?` operator. Unlike `if`, it works inside JSX:

```jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
const isLoggedIn = false;

root.render(
    <>
        <h1>Conditional rendering</h1>
        {/* <LoadContent /> */}
        {isLoggedIn ? <AdminPanel/> : <LoginForm/>}
    </>
);

// function LoadContent() {
//     let content;
//     if (isLoggedIn) {
//         content = <AdminPanel />
//     } else {
//         content = <LoginForm />
//     }

//     return content
// }

function AdminPanel() {
    return (
        <>
            <div>
                <h2>Admin panel</h2>
            </div>
        </>
    )
}

function LoginForm() {
    return (
        <>
            <div>
                <h2>Login form</h2>
            </div>
        </>
    )
}
```

If you’re unfamiliar with some of this JavaScript syntax, you can start by always using `if...else`.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/005-conditional-rendering/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/005-conditional-rendering/">Visit website</a>
  </dd>
</dl>

