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
    const styles ={
      one:{backgroundColor:"yellow", color:"blue"},
      two:{backgroundColor:"blue", color:"yellow"}
    } 
   const time = new Date().toLocaleTimeString();
    console.log("function is:",MyComponent)
    return(
        <section>
      <MyComponent />
      <HelloWord par={time} x="uuu"/>
      <h4 style={styles.one}> ТАК </h4>
      <h4 style={styles.two}> ЮЩЕНКО </h4>
    </section>
    )
    };

    // Render the component
    ReactDOM.render(<myApp.App />, document.getElementById('root'));
 