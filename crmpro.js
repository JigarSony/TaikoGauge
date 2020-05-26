const { openBrowser, goto, textBox, into, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        openBrowser;
        await openBrowser();
        await goto("https://classic.crmpro.com/login.cfm");
        await write("naveen",into(textBox({name:"username"})));
        await write("naveen@123",into(textBox({name:"password"})));
        await click("Login");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();