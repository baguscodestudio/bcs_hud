import React from 'react';
import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import { Check } from '@styled-icons/bootstrap/Check';
import { Selector } from '@styled-icons/heroicons-outline/Selector';

interface SelectProps {
  classes?: string;
  id: string;
  value: string;
  list: {
    name: string;
  }[];
  handleSelect: (value: string, key: string) => void;
}

const Select: React.FC<SelectProps> = ({
  classes,
  value,
  list,
  id,
  handleSelect,
}) => {
  return (
    <div className={classes}>
      <Listbox value={value} onChange={(value) => handleSelect(value, id)}>
        <div className="relative mt-1">
          <Listbox.Button className="w-full relative cursor-default bg-white text-left text-sm pl-3 py-2 pr-10 rounded-lg shadow-md">
            <span className="block truncate">{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Selector className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 shadow-md overflow-auto text-sm bg-white text-black rounded-md">
            {list.map((row, index) => (
              <Listbox.Option
                key={index}
                value={row.name}
                className={({ active }) =>
                  classNames(
                    active ? 'text-white bg-gray-700' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-6 pr-4 rounded-md'
                  )
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {row.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-emerald-600">
                        <Check className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
