

const Razorpay = require("razorpay");

// Initialize Razorpay client with environment variables
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const paymentResultControler = async (req, res) => {
    const options = {    

        amount: req.body.amount * 100,
        currency: "INR",
        receipt: "order_rcptid_11",
    };
    try {
        const order = await razorpay.orders.create(options);
        res.json(order);

    } 
    catch (error) {
        console.log(`error in createOrderControler API : ${error.message}`);

        res.send(
            `<h1>error in createOrderControler API : ${error.message}</h1>`
        );
    }
}

exports.paymentResultControler = paymentResultControler;