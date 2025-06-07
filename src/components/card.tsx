import React, { ReactNode, FC } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string; // optional link wrapper
}

export const Card: FC<CardProps> = ({ children, className = '', onClick, href }) => {
  const baseStyles =
    'bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col';

  const content = (
    <div className={`${baseStyles} ${className}`} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {children}
    </div>
  );

  if (href) {
    // Use next/link for internal links
    // We import Link here to avoid forcing user to wrap separately
    // (You can move Link import to top if you want)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Link = require('next/link').default;
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 flex flex-col flex-grow ${className}`}>{children}</div>
);
