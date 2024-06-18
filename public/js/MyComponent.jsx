function MyElement ({pr}) {
    const link = "https://www.shutterstock.com/image-photo/small-propeller-plane-flying-smoke-260nw-2259100567.jpg"
    return(
        <div>
      <img alt="litak" src={link} className="m-2 img-fluid"></img>
        <h2>{pr.text}</h2>
        </div>

    )
  }

  export {MyElement}