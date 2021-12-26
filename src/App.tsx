import { useState } from 'react';
import * as AppStyles from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Compra o pão na padaria',
      done: false
    },
    {
      id: 2,
      name: 'Compra um bolo na padaria',
      done: true
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push ({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return(
    <AppStyles.Container>
      <AppStyles.Area>
        <AppStyles.Header>Lista de Tarefa</AppStyles.Header>

        {/* Area de adicionar novas tarefas */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}
        {list.map((item, index) =>(
          <ListItem key={index} item={item}/>
        ))}
      </AppStyles.Area>
    </AppStyles.Container>
  );
}

export default App;