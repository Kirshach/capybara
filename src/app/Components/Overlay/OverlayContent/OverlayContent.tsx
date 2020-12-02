import React from 'react';

import { OverlayContentProps } from './types';
import EditTileForm from './EditTileForm/EditTileForm';

const OverlayContent: React.FC<OverlayContentProps> = ({ type, data }) => {
  if (!data) {
    throw new Error('No data provided for overlay component');
  } else {
    switch (type) {
      case 'edit':
        return <EditTileForm {...data} />;
      default:
        throw new Error('Invalid overlay type recieved while mapping types to Components');
    }
  }
};

export default OverlayContent;
