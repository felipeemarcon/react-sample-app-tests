import classNames from 'classnames';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Grid({ children, ...rest }: GridProps) {
  // w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 @xl:@max-3xl:grid-cols-8 @8xl:grid-cols-16 gap-4 lg:gap-5 content-start
  const classes = classNames('w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 @lg:@max-xl:grid-cols-6 @8xl:grid-cols-16 gap-4 lg:gap-5 content-start', rest.className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
