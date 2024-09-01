
export { hookApp }

import { QueryProvider } from './Query'
import { createRoot } from 'react-dom/client'
import { Component } from './Component'


function Root (){
    return (
        <QueryProvider>
            <Component />
        </QueryProvider>
    )
}


function hookApp (){

    const node = document
        .querySelector('main')!

    const root = createRoot(node)

    root.render( <Root /> )
}
