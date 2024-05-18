
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
    <>
        <h1>Responding to events</h1>

        <div>
            <LoginButton />
        </div>
    </>
);

function LoginButton() {
    function handleClick() {
        alert('You clicked the login button');
    }

    return (
        <>
            <button id="login-button" onClick={handleClick}>
                Login
            </button>
        </>
    );
}