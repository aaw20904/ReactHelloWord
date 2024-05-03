   
    let usr="Misha";
    
      const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };

    const App = () => {

            function MyButton() {
            return (
              <button className="btn btn-success">
                I'm a button
              </button>
            );
          }

      usr=Date.now().toString();

        return (
          
            <div className="p-2">
                <h1>Hello, React!</h1>
                <p>This is a simple React application.{usr}</p>
              <MyButton />
               <h1>{user.name}</h1>
              <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize
                }}
              />
            </div>
        );
    }

    // Render the component
    ReactDOM.render(<App />, document.getElementById('root'));
 