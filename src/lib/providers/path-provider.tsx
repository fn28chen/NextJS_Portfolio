"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

type PathProviderProps = {
  children: React.ReactNode;
};

type PathContextType = {
  path: string | null;
  setPath: (path: string | null) => void;
};

const PathContext = createContext({} as PathContextType);

export function useUpdatePath() {
  return useContext(PathContext);
}

export function PathProvider({ children }: PathProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState<string | null>(null);

  // console.log(pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <PathContext.Provider
      value={{
        path: path,
        setPath: (path: string | null) => router.push(path as string),
      }}
    >
      {children}
    </PathContext.Provider>
  );
}
