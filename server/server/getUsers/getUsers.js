var ObjectID = require("bson-objectid");
var getUsers = function (location) {
    var usersId = [ObjectID(location.ownerId)];
    for (failed of location.reviews) {
        usersId.push(ObjectID(failed.id))
    }
    return (usersId)
}
var findUserById = function (json,users) {
    var userInfo = [];
    for (i = 0; i < json.length; ++i) {
        for (j = 0; j < users.length; ++j) {
            if (json[i]._id.toString() == users[j].toString()) {
                userInfo.push(json[i])
            }
        }
    }
return(userInfo)
  }





module.exports = { getUsers, findUserById };