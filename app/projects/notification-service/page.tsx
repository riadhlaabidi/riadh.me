import type { Metadata } from 'next';
import ArticleContainer from '@/app/components/article/article-container';
import ArticleHeader from '@/app/components/article/article-header';
import ExternalLink from '@/app/components/external-link';
import { Article } from '@/app/components/article/article';
import Image from 'next/image';

const notificationService = {
  title: 'Multi-channel notification service',
  description:
    'A full-stack multi-channel notification templating and send scheduling service',
  url: 'https://riadh.me/projects/notification-service',
  publishedDate: '2023-11-17'
};

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    title: notificationService.title,
    description: notificationService.description,
    openGraph: {
      title: `${notificationService.title} | Riadh Laabidi`,
      description: notificationService.description,
      images: [
        {
          url: `https://riadh.me/og?title=${notificationService.title}`,
          alt: `Notification service project image`,
        },
      ],
      type: 'article',
      publishedTime: notificationService.publishedDate,
      url: notificationService.url,
    },
    twitter: {
      card: 'summary_large_image',
      title: notificationService.title,
      description: notificationService.description,
      images: [`https://riadh.me/og?title=${notificationService.title}`],
    },
  };
}

export default function NotificationService() {
  return (
    <ArticleContainer>
      <ArticleHeader
        title={notificationService.title}
        publishedDate={notificationService.publishedDate}
      ></ArticleHeader>
      <Article>
        <p>
          This project was made during my end-of-studies internship at{' '}
          <ExternalLink href="https://satoripop.com">Satoripop</ExternalLink> in
          order to obtain a Master&apos;s degree in Software Engineering.
        </p>

        <p>
          This project aims to enhance communication between businesses and
          stakeholders by enabling them to template, schedule, and deliver
          notifications via different channels including: Email, SMS, Push, and
          Chat.
        </p>
        <figure className="my-12">
          <Image
            className="w-full lg:w-[85%] mx-auto"
            src="/images/projects/notification-service/solution.svg"
            alt="Notification service solution illustration"
            width={760}
            height={440}
          />
          <figcaption className="text-center text-sm font-light my-8">
            Solution illustration
          </figcaption>
        </figure>
        <p>
          I implemented the illustrated solution using <em>Spring boot</em>,{' '}
          <em>PostgreSQL</em>, and <em>Angular</em>, scaffolded with{' '}
          <em>JHipster</em> and integrating services for different delivery
          channels:
        </p>
        <ul>
          <li>
            <b>Email: </b> Through custom SMTP configuration using the{' '}
            <code>JavaMailSender</code> interface provided by the Spring
            framework.
          </li>
          <li>
            <b>Sms: </b>Relying on the Twilio messaging service.
          </li>
          <li>
            <b>Push: </b>Using Firebase Cloud Messaging (FCM) platform.
          </li>
          <li>
            <b>Chat: </b>Leveraging Facebook, WhatsApp, Line, and Slack
            API&apos;s.
          </li>
        </ul>

        <p>
          For the scheduling service, I leveraged the <em>Quartz Scheduler</em>{' '}
          to create and save notification delivery jobs to be triggered at a
          defined frequency and time interval.
        </p>
      </Article>
    </ArticleContainer>
  );
}
