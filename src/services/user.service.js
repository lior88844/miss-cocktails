export const UserService = {
    getUser,
    signUp,
    getEmptyUser,
    addMove
}
function getUser() {
    return JSON.parse(sessionStorage.getItem('user'))
}
function signUp(name) {
    var user = getEmptyUser()
    user.name = name
    _saveUser(user)
}
function getEmptyUser() {
    return { name: '', coins: 100, moves: [] }
}

function addMove(customer, amount) {

    var user = getUser()
    if (!customer) return
    if (!user) return
    if (amount > user.coins) return
    user.coins -= amount
    var move = { toId: customer._id, to: customer.name, at: Date.now(), amount }
    console.log('move', move)

    user.moves.push(move)
    _saveUser(user)
}

function _saveUser(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
}