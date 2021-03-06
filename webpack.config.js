const _ = require('lodash');
const args = require('args');
const path = require('path');
const webpack = require('webpack');

args
	.option('production', 'Enable/disable production environment')
	// Webpack options
	.option('compress', 'Enable Gzip compressing')
	.option('progress', 'Display a compilation progress to stderr')
	.option('watch', 'Enter watch mode, which rebuilds on file change')
	.option('display-error-details', 'Show more information about the errors')
	.option('hot', 'Adds the HotModuleReplacementPlugin and switch the dev-server to hot mode')
	.option('d', 'Development shortcut equals to --debug --devtool source-map --output-pathinfo')
	.option('display-reasons', 'Show more information about the reasons why a module is included');

const params = args.parse(process.argv);

const options = {
	TIMESTAMP: new Date().getTime(),
	NODE_ENV: params.production ? 'production' : 'development'
};

console.log('\x1b[36m', '================ ENVIRONMENT VARIABLES ================================', '\x1b[0m');
Object.keys(options).map(key => console.log('\x1b[32m', key, '\x1b[0m', options[key]));
console.log('\x1b[36m', '=======================================================================', '\x1b[0m');

module.exports = {
	mode: options.NODE_ENV,
	entry: path.resolve(`${ __dirname }/src/${ options.NODE_ENV === 'production' ? 'validators/index.js' : 'index.jsx' }`),
	output: {
		path: path.resolve(`${ __dirname }/${ options.NODE_ENV === 'production' ? 'dist' : 'build' }`),
		filename: options.NODE_ENV === 'production' ? 'react-redux-form-generator-validators.js' : 'main.js',
		library: 'react-redux-form-generator-validators.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['env', 'react'],
				plugins: ['transform-runtime', 'transform-class-properties', 'transform-object-rest-spread']
			}
		}, {
			test: /\.html$/,
			loader: 'file-loader?name=[name].[ext]'
		}]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.ProvidePlugin({
			log: 'log',
			React: 'react'
		}),
		new webpack.DefinePlugin(_.mapValues(options, value => JSON.stringify(value)))
	],
	resolve: {
		extensions: ['.html', '.css', '.scss', '.js', '.jsx', '.json', '.svg'],
		alias: {
			log: path.resolve(`${ __dirname }/src/utils/log`)
		}
	},
	externals: options.NODE_ENV === 'production' ? {
		react: 'react',
		'prop-types': 'prop-types'
	} : {},
	devServer: {
		port: 3004,
		inline: true,
		contentBase: './build',
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	performance: {
		hints: false
	}
};
