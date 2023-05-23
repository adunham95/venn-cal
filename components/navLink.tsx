import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export function NavLink({
  children,
  href,
  className = '',
  activeClassName = '',
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      {...props}
      className={isActive ? activeClassName : className}
    >
      {children}
    </Link>
  );
}
