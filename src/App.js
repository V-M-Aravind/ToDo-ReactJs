import { useEffect, useState } from 'react';
import MainContainer from './components/todo-main-container/MainContainer';
import ToDoCard from './components/todo-card/ToDoCard';
import ToDoContainer from './components/todo-container/ToDoContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { data } from './components/data/Data';
import NewToDo from './components/new-todo/NewToDo';

function App() {
  const [todoList, setTodoList] = useState(data);
  const [searchResults, setsearchResults] = useState([]);
  useEffect(() => {
    setsearchResults(todoList);
  }, [todoList]);

  const saveToDoHandler = (toDo) => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          ...toDo,
          id: todoList.length + 2,
          date: () => new Date().toLocaleDateString(),
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
  };
  const deleteHandler = (id) => {
    setTodoList((p) => filterFunction(p, id));
  };
  const listRenderer = (flag) => {
    return searchResults.length > 0
      ? searchResults
          .filter((list) => (flag ? list.isCompleted : !list.isCompleted))
          .map((l) => (
            <ToDoCard
              list={l}
              key={l.id}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
            />
          ))
      : null;
  };
  const completedList = listRenderer(true);
  const nonCompletedList = listRenderer(false);

  return (
    <>
      <Header setsearchResults={setsearchResults} todoList={todoList} />
      <NewToDo saveToDoHandler={saveToDoHandler} />
      <MainContainer>
        <ToDoContainer title='ToDo'>
          {nonCompletedList ? nonCompletedList : 'no pending ToDos'}
        </ToDoContainer>
        <ToDoContainer title='Completed'>
          {completedList ? completedList : 'no completed list'}
        </ToDoContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
