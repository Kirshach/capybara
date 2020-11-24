import React from 'react';
import { useSelector } from 'react-redux';
import { State } from './app/store/states/types';
import Capybara from './app/components/Capybara/Capybara';
import Overlay from './app/components/Overlay/Overlay';
import { Overlay as OverlayState } from './app/store/states/ui/slices/overlay/types';
import './App.scss';

const App: React.FC = () => {
  // Overlay state
  const { type, data, isActive }: OverlayState = useSelector((state: State) => state.ui.overlay);

  return (
    <div className="App">
      <Capybara isOverlayed={isActive} />
      <Overlay type={type} data={data} isActive={isActive} />
    </div>
  );
};

export default App;
