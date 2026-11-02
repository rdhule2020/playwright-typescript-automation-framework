import { BasePage } from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class deleteAccountPage extends BasePage{

    private readonly accountDeletedText : Locator;

    constructor(page:Page){
        super(page);
        this.accountDeletedText =page.locator(`div.row > div > p`).first();
       }

    async deleteAccountText(): Promise<boolean>{
       return await this.accountDeletedText.isVisible();
    }
    
}