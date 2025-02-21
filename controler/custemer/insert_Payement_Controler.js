const { Payment_Model } = require("../../models/User_Model/Payment_Model");


const insertPaymentController = async (req, res) => {
    try {
        const { pnr, payment_mode, payment_amount } = req.body;

        // Create a new payment record
        const payment = await Payment_Model.create({
            pnr: pnr,
            payment_date: new Date(),
            payment_amount: payment_amount,
            payment_mode: payment_mode,
        });

        res.status(200).render("dashboard", { message: "Payment details inserted successfully.", payment });
    
    } 
    catch (error) {
        console.log(`Error in insertPaymentController: ${error.message}`.bgRed);
        res.status(500).json({ message: `Error in insertPaymentController: ${error.message}` });
    }
}

exports.insertPaymentController = insertPaymentController;


