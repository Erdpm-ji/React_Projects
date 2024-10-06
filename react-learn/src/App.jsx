
function App() {

  let x=25;
  let y= 30;

  return (
   <>
   <h1>Evaluting expreession </h1>
   <p>Sum of {x} and {y} is {x+y}</p> 
   <h3> {x} {">"} {y} {":"} {x>y ? 'true' : 'false'} </h3>
    </>
  );
}

export default App
