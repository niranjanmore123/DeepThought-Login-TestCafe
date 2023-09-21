import { Selector, t} from "testcafe";

const usernameInput= Selector('input[type=text][name=username]');
const passwordInput= Selector('input[type=password][name=password]');
const loginButton= Selector('Button[type=submit]');

fixture `DEEP THOUGHT Login Page`
        .page `https://dev.deepthought.education/login`;

test('Test successful login with valid credentials.', async t =>{
    await t
    // .navigateTo('https://dev.deepthought.education/login')
    .typeText(usernameInput, 'niranjanmore2512')
    .typeText(passwordInput, 'Niranjan@123')
    .click(loginButton)
    .wait(5000)
    .takeScreenshot("./Login-Successful-screenshots"); 
    
});


test.only('Test unsuccessful login attempts with invalid credentials.', async t =>{
    await t
    // .navigateTo('https://dev.deepthought.education/login')
    .typeText(usernameInput, 'niranjanmore')
    .typeText(passwordInput, 'Niranjan')
    .click(loginButton)
    .wait(5000)
    .takeScreenshot("./Login-Unsuccessful-screenshots")

});  