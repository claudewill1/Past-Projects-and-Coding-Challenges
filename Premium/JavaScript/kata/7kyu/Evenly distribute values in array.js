const distributeEvenly = (array) => {
    const uniqueTypes = [...new Set(array)];
    const arrayOfTypes = uniqueTypes.map(outer => array.filter(inner => outer === inner));

    return array
        .map((item, i) => arrayOfTypes.map(el => el[i]))
        .reduce((a,b)=> a.concat(b))
        .filter(_ => _);
}