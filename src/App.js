import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Person from './Person';
import Modal from './Modal';
import Item from './Item';
import TaskList from './tasklist/TaskList';

function App() {
  return (
    <div className='App'>
      {/* <Counter/>  <hr/>
      <Person/>   <hr/>
      <Modal/>    <hr/>
      <Item/>     <hr/> */}
      <TaskList/>
    </div>
  );
}

export default App;
