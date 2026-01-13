exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.HomePageUrl = page.goto("/home");

    }

    async navigateToHomePage() {
        this.HomePageUrl
    }
}