import {actions, useStore} from './store'



function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  return (
    <div className="App">
        <input 
          value={todoInput}
          onChange={e => dispatch(actions.setInput(e.target.value))}
          placeholder='Enter please....!'
        />
        <button onClick={() => dispatch(actions.addTodo(todoInput))}>Add</button>


        {todos.map((todo, index) =>(
          <li key={index}> {todo}</li>
        ))}
    </div>
  );
}

export default App;
