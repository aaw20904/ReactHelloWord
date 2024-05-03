function MyButton() {
  return (
    <button className="btn btn-success">
      I'm a button
    </button>
  );
}

const App = () => {
   

    return (
        <div className="p-2">
            <h1>Hello, React!</h1>
            <p>This is a simple React application.</p>
           <MyButton />
        </div>
    );
}

// Render the component
ReactDOM.render(<App />, document.getElementById('root'));