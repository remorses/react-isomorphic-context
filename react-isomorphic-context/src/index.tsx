import type { createContext as clientCreateContext } from './index.client'
import React from 'react'

// @ts-ignore
import { cache } from 'react'
import { ClientProvider } from './client-provider'

export const createContext = function createServerContext<T>(
    id: string,
    defaultValue?: T,
) {
    const getRef = cache(() => ({ current: defaultValue }))

    const getValue = (): T => getRef().current

    const setValue = (value: T) => {
        getRef().current = value
    }
    return {
        id: id,
        Provider({ children, value }: { children: any; value: T }) {
            setValue(value)
            return (
                <ClientProvider id={id} value={value}>
                    {children}
                </ClientProvider>
            )
        },
        _getValue: getValue,
    }
}

export function useContext<T>(context: ReturnType<typeof createContext<T>>) {
    return context._getValue()
}
