import { HikVision } from '../dist';

const camera = new HikVision({
  username: 'admin',
  password: process.argv[3],
  host: process.argv[2],
  debug: true,
  protocol: 'http',
  port: 80,
});

camera
  .getNetworkInterface(1)
  .then((result) => {
    return camera.updateNetworkInterface(1, result);
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
    camera.close();
  });
