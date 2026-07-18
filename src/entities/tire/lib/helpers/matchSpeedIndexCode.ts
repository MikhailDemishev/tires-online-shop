export const matchSpeedIndexCode = (speedIndex: number): string | undefined => {
  switch (speedIndex) {
    case 81:
      return 'Q';
    case 82:
      return 'R';
    case 83:
      return 'S';
    default:
      return undefined;
  }
};
