import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container!);

if (!root) {
  throw new Error('Failed to find the root element');
}

root.render(<App />);
