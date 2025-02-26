

const { Jet_Model } = require("../../models/Admin_Model/Jet_Model");


const addJetControler = async(req, res) => {

    try {
        
        const { jetId, jetType, capacity } = req.body;

        if (!jetId || !jetType || !capacity) {

            console.log(`All input data are mandatory`);

            res.status(404).render("dashboard", {

                message: `All input data are mandatory`
            })             
        }

        const addAircraftDetailData = await Jet_Model.create({
            
            jet_id : jetId,
            jet_type : jetType,
            total_capacity : capacity,
        })

        res.status(200).render("dashboard", {
            
            message: `addAircraftDetailData Inserted Successfully in JetDetailsModel`,
        });

        console.log(addAircraftDetailData);
    } 
    catch (error) {
        
        console.log(`Error in addAircraftDetailControler API ${error.message}`);

        res.send(500).render("dashboard", {
            message: `Error in addAircraftDetailControler API ${error.message}`,
        });
    }
}

exports.addJetControler = addJetControler;

