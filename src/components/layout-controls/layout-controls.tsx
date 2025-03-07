import { ActionButton, DropdownMenu, DropdownMenuItem, Switch, Text } from "@stone-payments/jade";
import { ContainerVariant } from "../../types";
import { useState } from "react";

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

  const containerVariants: ContainerVariant[] = ['default', 'narrow', 'wide', 'super-wide', 'full'];
  const [dropdownOpen, toggleDropdownOpen] = useState(false);

  return (
    <div className="w-[calc(100%-256px)] fixed bottom-0 left-[256px] pb-5 flex justify-center z-50">
      <div className="px-3 py-3 bg-white/50 backdrop-blur-lg border border-slate-200 rounded-2xl flex grow-0 basis-auto items-stretch gap-5 shadow-2xl transition-all duration-500 ease-in-out">
        <div className="flex gap-2 items-center pl-3">
          <Text weight="medium" color="medium" as="label" htmlFor="sidebar-visibility">Show Sidebar?</Text>
          <Switch
            id="sidebar-visibility"
            name="sidebar-visibility"
            onClick={() => onSidebarVisibilityChange(sidebarVisiblity ? false : true)}
            checked={sidebarVisiblity}
          />
        </div>

        <div className="w-[1px] bg-slate-200" />

        <div className="flex gap-2 items-center">
          <Text weight="medium" color="medium" as="label" htmlFor="container-variant">Container variant:</Text>
          <DropdownMenu
            open={dropdownOpen}
            toggleOpen={toggleDropdownOpen}
            trigger={
              <ActionButton id="container-variant" name="container-variant" dropdownIndicator>
                {containerVariant.charAt(0).toUpperCase() + containerVariant.slice(1)}
              </ActionButton>
            }
          >
            {containerVariants.map((variant, index) =>
              <DropdownMenuItem
                active={containerVariant === variant}
                key={`variant-${index}`}
                label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                onClick={() => {
                  toggleDropdownOpen(false);
                  onContainerChange(variant);
                }} />
            )}
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
