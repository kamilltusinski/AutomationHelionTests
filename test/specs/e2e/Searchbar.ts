import { pageUrl, viewAllUrl } from "../../config/pagesUrl";
import HomePage from "../../pages/HomePage";
import { phrase } from "../../pages/HomePage";
import SearchBooksPage from "../../pages/SearchBooksPage";
import { headerValue, numberOfBooks } from "../../pages/SearchBooksPage";

describe("E2E serachbar", async () => {
    it("Should open helion home page, verify url and visible searchbar", async () => {
        await HomePage.openPage(pageUrl,pageUrl);
        await HomePage.serachbarIsVisible();
    })

    it("Should click search icon and verify rediraction to helion page", async () => {
        await HomePage.clickOnSerachIcon();
        await expect(browser).toHaveUrl(pageUrl);
    })

    it("Should write pharse and verify visible popup", async () => {
        await HomePage.setValueIntoSearchbar(phrase);
        await HomePage.popupIsVisible();
    })

    it("Should click on view all button and verify page url, header on the page and number of books", async () => {
        const numberOfBooksPage:number = await SearchBooksPage.getNumberOfBooks();
        await HomePage.clickOnViewAllButton();
        await expect(browser).toHaveUrl(viewAllUrl);
        await SearchBooksPage.checkHeaderValue(headerValue);
        await expect(numberOfBooksPage).toEqual(numberOfBooks);
    })

    it("Should clear searchbar", async () => {
        await HomePage.clearSearchbar();
    })
})