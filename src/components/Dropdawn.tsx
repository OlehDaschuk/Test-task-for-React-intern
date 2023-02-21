import React, { useState } from 'react';

import { ClickAwayListener } from './ClickAwayListener';

interface IProps {
  items: ({ id: number } & Record<any, any>)[];

  btnContent: (
    selectedItem: any
  ) => JSX.Element[] | JSX.Element | string | number | null | undefined;
  renderOptionAs: (
    item: any,
    isActive?: boolean
  ) => JSX.Element[] | JSX.Element | string | number | null | undefined;
}

export const Dropdown: React.FC<IProps> = ({ btnContent, renderOptionAs, items }) => {
  const [selected, setSelected] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="border-2 rounded px-2" onClick={() => setOpen(true)}>
        {selected === null ? 'Select....' : btnContent(selected)}
      </button>

      {open && (
        <>
          <ClickAwayListener onClickAway={() => setOpen(false)} />

          <ul className="mt-2 divide-y-2 relative z-10 border-2 rounded border-slate-900 cursor-pointer">
            {items.map((item) => (
              <li
                key={item.id}
                className={`px-2 ${selected === item ? 'bg-slate-500' : 'bg-slate-50'}`}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}>
                {renderOptionAs(item, item === selected)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
