import { createContext } from 'react-isomorphic-context'

type Type = {
    hello: string
}

export const context = createContext<Type>('key', )
