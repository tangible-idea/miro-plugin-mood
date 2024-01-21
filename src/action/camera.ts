import { Rect } from "@mirohq/websdk-types";
const movingUnit = 70;
const movingDuration= 100;

export const cameraMoveLeft = (rect: Rect) => {
  miro.board.viewport.set({
    viewport: {
      ...rect,
      x: rect.x - movingUnit
    },
    animationDurationInMs: movingDuration
  });
};
export const cameraMoveRight = (rect: Rect) => {
  miro.board.viewport.set({
    viewport: {
      ...rect,
      x: rect.x + movingUnit
    },
    animationDurationInMs: movingDuration
  });
};
export const cameraMoveUp = (rect: Rect) => {
  miro.board.viewport.set({
    viewport: {
      ...rect,
      y: rect.y - movingUnit
    },
    animationDurationInMs: movingDuration
  });
};
export const cameraMoveDown = (rect: Rect) => {
  miro.board.viewport.set({
    viewport: {
      ...rect,
      y: rect.y + movingUnit
    },
    animationDurationInMs: movingDuration
  });
};