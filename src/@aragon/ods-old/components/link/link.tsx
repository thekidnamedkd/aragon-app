import React from 'react';
import {styled} from 'styled-components';

import {type IconType} from '../icons';
import {cn} from 'utils/cn';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  /** Indicates whether the link should open in a new tab */
  external?: boolean;
  iconRight?: React.FunctionComponentElement<IconType>;
  /** Label for the link */
  label: string;
  /** Optional description */
  description?: string;
  /** Variants for link appearance */
  type?: LinkType;
};

export const LINK_VARIANTS = ['primary', 'neutral', 'inverted'] as const;
export type LinkType = (typeof LINK_VARIANTS)[number];

/**
 * The Link component creates a styled anchor element with optional icon and description.
 *
 * @param {LinkProps} props - The properties of the link.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      disabled = false,
      external = true,
      type = 'primary',
      iconRight,
      description,
      label,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <StyledLink
        ref={ref}
        href={disabled ? undefined : href}
        rel="noopener noreferrer"
        type={type}
        disabled={disabled}
        {...(external && {target: '_blank'})}
        {...props}
        data-testid="link"
      >
        <div className="mr-1 flex items-center gap-x-2">
          <Label>{label}</Label>
          {iconRight && <div>{iconRight}</div>}
        </div>
        {description && <Description>{description}</Description>}
      </StyledLink>
    );
  }
);

Link.displayName = 'Link';

type StyledLinkProps = Pick<LinkProps, 'disabled'> & {
  type: NonNullable<LinkProps['type']>;
};

const StyledLink = styled.a.attrs<StyledLinkProps>(({type}) => {
  const className = cn(
    'inline-flex flex-col gap-y-0.5 md:gap-y-1 max-w-full rounded cursor-pointer ',
    variants[type]
  );

  return {className};
})<StyledLinkProps>`
  outline: 0; // Remove default Chrome black outline
`;

const Label = styled.span.attrs({
  className: 'ft-text-base font-semibold truncate',
})``;

const Description = styled.p.attrs({
  className: 'ft-text-sm text-neutral-600 truncate',
})``;

const variants = {
  primary: `text-primary-400 hover:text-primary-600 active:text-primary-800
            focus-visible:ring focus-visible:ring-primary-200 focus-visible:bg-neutral-50 disabled:text-neutral-300`,
  neutral: `text-neutral-600 hover:text-neutral-600 active:text-neutral-800
            focus-visible:ring focus-visible:ring-primary-200 focus-visible:bg-neutral-50 disabled:text-neutral-300`,
  inverted: `text-neutral-0 hover:text-neutral-100 active:text-neutral-200
            focus-visible:ring focus-visible:ring-primary-200 focus-visible:bg-neutral-50 disabled:text-neutral-300 `,
};
