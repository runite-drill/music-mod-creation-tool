import React from "react";
import { Checkbox } from "evergreen-ui";
import { Game } from "../scripts/util/types";

interface CheckGameProps {
  game: Game;
  setGameSelect: (game: Game, selected: boolean) => void;
}

export default function CheckGame({ game, setGameSelect }: CheckGameProps) {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label={game.isSupported ? game.title : `${game.title} (not supported)`}
      checked={checked}
      disabled={!game.isSupported}
      onChange={(e) => {
        setChecked(e.target.checked);
        setGameSelect(game, e.target.checked);
      }}
    />
  );
}
