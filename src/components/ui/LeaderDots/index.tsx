import { Children, useState } from 'react';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Divider } from '../Divider';

type Props = { children: React.ReactNode[] | React.ReactNode };
export const LeaderDots: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const listItems = Children.toArray(children);
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  return (
    <div className="relative">
      <button
        onClick={(): void => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      {isOpen && (
        <div
          className=" inset-0 flex bottom-0 right-0"
          onClick={(): void => setIsOpen(false)}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <div className="absolute rounded-md border-gold-main border-2">
            <ul>
              {listItems.map((item, i) => (
                <>
                  <li className="px-4 py-2">{item}</li>
                  {i !== listItems.length - 1 && (
                    <Divider direction="horizontal" />
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
