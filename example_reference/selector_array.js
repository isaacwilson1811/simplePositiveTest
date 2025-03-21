import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

class PageObject {
    get selectedElement () {
        // Single $ Returns the selected element from your selector <tag class="Something">stuff</tag>
        return $('selector that finds one element')
    }
    get arrayOfSelectedElements () {
        // $$ Returns an array of selected elements from your selector [0,1,2,3...]
        return $$('selector that finds a list of multiple elements')
    }

    async doSomething () {
        
        // Define a local array variable that holds the list of selected elements
        let myArray = await this.arrayOfSelectedElements

        // You can use the .length property on your array variable to check for the number of elements found
        await expect(myArray.length).toBe(10)
        await expect(myArray.length).toBeGreaterThan(1)
        await expect(myArray.length).toBeLessThan(100)
    }

}

export default new PageObject()