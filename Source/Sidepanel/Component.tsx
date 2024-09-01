
export { Component }

import { useExtensionInfos } from './Extensions'


function Component (){

    console.debug('Testing')

    const infos = useExtensionInfos()

    if( infos.isLoading )
        return 'Loading ..'

    if( infos.isError )
        throw `Shouldn't error ever`

    if( infos.isPending )
        return 'Pending ..'

    const items = infos.data.map(( info ) => {

        return (
            <li key = { info.id } >
                <h3> { info.name } </h3>
            </li>
        )
    })

    return (
        <ul
            className = 'Infos'
            children = { items }
        />
    )
}
