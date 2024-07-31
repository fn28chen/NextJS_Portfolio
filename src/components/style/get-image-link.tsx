export default function getFrameworkImageLink(framework: string) {
  const frameworkImageLink: { [key: string]: string } = {
    NextJS: `/FE/next.png`,
    TailwindCSS: `/FE/tailwind.png`,
    ShadCN: `/FE/shadcn.png`,
    TypeScript: `/Lang/ts.png`,
    Drizzle: `/DB/drizzle.png`,
    Supabase: `/DB/supabase.png`,
    Prisma: `/DB/prisma.webp`,
    MySQL: `/DB/mysql.png`,
    FramerMotion: `/FE/framer.png`,
    ReactJS: `/FE/react.png`,
    Python: `/Lang/python.svg`,
    SocketIO: `/Tool/socket.png`,
    MongoDB: `/DB/mongodb.webp`,
    JSONServer: `/BE/jsonserver.png`,
    SupaBase: `/BE/supabase.png`,
    Sanity: `/Tool/sanity.png`,
    T3: `/Tool/t3.png`,
    PostgreSQL: `/DB/postger.png`,
  };

  return frameworkImageLink[framework];
}
