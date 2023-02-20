import React from 'react';

interface IProps {
  onClickAway: () => void;
}

export const ClickAwayListener: React.FC<IProps> = ({ onClickAway }) => (
  <div className="absolute inset-0" onClick={() => onClickAway()}></div>
);
