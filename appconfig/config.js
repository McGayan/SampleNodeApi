require('dotenv').config();

const appConfig = {

	conneectionString: '',
	databaseId: 'mcxdb',
	containerId:'marketexpenses'

};

appConfig.conneectionString = process.env.COSMOS_CONNECTION_STRING;
//appConfig.conneectionString = "Hello secret world------";

module.exports = appConfig;