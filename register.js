const { openBrowser, goto, write, textBox, into, $, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({headless: false});
        await goto("https://register.freecrm.com/register/");
        //await write("Jigar");
        await write("Jigar@gmail.com",into(textBox({id:"email"})));
        //await write("Jigar@gmail.com",into(textBox({id:"email"})));
        await click($("#terms"));
        await click($("//input[@id='terms']"));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();