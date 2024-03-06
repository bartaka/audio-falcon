import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer test', () => {

    it('should show footer', () => {
        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toBeDefined();
    });

    it('should show copyright notice', () => {
        render(<Footer />);

        expect(screen.getByText(/© Audio Falcon/i)).toBeDefined();
    });

    it('should show current year', () => {
        render(<Footer />);

        const currentYear = new Date().getFullYear();
        const regex = new RegExp(String(currentYear), 'i');

        expect(screen.getByText(regex)).toBeDefined();
    });

    it('should match the snapshot', () => {
        const wrapper = render(<Footer />);

        expect(wrapper).toMatchSnapshot();
    });
});