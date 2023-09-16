function convertToLocaleDate(date) {
    const result = new Date(date).toLocaleDateString("es-MX");
    return result;
}

module.exports = convertToLocaleDate;
