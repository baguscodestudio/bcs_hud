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
          title: 'Text Label',
          placeholder: 'isinya begini',
          icon: 'fa-brands fa-cc-mastercard',
        },
        {
          title: 'Text Label',
          type: 'select',
          options: ['Makan', 'Eeq', 'Tidur'],
          icon: 'fa-brands fa-cc-mastercard',
        },
      ],
    },
  },
]);

const TextBox: React.FC<{
  props: KeyboardRow;
  index: number;
  handleChange: (value: string, number: number) => void;
}> = ({ props, index, handleChange }) => (
  <div className="bg-white w-full my-2 inline-flex items-center p-1 rounded-md">
    {props.icon && <i className={props.icon + ' pl-1 pr-2'}></i>}
    <div className="flex flex-col w-full">
      <div className="text-sm text-grey-dark">{props.title}</div>
      <input
        className="w-full rounded-md pr-2 font-medium outline-none"
        name={`index-${index}`}
        required={props.required || false}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={(evt) => handleChange(evt.currentTarget.value, index)}
      />
    </div>
  </div>
);

const SelectBox: React.FC<{
  props: KeyboardRow;
  index: number;
  handleChange: (value: string, number: number) => void;
}> = ({ props, index, handleChange }) => (
  <div className="bg-white w-full my-2 inline-flex items-center p-1 rounded-md">
    {props.icon && <i className={props.icon + ' pl-1 pr-2'}></i>}
    <div className="flex flex-col w-full">
      <div className="text-sm text-grey-dark">{props.title}</div>
      <select
        className="w-full rounded-md pr-2 font-medium outline-none bg-white"
        name={`index-${index}`}
        required={props.required || false}
        onChange={(evt) => handleChange(evt.currentTarget.value, index)}
      >
        {props.options?.map((option, index) => (
          <option
            key={index}
            value={option}
            className="px-2 py-1 hover:bg-[#5471A6]"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

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
          className="absolute rounded-lg bg-grey-darker text-grey-darker w-80 min-h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-4 flex flex-col items-center"
        >
          <div className="font-bold text-xl text-white">{title}</div>
          {rows.map((row, index) => {
            if (row.type == 'select') {
              return (
                <SelectBox
                  handleChange={handleChange}
                  props={row}
                  index={index}
                />
              );
            } else {
              return (
                <TextBox
                  handleChange={handleChange}
                  props={row}
                  index={index}
                />
              );
            }
          })}
          <div className="w-full inline-flex justify-between gap-2 text-white">
            <button
              className="px-4 py-1 rounded-lg bg-red-inactive hover:bg-red-active font-semibold my-2 grow transition-colors"
              type="button"
            >
              {locale['cancel']}
            </button>
            <button
              className="px-4 py-1 rounded-lg bg-green-inactive hover:bg-green-active font-semibold my-2 grow transition-colors"
              type="submit"
            >
              {locale['submit']}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default InputKeyboard;
