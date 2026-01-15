const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    const dataBuffer = fs.readFileSync('/Users/anasmohameed/Documents/تطبيقاتي /urs/URS Profile  2.pdf');
    // Using { data: buffer } as per docs
    const parser = new PDFParse({ data: dataBuffer });
    try {
        const result = await parser.getText();
        console.log(result.text);
    } catch (e) {
        console.error(e);
    } finally {
        await parser.destroy();
    }
}

run();
