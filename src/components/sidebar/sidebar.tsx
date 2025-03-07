import { IconButton } from '@stone-payments/jade';
import classNames from 'classnames';
import { useState } from 'react';

export default function Sidebar({ visibility }: { visibility: boolean }) {
  const [expanded, setExapended] = useState(true);

  const flexClasses = classNames('md:flex md:flex-shrink-0 md:items-end');
  const borderClasses = classNames('md:border-r md:border-slate-200');
  const transitionClasses = classNames('transition-all duration-500 ease-in-out');

  const classes = classNames(
    'top-0 hidden overflow-hidden p-3 md:fixed md:left-0 h-screen min-h-screen bg-white',
    flexClasses,
    borderClasses,
    {
      'md:w-(--app-sidebar-width-md) lg:w-(--app-sidebar-width-lg)': visibility,
      'border-r-0 md:w-0 md:px-0': !visibility,
    },
    transitionClasses
  );

  return (
    <aside className={classes}>
      <div className="lg:hidden">
        <IconButton
          icon={expanded ? 'arrow-left' : 'arrow-right'}
          variant="neutral-ghost"
          onClick={() => (expanded ? setExapended(false) : setExapended(true))}
        />
      </div>
    </aside>
  );
}
