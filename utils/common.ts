export const handleMediaQueryChanges = (isMatch: boolean, cn: Function) => {
  if (isMatch) {
    cn(isMatch);
  }
};
