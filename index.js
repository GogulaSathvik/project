
const static_config = require('fastify');
const config = require ('./config/config')
const{init,run} = require ('./server');
(async()=>{
  try{
    const server=await init({config});
    await run(server);
  }catch(error){
    console.log(error);
    //logger.error(error,'Error While Starting the Server');
  }
  })();
  