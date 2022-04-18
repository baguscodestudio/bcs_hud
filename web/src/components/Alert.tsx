import toast, { Toaster, ToastPosition } from 'react-hot-toast';
import { Transition } from '@headlessui/react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { debugData } from '../utils/debugData';

import { AlertType, AlertData } from '../types';

import { Exclamation } from '@styled-icons/bootstrap/Exclamation';
import { Check } from '@styled-icons/bootstrap/Check';
import { Times } from '@styled-icons/fa-solid/Times';
import { Info } from '@styled-icons/bootstrap/Info';

const AlertTypes: AlertType = {
  warning: {
    color: 'bg-yellow-500',
    text: 'text-yellow-600',
    background: 'bg-slate-200',
    icon: <Exclamation />,
  },
  success: {
    color: 'bg-lime-500',
    text: 'text-lime-700',
    background: 'bg-slate-150',
    icon: <Check />,
  },
  error: {
    color: 'bg-red-500',
    text: 'text-red-700',
    background: 'bg-slate-200',
    icon: <Times />,
  },
  info: {
    color: 'bg-blue-500',
    text: 'text-blue-700',
    background: 'bg-slate-150',
    icon: <Info />,
  },
};

const POSITIONS: { [key: string]: { from: string; to: string } } = {
  ['top-right']: {
    from: 'translate-x-full',
    to: 'translate-x-0',
  },
  ['top-left']: {
    from: '-translate-x-full',
    to: '-translate-x-0',
  },
  ['bottom-right']: {
    from: 'translate-x-full',
    to: 'translate-x-0',
  },
  ['bottom-left']: {
    from: '-translate-x-full',
    to: '-translate-x-0',
  },
  ['top-center']: {
    from: '-translate-y-full',
    to: '-translate-y-0',
  },
  ['bottom-center']: {
    from: 'translate-y-full',
    to: 'translate-y-0',
  },
};

// debugData([
//   {
//     action: 'sendAlert',
//     data: {
//       title: 'Test',
//       message:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//       type: 'success',
//       duration: 3000,
//       play: true,
//       position: 'top-left',
//     },
//   },
// ]);

export const Alert = () => {
  const notification = new Audio('sounds/notification.ogg');
  useNuiEvent<AlertData>('sendAlert', (data) => {
    if (data.volume) notification.volume = data.volume;
    if (data.play) notification.play();
    toast.custom(
      (t) => (
        <Transition
          appear
          show={t.visible}
          enter="transition ease-in-out duration-300 transform"
          enterFrom={POSITIONS[data.position || 'top-right'].from}
          enterTo={POSITIONS[data.position || 'top-right'].to}
          leave="transition ease-in-out duration-300 transform"
          leaveFrom={POSITIONS[data.position || 'top-right'].to}
          leaveTo={POSITIONS[data.position || 'top-right'].from}
        >
          <div
            className={`w-96 h-full rounded-l-lg bg-white shadow-lg flex justify-between items-center whitespace-pre ${
              AlertTypes[data.type].text
            }`}
          >
            <div
              className={`rounded-l-lg ${
                AlertTypes[data.type].color
              } w-2 h-full`}
            >
              &nbsp;
            </div>
            <div
              className={`mx-2 w-7 h-7 rounded-full flex justify-center items-center ${
                AlertTypes[data.type].color
              } text-white`}
            >
              {AlertTypes[data.type].icon}
            </div>
            <div className="px-3 py-1 my-2 w-5/6">
              <h5 className="font-semibold font-Chalet">{data.title}</h5>
              <p className="text-sm font-Chalet">{data.message}</p>
            </div>
          </div>
        </Transition>
      ),
      {
        position: data.position
          ? (data.position as ToastPosition)
          : 'top-right',
        duration: data.duration ? data.duration : 4000,
      }
    );
  });

  return <Toaster />;
};
