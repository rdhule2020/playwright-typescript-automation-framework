import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage';
import { TEST_DATA } from '../testData/testData';

export class ContactUsPage extends BasePage {

    private readonly header_getInTouch: Locator;
    private readonly txt_Name: Locator;
    private readonly txt_Email: Locator;
    private readonly txt_Subject: Locator;
    private readonly txt_Message: Locator;
    private readonly btn_UploadFile: Locator;
    private readonly btn_Submit: Locator;
    private readonly successText: Locator;

    constructor(page: Page) {
        super(page);
        this.header_getInTouch = page.getByRole('heading', { name: 'Get In Touch', level: 2 });
        this.txt_Name = page.getByRole('textbox', { name: 'Name' });
        this.txt_Email = page.getByPlaceholder('Email', { exact: true });
        this.txt_Subject = page.getByPlaceholder('Subject', { exact: true });
        this.txt_Message = page.getByPlaceholder('Your Message Here');
        this.btn_UploadFile = page.locator(`[name="upload_file"]`);
        this.btn_Submit = page.getByRole('button', { name: 'Submit' });
        this.successText = page.getByText('Success! Your details have been submitted successfully.', { exact: true }).first();
    }

    async getHeaderMessage() {
        return await this.header_getInTouch.innerText();
    }

    async enter_Name(name: string) {
        await this.txt_Name.fill(name);
    }

    async enter_Email(email: string) {
        await this.txt_Email.fill(email);
    }

    async enter_Subject(subject: string) {
        await this.txt_Subject.fill(subject);
    }

    async enter_Message(message: string) {
        await this.txt_Message.fill(message);
    }

    async uploadFile(filepath: string) {
        await this.btn_UploadFile.setInputFiles(filepath);

    }


    async fillContactUsForm(name: string, email: string, subject: string, message: string) {
        await this.txt_Name.fill(name);
        await this.txt_Email.fill(email);
        await this.txt_Subject.fill(subject);
        await this.txt_Message.fill(message);
    }

    async clickSubmitButton() {

        this.page.once('dialog', async (dialog) => {

            console.log('Alert message:', dialog.message());

            console.log('Alert type:', dialog.type());

            await dialog.accept();

        });

        await this.btn_Submit.click();
    }
    async IsSuccessMessageDisplayed() {
        return await this.successText.isVisible();
    }
}