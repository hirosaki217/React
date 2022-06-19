import { useState } from "react";

const courses =[
  {
    id: 1,
    name: "Javascript"
  },
  {
    id: 2,
    name: "HTML, CSS"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]

function App() {
  const [checked, setCheck] = useState(1)

  console.log("id: "+checked)
  return (
    <div className="App">
        {courses.map(item=>{
          return (
            <div key={item.id}>

              <input type="radio" 
                checked={checked === item.id}
                onChange={()=> setCheck(item.id)}
              />
              {item.name}
            </div>  
            )
        })}
        <button >Registry</button>
    </div>
  );
}

export default App;
