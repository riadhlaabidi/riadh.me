'use client';

import { sendEmail } from '../actions/send-email';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="mt-6 disabled:text-comment" disabled={pending} type="submit">
      {pending ? 'Sending ...' : 'Send Message'}
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
      <header>
        <h1>Let&apos;s work together!</h1>
      </header>
      <div className="mt-12">
        <p>
          Feel free to email me at{' '}
          <a href="mailto:contact@riadh.me">contact@riadh.me</a>
        </p>
        <p>Instead, you can send me a quick message using the form below:</p>
      </div>

      {state.sent ? (
        <p className="text-green mt-7">
          Thanks for reaching out, I will respond shortly.
        </p>) : (
        <form
          action={sendAction}
          className="flex flex-col items-start lg:w-1/2 mt-8"
        >
          <div className="mt-3 flex w-full after:content-[']'] before:content-['['] before:text-dark5 after:text-dark5 focus-within:after:text-orange focus-within:before:text-orange">
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <input
              className="caret-orange placeholder-dark5 placeholder:font-light bg-transparent border-none outline-none py-0 px-1 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
              required
            />
          </div>
          {state.errors?.name && (
            <small className="text-sm font-light text-red px-4">
              {state.errors.name}
            </small>
          )}
          <div className="mt-3 flex w-full after:content-[']'] before:content-['['] before:text-dark5 after:text-dark5 focus-within:after:text-orange focus-within:before:text-orange">
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              className="caret-orange placeholder-dark5 placeholder:font-light bg-transparent border-none outline-none py-0 px-1 w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email address..."
              required
            />
          </div>
          {state.errors?.email && (
            <small className="text-sm font-light text-red px-4">
              {state.errors.email}
            </small>
          )}
          <div className="mt-3 flex w-full after:content-[']'] before:content-['['] before:text-dark5 after:text-dark5 focus-within:after:text-orange focus-within:before:text-orange after:flex after:items-end">
            <label htmlFor="message" className="sr-only">
              Message:
            </label>
            <textarea
              className="caret-orange max-h-[40vh] resize-none placeholder-dark5 placeholder:font-light bg-transparent border-none outline-none py-0 px-1 w-full"
              id="message"
              name="message"
              rows={6}
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          {state.errors?.message && (
            <small className="text-sm font-light text-red px-4">
              {state.errors.message}
            </small>
          )}
          <SubmitButton />
        </form>
      )}
    </>
  );
}
