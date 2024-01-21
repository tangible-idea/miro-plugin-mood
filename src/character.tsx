import { Image, Text } from "@mirohq/websdk-types";

export const addCharacter = async (myItem: Image, myText: Text) => {
  // var myName= await miro.board.getUserInfo()
  //   .then(res => getUserName(res.id));

  // 이름 가져오기
  const myName = (await miro.board.getUserInfo()).name;

  // removeCharacter();
  miro.board.remove(myItem);
  miro.board.remove(myText);

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
};
