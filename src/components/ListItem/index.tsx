import { useState } from 'react';
import { Item } from '../../types/Item';
import * as ListItemStyles from './styles';

type Props = {
  item: Item
}

export const  ListItem = ({ item }: Props) =>{

  const [isCheched, setIsChecked] = useState(item.done);

  return (
    <ListItemStyles.Container done={isCheched}>
      <input 
        type="checkbox" 
        checked={isCheched}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </ListItemStyles.Container>

    
  );
};

export default ListItem;
