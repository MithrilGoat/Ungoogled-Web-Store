
export { Component }

import { useExtensionInfos } from './Extensions'


function Component (){

    console.debug('Testing')

    const infos = useExtensionInfos()

    return (
        <div children = { infos.data?.length ?? 'test' } />
    )
}
