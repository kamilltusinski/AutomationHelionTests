export const phrase:string = "Testowanie oprogramowania"

class HomePage {

    get searchbar() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(),'Szukaj')]");
    }

    get popup() {
        return $("form#szukanie div.suggest-list");
    }

    get buttonViewAll() {
        return $("li.wszystkie > p > a");
    }

    async openPage(pageUrl:string, expectedPageUrl:string) {
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    }

    async serachbarIsVisible() {
        const searchbar:WebdriverIO.Element = await this.searchbar;
        await expect(searchbar.isDisplayed()).toBeTruthy();
    }

    async clickOnSerachIcon() {
        const searchIcon:WebdriverIO.Element = await this.searchIcon;
        await searchIcon.waitForDisplayed();
        await searchIcon.click();
    }

    async setValueIntoSearchbar(phrase: string) {
        const searchbar:WebdriverIO.Element = await this.searchbar;
        await searchbar.setValue(phrase);

    }

    async popupIsVisible() {
        const popup:WebdriverIO.Element = await this.popup;
        await popup.waitForDisplayed();
        await expect(popup.isDisplayed()).toBeTruthy();
    }

    async clickOnViewAllButton() {
        const button:WebdriverIO.Element = await this.buttonViewAll;
        await button.waitForDisplayed();
        await button.scrollIntoView();
        await button.click();
    }

    async clearSearchbar() { 
        const input:WebdriverIO.Element = await this.searchbar;
        await input.waitForDisplayed();
        await input.clearValue();
    }

}

export default new HomePage();