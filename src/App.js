import React,{ useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function Todos() {

 
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos] = useState([]);
  const [ status, setStatus] = useState("all");
  const [ filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
    }
  };

  return (
    <div className="App">
      <h6 className="App1">making todos better</h6>
      <Form 
      inputText = {inputText}
      todos = {todos}
      setInputText={setInputText}
      setTodos ={ setTodos}
      setStatus = {setStatus}
       />
      <TodoList
      filteredTodos = {filteredTodos}
      setTodos = {setTodos} 
      todos={todos} />
    </div>
  );
}

export default Todos;
