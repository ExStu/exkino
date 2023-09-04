import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { limitReducer } from './reducers/limits.slice'
import { exkinoAPI } from '@/services/Exkino.service'
import { useMemo } from 'react'
import { createWrapper } from 'next-redux-wrapper';

let store: AppStore;

export const initStore = (preloadedState= {}) => {
    return configureStore({
    reducer: {
      limitReducer,
      [exkinoAPI.reducerPath]: exkinoAPI.reducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exkinoAPI.middleware)
  })
}

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({ ...store.getState(), ...preloadedState });
	}

	if (typeof window === 'undefined') return _store;
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState: RootState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}

export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(initStore, { debug: false });
