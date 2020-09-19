import './index.scss';
import React, { useEffect, useState } from 'react';
import Page from 'components/Page';
import List from '@material-ui/core/List';
import Card from 'pages/Todos/TodoItemCard';

type Todos = {
  title: String,
  content: String,
}

const Todos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [numberOfTodosOpened, setNumberOfTodosOpened] = useState<number>(0);
  const [close, setClose] = useState(false);

  useEffect(() => {
    fetch('/todos.json')
      .then(ret => ret.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (close) {
      setNumberOfTodosOpened(0);
      setClose(false);
    }
  }, [close])

  const updateNumberOfOpened = (changedValue: Boolean) => {
    setNumberOfTodosOpened(changedValue 
      ? numberOfTodosOpened - 1 
      : numberOfTodosOpened + 1);
  }

  return <Page className="Todos">
    <h2>Liste des to do</h2>
    <button
      onClick={() => setClose(true)}
      className='btn close-btn'
    >
      Close {numberOfTodosOpened} to do
    </button>
    <List className='margin-bottom'>
      {todos.map((elem, i) => (
        <Card
          key={`todo-nb-${i}`}
          title={elem.title}
          content={elem.content}
          index={i}
          updateNumberOfOpened={updateNumberOfOpened}
          close={close}
        />))
      }
    </List>
  </Page>
};

export default Todos;
