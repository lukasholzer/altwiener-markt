import React from 'react';

import { render, screen } from '@testing-library/react';

import { Section } from './Section';

describe(`Section`, () => {
  it(`renders a Section component`, () => {
    render(<Section>Test Section</Section>);

    expect(screen.getByText(`Test Section`)).toBeInTheDocument();
  });
});
