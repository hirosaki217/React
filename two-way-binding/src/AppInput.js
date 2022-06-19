import { useState } from "react";

function App() {
  const [name, setName] = useState('')
  console.log(name);
  return (
    <div className="App">
        <input 
          onChange={e=> setName(e.target.value)}
          value={name}
        />
        <button onClick={() =>setName("nguyen van b")}>Change</button>
    </div>
  );
}

export default App;
