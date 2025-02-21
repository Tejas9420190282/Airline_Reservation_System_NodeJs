
// login_Controler.js

const { AdminModel } = require("../models/Admin_Model");
const { Custemer_Model } = require("../models/Custemer_Model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const SECRET_KEY = 'your-secret-key';

const loginControler = async (req, res) => {

    const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).render("dashboard", {
                message: "All the details are mandatory",
            });
        }

    try {
        

        const admin = await AdminModel.findOne({
            where: {
                email: email,
            },
        });

        console.log("Admin Details:", {
            admin_id: admin.admin_id,
            email: admin.email,
            name: admin.name,
        });
        
        

        if (admin) {
            
            if (password !== admin.pwd) {
                
                return res.status(401).render("dashboard", {

                    message : "Please Enter Valid Password",
                })
            }


            const token = jwt.sign(
                { email: admin.email, password: admin.pwd},
                SECRET_KEY,
                { expiresIn: "1h" }
            );

            // storing tokens in cookiesssss
            res.cookie("token", token, {
                
                httpOnly: true, // Prevents XSS attacks
                secure: false,  // Set to true if using HTTPS
                maxAge: 3600000, // 1 hour
            })

            return res.status(200).render("./admin/admin-home");
        }

        const custemer = await Custemer_Model.findOne({
            where: {
                email: email,
            },
        });

        if (custemer) {
            const isMatchPswrd = await bcrypt.compare(
                password,
                custemer.pwd
            );

            if (!isMatchPswrd) {
                return res.status(404).render("dashboard", {
                    message: "Please Enter Valid Password",
                });
            }

            // Tokens for custemer
            const token = jwt.sign(
                { email: custemer.email, id: custemer.customerId },
                SECRET_KEY,
                { expiresIn: "1h" }
            );

            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
            });

            return res.redirect("/custemer-home"); // Redirect to customer dashboard
            

            /* return res.status(200).render("./custemer/custemer-home", {
                userName: custemer.name,
            }); */
        }

        return res.status(404).render("dashboard", {
            message: "User Not Found",
        });
    } 
    catch (error) {
        console.log(`Error in loginControler API : ${error.message}`);

        res.status(500).send(
            `<h1>Error in loginControler API : ${error.message}</h1>`
        );
    }
};

exports.loginControler = loginControler;
