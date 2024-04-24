import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// нарушение FSD
import type { RootState, AppDispatch } from '@/app/store.ts'

type DispatchFunc = () => AppDispatch
export const useTypedDispatch: DispatchFunc = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector