
import {MyElement} from './MyComponent'
let glSwitch =0;
//import {Gallery} from "./MyComponent"
    let myApp={};
   myApp.App  = () => {
    return(
      <div>
        <MyElement  pr={ {text:"litak"} }/>
        <MyElement pr={ {text:"plane"} }  />
      </div>
    
      )
    };

    // Render the component
    ReactDOM.render(<myApp.App />, document.getElementById('root'));
 