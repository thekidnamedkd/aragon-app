import {IconInfo, Link, LinkType} from '@aragon/ods-old';
import React from 'react';
import styled from 'styled-components';

import {GridLayout} from 'components/layout';
import useScreen from 'hooks/useScreen';
import {EXPLORE_NAV_LINKS, PRIVACY_NAV_LINKS} from 'utils/constants';
import LeftGradient from 'containers/variantFooter/gradients/leftGradient';
import RightGradient from 'containers/variantFooter/gradients/rightGradient';
import IconLogo from '@aragon/ods-old/components/icons/logo';

export const FOOTER_VARIANTS = ['explore', 'create', 'default'] as const;
export type FooterVariants = (typeof FOOTER_VARIANTS)[number];

type VariantStyles = {
  /** includes the gradient overlay */
  renderGradients?: boolean;
  /** section color for foot background */
  bgColor: string;
  /** color of aragon icon */
  iconColor: string;
  /** color of text for copyright mark */
  copyrightColor: string;
  /** determines link styling */
  linkType: LinkType;
};

export const footerStyleVariants: Record<FooterVariants, VariantStyles> = {
  explore: {
    renderGradients: true,
    bgColor: 'bg-primary-400',
    iconColor: 'text-neutral-0',
    copyrightColor: 'text-neutral-0',
    linkType: 'inverted',
  },
  create: {
    bgColor: 'bg-neutral-0',
    iconColor: 'text-primary-400',
    copyrightColor: 'text-neutral-600',
    linkType: 'neutral',
  },
  default: {
    bgColor: 'bg-neutral-0',
    iconColor: 'text-black-400',
    copyrightColor: 'text-neutral-600',
    linkType: 'primary',
  },
};

type NavLinkProps = {
  links: {label: string; path: string}[];
  linkType: LinkType;
};

const NavLinks: React.FC<NavLinkProps> = ({links, linkType}) => (
  <StyledNavList>
    {links.map(item => (
      <li key={item.label}>
        <Link href={item.path} label={item.label} type={linkType} />
      </li>
    ))}
  </StyledNavList>
);

const getVariantStyles = (variant: FooterVariants): VariantStyles => {
  return footerStyleVariants[variant] || footerStyleVariants['default'];
};

interface FooterProps {
  variant: FooterVariants;
}

const VariantFooter: React.FC<FooterProps> = ({variant = 'default'}) => {
  const {isDesktop} = useScreen();
  const v = getVariantStyles(variant);

  return (
    <Section bgColor={v.bgColor} data-testid="footer">
      <GridLayout>
        <FullSpan>
          {v.renderGradients && (
            <div className="relative" data-testid="gradient">
              <LeftGradient />
              <RightGradient />
            </div>
          )}

          <ActionContainer>
            {isDesktop ? (
              <>
                <FlexDiv>
                  <IconLogo fill={v.iconColor} />
                  <NavLinks links={EXPLORE_NAV_LINKS} linkType={v.linkType} />
                </FlexDiv>
                <FlexDiv>
                  <NavLinks links={PRIVACY_NAV_LINKS} linkType={v.linkType} />
                  <Copyright color={v.copyrightColor}>
                    &copy;{`  ${new Date().getFullYear()}  `}Aragon
                  </Copyright>
                </FlexDiv>
              </>
            ) : (
              <>
                <IconLogo fill={v.iconColor} />
                <NavLinks links={EXPLORE_NAV_LINKS} linkType={v.linkType} />
                <NavLinks links={PRIVACY_NAV_LINKS} linkType={v.linkType} />
                <Copyright color={v.copyrightColor}>
                  &copy;{`  ${new Date().getFullYear()}  `}Aragon
                </Copyright>
              </>
            )}
          </ActionContainer>
        </FullSpan>
      </GridLayout>
      <Beta>
        <IconInfo />
        <span>Aragon App Public Beta</span>
      </Beta>
    </Section>
  );
};

const FullSpan = styled.div.attrs({
  className: 'col-span-full',
})`
  overflow-y: clip;
`;

const Section = styled.section.attrs<{bgColor: string}>(({bgColor}) => ({
  className: `w-full overflow-hidden ${bgColor}`,
}))``;

const ActionContainer = styled.div.attrs({
  className:
    'relative flex flex-col xl:flex-row xl:justify-between items-center space-y-8 xl:space-y-0 pt-10 xl:pt-6 pb-16 xl:pb-6',
})``;

const FlexDiv = styled.div.attrs({
  className: 'flex space-x-8 items-center',
})``;

const StyledNavList = styled.ul.attrs({
  className: 'flex space-x-8',
})``;

const Copyright = styled.span.attrs<{color: string}>(({color}) => ({
  className: `${color} font-normal`,
}))``;

const Beta = styled.div.attrs({
  className:
    'z-10 flex items-center justify-center space-x-2 bg-primary-400 py-1 text-sm leading-normal text-neutral-0',
})``;

export default VariantFooter;
