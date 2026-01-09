exports.ScrollbarsPage = class ScrollbarsPage {
    constructor(page) {
        this.page = page
        this.scrollbarUrl = page.goto('/scrollbars');
        this.hidingButton = page.locator('#hidingButton');
    }

    async navigateToScrollbar() {
        await this.scrollbarUrl
    }

    async clickButton() {
        await this.hidingButton.click()
    }
}