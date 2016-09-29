describe('hasVowels()', function() {
    it('should always return a boolean', function() {
        expect('example string'.hasVowels()).toEqual(jasmine.any(Boolean));
    });

    it('should return true if string has vowels', function() {
        expect('oreofe'.hasVowels()).toBe(true);
        expect(('AnDeLa').hasVowels()).toBe(true);
    });

    it('should return false if string has no vowels', function() {
        expect('why'.hasVowels()).toBe(false);
        expect(('twyndyllyngs').hasVowels()).toBe(false);
    });
});

describe('toUpper()', function() {
    it('should always return a string', function() {
        expect('example string'.toUpper()).toEqual(jasmine.any(String));
    });

    it('should return an upper case of the calling string', function() {
        expect('upper case'.toUpper()).toBe('UPPER CASE');
        expect('camelCase'.toUpper()).toBe('CAMELCASE');
        expect('MiXeD cAsE'.toUpper()).toBe('MIXED CASE');
    });
});

describe('toLower()', function() {
    it('should return a string', function() {
        expect('example string'.toLower()).toEqual(jasmine.any(String));
    });

    it('should return a lower case of the calling string', function() {
        expect('LOWER CASE'.toLower()).toBe('lower case');
        expect('PascalCaseD'.toLower()).toBe('pascalcased');
        expect('MiXeDcAsE'.toLower()).toBe('mixedcase');
    });
});

describe('ucFirst()', function() {
    it('should return a string', function() {
        expect(''.ucFirst()).toEqual(jasmine.any(String));
    });

    it('should convert first character to uppercase', function() {
        expect('oreofe'.ucFirst()).toBe('Oreofe');
        expect('Ralph'.ucFirst()).toBe('Ralph');
    });
});

describe('isQuestion()', function() {
    it('should always return a boolean', function() {
        expect('example string'.isQuestion()).toEqual(jasmine.any(Boolean));
    });

    it('should return true if string is a question', function() {
        expect('is a question?'.isQuestion()).toBe(true);
        expect('Is Another Question?'.isQuestion()).toBe(true);
    });

    it('should return false if string is not a question', function() {
        expect('is not a question'.isQuestion()).toBe(false);
        expect('Is not Another Question'.isQuestion()).toBe(false);
    });
});