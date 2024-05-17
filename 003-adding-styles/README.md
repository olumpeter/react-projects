
# Adding styles

In React, you specify a CSS class with `className`. It works the same way as the HTML `class` attribute.

React does not prescribe how you add CSS files. In the simplest case, you’ll add a `<link>` tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.

```html
<html lang="en">
    <head>
        <title>Adding styles</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Adding styles"/>
        <meta name="author" content="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
        <script src="./scripts/App.jsx" type="text/jsx" defer></script>

        <link href="./styles/styles.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">

        </div>
    </body>
</html>
```

```jsx
// scripts/App.jsx

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Adding styles</h1>

        <div>
            <h2>Herdy Lamarr</h2>
            <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Photo of Herdy Lamarr" />
        </div>
    </>
);
```

```css
/* style/style.css */

.avatar {
    width: 90;
    height: 90;
    border-radius: 50%;
}
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/003-adding-styles/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/003-adding-styles/">Visit website</a>
  </dd>
</dl>