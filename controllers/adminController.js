const UserModle = require("../modules/UserModel")
const viewUser = async (req, res) => {
    try {
        const user = await UserModle.find()
        return res.status(200).send({
            success: true,
            message: "User view successfully",
            user
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        })
    }


}
const deleteUser = async (req, res) => {
    try {
        const id = req.query.id
        const user = await UserModle.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "User deleted successfully",
            user
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }

}
const updateUser = async (req, res) => {
    try {
        const { name, email, password, cpassword, contact, address,role, business_category, business_name, business_address, send_request, received_request } = req.body
        const id = req.query.id
        const updatedUser = await UserModle.findByIdAndUpdate(id,{
            name:name,
            email:email,
            password:password,
            cpassword:cpassword,
            contact:contact,
            address:address,
            role:role,
            business_category:business_category,
            business_name:business_name,
            business_address:business_address,
            send_request:send_request,
            received_request:received_request, 
        })
        
        return res.status(200).send({
            success: true,
            message: "User updated successfully",
            user:updatedUser        
          
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
        }

    }
    module.exports = { viewUser, deleteUser,updateUser };