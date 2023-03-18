import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const BtnVoucher = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <button><img src="/img/Gif/foto.gif" alt="" width={45} /></button>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="fixed z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:w-1/6">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-7 ">
                    <img src="https://www.gouservicios.com/wp-content/uploads/2020/05/file-VEr1SNSoSv.png" alt="" className="w-full" />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
