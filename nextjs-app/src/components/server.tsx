import { useContext } from 'react-isomorphic-context'
import { context } from '../../context'

export default function Server() {
    const { hello } = useContext(context)
    return (
        <div>
            <h1>server</h1>
            <h1>hello</h1>
            <p>{hello}</p>
        </div>
    )
}
