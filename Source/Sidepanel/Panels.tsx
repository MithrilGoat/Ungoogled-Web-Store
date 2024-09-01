
export { Component as Panels }

import { ExtensionsPanel } from './ExtensionsPanel'
import { SettingsPanel } from './SettingsPanel'
import { useState } from 'react'


const Pages = [ 'Extensions' , 'Settings' ] as const

type PageType = ( typeof Pages )[ number ]


function Component (){

    const [ page , setPage ] = useState<PageType>('Extensions')

    const navigation = Pages.map(( page ) => {
        return (
            <div
                children = { page }
                onClick = { () => setPage(page) }
                key = { page }
            />
        )
    })

    return (
        <div className = 'Panels' >

            <nav children = { navigation } />

            <Panel page = { page } />

        </div>
    )
}


function Panel (
    { page } : { page : PageType }
){

    if( page === 'Extensions' )
        return <ExtensionsPanel />

    if( page === 'Settings' )
        return <SettingsPanel />
}
