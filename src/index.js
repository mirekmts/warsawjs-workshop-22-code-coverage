function sum(item1, item2) {
    return item1 + item2
}

function minus(item1, item2) {
    return item1 - item2
}

function multiple(item1, item2) {
    return item1 * item2
}

function divide(item1, item2) {
    if (item2 !== 0) {
        return item1 / item2
    }
    return false
}

function modulo(item1, item2) {
	return item1 % item2
}

module.exports = {
	sum,
	minus,
	multiple,
	divide,
	modulo,
}
