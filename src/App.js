import { useState } from 'react';
import MainContainer from './components/todo-main-container/MainContainer';
import ToDoCard from './components/todo-card/ToDoCard';
import ToDoContainer from './components/todo-container/ToDoContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { data } from './components/data/Data';
import NewToDo from './components/new-todo/NewToDo';

function App() {
  const [todoList, setTodoList] = useState(data);
  const saveToDoHandler = (toDo) => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          ...toDo,
          id: todoList.length + 2,
          date: new Date().toLocaleDateString(),
        },
      ];
    });
  };
  // completeHandler does both mark as complete and uncomplete function
  const completeHandler = (list) => {
    setTodoList((p) => [...p.filter((l) => l.id !== list.id), list]);
  };
  const deleteHandler = (id) => {
    setTodoList((p) => p.filter((l) => l.id !== id));
  };
  return (
    <>
      <Header />
      <NewToDo saveToDoHandler={saveToDoHandler} />
      <MainContainer>
        <ToDoContainer title='ToDo'>
          {todoList
            .filter((list) => !list.isCompleted)
            .map((l) => (
              <ToDoCard
                list={l}
                key={l.id}
                completeHandler={completeHandler}
                deleteHandler={deleteHandler}
              />
            ))}
        </ToDoContainer>
        <ToDoContainer title='Completed'>
          {todoList
            .filter((list) => list.isCompleted)
            .map((l) => (
              <ToDoCard
                list={l}
                key={l.id}
                completeHandler={completeHandler}
                deleteHandler={deleteHandler}
              />
            ))}
        </ToDoContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
