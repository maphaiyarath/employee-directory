// function from https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

export default function compare(a, b) {
    if (a.name.last < b.name.last) {
        return -1;
    }
    if (a.name.last > b.name.last) {
        return 1;
    }

    if (a.name.first < b.name.first) return -1;
    if (a.name.first > b.name.first) return 1;
    
    return 0;
};