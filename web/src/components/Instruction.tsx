import { useState } from 'react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import classNames from 'classnames';
import { debugData } from '../utils/debugData';
import { InstructionData, InstructionItem } from '../types';

debugData([
  {
    action: 'keybind',
    data: {
      title: 'Editing Furniture Abc Lima Dasar Tiga empat Dor',
      position: 'center-right',
      items: [
        {
          description: 'CANCEL',
          buttons: ['BACKSPACE'],
        },
        {
          description: 'Change Speed',
          buttons: ['CAPSLOCK', 'LSHIFT'],
        },
      ],
    },
  },
]);

const POSITION: { [key: string]: string } = {
  ['top-left']: 'top-2 left-3',
  ['top-right']: 'top-2 right-3',
  ['bottom-left']: 'bottom-2 left-3',
  ['bottom-right']: 'bottom-2 right-3',
  ['top-center']: 'top-2 left-1/2 -translate-x-1/2',
  ['bottom-center']: 'bottom-2 left-1/2 -translate-x-1/2',
  ['center-left']: 'left-3 top-1/2 -translate-y-1/2',
  ['center-right']: 'right-6 top-1/2 -translate-y-1/2',
};

const Instruction = () => {
  const [show, setDisplay] = useState(false);
  const [text, setText] = useState('');
  const [items, setItems] = useState<InstructionItem[]>([]);
  const [position, setPosition] = useState('top-left');
  const audio = new Audio('sounds/helpnotification.ogg');
  const Regex = new RegExp(/\~\S+\~/);
  const textArray = text?.split(' ');
  let fixArray: String[] = [];

  textArray?.map((word) => {
    if (Regex.test(word)) {
      word = word
        .replace(
          /\~/,
          '<span class="shadow-sm bg-gray-100 rounded-sm px-2 py-1 text-center text-black text-bold max-w-min max-h-7">'
        )
        .replace(/\~/, '</span>');
      fixArray.push(word);
    } else fixArray.push(word);
  });

  useNuiEvent<InstructionData>('keybind', (data) => {
    setText(data.title);
    if (data.volume) audio.volume = data.volume;
    if (data.play) audio.play();
    if (data.position) setPosition(data.position);
    setItems(data.items);
    setDisplay(true);
  });

  useNuiEvent('closeKeybind', (data) => {
    setText('');
    setDisplay(false);
    setPosition('top-left');
  });

  return (
    <>
      {show ? (
        <div
          className={classNames(
            'absolute font-NotoSans font-medium antialiased text-white flex items-center translate-x-32',
            POSITION[position]
          )}
        >
          <div className="grid grid-cols-2 h-fit gap-2">
            {items.map((item, index) => (
              <>
                <div className="flex items-start justify-end h-8 uppercase mr-2">
                  {item.description}
                </div>
                <div className="flex gap-1 h-8 justify-end">
                  {item.buttons.map((button) => (
                    <span className="flex text-sm items-center justify-center shadow-sm bg-gray-100 rounded-md py-1 px-2.5 text-black text-bold max-w-min max-h-7 whitespace-nowrap">
                      {button}
                    </span>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div className="table ml-2">
            <div className="rotation-wrapper-inner">
              <div className="rotate-left">
                <div className="relative w-full h-[2px] bg-white">
                  <div className="absolute -right-2 -translate-y-1/2 top-1/2 rounded-full w-4 h-4 bg-white">
                    &nbsp;
                  </div>
                </div>
                <div className="uppercase mt-1 max-w-[10rem] text-center">
                  {text}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Instruction;
