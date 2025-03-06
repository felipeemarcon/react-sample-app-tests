import classNames from "classnames";
import { ContainerVariant } from "../../types";

type ContainerPadding = 'horizontal' | 'vertical' | 'both' | 'none';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
  padding?: ContainerPadding;
  children: React.ReactNode;
}

export default function Container({ variant = 'default', padding = 'both', children, ...rest }: ContainerProps) {
  const handleContainerPaddings = (padding: ContainerPadding) => {
    const paddings: Record<ContainerPadding, string> = {
      horizontal: 'px-5 lg:px-8',
      vertical: 'py-5 lg:py-8',
      both: 'p-5 lg:p-8',
      none: 'p-0'
    }

    return paddings[padding];
  }

  const containerPaddingClasses = handleContainerPaddings(padding);
  const classes = classNames(`container-${variant}`, containerPaddingClasses, 'transition-width duration-500 ease-in-out', rest.className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
