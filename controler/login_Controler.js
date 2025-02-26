const { AdminModel } = require("../models/Admin_Model");
const { Custemer_Model } = require("../models/Custemer_Model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const SECRET_KEY = 'your-secret-key';

const loginControler = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(404).render("dashboard", {
                message: "All the details are mandatory",
            });
        }

        const admin = await AdminModel.findOne({
            where: {
                email: email,
            },
        });

        if (admin) {
            const isMatch = bcrypt.compare(password, admin.pwd);

            if (!isMatch) {
                return res.status(404).render("dashboard", {
                    message: "Please Enter Valid Password",
                });
            }

            const token = jwt.sign(
                { id: admin.admin_id, email: admin.email },
                SECRET_KEY,
                { expiresIn: "1h" }
            );

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
            const tokens = jwt.sign(
                { email: custemer.email, id: custemer.customerId },
                SECRET_KEY,
                { expiresIn: "1h" }
            );

            return res.status(200).render("./custemer/custemer-home", {
                userName: custemer.name,
            });
        }
    } 
    catch (error) {
        console.log(`Error in loginControler API : ${error.message}`);

        res.status(500).send(
            `<h1>Error in loginControler API : ${error.message}</h1>`
        );
    }
};

exports.loginControler = loginControler;
