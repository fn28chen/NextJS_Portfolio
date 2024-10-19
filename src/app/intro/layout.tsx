"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col h-full max-w-full items-center justify-center mt-20`}
    >
      {children}
    </div>
  );
}
