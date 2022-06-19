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
  const [checked, setCheck] = useState([])
  console.log(checked);
  const handleCheck = (id)=>{
    setCheck(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
        return checked.filter(item => item !== id)
      }else{
        return [...prev, id]
      }
    })
    
  }
  return (
    <div className="App">
        {courses.map(item=>{
          return (
            <div key={item.id}>

              <input type="checkbox" 
                checked={checked.includes(item.id)}
                onChange={()=> handleCheck(item.id)}
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
