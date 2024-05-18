
# Updating the screen 

Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add *state* to your component.

```html
<!-- index.html -->

<html lang="en">
    <head>
        <title>Updating the screen</title>

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

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Updating the screen</h1>
        <MyButton />
        <MyButton />
    </>
);

function MyButton() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{`You clicked button below ${count} times`}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
```

First, import `useState` from React.

Now you can declare a *state variable* inside your component.

You’ll get two things from `useState`: the current state (`count`), and the function that lets you update it (`setCount`). You can give them any names, but the convention is to write `[something, setSomething]`.

The first time the button is displayed, `count` will be `0` because you passed `0` to `useState()`. When you want to change state, call `setCount()` and pass the new value to it. Clicking this button will increment the counter.

React will call your component function again. This time, `count` will be `1`. Then it will be `2`. And so on.

If you render the same component multiple times, each will get its own state. Click each button separately.

Notice how each button “remembers” its own count state and doesn’t affect other buttons.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/react-projects/008-updating-the-screen/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/react-projects/008-updating-the-screen/">Visit website</a>
  </dd>
</dl>

