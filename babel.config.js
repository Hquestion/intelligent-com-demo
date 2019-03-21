module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            { "modules": false }
        ]
    ];
    const plugins = [
        "transform-vue-jsx",
        "@babel/plugin-syntax-dynamic-import",
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ];

    return {
        presets,
        plugins
    };
};
