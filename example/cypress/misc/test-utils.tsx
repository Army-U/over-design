import { mount as originalMount } from '@cypress/react';
import { Provider } from 'react-redux';
import store from 'src/common/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../src/';

export function mount(jsx: React.ReactNode) {
  return originalMount(
    <main>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{jsx}</Provider>
      </QueryClientProvider>
    </main>,
  );
}
