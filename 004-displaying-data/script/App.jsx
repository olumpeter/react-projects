
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