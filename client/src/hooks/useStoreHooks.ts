import { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
