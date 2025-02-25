export default [
    {
        root: true,
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
            "prettier",
        ],
        env: {
            node: true,
        },
        ignorePatterns: ["/node_modules", "/dist", "/temp"],
        rules: {
            "@typescript-eslint/no-inferrable-types": "off",
            semi: "warn",
            quotes: [
                "warn",
                "double",
                {
                    allowTemplateLiterals: true,
                },
            ],
            "prettier/prettier": "warn",
        },
        overrides: [
            {
                files: ["./src/modules/orm/migrations/*.ts"],
                rules: {
                    quotes: "off",
                    "prettier/prettier": "off",
                },
            },
        ],
    },
];
