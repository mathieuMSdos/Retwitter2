"use client";

import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";

interface GenericIconProps {
  icon: string;
  size?: number;
  colorize?: string;
  loop?: boolean;
}

const GenericIcon = ({
  icon: ICON,
  size,
  colorize,
  loop = false,
}: GenericIconProps) => {

  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return (
    <div>
      <Player
        ref={playerRef}
        icon={ICON}
        size={size}
        colorize={colorize}
        onComplete={
          loop ? () => playerRef.current?.playFromBeginning() : undefined
        } // pour jouer en boucle
      />
    </div>
  );
};

export default GenericIcon;
