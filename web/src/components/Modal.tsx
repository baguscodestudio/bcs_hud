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
//       title: 'Confirmation Title',
//       text: 'Are you sure to confirm this? Lorem ipsum dolor sit amet this is the standard text since the 2000s.',
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
              <div className="relative inline-block w-fit max-w-md p-6 my-8 text-left align-middle transition-all transform bg-grey-dark text-white shadow-xl rounded-md">
                <Dialog.Title as="h3" className="text-lg font-bold leading-6">
                  {data.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p>{data.text}</p>
                </div>

                <div className="absolute flex flex-col-reverse -right-4 gap-2 -translate-y-1/2 top-1/2">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-xl font-medium bg-red-inactive rounded-md hover:bg-red-active outline-none"
                    onClick={() => closeModal()}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-xl font-medium bg-green-inactive rounded-md hover:bg-green-active outline-none"
                    onClick={acceptModal}
                  >
                    <i className="fa-regular fa-circle-check"></i>
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
