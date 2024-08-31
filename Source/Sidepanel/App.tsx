
export { hookApp }

import { Component } from './Component'
import { render } from 'preact'


function hookApp (){
    render(<Component />,document.body)
}
