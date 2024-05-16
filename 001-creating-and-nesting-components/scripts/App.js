
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