
import { fetchUpdates } from './CheckUpdate'

console.debug('Test')


chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick : true
    })
})

// fetchUpdates()
