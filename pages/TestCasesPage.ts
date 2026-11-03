import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class TestCasesPage extends BasePage{
    private readonly header_testCases : Locator;


    constructor(page:Page){
        super(page);
        this.header_testCases= page.locator(`b:has-text("Test Cases")`);
    }

    async isTestCasesTitleExist(){
        return await this.header_testCases.isVisible();
    }
}