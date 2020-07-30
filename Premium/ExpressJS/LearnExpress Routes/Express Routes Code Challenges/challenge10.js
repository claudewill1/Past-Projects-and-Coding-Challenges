const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];
// create routers for mountains and mountainRanges
const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();
// Mount routers
app.use('/mountains',mountainsRouter);
app.use('/mountain-ranges',mountainRangesRouter);
// create route handler to send back respective arrays in response
// to get request
mountainsRouter.get('/',(req,res,next)=>{
  res.send(mountains);
});
mountainRangesRouter.get('/',(req,res,next)=>{
  res.send(mountainRanges);
});