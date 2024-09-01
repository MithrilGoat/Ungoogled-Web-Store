
export { hookApp }

import { QueryProvider } from './Query'
import { Component } from './Component'
import { render } from 'preact'


function Root (){
    return (
        <QueryProvider>
            <Component />
        </QueryProvider>
    )
}


function hookApp (){
    render(<Root />,document.body)
}
