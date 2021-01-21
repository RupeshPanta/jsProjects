import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';

function App(props) {
  const taskList = props.task.map((task) => (
  <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    />
    )
  );
  return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form/>
        <div className="filters btn-group stack-exception">
          <FilterButton/>
          <FilterButton/>
          <FilterButton/>
        </div>
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
        <ul
          className="todo-list stack-large stack-exception"
        >
          {taskList}
        </ul>
      </div>
    );
  }

  export default App;