import type { createContext as clientCreateContext } from './index.client'
import 'server-only'
// @ts-ignore
import { cache } from 'react'

export const createContext = function createServerContext<T>(defaultValue) {
    const getRef = cache(() => ({ current: defaultValue }))

    const getValue = (): T => getRef().current

    const setValue = (value: T) => {
        getRef().current = value
    }
    return {
        Provider({ children, value }: { children: any; value: T }) {
            setValue(value)
            return children
        },
        _getValue: getValue,
    }
}

export function useContext<T>(context: ReturnType<typeof createContext<T>>) {
    return context._getValue()
}
