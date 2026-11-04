import {Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

   
    //locators
    private readonly loggedInAsText :Locator;
    private readonly deleteAccountLink: Locator; 
    private readonly logoutLink :Locator
    //constructor
    constructor(page:Page){
        super(page)
        this.loggedInAsText= page.getByText('Logged in as');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    }

    //action methods
    //check if home page exist
    async isHomePageExists():Promise<boolean>{
          let title:string = await this.page.title();
            if(title)
            {
                 return true;
            }
            return false;
    }


    async checkLoggedInAs(){
        return await this.loggedInAsText.isVisible();
    }

    async performLogout(){
        await this.logoutLink.click();
    }

    async deleteAcccount(){
        await this.deleteAccountLink.click();
    }

    async isHomePageTitleCorrect(): Promise<boolean> {
    return (await this.page.title()) === 'Automation Exercise';
}
    
}