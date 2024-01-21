import * as React from "react";
import { myItem } from "./app";

const expressEmotion = async (chat: string) => {
  const myChatBubble = await miro.board.createShape({
    content: `<p>${chat}</p>`,
    shape: "wedge_round_rectangle_callout",
    style: {
      fillColor: "#FFFFFF",
      fontFamily: "arial", // Default font type for the text
      fontSize: 50, // Default font size for the text, in dp
      textAlign: "center", // Default horizontal alignment for the text
      textAlignVertical: "middle", // Default vertical alignment for the text
      borderStyle: "normal", // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: "#111", // Default border color: '#ffffff` (white)
      borderWidth: 2, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: myItem.x + 180,
    y: myItem.y - 120,
    width: 300,
    height: 250,
  });

  // Output the created item to the developer console
  console.log(chat);

  // await timeout(3000); //for 3 seconds delay
  setTimeout(() => {
    miro.board.remove(myChatBubble);
  }, 3000);
  //myCharacter.addWidget(myChatBubble);
};
const ChatBox = () => {
  // const { myItem, myText } = props;
  const [chat, setChat] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={chat}
        width="100px"
        className="input"
        onChange={(e) => setChat(e.target.value)}
      />
      <button
        className="button button-danger"
        onClick={() => expressEmotion(chat)}
      >
        OK
      </button>
    </>
  );
};

export default ChatBox;
