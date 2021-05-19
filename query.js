const User = require("./models").user;
// Read:
// .findAll() => []
// .findByPk() =>{} || null

// Create: .create()
// Delete: first we findByPk() then we destroy()

const getAllUsers = async () => {
  try {
    const all = await User.findAll({
      where: { email: "rakan@gmail.com" },
      attributes: ["name", "id"],
    });
    console.log(all);
  } catch (e) {
    console.log(e.message);
  }
};
// getAllUsers();
// const create = async () => {
//   try {
//     const newUser = await User.create({
//       name: "Giga",
//       email: "giga@gmail.com",
//       phone: "223123",
//       password: "5523232323",
//     });
//     console.log(newUser.toJSON());
//   } catch (e) {
//     console.log(e.message);
//   }
// };
// create();
const FindAnddelete = async (id) => {
  try {
    const toDelete = await User.findByPk(id);
    // console.log(toDelete.toJSON());
    toDelete.destroy();
    console.log("deleted", id);
  } catch (e) {
    console.log(e.message);
  }
};
// FindAnddelete(5);
