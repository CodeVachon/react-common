module.exports = {
    roots: ["src/"],
    setupFilesAfterEnv: ["jest-extended/all"],
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(tsx|ts|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "./tsconfig.json"
            }
        ]
    }
};
