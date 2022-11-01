// get date

export const getDate = (date) => {
  var dateobj = new Date(date);
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  var result =
    pad(dateobj.getDate()) +
    "/" +
    pad(dateobj.getMonth() + 1) +
    "/" +
    dateobj.getFullYear();
  return result;
};

// The filtering function
export const filteringMethod = (mainData, searchData, result) => {
  const res = mainData.filter((item) => {
    return Object.values(item).join(" ").toLowerCase().match(searchData);
  });

  /* eslint-disable */
  return res.sort((a, b) => {
    if (result === "1") {
      return a.productamount > b.productamount ? 1 : -1;
    } else if (result === "2") {
      return b.productamount > a.productamount ? 1 : -1;
    }
  });
};

// ======================
// The section for searching
export const filteredData = (result, data) => {
  return result?.filter((item) => {
    return Object.values(item).join(" ").toLowerCase().match(data);
  });
};

// Sort Country data
export const sortedData = (result, values) => {
  return result.filter((item) => {
    if (values === "Select Country") {
      return item.country;
    }
    return item.country === values;
  });
};

// Sort Highest to Lowest data
export const sortValue = (data, result) => {
  /* eslint-disable */
  return data.sort((a, b) => {
    if (result === "1") {
      return b.totalEarnings > a.totalEarnings ? 1 : -1;
    } else if (result === "2") {
      return a.totalEarnings > b.totalEarnings ? 1 : -1;
    }
  });
};
