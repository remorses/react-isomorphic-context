import { useContext as useClientContext } from 'react'
import { ClientProvider } from './client-provider'

export function createContext(id) {
    return {
        id,
        Provider() {
            throw new Error('Provider is only available on the server')
        },
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
