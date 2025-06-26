import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar Link={Link}/>, { wrapper: MemoryRouter });
    screen.getAllByTestId('navbar')
  });

  it('contains Home link', () => {
    render(<Navbar Link={Link}/>, { wrapper: MemoryRouter });
    expect(screen.getByText(/etusivu/i)).toBeInTheDocument();
  });
});