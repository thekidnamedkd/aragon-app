import React from 'react';
import {render, screen} from '@testing-library/react';
import VariantFooter from '../index';
import {EXPLORE_NAV_LINKS, PRIVACY_NAV_LINKS} from 'utils/constants';
import {variants, FOOTER_VARIANTS} from '../index';

jest.mock('hooks/useScreen', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('VariantFooter', () => {
  it('renders without crashing', () => {
    require('hooks/useScreen').default.mockReturnValue({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    });
    render(<VariantFooter variant="default" />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders correctly in mobile mode', () => {
    require('hooks/useScreen').default.mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    });
    render(<VariantFooter variant="default" />);
  });

  it('renders correctly in tablet mode', () => {
    require('hooks/useScreen').default.mockReturnValue({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
    });
    render(<VariantFooter variant="default" />);
  });

  FOOTER_VARIANTS.forEach(variant => {
    it(`renders the ${variant} variant correctly`, () => {
      require('hooks/useScreen').default.mockReturnValue({isDesktop: true});
      render(<VariantFooter variant={variant} />);
      const variantStyles = variants[variant];
      expect(screen.getByTestId('footer')).toHaveClass(variantStyles.bgColor);

      if (variantStyles.renderGradients) {
        expect(screen.getByTestId('gradient')).toHaveClass('relative');
      }
    });
  });

  it('renders correct navigation links', () => {
    require('hooks/useScreen').default.mockReturnValue({isDesktop: true});
    render(<VariantFooter variant="default" />);

    EXPLORE_NAV_LINKS.forEach((link, index) => {
      const linkElements = screen.getAllByTestId('link');
      expect(linkElements[index]).toHaveAttribute('href', link.path);
    });

    PRIVACY_NAV_LINKS.forEach((link, index) => {
      const linkElements = screen.getAllByTestId('link');
      expect(linkElements[EXPLORE_NAV_LINKS.length + index]).toHaveAttribute(
        'href',
        link.path
      );
    });
  });
});
