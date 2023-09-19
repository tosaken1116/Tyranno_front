import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SideBar } from '.';

describe('model/SideBarのテスト', () => {
  it('home link exist', () => {
    render(<SideBar />);

    const title = screen.getByText('Home');

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('A');
  });
  it('search link exist', () => {
    render(<SideBar />);

    const title = screen.getByText('Search');

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('A');
  });
  it('profile link exist', () => {
    render(<SideBar />);

    const title = screen.getByText('Profile');

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('A');
  });
});
