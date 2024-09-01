
export { Provider as QueryProvider }

import type { PropsWithChildren } from 'preact/compat'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'


type Args = PropsWithChildren


const client = new QueryClient({

    defaultOptions : {

        mutations : {
            retry : false
        },

        queries : {

            refetchOnWindowFocus : false ,
            refetchOnReconnect : false ,
            refetchOnMount : true ,
            throwOnError : true ,
            retry : false ,

            staleTime : Infinity
        }
    }
})


function Provider ( args : Args ){
    return (
        <QueryClientProvider
            client = { client }
            { ... args }
        />
    )
}
