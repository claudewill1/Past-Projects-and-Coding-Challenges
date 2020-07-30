const validSolution = board => {
    // declare variables to cache the reorganized data
    let _rows, _cols, _grid;

    // initialize the module with input data
    init = function(data){
        _transformData(data);
        return this;
    };

    // return  true if sudoku is valid
    isValid = function(){
        return (_validate(_rows)&&_validate(_cols)&&_validate(_grid));
    }
}