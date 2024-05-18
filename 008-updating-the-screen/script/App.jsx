
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