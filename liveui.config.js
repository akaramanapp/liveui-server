module.exports = {
    shared: ['react', 'react-native'],
    exposes: {
            foo: './src/foo/index.js',
            baz: './src/baz/index.js',  
    },
    hotReloadContext: 'src',
    microPort: 5001, 
}