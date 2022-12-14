import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { makePayment } from "../../utils/razorpay";

function EventsModal({ showModal, modal, id, fee }: any) {
  useEffect(() => {
    if (modal) {
      // disable scroll for page
    }
  }, [modal]);
  const [tnc, setTnc] = React.useState(false);
  return modal ? (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 p-5 dark:bg-opacity-80">
      <div className="relative z-[9999] max-w-xl rounded-xl bg-white  shadow-lg dark:bg-gray-700">
        <div className="flex items-center justify-between border-b-[1px]  p-5 font-bold">
          <div className="   text-3xl">Buy Event Tickets</div>
          <button
            onClick={() => {
              showModal(false);
            }}
            className=" top-5 right-5"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <div className="max-h-[50vh] space-y-6 overflow-y-scroll border-b-[1px] p-5 ">
            <div></div>
            <div className="space-y-7">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Terms & Conditions for Buying Event Tickets
              </h2>
              <ul className=" list-inside list-decimal space-y-3 text-gray-500 dark:text-gray-400">
                <li>
                  All ticket purchases are final. No refunds, exchanges or
                  cancellations are accepted.
                </li>
                <li>
                  All tickets purchased must be used for the same event and for
                  the same person.
                </li>
                <li>All tickets have a one-time use, and may not be resold.</li>
                <li>
                  All ticket holders assume all risks associated with attending
                  the event, including, but not limited to, personal injury
                  and/or damage to personal property.
                </li>
                <li>
                  Any tickets purchased from unauthorized sources may be
                  invalid, and the event organizer reserves the right to refuse
                  admission.
                </li>
                <li>
                  If the event is cancelled, the event organizer will contact
                  ticket holders as soon as possible to arrange for a refund of
                  the ticket price.
                </li>
                <li>
                  The event organizer reserves the right to make changes to the
                  event, including, but not limited to, the line-up of
                  performers, and the date and time of the event.
                </li>
              </ul>
              <div>
                <p>
                  By purchasing tickets, the ticket holder agrees to all of the
                  above <span className="font-bold">terms and conditions.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-3 p-5">
          <div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <input
                  checked={tnc}
                  onChange={(e) => {
                    setTnc(e.target.checked);
                  }}
                  type="checkbox"
                  className="h-4 w-4"
                />
                <span className="text-gray-500  dark:text-gray-400">
                  I agree to the terms and conditions
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex items-center gap-1">
              <span className="text-md  ">Total fees </span>
              <span className="text-2xl font-bold"> ₹{fee}</span>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  makePayment(id);
                }}
                disabled={!tnc}
              >
                Pay Now
              </Button>
              <Button
                onClick={() => {
                  showModal(false);
                }}
                color="gray"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default EventsModal;
