"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SkellMotionContextValue = {
  playShellEntrance: boolean;
  animatePage: boolean;
};

const SkellMotionContext = createContext<SkellMotionContextValue>({
  playShellEntrance: true,
  animatePage: true,
});

export function SkellMotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const visitedRoutes = useRef(new Set<string>());
  const isFirstRender = useRef(true);
  const [hasNavigated, setHasNavigated] = useState(false);

  const animatePage = !visitedRoutes.current.has(pathname);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setHasNavigated(true);
    }
    visitedRoutes.current.add(pathname);
  }, [pathname]);

  return (
    <SkellMotionContext.Provider
      value={{ playShellEntrance: !hasNavigated, animatePage }}
    >
      {children}
    </SkellMotionContext.Provider>
  );
}

export function useSkellMotion() {
  return useContext(SkellMotionContext);
}
