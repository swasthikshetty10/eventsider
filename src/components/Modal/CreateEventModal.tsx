import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { trpc } from "../../utils/trpc";

function CreateEvents({ showModal }: { showModal: (arg0: boolean) => void }) {
  const mutation = trpc.events.createEvent.useMutation();
  const utitls = trpc.useContext();
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] flex h-screen w-screen items-center justify-center overflow-x-hidden bg-gray-900 bg-opacity-50   p-5 dark:bg-opacity-80">
      <Card className="relative -m-5 h-fit max-h-[75vh] w-full max-w-2xl space-y-2 overflow-auto">
        <button
          onClick={() => {
            showModal(false);
          }}
          className=" absolute top-5 right-5"
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
        <Form
          handler={(e: any) => {
            e.preventDefault();
            const data = {
              title: e.target.title.value,
              banner: e.target.banner.value,
              description: e.target.description.value,
              date: new Date(e.target.date.value) as Date,
              registrationFee: Number(e.target.registrationFee.value),
              location: e.target.location.value,
            };
            mutation.mutate(data);
            utitls.events.getAllEventsByOrganizer.invalidate();
            showModal(false);
          }}
        />
      </Card>
    </div>
  );
}

export default CreateEvents;
const Form = ({ handler }: any) => {
  return (
    <form onSubmit={handler} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Event Title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="Music Concert"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="banner" value="Banner Url" />
        </div>
        <TextInput
          id="banner"
          placeholder="https://cloudinary.com/img/musicbanner.png"
          type="text"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea
          placeholder="live music concert ft..."
          id="description"
          rows={4}
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="registrationFee" value="Registration Fee (INR)" />
        </div>
        <TextInput
          placeholder="999"
          id="registrationFee"
          type="number"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Date and Time" />
        </div>
        <TextInput id="date" type="datetime-local" required={true} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="location" value="Location " />
        </div>
        <TextInput
          placeholder="Nitte, Udupi "
          id="location"
          type="text"
          required={true}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
