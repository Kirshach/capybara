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
        borderColor: styles.color,
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
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NTvjzNrzPuw4Qqa7htI67VJ37jzP36pGew&usqp=CAU'
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
