
export { useExtensionInfos }

import { useQueryClient , useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'


const { management } = chrome

const Key = [ 'Extension' , 'Info' ] as const


function useExtensionInfos (){


    const client = useQueryClient()

    useEffect(() => {

        const invalidate = () => client
            .invalidateQueries({
                queryKey : Key ,
                exact : true
            })

        management.onUninstalled.addListener(invalidate)
        management.onInstalled.addListener(invalidate)
        management.onDisabled.addListener(invalidate)
        management.onEnabled.addListener(invalidate)

        return () => {
            management.onUninstalled.removeListener(invalidate)
            management.onInstalled.removeListener(invalidate)
            management.onDisabled.removeListener(invalidate)
            management.onEnabled.removeListener(invalidate)
        }

    },[ client ])

    return useQuery({
        queryKey : Key ,
        queryFn : () => management.getAll()
    })
}
