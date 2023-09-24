export const shortenLetters = (letters: string) => {
    return letters.length > 54 ? `${letters.slice(0, 55)}...` : `${letters}`;
};

type sliceQtyTypes = {
    from: number;
    to: number
}
export const mapNumber = (num: number, sliceQty: sliceQtyTypes) => {

    const arrOfNumbers = [];
    for (let index = 1; index <= num; index++) {
        arrOfNumbers.push(index);
    }

    return arrOfNumbers.slice(sliceQty.from, sliceQty.to);
};