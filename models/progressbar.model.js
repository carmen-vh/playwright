exports.ProgressbarPage = class ProgressbarPage {
    constructor(page) {
        this.page = page;
        this.progressBarUrl = page.goto("/progressbar");
        this.buttonStart = page.locator("#startButton");
        this.buttonStop = page.locator("#stopButton");
        this.progressBar = page.locator("#progressBar");
    }

    async navigateToProgressbarPage() {
        await this.progressBarUrl;
    }

    async clickButtonStart() {
        await this.buttonStart.click();
    }

    async clickButtonStop() {
        await this.buttonStop.click();
    }

    async getProgressValue() {
        let current =  await this.progressBar.innerText();
        return current
    }
}
