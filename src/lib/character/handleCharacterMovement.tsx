import { canvasSize, characterSize, playerSpeed } from "../../constants";
import { characterPosition } from "../../store";

export const handleKeyPress = (event: KeyboardEvent) => {
  const { height: canvasHeight, width: canvasWidth } = canvasSize;

  switch (event.key) {
    case "w":
      if (characterPosition.value.y - playerSpeed >= 0) {
        characterPosition.value = {
          ...characterPosition.value,
          y: Math.max(characterPosition.value.y - playerSpeed, 0),
        };
      }
      break;
    case "s":
      if (
        characterPosition.value.y + playerSpeed <=
        canvasHeight - characterSize.height
      ) {
        characterPosition.value = {
          ...characterPosition.value,
          y: Math.min(
            characterPosition.value.y + playerSpeed,
            canvasHeight - characterSize.height
          ),
        };
      }
      break;
    case "a":
      if (characterPosition.value.x - playerSpeed >= 0) {
        characterPosition.value = {
          ...characterPosition.value,
          x: Math.max(characterPosition.value.x - playerSpeed, 0),
        };
      }
      break;
    case "d":
      if (
        characterPosition.value.x + playerSpeed <=
        canvasWidth - characterSize.height
      ) {
        characterPosition.value = {
          ...characterPosition.value,
          x: Math.min(
            characterPosition.value.x + playerSpeed,
            canvasWidth - characterSize.height
          ),
        };
      }
      break;
    default:
      break;
  }
};
