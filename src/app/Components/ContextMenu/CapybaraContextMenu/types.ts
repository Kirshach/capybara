import { Dispatch } from 'redux';

import { Overlay } from '../../../store/states/ui/slices/overlay/types';
import { LayoutItem } from '../../../store/states/appState/slices/layout/types';

export type CapybaraContextMenuProps = {
  dispatch: Dispatch<{ payload: Overlay | LayoutItem[]; type: string }>;
  layout: LayoutItem[];
};
