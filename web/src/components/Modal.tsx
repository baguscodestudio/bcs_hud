import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { debugData } from '../utils/debugData';
import { fetchNui } from '../utils/fetchNui';
import { locale } from '../store/locale';

// debugData([
//   {
//     action: 'openModal',
//     data: {
//       title: 'what',
//       text: 'Are you sure?',
//     },
//   },
// ]);

const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({
    title: '',
    text: '',
  });

  useNuiEvent('openModal', (data) => {
    setOpen(true);
    setData(data);
  });

  useNuiEvent('closeModal', (data) => {
    closeModal();
  });

  function closeModal(accepted?: boolean) {
    if (!accepted) {
      fetchNui('declineModal');
    }
    setOpen(false);
    fetchNui('hideFrame');
  }

  const acceptModal = () => {
    fetchNui('acceptModal');
    closeModal(true);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {data.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{data.text}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mr-6"
                    onClick={() => closeModal()}
                  >
                    {locale['decline']}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={acceptModal}
                  >
                    {locale['accept']}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
