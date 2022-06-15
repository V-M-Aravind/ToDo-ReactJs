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
  const [searchResults, setsearchResults] = useState(data);
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
    setsearchResults((prev) => {
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
  const filterFunction = (list, id) => {
    return list.filter((l) => id !== l.id);
  };
  // completeHandler does both mark as complete and uncomplete function
  const completeHandler = (list) => {
    setTodoList((p) => [...filterFunction(p, list.id), list]);
    setsearchResults((p) => [...filterFunction(p, list.id), list]);
  };
  const deleteHandler = (id) => {
    setTodoList((p) => filterFunction(p, id));
    setsearchResults((p) => filterFunction(p, id));
  };

  return (
    <>
      <Header setsearchResults={setsearchResults} todoList={todoList} />
      <NewToDo saveToDoHandler={saveToDoHandler} />
      <MainContainer>
        <ToDoContainer title='ToDo'>
          {searchResults.filter((list) => !list.isCompleted).length > 1
            ? searchResults
                .filter((list) => !list.isCompleted)
                .map((l) => (
                  <ToDoCard
                    list={l}
                    key={l.id}
                    completeHandler={completeHandler}
                    deleteHandler={deleteHandler}
                  />
                ))
            : 'No pending ToDos'}
        </ToDoContainer>
        <ToDoContainer title='Completed'>
          {searchResults.filter((list) => list.isCompleted).length > 1
            ? searchResults
                .filter((list) => list.isCompleted)
                .map((l) => (
                  <ToDoCard
                    list={l}
                    key={l.id}
                    completeHandler={completeHandler}
                    deleteHandler={deleteHandler}
                  />
                ))
            : 'No completed ToDos'}
        </ToDoContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
