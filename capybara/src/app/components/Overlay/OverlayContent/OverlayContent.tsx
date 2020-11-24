import React from 'react';

import { OverlayType, OverlayData } from '../../../store/states/ui/slices/overlay/types';
import EditTileForm from './EditTileForm/EditTileForm';
import SettingsForm from './SettingsForm/SettingsForm';

const OverlayContent: React.FC<{ type: OverlayType; data: OverlayData }> = ({ type, data }) => {
  if (type === 'edit' && !data) {
    throw new Error('One of the props provided to OverlayContent Component is empty.');
  }
  switch (type) {
    case 'edit':
      return <EditTileForm {...data!} />;
    case 'settings':
      return <SettingsForm />;
    default:
      throw new Error('Invalid overlay type recieved while mapping types to Components');
  }
};

export default OverlayContent;
