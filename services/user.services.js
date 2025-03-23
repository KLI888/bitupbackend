const UserModel = require("../model/user.model")


class UserServices {
    static async registerUser(number, password){
        try {
            const createUser = new UserModel({number, password})
            return await createUser.save()

        }catch(err) {
            throw err;
        }
    }
}


module.exports = UserServices;