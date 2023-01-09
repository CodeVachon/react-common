export const getDateString = (date = new Date(), delimiter = "-") =>
    [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        .map((v) => String(v).padStart(2, "0"))
        .join(delimiter);
