import { ActionButton, DropdownMenu, DropdownMenuItem, Switch, Text } from '@stone-payments/jade';
import classNames from 'classnames';
import { useState } from 'react';
import { ContainerVariant } from '../../types';

interface LayoutControlsProps {
  containerVariant: ContainerVariant;
  sidebarVisiblity: boolean;
  onContainerChange: (variant: ContainerVariant) => void;
  onSidebarVisibilityChange: (visibility: boolean) => void;
}

export default function LayoutControls({
  containerVariant,
  sidebarVisiblity,
  onContainerChange,
  onSidebarVisibilityChange,
}: LayoutControlsProps) {
  const containerVariants: { name: ContainerVariant; description: string }[] = [
    { name: 'default', description: 'Max width: 1024px' },
    { name: 'narrow', description: 'Max width: 620px' },
    { name: 'wide', description: 'Max width: 1280px' },
    { name: 'full', description: 'Max width: 100%' },
  ];
  const [dropdownOpen, toggleDropdownOpen] = useState(false);

  const wrapperClasses = classNames(
    'group fixed bottom-0 z-50 flex w-full translate-y-full justify-center px-2 pb-2 md:translate-y-0 md:pb-5',
    {
      'md:w-[calc(100%_-_var(--app-sidebar-width-md))] lg:w-[calc(100%_-_var(--app-sidebar-width-lg))] left-auto right-0':
        sidebarVisiblity,
    },
    {
      'md:left-0 md:w-auto lg:left-0 lg:w-full right-auto left-0': !sidebarVisiblity,
    }
  );

  return (
    <div className={wrapperClasses}>
      <div className="flex grow-0 basis-auto items-stretch justify-center gap-5 rounded-2xl border border-slate-200 bg-white/20 p-3 shadow-2xl backdrop-blur-lg transition-all duration-200 ease-in-out group-hover:translate-y-0 md:w-auto">
        <div className="flex items-center gap-2 pl-3">
          <Text
            weight="medium"
            color="medium"
            as="label"
            htmlFor="sidebar-visibility"
            className="shrink-0"
          >
            Show Sidebar?
          </Text>
          <Switch
            id="sidebar-visibility"
            name="sidebar-visibility"
            onChange={() => onSidebarVisibilityChange(sidebarVisiblity ? false : true)}
            checked={sidebarVisiblity}
          />
        </div>

        <div className="w-[1px] bg-slate-200" />

        <div className="flex items-center justify-items-start gap-2">
          <Text
            weight="medium"
            color="medium"
            as="label"
            htmlFor="container-variant"
            className="shrink-0"
          >
            Container variant:
          </Text>
          <DropdownMenu
            open={dropdownOpen}
            toggleOpen={toggleDropdownOpen}
            portal
            trigger={
              <ActionButton id="container-variant" name="container-variant" dropdownIndicator>
                {containerVariant.charAt(0).toUpperCase() + containerVariant.slice(1)}
              </ActionButton>
            }
          >
            {containerVariants.map((variant, index) => (
              <DropdownMenuItem
                active={containerVariant === variant.name}
                key={`variant-${index}`}
                label={variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
                onClick={() => {
                  toggleDropdownOpen(false);
                  onContainerChange(variant.name);
                }}
                description={variant.description}
              />
            ))}
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
