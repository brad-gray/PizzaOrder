const toppingPrices = async () => {
    const response = await fetch("/api/topping");
    const data = await response.json();
    return data;
};

export default toppingPrices;
