import { useState, KeyboardEvent } from 'react';
import * as AddAreaStyles from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

  const [inputText, setInputeText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputeText('');
    }
  }

  return (
    <AddAreaStyles.Container>
      <div className='image'>➕</div>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefas'
        value={inputText}
        onChange={e => setInputeText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </AddAreaStyles.Container>
  );
};

export default AddArea;
