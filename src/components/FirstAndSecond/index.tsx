import React from 'react';
import { motion } from 'framer-motion';

import { Sticky } from '../../styles';

const FirstAndSecond: React.FC = () => {
  return (
    <Sticky className="second">
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }}/>
    </Sticky>
  );
};

const First: React.FC = () => {
  return(
    <Sticky className="first">
    </Sticky>
  );
};

export default FirstAndSecond;
