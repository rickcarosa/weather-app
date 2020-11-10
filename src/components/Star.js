import React from 'react';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const Star = () => {
  return (
    <div>
      <StarIcon />
    </div>
  );
};

const percent = {
  width: `calc(2.3 / 5 * 100%)`,
};

const StarIcon = styled.div`
  display: inline-block;
  font-size: 20px;
  // font-family: Times; // make sure ★ appears correctly
  // line-height: 1;

  &::before {
    content: '★★★★★';
    // content: '\\2605';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      red ${percent.width},
      white ${percent.width}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Star;
