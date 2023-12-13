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
    bgColor: string;
  };
};

const stack: Stack = {
  angular: {
    name: 'Angular',
    icon: AngularIcon,
    bgColor: '#dd0031',
  },
  springboot: {
    name: 'Spring Boot',
    icon: SpringBootLogo,
    bgColor: '#6db33f',
  },
  nextjs: {
    name: 'Next.js',
    icon: NextjsIcon,
    bgColor: '#ffffff',
  },
  googleanalytics: {
    name: 'Google Analytics',
    icon: GaIcon,
    bgColor: '#F9AB00',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: PostgresqlLogo,
    bgColor: '#336791',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    bgColor: '#38bdf8',
  },
  mdx: {
    name: 'MDX',
    icon: MdxLogo,
    bgColor: '#000000',
  },
  jhipster: {
    name: 'JHipster',
    icon: JHipsterLogo,
    bgColor: '#4289c7',
  },
};

export default function TechBadge({ tech }: { tech: string }) {
  const { name, icon: Icon, bgColor } = stack[tech];
  return (
    <div
      className="group relative flex items-center rounded-lg p-2 transition-all duration-200"
      style={{
        backgroundColor: `${bgColor}20`,
      }}
    >
      <Icon />
      <span className="z-1 invisible absolute bottom-full left-1/2 -ml-12 mb-1 w-24 rounded-lg bg-zinc-700/50 py-1 text-center text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 ">
        {name}
      </span>
    </div>
  );
}
