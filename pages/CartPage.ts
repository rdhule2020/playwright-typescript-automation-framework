import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{

    private readonly cartIsEmptyText : Locator;

    constructor(page:Page){
        super(page);
        this.cartIsEmptyText = page.getByText('Cart is empty!', { exact: true });
    }

   
}