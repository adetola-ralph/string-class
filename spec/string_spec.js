describe('hasVowels()', function() {
    it('should always return a boolean', function() {
        expect('example string'.hasVowels()).toEqual(jasmine.any(Boolean));
    });

    it('should return true if string has vowels', function() {
        expect('oreofe'.hasVowels()).toBe(true);
    });
});