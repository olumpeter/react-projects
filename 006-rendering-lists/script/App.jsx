
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