import { useState } from 'react';
import * as AppStyles from './App.styles';
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
      done: false
    },
  ]);
  return(
    <AppStyles.Container>
      <AppStyles.Area>
        <AppStyles.Header>Lista de Tarefa</AppStyles.Header>

        {/* Area de adicionar novas tarefas */}

        {/* Lista de tarefas */}
        {list.map((item, index) =>(
          <div>{item.name}</div>
        ))}
      </AppStyles.Area>
    </AppStyles.Container>
  );
}

export default App;