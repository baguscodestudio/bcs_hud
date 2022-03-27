import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useExitListener } from '../hooks/useExitListener';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { debugData } from '../utils/debugData';
import Select from './Select';

// setTimeout(() => {
//   debugData([
//     {
//       action: 'settings',
//       data: true,
//     },
//   ]);
// }, 3000);

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    HelpPosition: 'top-left',
    NotificationPosition: 'top-right',
    Volume: 1,
    HelpAudio: true,
    NotificationAudio: true,
  });
  const [display, setDisplay] = useState(false);

  useNuiEvent('settings', (data) => {
    setDisplay(data);
  });

  const handleClose = () => {
    setDisplay(false);
    fetchNui('hideFrame');
  };

  const handleSubmit = () => {
    setDisplay(false);
    fetchNui('saveSettings', settings);
    fetchNui('hideFrame');
  };

  const handleChange = (
    evt: React.FormEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >,
    key: string
  ) => {
    setSettings({ ...settings, [key]: evt.currentTarget.value });
  };

  const handleSelect = (value: string, key: string) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <>
      {display && (
        <div className="w-screen h-screen flex">
          <div className="bg-slate-200 shadow-lg flex flex-col text-gray-700 m-auto w-1/4 h-1/2 rounded-lg py-10 px-7">
            <div className="font-bold text-xl">Settings</div>
            <div className="inline-flex items-center justify-between my-2">
              <div>Volume</div>
              <div className="font-semibold">{settings.Volume}</div>
              <input
                className="w-30 h-0.5 rounded outline-none"
                type="range"
                min="0.00"
                max="1.00"
                step={0.1}
                onChange={(evt) => handleChange(evt, 'Volume')}
              />
            </div>
            <div className="font-semibold">Help Notification</div>
            <div className="inline-flex items-center justify-between my-2">
              <div className="mr-4">Pop up position</div>
              <Select
                classes="w-40"
                id="HelpPosition"
                value={settings.HelpPosition}
                handleSelect={handleSelect}
                list={[
                  { name: 'top-left' },
                  { name: 'top-right' },
                  { name: 'bottom-left' },
                  { name: 'bottom-right' },
                  { name: 'top-center' },
                  { name: 'bottom-center' },
                  { name: 'center-right' },
                  { name: 'center-left' },
                ]}
              />
            </div>
            <div className="inline-flex items-center justify-between my-2">
              <Switch.Group
                as="div"
                className="inline-flex mb-4 justify-between w-full"
              >
                <Switch.Label className="mr-4">Enable audio</Switch.Label>
                <Switch
                  checked={settings.HelpAudio}
                  onChange={(value) =>
                    setSettings({ ...settings, HelpAudio: value })
                  }
                  className={`${
                    settings.HelpAudio ? 'bg-emerald-500' : 'bg-red-500'
                  }
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      settings.HelpAudio ? 'translate-x-5' : 'translate-x-0.5'
                    }
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </Switch.Group>
            </div>
            <div className="font-semibold">Notification</div>
            <div className="inline-flex items-center justify-between my-2">
              <div className="mr-4">Pop up position</div>
              <Select
                classes="w-40"
                id="NotificationPosition"
                value={settings.NotificationPosition}
                handleSelect={handleSelect}
                list={[
                  { name: 'top-left' },
                  { name: 'top-right' },
                  { name: 'bottom-left' },
                  { name: 'bottom-right' },
                  { name: 'top-center' },
                  { name: 'bottom-center' },
                ]}
              />
            </div>
            <div className="inline-flex items-center justify-between my-2">
              <Switch.Group
                as="div"
                className="inline-flex mb-4 justify-between w-full"
              >
                <Switch.Label className="mr-4">Enable audio</Switch.Label>
                <Switch
                  checked={settings.NotificationAudio}
                  onChange={(value) =>
                    setSettings({ ...settings, NotificationAudio: value })
                  }
                  className={`${
                    settings.NotificationAudio ? 'bg-emerald-500' : 'bg-red-500'
                  }
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      settings.NotificationAudio
                        ? 'translate-x-5'
                        : 'translate-x-0.5'
                    }
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </Switch.Group>
            </div>
            <div className="inline-flex justify-end mt-auto">
              <button
                onClick={() => handleClose()}
                className="py-1 px-6 font-bold bg-gray-400 rounded-lg text-sm hover:scale-105 hover:bg-neutral-800 hover:text-white duration-150 ease-in-out mr-4"
              >
                Close
              </button>
              <button
                onClick={() => handleSubmit()}
                className="py-1 px-6 font-bold bg-green-400 rounded-lg text-sm hover:scale-105 hover:bg-emerald-800 hover:text-white duration-150 ease-in-out"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
