import type { Metadata } from 'next';
import Card from '../components/card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Checkout a list of projects made by Riadh Laabidi',
  openGraph: {
    title: 'Projects | Riadh Laabidi',
    description: 'Checkout a list of projects made by Riadh Laabidi',
  },
};

export default function Projects() {
  return (
    <>
      <header>
        <h1>Projects</h1>
        <p className="mt-4 text-dark5">
          Some of the projects that I&apos;ve been working on.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
        <Card
          key="notification-service"
          title="Multi-channel notification service"
          description="A full-stack multi-channel notification templating and send scheduling service"
          url={`projects/notification-service`}
        />
        <Card
          key="riadh-me"
          title="My portfolio"
          description="This portfolio website project"
          url={`projects/riadh-me`}
        />
      </div>
    </>
  );
}
