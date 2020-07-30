const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Write route to handle PUT requests to /currencies/:name/country
app.put('/currencies/:name/country',(req,res,next)=>{
    const currencyName = req.params.name;
    const country = req.query;

    currencies[currencyName] = country;
    res.send(currencies[currencyName]);
});