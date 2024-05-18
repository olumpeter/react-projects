
# Rendering lists

You will rely on JavaScript features like `for loop` and the array `map()` function to render lists of components.

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Rendering lists</title>

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

root.render(
    <>
        <h1>Rendering lists</h1>
        <div>
            <h2>My favorite fruits:</h2>
            <DisplayMyFavoriteFruits />
        </div>
    </>
);

function DisplayMyFavoriteFruits() {
    const myFavoriteFruits = [
        { key: 1, name: 'Apple' },
        { key: 2, name: 'Banana' },
        { key: 3, name: 'Pineaple' },
        { key: 4, name: 'Kiwi' },
        { key: 5, name: 'Watermelon' },
    ];

    const listMyFavoriteFruits = [];
    for (const fruit of myFavoriteFruits) {
        listMyFavoriteFruits.push(
            <li key={fruit.key}>{fruit.name}</li>
        );
    }

    return (
        <ul>
            {listMyFavoriteFruits}
        </ul>
    );
}
```

Inside your component, you can use the `map()` function to transform an array of products into an array of `<li>` items:

```jsx
// scripts/App.jsx

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Rendering lists</h1>
        <div>
            <h2>My favorite fruits:</h2>
            <DisplayMyFavoriteFruits />
        </div>
    </>
);

function DisplayMyFavoriteFruits() {
    const myFavoriteFruits = [
        { key: 1, name: 'Apple' },
        { key: 2, name: 'Banana' },
        { key: 3, name: 'Pineaple' },
        { key: 4, name: 'Kiwi' },
        { key: 5, name: 'Watermelon' },
    ];

    // const listMyFavoriteFruits = [];
    // for (const fruit of myFavoriteFruits) {
    //     listMyFavoriteFruits.push(
    //         <li key={fruit.key}>{fruit.name}</li>
    //     );
    // }

    const listMyFavoriteFruits = myFavoriteFruits.map(
        (fruit) => (<li key={fruit.key}>{fruit.name}</li>)
    );

    return (
        <ul>
            {listMyFavoriteFruits}
        </ul>
    );
}
```

Notice how `<li>` has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/005-conditional-rendering/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/006-rendering-lists/">Visit website</a>
  </dd>
</dl>

