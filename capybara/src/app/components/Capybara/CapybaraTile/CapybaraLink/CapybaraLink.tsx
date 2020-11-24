import React from 'react';
import './CapybaraLink.scss';
import { CapybaraLinkProps } from './types';

const CapybaraLink: React.FC<CapybaraLinkProps> = ({
  children,
  to,
  styles,
  dimensions: { width, height, rowHeight },
}) => {
  let hostname = '';
  try {
    hostname = new URL(to).hostname;
  } catch {}

  return (
    <a
      style={{
        ...styles,
        padding: width === 1 && height === 1 ? '0.4em' : '',
      }}
      className="capytile--link"
      href={to}
      onDragStart={(evt) => evt.preventDefault()}
      onContextMenu={(evt) => {
        evt.preventDefault();
      }}
    >
      <img
        className="capytile--link__icon"
        src={
          hostname
            ? `https://api.faviconkit.com/${hostname}/144`
            : 'https://www.iconsdb.com/icons/preview/red/error-xxl.png'
        }
        alt="favicon"
        style={{ width: width === 1 ? '100%' : '' }}
      />
      <div className="capytile--link__title" style={{ display: width === 1 && height === 1 ? 'none' : 'block' }}>
        {children}
      </div>
    </a>
  );
};

export default CapybaraLink;
