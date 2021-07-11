/* Check if the imput is safe to procees and enter the database */


/* If input is not safe to proceed, return false  */
exports.safe = (input, ...args) => {
    if (input == '' || input == null) {
        return true;
    }
}