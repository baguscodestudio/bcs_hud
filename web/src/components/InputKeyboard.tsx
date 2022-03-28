import React, { useState } from 'react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { locale } from '../store/locale';
import { KeyboardData, KeyboardRow } from '../types';
import { debugData } from '../utils/debugData';
import { fetchNui } from '../utils/fetchNui';

debugData([
  {
    action: 'openInputKeyboard',
    data: {
      title: 'Titlenya nih',
      rows: [
        {
          title: 'what',
          placeholder: 'isinya begini',
          icon: 'fa-brands fa-cc-mastercard'
        },
      ],
    },
  },
]);

const InputKeyboard = () => {
  const [isOpen, setOpen] = useState(false);
  const [rows, setRows] = useState<KeyboardRow[]>([]);
  const [title, setTitle] = useState('Default Title');
  const [values, setValues] = useState<string[]>([]);

  useNuiEvent<KeyboardData>('openInputKeyboard', (data) => {
    setTitle(data.title);
    setRows(data.rows);
    let tempArr: string[] = [];
    data.rows.map((value, index) => {
      tempArr[index] = '';
    });
    setValues(tempArr);
    setOpen(true);
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetchNui('submitKeyboard', values);
    fetchNui('hideFrame');
    setOpen(false);
  };

  const handleChange = (value: string, index: number) => {
    let tempArr = [...values];
    tempArr[index] = value;
    setValues(tempArr);
  };

  return (
    <>
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="absolute rounded-lg bg-gray-800 w-80 min-h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-4 flex flex-col text-white items-center"
        >
          <div className="font-bold text-xl">{title}</div>
          {rows.map((row, index) => (
            <div className="flex flex-col w-full my-2">
              <div className="font-semibold mb-1">{row.title}</div>
              <div className="flex items-center pr-">
                {row.icon && (
                  <i className={row.icon + " pl-1 pr-2"}></i>
                )}
                <input
                  className="w-full rounded-md bg-slate-600 px-2 py-1 focus:ring-2 focus:ring-blue-800 outline-none"
                  name={`index-${index}`}
                  required={row.required || false}
                  type={row.type || 'text'}
                  placeholder={row.placeholder}
                  onChange={(evt) => handleChange(evt.currentTarget.value, index)}
                />
              </div>
            </div>
          ))}
          <button
            className="px-4 py-2 rounded-lg bg-green-600 font-semibold my-2"
            type="submit"
          >
            {locale['submit']}
          </button>
        </form>
      )}
    </>
  );
};

export default InputKeyboard;
