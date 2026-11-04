import {Page} from '@playwright/test'
import { HeaderComponent } from '../components/HeaderComponents';
import { FooterComponent } from '../components/FooterComponents';

export class BasePage{
    protected readonly page : Page;
    header : HeaderComponent;
    footer : FooterComponent;

    constructor(page:Page){
        this.page = page;
        this.header = new HeaderComponent(page);
        this.footer = new FooterComponent(page);
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('networkidle');
    }
}