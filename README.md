<div align='center'>
    <br/>
    <br/>
    <h3>react-isomorphic-context</h3>
    <p>project under heavy development</p>
    <br/>
    <br/>
</div>

Example [here](./nextjs-app/)

```tsx
// lib.tsx
export const context = createContext<Type>('unique id')

// layout.ts
export default function RootLayout({ children, params }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <context.Provider value={{ hello: 'slug is: ' + params.slug }}>
                    {children}
                </context.Provider>
            </body>
        </html>
    )
}

// client or server
import { useContext } from 'react-isomorphic-context'
import { context } from '../../context'

export default function Server() {
    const { hello } = useContext(context)
    return (
        <div>
            <h1>hello</h1>
            <p>{hello}</p>
        </div>
    )
}
```
