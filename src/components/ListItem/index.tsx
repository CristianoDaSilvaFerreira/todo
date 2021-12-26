import { useState } from 'react';
import { Item } from '../../types/Item';
import * as ComponentsStyles from './styles';

type Props = {
  item: Item
}

export const  ListItem = ({ item }: Props) =>{

  const [isCheched, setIsChecked] = useState(item.done);

  return (
    <ComponentsStyles.Container done={isCheched}>
      <input 
        type="checkbox" 
        checked={isCheched}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </ComponentsStyles.Container>

    
  );
};

export default ListItem;
