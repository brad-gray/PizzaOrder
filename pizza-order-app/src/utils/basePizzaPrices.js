const basePizzaPrices = async () => {
    const response = await fetch("/api/pizza");
    const data = await response.json();
    return data;
};

export default basePizzaPrices;
