import {
  AngularIcon,
  GaIcon,
  JHipsterLogo,
  MdxLogo,
  NextjsIcon,
  PostgresqlLogo,
  SpringBootLogo,
  TailwindIcon,
} from './icons';

type Stack = {
  [key: string]: {
    name: string;
    icon: React.FC;
  };
};

const stack: Stack = {
  angular: {
    name: 'Angular',
    icon: AngularIcon,
  },
  springboot: {
    name: 'Spring Boot',
    icon: SpringBootLogo,
  },
  nextjs: {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  googleanalytics: {
    name: 'Google Analytics',
    icon: GaIcon,
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: PostgresqlLogo,
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
  },
  mdx: {
    name: 'MDX',
    icon: MdxLogo,
  },
  jhipster: {
    name: 'JHipster',
    icon: JHipsterLogo,
  },
};

export default function TechBadge({ tech }: { tech: string }) {
  const { name, icon: Icon } = stack[tech];
  return (
    <div className="group relative flex items-center rounded-lg bg-secondary-gray bg-opacity-20 p-2 transition-all duration-200">
      <Icon />
      <span className="invisible absolute bottom-full left-1/2 -ml-12 mb-1 w-24 rounded-lg bg-zinc-700/50 py-1 text-center text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 ">
        {name}
      </span>
    </div>
  );
}
