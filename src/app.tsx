import * as React from "react";
import { createRoot } from "react-dom/client";

import "../src/assets/style.css";
import { Image, Text } from "@mirohq/websdk-types";
import { DropCharacters } from "./drop_characters";
import { moveLeft, moveRight, moveUp, moveDown, jump } from "./action/move";
import ChatBox from "./ChatBox";

export let myItem: Image; // 내 캐릭터
export let myText: Text; // 내 캐릭터
let chatContent: string; // 채팅용

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

async function addCharacter() {
  // var myName= await miro.board.getUserInfo()
  //   .then(res => getUserName(res.id));

  // 이름 가져오기
  const myName = (await miro.board.getUserInfo()).name;

  removeCharacter();

  myItem = await miro.board.createImage({
    title: myName,
    url: "https://cdn-icons-png.flaticon.com/512/1727/1727571.png",
    width: 250,
  });

  // text 생성.
  myText = await miro.board.createText({
    content: myName,
    style: {
      color: "#1a1a1a", // Default value: #1a1a1a (black)
      fillColor: "transparent", // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: "arial", // Default font type for the text
      fontSize: 80, // Default font size
      textAlign: "center", // Default alignment: left
    },
    x: myItem.x,
    y: myItem.y - 180,
    width: 200,
  });

  // grouping
  //myItem = await miro.board.group({items: [myNameText, characterImage]})

  // add to frame
  //myItem.add(characterImage);
  //myItem.add(myNameText);
}

const setKeyDownEvent = () => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      moveLeft(myItem, myText);
    } else if (e.key === "ArrowRight") {
      moveRight(myItem, myText);
    } else if (e.key === "ArrowUp") {
      moveUp(myItem, myText);
    } else if (e.key === "ArrowDown") {
      moveDown(myItem, myText);
    } else if (e.key === " " || e.key === "Spacebar") {
      jump(myItem, myText);
    }
  });
};

const App: React.FC = () => {
  setKeyDownEvent();

  React.useEffect(() => {
    //addSticky();
  }, []);

  const onClickAddButton = () => {
    addCharacter();
  };

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        {/* <img src="/src/assets/mooody.png" alt="" /> */}
        <DropCharacters />
      </div>
      <div className="cs1 ce12">
        <h1>Congratulations!</h1>
        <p>Welcome to Moooood</p>
      </div>
      <button className="button button-danger" onClick={onClickAddButton}>
        +
      </button>
      <div className="cs1 ce12">
        <ChatBox />
        {/* <input
          type="text"
          value={chat}
          width="100px"
          className="input"
          onChange={(e) => setChat(e.target.value)}
        /> */}
        {/* <div
          className="button button-danger"
          onClick={() => expressEmotion(chat)}
        >
          별 뿅
        </div> */}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
