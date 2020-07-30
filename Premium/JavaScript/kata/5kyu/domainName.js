

const domainName = url => url.replace(/.+\/\/|www.|\..+/g,'');

// function export
module.exports = domainName;