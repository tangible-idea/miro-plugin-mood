import * as React from "react";
import { createRoot } from "react-dom/client";

import "../src/assets/style.css";
import { Image, Text, Rect } from "@mirohq/websdk-types";
import { DropCharacters } from "./drop_characters";
import { moveLeft, moveRight, moveUp, moveDown, jump } from "./action/move";
import {
  cameraMoveLeft,
  cameraMoveRight,
  cameraMoveUp,
  cameraMoveDown,
} from "./action/camera";
import ChatBox from "./ChatBox";

export let myItem: Image; // 내 캐릭터
export let myText: Text; // 내 캐릭터

// async function getUserName(userId: string) : Promise<string> {
//   const onlineUsers = await miro.board.getOnlineUsers();
//   var username= "";
//   console.log(onlineUsers);

//   onlineUsers.forEach(element => {
//     if(element.id == userId) {
//       username = element.name;
//     }
//   });
//   return username;
// }

async function removeCharacter() {
  miro.board.remove(myItem);
  miro.board.remove(myText);
}

// Change your character's coordinate and image
// async function changeYourCharacter(newX: number, newY: number, newURL: string) => {
//   myItem.x= newX;
//   myItem.y= newY;
//   myItem.url = url;
//   myItem.sync();
// }

async function addCharacter(characterUrl: string) {
  // retreive my username
  const myName = (await miro.board.getUserInfo()).name;

  // remove a old character
  removeCharacter();

  myItem = await miro.board.createImage({
    title: myName,
    url: characterUrl,
    width: 250,
  });

  // text 생성.
  myText = await miro.board.createText({
    content: `${myName} is here!`,
    style: {
      color: "#1a1a1a", // Default value: #1a1a1a (black)
      fillColor: "transparent", // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: "arial", // Default font type for the text
      fontSize: 85, // Default font size
      textAlign: "center", // Default alignment: left
    },
    x: myItem.x,
    y: myItem.y - 180,
    width: 1000,
  });
  setTimeout(() => {
    miro.board.remove(myText);
  }, 4500);
}

//var myViewport : Rect
async function setKeyDownEvent() {
  window.addEventListener("keydown", async (e) => {
    var myViewport = await miro.board.viewport.get();
    if (e.key === "ArrowLeft") {
      moveLeft(myItem);
      cameraMoveLeft(myViewport);
    } else if (e.key === "ArrowRight") {
      moveRight(myItem);
      cameraMoveRight(myViewport);
    } else if (e.key === "ArrowUp") {
      moveUp(myItem);
      cameraMoveUp(myViewport);
    } else if (e.key === "ArrowDown") {
      moveDown(myItem);
      cameraMoveDown(myViewport);
    } else if (e.key === " " || e.key === "Spacebar") {
      jump(myItem);
    }
  });
}

const App: React.FC = () => {
  const [characterUrl, setCharacterUrl] = React.useState(
    "https://cdn-icons-png.flaticon.com/512/1727/1727571.png"
  );
  setKeyDownEvent();

  const onClickAddButton = () => {
    addCharacter(characterUrl);
  };

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <DropCharacters
          characterUrl={characterUrl}
          setCharacterUrl={setCharacterUrl}
        />
      </div>
      <div className="cs1 ce12">
        <h3>How to use</h3>
        <ul>
          <li>Press '+' Button to create your cute character.</li>
          <li>Move your character by arrow keys </li>
          <li>Say some messages through input  </li>  
        </ul>
        <p><img width="50px" className="explanation" src="https://static.thenounproject.com/png/302301-200.png"/> : Move
          , <img width="40px" className="explanation" src="https://cdn.iconscout.com/icon/free/png-256/free-enter-key-2190282-1851710.png"/> : Send message</p>
      </div>
      <button className="button button-primary" onClick={onClickAddButton}>
        +
      </button>
      <div className="cs1 ce12">
        <ChatBox />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
