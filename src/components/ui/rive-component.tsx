import { useRive } from "@rive-app/react-canvas";

export function Simple() {
    const { rive, RiveComponent } = useRive({
      src: "https://public.rive.app/community/runtime-files/1752-3469-coder.riv",
      autoplay: true,
      stateMachines: "Animation 1",
    });
    return <RiveComponent />;
  }