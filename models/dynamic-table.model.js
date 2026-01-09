exports.DynamicTablePage = class DynamicTablePage {
    constructor(page) {
        this.page = page;
        this.dynamicTableUrl = page.goto("/dynamictable");
        this.linkTags = page.locator('span');
        this.textYellowLabel = page.locator('.bg-warning');
    }

    async navigateDynamicTablePage() {
        await this.dynamicTableUrl;
    }

    async getAllLinkTags() {
        return await this.linkTags.evaluateAll((elements) => elements.map((el) => el.textContent));
    }

    async getYellowLabelValue() {
        return this.textYellowLabel.innerText();
    }

}