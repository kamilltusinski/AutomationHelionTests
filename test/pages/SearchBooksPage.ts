export const headerValue:string = `Szukasz "testowanie oprogramowania"`;
export const numberOfBooks:number = 20;

class SearchBooksPage {
    get headerTitle() {
        return $("h1#pageTitle");
    }

    get bookItem() {
        return $$("ul.list");
    }

    async checkHeaderValue(headerValue:string) {
        const header:WebdriverIO.Element = await this.headerTitle;
        await header.waitForDisplayed();
        await expect(header.getText()).toContain(headerValue);
    }

    async getNumberOfBooks(): Promise<number> {
        const books:WebdriverIO.ElementArray = await this.bookItem;
        return await books.length;
    }
}

export default new SearchBooksPage();