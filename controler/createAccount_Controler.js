
const bcrypt = require('bcrypt');
const { Custemer_Model } = require('../models/Custemer_Model');


const createAccountControler = async (req, res) => {
    try {

        const { name, email, password, phone, address } = req.body;

        if (!name || !email || !password || !phone || !address) {
        
            res.status(404).render('dashboard', {
                
                message : "All the details are mandatory" 
            })
        }

        const isRegister = await Custemer_Model.findAll(
            {
                where : {
                    email : email
                }
            }
        )

        if (isRegister.length > 0) {
            
            res.status(400).render("dashboard", {

                message : "Email have been already Registered!"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createAccountData = await Custemer_Model.create({
            
            email : email, 
            pwd : hashPassword,
            phone_no : phone,
            address : address,
            name : name
        })

        console.log('createAccountData inserted Successfully in custemerModel'.bgWhite);

        res.status(200).redirect("/login");

        
    } catch (error) {
        
        console.log(`Error in createAccountControler API : ${error.message}`);

        res.status(500).send(
            `<h1>Error in createAccountControler API : ${error.message}</h1>`
        );
    }
}

exports.createAccountControler = createAccountControler;