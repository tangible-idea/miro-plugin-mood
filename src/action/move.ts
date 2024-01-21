import { Image } from "@mirohq/websdk-types";
const movingUnit = 100;
const jumpUnit = 50;

const syncCharacter = (myItem: Image) => {
  myItem.sync();
};

export const moveLeft = (myItem: Image) => {
  myItem.x -= movingUnit;
  syncCharacter(myItem);
};

export const moveRight = (myItem: Image) => {
  myItem.x += movingUnit;
  syncCharacter(myItem);
};

export const moveUp = (myItem: Image) => {
  myItem.y -= movingUnit;
  syncCharacter(myItem);
};

export const moveDown = (myItem: Image) => {
  myItem.y += movingUnit;
  syncCharacter(myItem);
};

export const jump = async (myItem: Image) => {
  myItem.y -= jumpUnit;
  syncCharacter(myItem);
  setTimeout(() => {
    myItem.y += jumpUnit;
    syncCharacter(myItem);
  }, 100);
};
