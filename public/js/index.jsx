// main.js
import MyComponent from '../js/MyComponent.js';
    let myApp={};

  myApp.Profile = function () {
    return(
       <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
    )
  }

   myApp.App  = () => {
    return(
        <section>
      <h1>Amazing scientists</h1>
      <myApp.Profile />
      <myApp.Profile />
      <myApp.Profile />
    </section>
    )
    };

    // Render the component
    ReactDOM.render(<myApp.App />, document.getElementById('root'));
 