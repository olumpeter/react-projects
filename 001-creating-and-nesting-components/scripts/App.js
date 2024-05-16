
const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(
    <MyApp />
)

function MyApp() {
    return (
        <>
            <h1>Welcome to my app</h1>
            <MyButton />
        </>
    )
}

function MyButton() {
    return (
        <>
            <button>I'm a button</button>
        </>
    )
}