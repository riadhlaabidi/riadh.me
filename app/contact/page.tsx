'use client';

import { sendEmail } from '../actions/send-email';
import { useFormState, useFormStatus } from 'react-dom';

function TextInput({
  name,
  id,
  type,
}: {
  name: string;
  id: string;
  type: string;
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="mt-3 block w-full rounded border border-neutral-400 bg-transparent px-2 py-3 font-normal focus:outline-none dark:border-secondary-gray"
      required
    />
  );
}

function InputLabel({
  forId,
  label,
  required,
}: {
  forId: string;
  label: string;
  required: boolean;
}) {
  return (
    <div>
      <label htmlFor={forId}>{label}</label>
      {required && <span className="ml-1 text-xs text-red-700">&#42;</span>}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return <small className="text-sm text-amber-600">{message}</small>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full rounded-lg border border-zinc-600 bg-secondary-gray px-12 py-[10px] font-normal uppercase text-white hover:bg-transparent hover:text-zinc-600 disabled:bg-transparent disabled:text-zinc-600 disabled:opacity-60 dark:border-zinc-300 dark:bg-zinc-300 dark:text-black dark:hover:text-zinc-300 dark:disabled:text-zinc-300"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <svg
            className="mr-2 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <circle
              className="stroke-zinc-600 opacity-25 dark:stroke-zinc-300"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            ></circle>
            <path
              className="fill-zinc-600 opacity-75 dark:fill-zinc-300"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Sending...
        </span>
      ) : (
        'Send message'
      )}
    </button>
  );
}

const initialState = {
  sent: false,
  errors: {},
};

export default function Contact() {
  const [state, sendAction] = useFormState(sendEmail, initialState);

  return (
    <>
      <h1 className="text-4xl font-bold">
        Let&apos;s Work{' '}
        <span className="text-green-500 dark:text-primary-green">
          Together!
        </span>
      </h1>
      <div className="my-12 flex flex-col border-zinc-700 text-lg ">
        <p className="mt-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-secondary-gray"
            width={20}
            height={20}
          >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          <a href="mailto:contact@riadh.me">contact@riadh.me</a>
        </p>
        <p className="mt-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-secondary-gray"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clipRule="evenodd"
            />
          </svg>
          <a href="tel:+21650811721">+216 50 811 721</a>
        </p>
        <p className="mt-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-secondary-gray"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>Tunisia</span>
        </p>
      </div>
      <form action={sendAction} className="mt-6 w-full lg:w-2/3">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mt-5 w-full md:mt-0 md:w-1/2">
            <InputLabel forId="name" label="Name" required />
            <TextInput name="name" id="name" type="text" />
            {state.errors?.name && (
              <ErrorMessage message={state.errors.name[0]} />
            )}
          </div>
          <div className="mt-5 w-full md:mt-0 md:w-1/2">
            <InputLabel forId="email" label="Email" required />
            <TextInput name="email" id="email" type="email" />
            {state.errors?.email && (
              <ErrorMessage message={state.errors.email[0]} />
            )}
          </div>
        </div>

        <div className="mt-5">
          <InputLabel forId="message" label="Message" required />
          <textarea
            className="mt-3 block w-full rounded border border-neutral-400 bg-transparent px-2 py-3 font-normal focus:outline-none dark:border-secondary-gray"
            rows={4}
            cols={60}
            id="message"
            name="message"
            required
          ></textarea>
          {state.errors?.message && (
            <ErrorMessage message={state.errors.message[0]} />
          )}
        </div>
        <div className="mt-8 flex flex-wrap items-center">
          {state.sent && (
            <p className="font-normal text-green-500 dark:text-primary-green">
              &#10003; Thanks for reaching out. I&apos;ll respond shortly.
            </p>
          )}
          {!state.sent && <SubmitButton />}
        </div>
      </form>
    </>
  );
}
