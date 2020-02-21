/**
 * Helper function that checks for missing
 * props in an object, returning an object
 * of missing props.
 * @param {*} obj
 * @param {[String]} params
 * @return {*}
 */
function getMissingProps(obj, params) {
  const missingProps = {};
  params.forEach((key) => {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      missingProps[key] = key;
    }
  });
  return missingProps;
}

module.exports = {
  getMissingProps,
};
