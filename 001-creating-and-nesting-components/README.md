
# Creating and nesting components

React apps are made out of *components*. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup.

You can nest a component into another component.

Components starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.

Example:

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Creating and nesting components</title>
        
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Creating and nesting components"/>
        <meta name="author" content="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
        <script src="./scripts/App.js" type="text/jsx" defer></script>

    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```js
// scripts/App.js

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(
    <MyApp />
)

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}

function MyButton() {
    return (
        <div>
            <button>I'm a button</button>
        </div>
    )
}
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-foundations/004-adding-interactivity-with-state/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-foundations/004-adding-interactivity-with-state/">Visit website</a>
  </dd>
</dl>