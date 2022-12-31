import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../Redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
