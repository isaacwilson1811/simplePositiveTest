import { browser } from '@wdio/globals'

export default class Base {
    navigateTo (url) {
        return browser.url(`${url}`)
    }
}