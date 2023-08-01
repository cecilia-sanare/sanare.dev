import { App } from '../App';
import { render } from '@testing-library/react';

describe('<App />', () => {
  it('should render the App', () => {
    const component = render(<App />);

    expect(component.baseElement).toBeTruthy();
  });
});
