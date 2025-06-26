import { render, screen, waitFor } from '@testing-library/react';
import SucceedNotification from '../components/SucceedNotification';

describe('SucceedNotification', () => {
  it('renders success message', () => {
    render(<SucceedNotification message="Upload successful" timeout={5000}/>);
    screen.getByTestId('succeed')
  });

  it('auto-dismisses after 2 seconds', async () => {

    render(<SucceedNotification message="Saved!" timeout={2000}/>);
    await waitFor(() => {
      expect(screen.queryByText('Saved!')).not.toBeInTheDocument();
    }, { timeout: 2500 });
  });
});