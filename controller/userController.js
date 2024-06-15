const userModel = require("../model/userModel");
// crate user
const userController = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = new userModel(userData);
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// get all users
const getuserController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res
      .status(201)
      .json({ message: "User getting successfully", users: users });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get single user

const getSingleUserController = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById({_id:id});
    res.status(201).json({ message: "User getting successfully", user: user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// update data///

const updateSingleUserController = async (req, res) => {
        const id = req.params.id;
        const updateData = req.body; // Assuming the updated data is sent in the request body
      
        try {
          // Use findByIdAndUpdate to find and update the user by ID
          const updatedUser = await userModel.findByIdAndUpdate({_id:id}, updateData, { new: true });
      
          // Check if the user was found and updated successfully
          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }
      
          res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } catch (error) {
          console.error("Error updating user:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      };

  // delete user 
  const deleteUser = async (req, res)=>{
    try {
      const id = req.params.id;
      const userUpdate = await userModel.findByIdAndDelete({_id:id});
      res.status(200).json({
        message : "Delete User Successfully",
        success : true,
        data : userUpdate
      })
    } catch (error) {
      res.status(500).json({message : error.message})
    }
  }
      

      


module.exports = {
  userController,
  getuserController,
  getSingleUserController,
  updateSingleUserController,
  deleteUser
};
