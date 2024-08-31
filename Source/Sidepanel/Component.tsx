
export { Component }

import { useState } from 'preact/hooks'


function Component (){

    const [ text , setText ] = useState('Before Click')

    const click = () => {
        setText('After Click')
    }

    return (
        <div
            children = { text }
            onClick = { click }
        />
    )
}
