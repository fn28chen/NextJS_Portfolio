export default function getFrameworkImageLink(framework: string) {
  const frameworkImageLink: { [key: string]: string } = {
    NextJS: `/next.png`,
    TailwindCSS: `/tailwind.png`,
    ShadCN: `/shadcn.png`,
    TypeScript: `/ts.png`,
    Drizzle: `/drizzle.png`,
    Supabase: `/supabase.png`,
    Prisma: `/prisma.webp`,
    MySQL: `/mysql.png`,
    FramerMotion: `/framer.png`,
    ReactJS: `/react.png`,
    Python: `/python.png`,
    SocketIO: `/socket.png`,
    MongoDB: `/mongodb.webp`,
    JSONServer: `/jsonserver.png`,
    SupaBase: `/supabase.png`,
    Sanity: `/sanity.png`,
    JSONserver: `/jsonserver.png`,
    T3: `/t3.png`,
    PostgreSQL: `/postger.png`,
  };

  return frameworkImageLink[framework];
}
