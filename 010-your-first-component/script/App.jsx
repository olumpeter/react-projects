
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
const amazingScientists = [
    {key: 1, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein"},
    {key: 2, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin"},
    {key: 3, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton"}
]
const imageWidth = 200
const imageHeight = 200

root.render(
    <>
        <h1>Your first component</h1>
        <section>
            <h2>Amazing Scientist</h2>
            <Gallery/>
        </section>
    </>
);

function Gallery() {
    return (
        <div id="gallery">
            {displayProfiles()}
        </div>
    )
}

function displayProfiles() {
    const profiles = []
    for (const scientist of amazingScientists) {
        profiles.push(<img key={scientist.key} src={scientist.imageUrl} alt={scientist.name} width={imageWidth} height={imageHeight}/>)
    }
    return profiles
}

