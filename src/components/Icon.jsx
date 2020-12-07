import React from 'react';

import getIcons from 'utils/getIcons';

const Icon = ({ name, width, height, x, y, fill, style, title, ...rest }) => {
  let current = getIcons().find((icon) => icon.name === name);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || current.width}
      height={height || current.height}
      x={x || current.x}
      y={y || current.y}
      fill={fill || current.fill}
      viewBox={current.viewBox}
      style={{ ...style }}
      title={title}
      enableBackground={current.enableBackground}
      xmlSpace={current.xmlSpace}
    >
      {current.svg}
    </svg>
  );
};

export default Icon;
