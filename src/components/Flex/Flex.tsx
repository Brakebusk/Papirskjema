import React from 'react';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  justify?:
    | 'space-between'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'wrap' | 'wrap-reverse';
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  grow?: number;
  className?: string;
};

const Flex = React.forwardRef(
  (
    {
      children,
      justify,
      align,
      direction,
      className,
      gap,
      wrap,
      columnGap,
      rowGap,
      grow,
      style = {},
      ...rest
    }: FlexProps,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <div
      style={{
        ...style,
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction ? direction : 'row',
        gap: gap,
        rowGap: rowGap,
        columnGap: columnGap,
        flexWrap: wrap,
        flexGrow: grow,
        display: 'flex',
      }}
      className={className}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  ),
);
Flex.displayName = 'Flex';

export default Flex;
