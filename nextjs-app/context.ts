import { createContext } from 'react-isomorphic-context'

type Type = {
    hello: 'world'
}

export const context = createContext<Type>('key', )
