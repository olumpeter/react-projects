
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
const isLoggedIn = false;

root.render(
    <>
        <h1>Conditional rendering</h1>
        {/* <LoadContent /> */}
        {isLoggedIn ? <AdminPanel/> : <LoginForm/>}
    </>
);

// function LoadContent() {
//     let content;
//     if (isLoggedIn) {
//         content = <AdminPanel />
//     } else {
//         content = <LoginForm />
//     }

//     return content
// }

function AdminPanel() {
    return (
        <>
            <div>
                <h2>Admin panel</h2>
            </div>
        </>
    )
}

function LoginForm() {
    return (
        <>
            <div>
                <h2>Login form</h2>
            </div>
        </>
    )
}