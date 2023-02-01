import toast, { Toaster, ToastPosition } from 'react-hot-toast';
import { Transition } from '@headlessui/react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { debugData } from '../utils/debugData';

import { AlertType, AlertData } from '../types';

import { Exclamation } from '@styled-icons/bootstrap/Exclamation';
import { Check } from '@styled-icons/bootstrap/Check';
import { Times } from '@styled-icons/fa-solid/Times';
import { Info } from '@styled-icons/bootstrap/Info';

const AlertTypes: {
  clean: AlertType;
  transparent: AlertType;
} = {
  clean: {
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
  },
  transparent: {
    warning: {
      color: 'bg-warning',
      text: 'text-warning',
      background: 'from-warning to-warning/15',
      icon: <Exclamation />,
    },
    success: {
      color: 'bg-success',
      text: 'text-success',
      background: 'from-success to-success/15',
      icon: <Check />,
    },
    error: {
      color: 'bg-error',
      text: 'text-error',
      background: 'from-error to-error/15',
      icon: <Times size="1.5rem" />,
    },
    info: {
      color: 'bg-blue-500',
      text: 'text-blue-700',
      background: 'bg-slate-150',
      icon: <Info />,
    },
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
//       message: "Lorem Ipsum has been the industry's standard ",
//       type: 'error',
//       style: 'transparent',
//       duration: 300000,
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
    data.style == 'transparent'
      ? toast.custom(
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
                className={`w-96 border-[1px] border-white/60 px-2 h-full rounded-md shadow-lg flex justify-around backdrop-blur-2xl items-center text-white bg-gradient-to-br ${
                  AlertTypes[data.style][data.type].background
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-sm flex justify-center items-center bg-white ${
                    AlertTypes[data.style][data.type].text
                  }`}
                >
                  {AlertTypes[data.style][data.type].icon}
                </div>
                <div className="py-1 my-2 w-5/6">
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
        )
      : toast.custom(
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
                className={`w-96 h-full rounded-l-lg bg-white shadow-lg flex justify-between items-center ${
                  AlertTypes[data.style][data.type].text
                }`}
              >
                <div
                  className={`rounded-l-lg ${
                    AlertTypes[data.style][data.type].color
                  } w-2 h-full`}
                >
                  &nbsp;
                </div>
                <div
                  className={`mx-2 w-7 h-7 rounded-full flex justify-center items-center ${
                    AlertTypes[data.style][data.type].color
                  } text-white`}
                >
                  {AlertTypes[data.style][data.type].icon}
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
