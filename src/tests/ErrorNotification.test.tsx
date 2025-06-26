import { render, screen } from '@testing-library/react';
import ErrorNotification from '../components/ErrorNotification';

describe('ErrorNotification', () => {
  it('renders the error message', () => {
    render(<ErrorNotification message="Something went wrong" />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    const { container } = render(<ErrorNotification/>);
    expect(container).toBeEmptyDOMElement();
  });
});