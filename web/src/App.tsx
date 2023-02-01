import { useEffect } from 'react';
import './App.css';

import Settings from './components/Settings';
import { HelpNotification } from './components/HelpNotification';
import { Alert } from './components/Alert';
import Modal from './components/Modal';
import InputKeyboard from './components/InputKeyboard';
import { fetchNui } from './utils/fetchNui';
import { locale } from './store/locale';
import Instruction from './components/Instruction';

function App() {
  useEffect(() => {
    fetchNui<{ [key: string]: string }>('initialize').then((data) => {
      for (const [name, str] of Object.entries(data.locale)) locale[name] = str;
    });
  }, []);

  return (
    <div className="">
      <InputKeyboard />
      <Modal />
      <Settings />
      <Instruction />
      <HelpNotification />
      <Alert />
    </div>
  );
}

export default App;
