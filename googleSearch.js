const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://www.google.com");
        await write("Jigar Soni");
        await click("Google Search");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();