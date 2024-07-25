import ExternalLink from '@/app/components/external-link';

export default function Home() {
  return (
    <>
      <h1>Hello, I&apos;m Riadh Laabidi</h1>
      <p className="text-fg-dark mt-2 lg:w-1/2">
        A software engineer who builds applications for the web, mostly using
        Java and TypeScript, I like to dig deep into technologies and I&apos;m
        currently learning Go.
      </p>
      <a
        download
        className="inline-block mt-8"
        href="/files/resume-riadh-laabidi-swe.pdf"
      >
        Download resume
      </a>
      <div className="flex gap-4 mt-12">
        <ExternalLink
          href="https://github.com/riadhlaabidi"
          className="flex items-center text-2xl text-yellow"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20"
            height="20"
          >
            <path d="M 33 29 C 31.203125 29 30 30.515625 30 33 C 30 35.484375 30.890625 38.046875 33 38 C 35.21875 37.949219 36.019531 35.777344 36 33 C 35.984375 30.515625 34.792969 29 33 29 Z M 44.261719 17.066406 C 44.535156 15.722656 44.652344 10.964844 42.679688 6 C 42.679688 6 38.148438 6.496094 31.296875 11.199219 C 29.863281 10.800781 27.429688 10.601563 25 10.601563 C 22.570313 10.601563 20.140625 10.800781 18.699219 11.195313 C 11.851563 6.496094 7.324219 6 7.324219 6 C 5.347656 10.964844 5.445313 15.609375 5.738281 17.066406 C 3.417969 19.585938 2 22.609375 2 26.742188 C 2 44.707031 16.90625 44.996094 20.667969 44.996094 C 21.519531 44.996094 23.210938 44.996094 25 45 C 26.789063 44.996094 28.484375 44.996094 29.332031 44.996094 C 33.09375 44.996094 48 44.707031 48 26.742188 C 48 22.609375 46.582031 19.585938 44.261719 17.066406 Z M 25.140625 43 L 25 43 C 15.570313 43 8.15625 41.660156 8.15625 32.496094 C 8.15625 30.300781 8.933594 28.265625 10.773438 26.574219 C 13.84375 23.753906 19.035156 25.246094 24.929688 25.246094 C 24.953125 25.246094 25.050781 25.246094 25.070313 25.246094 C 30.964844 25.246094 36.160156 23.757813 39.230469 26.574219 C 41.070313 28.265625 41.84375 30.300781 41.84375 32.496094 C 41.84375 41.660156 34.570313 43 25.140625 43 Z M 17 29 C 15.207031 29 14 31.015625 14 33.5 C 14 35.984375 15.207031 38 17 38 C 18.796875 38 20 35.984375 20 33.5 C 20 31.015625 18.796875 29 17 29 Z"></path>
          </svg>
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/riadhlaabidi"
          className="flex items-center text-2xl text-yellow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
          </svg>
        </ExternalLink>
        <ExternalLink
          href="https://leetcode.com/riadhlaabidi"
          className="flex items-center text-2xl text-yellow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 95 111"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
            ></path>
          </svg>
        </ExternalLink>
      </div>
    </>
  );
}
