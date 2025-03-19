import { browser } from '@wdio/globals'

export default class Base {
    navigateTo (endpoint) {
        return browser.url(`https://www.saucedemo.com/${endpoint}`)
    }
}