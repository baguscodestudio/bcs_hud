import { useState } from 'react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import classNames from 'classnames';
import { debugData } from '../utils/debugData';

// debugData([
//   {
//     action: 'displayHelp',
//     data: {
//       text: 'Press ~E~ to open boss menu haha lorem ipsum dolor sit amet hebron hebron',
//       play: true,
//       position: 'center-right',
//     },
//   },
// ]);

const POSITION: { [key: string]: string } = {
  ['top-left']: 'top-2 left-3',
  ['top-right']: 'top-2 right-3',
  ['bottom-left']: 'bottom-2 left-3',
  ['bottom-right']: 'bottom-2 right-3',
  ['top-center']: 'top-2 left-1/2 -translate-x-1/2',
  ['bottom-center']: 'bottom-2 left-1/2 -translate-x-1/2',
  ['center-left']: 'left-3 top-1/2 -translate-y-1/2',
  ['center-right']: 'right-3 top-1/2 -translate-y-1/2',
};

export const HelpNotification = () => {
  const [show, setDisplay] = useState(false);
  const [text, setText] = useState('');
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

  useNuiEvent('displayHelp', (data) => {
    setText(data.text);
    if (data.volume) audio.volume = data.volume;
    if (data.play) audio.play();
    if (data.position) setPosition(data.position);
    setDisplay(true);
  });

  useNuiEvent('closeHelp', (data) => {
    setText('');
    setDisplay(false);
    setPosition('top-left');
  });

  return (
    <>
      {show ? (
        <div
          className={classNames(
            'absolute font-Chalet antialiased py-1 bg-black px-3 opacity-90 text-white max-w-sm',
            POSITION[position]
          )}
          dangerouslySetInnerHTML={{ __html: fixArray.join(' ') }}
        ></div>
      ) : null}
    </>
  );
};
