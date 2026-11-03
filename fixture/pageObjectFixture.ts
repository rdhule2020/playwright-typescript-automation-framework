import {test as base} from '@playwright/test'
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import {AccountCreated} from '../pages/AccountCreatedPage';
import { deleteAccountPage } from '../pages/deleteAccountPage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { TestCasesPage } from '../pages/TestCasesPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage';

type myFixture = {
    homepage : HomePage;
    loginpage : LoginPage;
    signuppage : SignUpPage;
    acccreatedpage :AccountCreated;
    deleteaccountpage : deleteAccountPage;
    contactus : ContactUsPage;
    testcasespage : TestCasesPage;
    productspage: ProductsPage;
    productdetailspage: ProductDetailsPage;
}

export const test = base.extend<myFixture>({
    homepage : async({page}, use)=>{
        await use(new HomePage(page));
    },

    loginpage : async ({page}, use)=>{
        await use(new LoginPage(page));
    },

    signuppage : async({page}, use)=>{
        await use(new SignUpPage(page));
    },
    acccreatedpage : async({page}, use)=>{
        await use(new AccountCreated(page));
    },

    deleteaccountpage : async({page}, use)=>{
        await use(new deleteAccountPage(page));
    },
    contactus : async({page}, use)=>{
        await use ( new ContactUsPage(page));
    },
    testcasespage : async({page}, use)=>{
        await use ( new TestCasesPage(page));
    },
    productspage: async ({page}, use) => {
        await use(new ProductsPage(page));
    },
    productdetailspage: async ({page}, use) => {
        await use(new ProductDetailsPage(page));
    },

})

export {expect} from '@playwright/test'