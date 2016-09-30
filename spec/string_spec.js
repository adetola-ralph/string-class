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

describe('words()', function() {
    it('should always return a typeof object', function() {
        expect('this is an example string'.words())
            .toEqual(jasmine.any(Object));
    });

    it('should always return an array', function() {
        expect('this is an example string'.words() instanceof Array).toBe(true);
    });

    it('should return an array of words in the string', function() {
        expect('this is a string of words'.words()).toEqual(['this', 'is', 
        'a', 'string', 'of', 'words']);
        expect('My name is Ore-ofe'.words())
            .toEqual(['My', 'name', 'is', 'Ore-ofe']);
    });

    it('should return empty array if no words are found', function() {
        expect(',./;[]=-'.words()).toEqual([]);
    });
});

describe('wordCount()', function(){
    it('should always return type Number', function(){
        expect('this string'.wordCount()).toEqual(jasmine.any(Number));
    });

    it('should return number of words in a string', function() {
        expect('this is a string of words'.wordCount()).toBe(6);
        expect('My name is Ore-ofe'.wordCount()).toBe(4);
    });

    it('should return 0 if string contains no word', function() {
        expect(',./;[]=-'.wordCount()).toBe(0);
    });
});

describe('toCurrency()', function() {
    it('should return a string', function() {
        expect('111111.00'.toCurrency()).toEqual(jasmine.any(String));
    });

    it('should return a currency formatted string', function() {
        expect('111111.89'.toCurrency()).toBe('111,111.89');
        expect('2111111.89'.toCurrency()).toBe('2,111,111.89');
    });

    it('should truncate excess numbers after decimal point', function() {
        expect('1234.123'.toCurrency()).toBe('1,234.12');
    });
});

describe('fromCurrency()', function() {
    it('should return a number', function() {
        expect('111,111.00'.fromCurrency()).toEqual(jasmine.any(Number));
    });

    it('should return number of its calling string', function() {
        expect('3,123,456.78'.fromCurrency()).toBe(3123456.78);
    });
});

describe('inverseCase()', function() {
    it('should return a string', function() {
        expect('Mr Ben'.inverseCase()).toEqual(jasmine.any(String));
    });

    it('should return inverse characters of its calling string', function() {
        expect('Mr Ben'.inverseCase()).toBe('mR bEN');
        expect('Big Mighty Mouse'.inverseCase()).toBe('bIG mIGHTY mOUSE');
    });
});

describe('alternatingCase()', function() {
    it('should return a string', function() {
        expect('Onomatopoeia'.alternatingCase()).toEqual(jasmine.any(String));
    });
});