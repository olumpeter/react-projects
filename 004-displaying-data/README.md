
# Displaying data 

JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display `user.name`.

You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, `className="avatar"` passes the "avatar" string as the CSS class, but `src={user.imageUrl}` reads the JavaScript `user.imageUrl` variable value, and then passes that value as the `src` attribute.

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Displaying data</title>

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
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
};

root.render(
    <>
        <h1>Displaying data</h1>

        <div>
            <h2>{user.name}</h2>
            <img className="avatar" src={user.imageUrl}
                alt={`Photo of ${user.name}`}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: "50%"
                }} />
        </div>
    </>
);
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/004-displaying-data/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/004-displaying-data/">Visit website</a>
  </dd>
</dl>