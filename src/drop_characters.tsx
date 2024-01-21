import React, { SetStateAction, useEffect } from "react";
import type { DropEvent } from "@mirohq/websdk-types";
import "../src/assets/style.css";

const { board } = miro;

interface DropCharactersProps {
  characterUrl: string;
  setCharacterUrl: React.Dispatch<SetStateAction<string>>;
}

const images = [
  "https://cdn-icons-png.flaticon.com/512/1727/1727571.png",
  "https://cdn-icons-png.flaticon.com/512/7508/7508360.png",
  "https://cdn-icons-png.flaticon.com/512/3509/3509800.png",
  "https://cdn-icons-png.flaticon.com/512/213/213311.png",
];

export function DropCharacters(props: DropCharactersProps) {
  const { characterUrl, setCharacterUrl } = props;

  // drop event
  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
    }
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  }, []);

  const onRadioChange = (index: number) => {
    setCharacterUrl(images[index]);
  };

  return (
    <div className="main">
      {images.map((image, index) => (
        <label key={index} className="radiobutton">
          <input
            type="radio"
            value={index}
            name="selectedImage"
            onChange={() => {
              onRadioChange(index);
            }}
          />
          <img
            src={image}
            draggable={false}
            className="character miro-draggable draggable-item"
            key={index}
            width="45%"
            style={{ background: image === characterUrl ? "#e1e1e1" : "" }}
          />
        </label>
      ))}
    </div>
  );
}
