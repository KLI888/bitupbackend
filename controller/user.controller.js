const UserServices = require("../services/user.services")



exports.register = async(req, res, next)=>{
    try {
        const {number, password} = req.body;
        const successRes = await UserServices.registerUser(number, password)
        res.json({status:true, success:"User Registered Successfully"});
    } catch(err) {
        throw err;
    }
}