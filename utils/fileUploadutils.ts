import path from 'path';
import fs from 'fs';

export class FileUploadUtils {

    static getFilePath(fileName: string): string {

        const filePath = path.resolve(
            process.cwd(),
            'uploads',
            fileName
        );

        // Verify whether file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        return filePath;
    }
}