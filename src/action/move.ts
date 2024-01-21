import { Image, Text } from "@mirohq/websdk-types";
const movingUnit = 100;
const jumpUnit = 50;

const syncCharacter = (myItem: Image, myText: Text) => {
  myText.sync();
  myItem.sync();
};

export const moveLeft = (myItem: Image, myText: Text) => {
  myText.x -= movingUnit;
  myItem.x -= movingUnit;
  syncCharacter(myItem, myText);
};

export const moveRight = (myItem: Image, myText: Text) => {
  myText.x += movingUnit;
  myItem.x += movingUnit;
  syncCharacter(myItem, myText);
};

export const moveUp = (myItem: Image, myText: Text) => {
  myText.y -= movingUnit;
  myItem.y -= movingUnit;
  syncCharacter(myItem, myText);
};

export const moveDown = (myItem: Image, myText: Text) => {
  myText.y += movingUnit;
  myItem.y += movingUnit;
  syncCharacter(myItem, myText);
};

export const jump = async (myItem: Image, myText: Text) => {
  myText.y -= jumpUnit;
  myItem.y -= jumpUnit;
  syncCharacter(myItem, myText);
  setTimeout(() => {
    myText.y += jumpUnit;
    myItem.y += jumpUnit;
    syncCharacter(myItem, myText);
  }, 100);
};
