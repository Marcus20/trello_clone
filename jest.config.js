module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
}