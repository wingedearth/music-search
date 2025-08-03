const { MongoMemoryServer } = require('mongodb-memory-server');

async function startMongoDB() {
  try {
    console.log('Starting MongoDB Memory Server...');
    const mongod = await MongoMemoryServer.create({
      instance: {
        port: 27017,
        dbName: 'musicsearch'
      }
    });
    
    const uri = mongod.getUri();
    console.log('MongoDB Memory Server started successfully!');
    console.log('URI:', uri);
    console.log('Database: musicsearch');
    console.log('Port: 27017');
    console.log('\nPress Ctrl+C to stop the server');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('\nStopping MongoDB Memory Server...');
      await mongod.stop();
      console.log('MongoDB stopped.');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('Failed to start MongoDB Memory Server:', error);
    process.exit(1);
  }
}

startMongoDB();
