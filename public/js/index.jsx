// main.js

import { HelloWord, MyComponent } from "./MyComponent";

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
    console.log("function is:",MyComponent)
    return(
        <section>
      <MyComponent />
      <HelloWord />
      
    </section>
    )
    };

    // Render the component
    ReactDOM.render(<myApp.App />, document.getElementById('root'));
 