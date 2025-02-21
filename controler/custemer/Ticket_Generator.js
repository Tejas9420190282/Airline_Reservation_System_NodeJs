
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function generateBoardingPass(userData) {
    try {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([400, 600]);

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 12;
        const { width, height } = page.getSize();

        // Add ticket details
        page.drawText(`Boarding Pass`, { x: 50, y: height - 50, size: fontSize + 6, font, color: rgb(0, 0, 1) });
        
        page.drawText(`Flight Number: ${userData.flightNumber}`, { x: 50, y: height - 130, size: fontSize, font, color: rgb(0, 0, 0) });
        page.drawText(`Departure: ${userData.departure}`, { x: 50, y: height - 160, size: fontSize, font, color: rgb(0, 0, 0) });
        page.drawText(`Destination: ${userData.destination}`, { x: 50, y: height - 190, size: fontSize, font, color: rgb(0, 0, 0) });
        page.drawText(`Date: ${userData.date}`, { x: 50, y: height - 220, size: fontSize, font, color: rgb(0, 0, 0) });
        page.drawText(`Payment ID: ${userData.paymentId}`, { x: 50, y: height - 250, size: fontSize, font, color: rgb(0, 0, 0) });

        // Add passenger details
        let yOffset = 280;
        page.drawText(`Passengers:`, { x: 50, y: height - yOffset, size: fontSize, font, color: rgb(0, 0, 0) });
        yOffset += 30;

        userData.passengers.forEach(passenger => {
            page.drawText(`- ${passenger.name} (${passenger.age}, ${passenger.gender})`, {
                x: 50,
                y: height - yOffset,
                size: fontSize,
                font,
                color: rgb(0, 0, 0),
            });
            yOffset += 20;
        });

        const pdfBytes = await pdfDoc.save();
        return pdfBytes;
    } catch (error) {
        console.error("Error generating boarding pass:", error.message);
        throw new Error("Failed to generate boarding pass.");
    }
}

exports.generateBoardingPass =  generateBoardingPass;