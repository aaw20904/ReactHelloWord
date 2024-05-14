  function Profile(){
    const source = "https://img.tsn.ua/cached/914/tsn-0abadf8c8c51e5bda34bc4558241c471/thumbs/428x268/b5/44/81a096a7f28a95210442b1de416244b5.jpg"; 
    return(
<img className="img-fluid img-thumbnail w-25"
      src={source}
      alt="Yulia TAK"
 />
 
    )
  }
  function HelloWord({par="helloword"}){
    return(
      <h2 className="text-danger">{par}</h2>
    );
  }

  function MyComponent() {
  return (
    <section>
      <h1>Tak, Yushenko!</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
 
export { MyComponent, HelloWord };