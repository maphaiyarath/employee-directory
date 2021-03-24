// function from https://stackoverflow.com/questions/44312924/filter-array-of-objects-whose-any-properties-contains-a-value

export default function filterByValue (array, string) {
    return array.filter(o => {
        return Object.keys(o).some(k => {
            if (typeof o[k] === 'string')
                return o[k].toLowerCase().includes(string.toLowerCase());
        });      
    });
};