import { AppProviders, GlobalModals } from '@/app/providers';
import { AppRouter } from '@/app/router';

function App() {
  return (
    <AppProviders>
      <AppRouter />
      <GlobalModals />
    </AppProviders>
  );
}

export default App;
