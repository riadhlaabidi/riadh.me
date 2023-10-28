"use client";

import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

function TextInput({
  name,
  id,
  value,
  type,
  onChange,
}: {
  name: string;
  id: string;
  value: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className="mt-3 block w-full bg-transparent text-zinc-200 px-2 py-3 border border-zinc-500 rounded  focus:outline-none"
      onChange={onChange}
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
      {required && <span className="text-xs text-red-700 ml-1">&#42;</span>}
    </div>
  );
}

export default function Contact() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [reachedLimit, setReachedLimit] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch("/api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          message: message,
        }),
      });

      switch (res.status) {
        case 200: {
          setIsSent(true);
          setFirstname("");
          setLastname("");
          setEmail("");
          setMessage("");
          break;
        }
        case 400: {
          const data = await res.json();
          setErrors(data.errors);
        }
        case 429: {
          setReachedLimit(true);
          break;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-normal">
        Let&apos;s Work <span className="text-primary-green">Together!</span>
      </h1>
      <div className="flex flex-col my-12 border-zinc-700 text-lg ">
        <p className="mt-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
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
            fill="currentColor"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clipRule="evenodd"
            />
          </svg>
          <a href="tel:+21655305173">+216 55 305 173</a>
        </p>
        <p className="mt-1 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
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
      <form onSubmit={handleSendMessage} className="w-full mt-6">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="w-full md:w-1/2">
            <InputLabel forId="firstname" label="First Name" required />
            <TextInput
              name="firstname"
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstname(e.target.value)
              }
            />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <InputLabel forId="lastname" label="Last Name" required />

            <TextInput
              name="lastname"
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastname(e.target.value)
              }
            />
          </div>
        </div>

        <div className="mt-5">
          <InputLabel forId="email" label="Email" required />
          <TextInput
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="mt-5">
          <InputLabel forId="message" label="Message" required />
          <textarea
            className="w-full block mt-3 bg-transparent text-zinc-200 px-2 py-3 border border-zinc-500 rounded  focus:outline-none"
            rows={4}
            cols={60}
            id="message"
            name="message"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          ></textarea>
        </div>
        <div className="flex flex-wrap justify-end items-center mt-6 gap-4">
          {isSent && (
            <p className="text-primary-green">
              &#10003; Thanks for reaching out. I&apos;ll respond shortly.
            </p>
          )}
          {reachedLimit && (
            <p className="text-[#ff3535]">
              You are sending too many requests. Please retry in an hour.
            </p>
          )}
          {!isSent && !reachedLimit && (
            <button
              className="disabled:opacity-60 disabled:bg-transparent disabled:text-primary-green float-right  px-12 py-[10px] text-black font-normal rounded-full uppercase bg-primary-green border border-primary-green hover:text-primary-green hover:bg-transparent"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                  >
                    <circle
                      className="opacity-25 stroke-primary-green"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75 fill-primary-green"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
