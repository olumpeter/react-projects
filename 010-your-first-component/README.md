
# Your first component 

React applications are built from isolated pieces of UI called `components`. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. Here is a `Gallery` component rendering three `Profile` components:

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Your first component</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Your first component" />
        <meta name="author" content="Peter Olum"/>

        <script src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
        <script src="./script/App.jsx" type="text/jsx" defer></script>

        <link href="./styles/styles.css" rel="stylesheet"/>
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
const amazingScientists = [
    {key: 1, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein"},
    {key: 2, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin"},
    {key: 3, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton"}
]
const imageWidth = 200
const imageHeight = 200

root.render(
    <>
        <h1>Your first component</h1>
        <section>
            <h2>Amazing Scientist</h2>
            <Gallery/>
        </section>
    </>
);

function Gallery() {
    return (
        <div id="gallery">
            {displayProfiles()}
        </div>
    )
}

function displayProfiles() {
    const profiles = []
    for (const scientist of amazingScientists) {
        profiles.push(<img key={scientist.key} src={scientist.imageUrl} alt={scientist.name} width={imageWidth} height={imageHeight}/>)
    }
    return profiles
}
```

```css
/* styles/styles.css */

#gallery img {
    display: inline-block;
    margin: 0px 10px 10px 0px;
}
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/010-your-first-component/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/010-your-first-component/">Visit website</a>
  </dd>
</dl>

