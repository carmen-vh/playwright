const { expect } = require("@playwright/test");
exports.ChallengePage = class ChallengePage {
    constructor(page) {
        this.page = page;
        this.textField = page.getByPlaceholder("MyButton");
        this.buttonField = page.getByRole('button', { name: 'Button That Should Change it\'' });
        this.buttonText = page.locator("#updatingButton");
    }

    async NavigateToTextInput() {
        await this.page.goto('http://uitestingplayground.com/');
    }

    async fillTextField(text) {
        await this.textField.fill(text);
    }

    async clickButton() {
        await this.buttonField.click();
    }

    async expectedButtonText(text) {
            await expect(this.buttonText).toHaveText(text);
    }
}