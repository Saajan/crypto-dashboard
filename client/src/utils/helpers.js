export const getEncodedData = (values) => {

    const encodedData = [];
    for (var property in values) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(values[property]);
        encodedData.push(encodedKey + "=" + encodedValue);
    }
    return encodedData.join("&");

}