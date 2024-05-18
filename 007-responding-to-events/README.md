
# Responding to events

You can respond to events by declaring `event handler` functions inside your components:

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Responding to events</title>

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
// script/App.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Responding to events</h1>

        <div>
            <LoginButton />
        </div>
    </>
);

function LoginButton() {
    function handleClick() {
        alert('You clicked the login button');
    }

    return (
        <>
            <button id="login-button" onClick={handleClick}>
                Login
            </button>
        </>
    );
}
```

Notice how `onClick={handleClick}` has no parentheses at the end! Do not call the event handler function: you only need to *pass it down*. React will call your event handler when the user clicks the button.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/007-responding-to-events/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/007-responding-to-events/">Visit website</a>
  </dd>
</dl>

