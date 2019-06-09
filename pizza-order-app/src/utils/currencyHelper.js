export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
});

export const sumPriceList = priceList =>
    priceList.map(item => item.price).reduce((p, c) => p + c, 0);
