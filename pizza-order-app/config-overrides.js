module.exports = (config, env) => {
    config.module.rules.push({
        test: /\.(js|jsx)$/,
        use: ["jsx-loader"],
        include: path.resolve("src")
    });
    return config;
};
