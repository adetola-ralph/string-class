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