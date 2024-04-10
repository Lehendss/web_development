import logo from './vueltas.jpg';
import './App.css';
import {TodoHeader} from './TodoHeader';
import {TodoFilter} from './TodoFilter';


function App() {
  return (
    <div className="App">
        
        <TodoHeader />
        <TodoFilter />

        <TodoList> 
            <TodoItem />
            <TodoItem />
        </TodoList>

        <TodoCreateButton />
           </div>
  );
}

function TodoItem(){
    return (
    <li>
        <span>V</span>
        <span>Ir a ver a la más bichota!</span>
        <span>X</span>
    </li>
    );
}

export default App;
