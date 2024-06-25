import AnchoredHeading from '@/app/components/article/anchored-heading';
import { Article } from '@/app/components/article/article';
import ArticleContainer from '@/app/components/article/article-container';
import ArticleHeader from '@/app/components/article/article-header';
import Code from '@/app/components/article/code';
import ExternalLink from '@/app/components/external-link';
import type { Metadata } from 'next';

const serverActions = {
  title: 'Create a contact form using Next.js & server actions',
  description:
    'How to create a contact form using Next.js server actions to submit data.',
  publishedDate: '2024-01-30',
};

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    title: serverActions.title,
    description: serverActions.description,
    openGraph: {
      title: serverActions.title,
      description: serverActions.description,
      images: [
        {
          url: `https://riadh.me/og?title=${serverActions.title}`,
          alt: `article opengraph image`,
        },
      ],
      type: 'article',
      publishedTime: serverActions.publishedDate,
      url: 'https://riadh.me/blog/server-actions',
    },
    twitter: {
      card: 'summary_large_image',
      title: serverActions.title,
      description: serverActions.description,
      images: [`https://riadh.me/og?title=${serverActions.title}`],
    },
  };
}

export default function ServerActions() {
  return (
    <ArticleContainer>
      <ArticleHeader
        title={serverActions.title}
        publishedDate={serverActions.publishedDate}
      />
      <Article>
        <p>
          One powerful feature that often comes into play in order to enhance
          user engagement, is the creation of a dynamic and efficient contact
          form. In this blog post, we will learn how to craft a robust contact
          form using Next.js and server actions.
        </p>
        <AnchoredHeading level={2}>What are server actions ?</AnchoredHeading>
        <p>
          Server actions are asynchronous server-side functions that you can
          call from both server and client components. Allowing developers to
          handle form submissions and data mutations without the need to create
          separate API routes for that matter.
        </p>
        <p>
          For server components, you can inline a server action inside the
          component using the <code>&apos;use server&apos;</code> directive at
          the top of the function definition. Alternatively, you can create a
          new file with <code>&apos;use server&apos;</code> directive at the top
          above any imports, this way all exported functions from that file will
          be marked as server actions available for reuse.
        </p>
        <p>
          For client components, you can only import actions from a file that
          uses the directive, as inlining won&apos;t work in this case.
        </p>
        <AnchoredHeading level={2}>Creating the contact form</AnchoredHeading>
        <p>
          In order to create our form, we are going to launch a Next.js
          (I&apos;m using version 14) project with typescript. For other
          configurations, defaults are fine.
        </p>
        <pre>
          <code>npx create-next-app@latest --typescript</code>
        </pre>
        <p>
          We also need to install some dependencies that we are going to use
          later.
        </p>
        <pre>
          <Code className="language-bash">
            {`npm install nodemailer zod 
npm install --save @types/nodemailer`}
          </Code>
        </pre>
        <p>
          Then, we are going to create a simple form that has three fields:
          name, email, and a message.
        </p>

        <pre>
          <Code className="language-ts">
            {`// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" id="message"></textarea>
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}`}
          </Code>
        </pre>
        <p>
          When a user submits a contact request, we want our server to process
          the data and then send and email with the message to whatever mailbox
          you or your business have. Here, goes our server action with the help
          of <code>nodemailer</code> which is a library for sending emails from
          a Node.js environment.
        </p>
        <p>
          So we create a new directory <code>actions</code> and inside it we
          create a new file <code>send-email.ts</code> where first, we are going
          to create a transporter with the configuration needed for nodemailer
          to be able to send emails through SMTP. You can use any known service
          provider to get these configurations (e.g{' '}
          <ExternalLink href="https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api">
            Sendgrid
          </ExternalLink>
          )
        </p>
        <p>
          We save those credentials to our <code>.env.local</code> file and
          retrieve them in our server action file.
        </p>

        <pre>
          <Code className="language-ts">{`'use server';

import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.NEXT_TRANSPORT_HOST,
  port: Number(process.env.NEXT_TRANSPORT_PORT) || 578,
  auth: {
    user: process.env.NEXT_TRANSPORT_USERNAME,
    pass: process.env.NEXT_TRANSPORT_PASSWORD,
  },
});`}</Code>
        </pre>
        <p>
          We can now define our action for sending the email, this function is
          getting a <code>FormData</code> object with all the data submitted
          from our form, and delivering an email using the{' '}
          <code>sendEmail()</code> method from the previously created transport.
        </p>
        <pre>
          <Code className="language-ts">
            {`export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await transport.sendMail({
      to: 'your-receiving-email@example.com',
      from: 'your-email-from-service-provider@example.com',
      subject: 'New contact request!',
      html: \`< !DOCTYPE html>
            <html lang="en">
              <body>
                <p>Name: \${name}</p>
                <p>Email: \${email}</p>
                <p>Message: \${message}</p>
              </body>
            </html>\`,
    });
    return {sent: true };
  } catch (error) {
    return {sent: false };
  }
}`}
          </Code>
        </pre>
        <p>
          Then, we can import this action in our component and use it in the
          form action attribute:
        </p>
        <pre>
          <Code className="language-ts">
            {`// app/page.tsx
import { sendEmail } from "./actions/send-email";

export default function Home() {
  return (
    // ...
      <form action={sendEmail} >

      // ...
  );
}`}
          </Code>
        </pre>
        <AnchoredHeading level={2}>Input validation</AnchoredHeading>
        <p>
          To validate our form input, we can use basic HTML validation for the
          client-side, here we can add the <code>required</code>
          attribute to every input and also the <code>email</code> type for the
          email input.
        </p>
        <p>
          As our server is going to process the input sent directly from the
          client, we have to validate and escape this input server-side as well.
          For this purpose, we are going to use <code>zod</code>, which is a
          schema declaration and validation library, to validate form fields
          before sending the email.
        </p>
        <p>
          First, we have to create a schema object with the needed fields, all
          fields shouldn&apos;t be empty, with a maximum number of characters
          for both name and message, and a valid email address, we can also add
          error messages in case these rules are violated.
        </p>
        <pre>
          <Code className="language-ts">
            {`// app/actions/send-email.ts
const schema = z.object({
  name: z
    .string()
    .max(100, { message: 'Name should be less than 100 characters' })
    .min(1, { message: 'Name is required' }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  message: z
    .string()
    .max(500, { message: 'Message should be less than 500 characters' })
    .min(1, { message: 'Message is required' }),
});`}
          </Code>
        </pre>
        <p>
          Then, we have to update our action, just before sending the email we
          have to safely parse our input using
          <code>safeParse</code> method on the previously created schema. If
          there are any errors, we are going to include them in the returned
          response object.
        </p>
        <pre>
          <Code className="language-ts">
            {`export async function sendEmail(formData: FormData) {
  // ...
  const validatedFields = schema.safeParse({
    name,
    email,
    message,
  });

  if (!validatedFields.success) {
    return {
      sent: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // ...
  }
}
`}
          </Code>
        </pre>
        <p>
          Back to our contact form, we would normally want to show error
          messages for each field in case they occur, for that we are going to
          use the <code>useFormState</code> React hook, and this will introduce
          two changes:
        </p>
        <ul>
          <li>
            The signature of our action&apos;s function, as it will now receive
            a new parameter as its first argument: the <code>initialState</code>
            , which is basically the initial value of the state before invoking
            the action.
          </li>
          <li>
            Our contact component must now be a client component since we are
            using a React hook.
          </li>
        </ul>
        <p>
          So, let&apos;s start with our action by adding the state as a first
          argument
        </p>
        <pre>
          <Code className="language-ts">
            {`export async function sendEmail(initialState: any, formData: FormData) {
  //...
}
`}
          </Code>
        </pre>
        <p>
          Then, let&apos;s add the hook to our contact component, we pass it our{' '}
          <code>sendEmail</code> action and the <code>initialState</code>{' '}
          object, notice that now we are going to use the action{' '}
          <code>sendAction</code> returned from the hook. Also, we are going to
          add error messages related to each field in the form.
        </p>
        <pre>
          <Code className="language-ts">
            {`'use client';

import { useFormState } from 'react-dom';
import { sendEmail } from './actions/send-email';

const initialState = {
  sent: false,
  errors: {},
};

export default function Home() {
  const [state, sendAction] = useFormState(sendEmail, initialState);
  return (
    <main>
      <h1>Contact</h1>
      <form action={sendAction}>
        <input type="text" name="name" required />
        {state.errors?.name && <span>{state.errors.name[0]}</span>}
        <input type="email" name="email" required />
        {state.errors?.email && <span>{state.errors.email[0]}</span>}
        <textarea name="message" id="message" required></textarea>
        {state.errors?.message && <span>{state.errors.message[0]}</span>}
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}
`}
          </Code>
        </pre>
        <AnchoredHeading level={2}>Pending state</AnchoredHeading>
        <p>
          One last thing we are going to add is a loading state to the submit
          button while our contact form is being submitted, this way users get a
          hint that their message is being sent. Also, a message indicating the
          success of the operation in the end is very useful.
        </p>
        <p>
          Here, we can use another React hook <code>useFormStatus</code> which
          will give us a boolean indicating the pending state. For this to work,
          we need to first, make the submit button a separate client component
          while keeping it a child of our <code>form</code> element.
        </p>
        <pre>
          <Code className="language-ts">
            {`// app/submit-button.tsx
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send message'}
    </button>
  );
}
`}
          </Code>
        </pre>
        <p>
          Finally, we update our form with the button and the success message.
        </p>
        <pre>
          <Code className="language-ts">
            {`// ...
import SubmitButton from "./submit-button";

//...

export default function Home() {
  // ...
    <main>
      <h1>Contact</h1>
      <form action={sendAction}>
        // ...
        <SubmitButton />
        {state.sent && <span>Message sent!</span>}
      </form>
    </main>
  );
}`}
          </Code>
        </pre>
        <p>
          You can find the full demo app in{' '}
          <ExternalLink href="https://github.com/riadhlaabidi/server-actions-demo">
            GitHub
          </ExternalLink>
          .
        </p>
      </Article>
    </ArticleContainer>
  );
}
