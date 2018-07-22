const Calculator = require('../../../src/index');

describe('Test Calculator ', () => {
    it('test sum', () => {
        expect(Calculator.sum(1,2)).toEqual(3);
    });

    it('test minus', () => {
        expect(Calculator.minus(1,2)).toEqual(-1);
    });

    it('test divide', () => {
        expect(Calculator.divide(4,2)).toEqual(2);
        expect(Calculator.divide(1,0)).toEqual(false);
    });

    it('test multiple', () => {
        expect(Calculator.multiple(2,2)).toEqual(4);
    });

    it('test modulo', () => {
        expect(Calculator.modulo(5,2)).toEqual(1);
    });
})