
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Using Hooks </h1>
        <MyApp />
    </>
);

function MyApp() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </>
    )
}

function MyButton({count, onClick}) {
    return (
        <div>
            <h2>{`You clicked button below ${count} times`}</h2>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}