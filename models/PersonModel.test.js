const Person = require('./PersonModel');

describe('PersonModel tests', () => {
  it('should have a moral compass', () => {
    const person = new Person({
    });
    const { errors } = person.validateSync();
    expect(errors.moralCompass.message).toEqual('Path `moralCompass` is required.');
  });
  it('should have a soul', () => {
    const person = new Person({
      moralCompass: true
    });
    const { errors } = person.validateSync();
    expect(errors.soul.message).toEqual('Path `soul` is required.');
  });
  it('should have one stomach', () => {
    const person = new Person({
      moralCompass: true,
      soul: true,
      stomachs: 2
    });
    const { errors } = person.validateSync();
    expect(errors.stomachs.message).toEqual('Path `stomachs` (2) is more than maximum allowed value (1).');
  });
});
