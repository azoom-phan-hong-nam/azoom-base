export const formatNumber = (number: number) => {
    if (typeof number !== 'number') return number;
    
    return number.toLocaleString('en-US');
}
