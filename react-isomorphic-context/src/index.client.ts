import { useContext as useClientContext } from 'react'
import { ClientProvider } from './client-provider'

export function createContext(id) {
    return {
        id,
    }
}

export function useContext(context) {
    const id = context.id
    const c = ClientProvider.contexts.get(id)
    if (!c) {
        throw new Error(`Context ${id} not found`)
    }
    return useClientContext(c)
}
