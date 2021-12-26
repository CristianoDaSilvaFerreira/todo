import { useState } from 'react';
import * as AppStyles from './App.styles';
import ListItem from './components/ListItem';
import { Item } from './types/Item';

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
  return(
    <AppStyles.Container>
      <AppStyles.Area>
        <AppStyles.Header>Lista de Tarefa</AppStyles.Header>

        {/* Area de adicionar novas tarefas */}

        {/* Lista de tarefas */}
        {list.map((item, index) =>(
          <ListItem key={index} item={item}/>
        ))}
      </AppStyles.Area>
    </AppStyles.Container>
  );
}

export default App;