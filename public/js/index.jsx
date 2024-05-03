const App = () => {
    // Function to handle the click event
    const handleClick = () => {
        alert('Hello from React!');
    };

    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is a simple React application.</p>
            {/* Adding a click event to the h3 tag */}
            <h3 onClick={handleClick}>Click me: helloReact</h3>
        </div>
    );
}

// Render the component
ReactDOM.render(<App />, document.getElementById('root'));