const layoutWToPx = (elementWidth: number, deviceWidth: number, viewportWidth = 375) => {
    return `${(elementWidth / viewportWidth) * deviceWidth}px`;
  };
  
  const layoutHToPx = (elementHeight: number, deviceHeight: number, viewportHeight = 812) => {
    return `${(elementHeight / viewportHeight) * deviceHeight}px`;
  };
  
  export { layoutWToPx, layoutHToPx };
  