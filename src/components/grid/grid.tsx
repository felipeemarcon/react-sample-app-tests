import classNames from 'classnames';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Grid({ children, ...rest }: GridProps) {
  const classes = classNames('w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 lg:gap-5 content-start', rest.className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
