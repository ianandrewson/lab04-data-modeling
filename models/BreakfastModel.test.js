const Breakfast = require('./BreakfastModel');

describe('BreakfastModel Tests', () => {
  it('should have food in it', () => {
    const breakfast = new Breakfast({
      healthy: true
    });
    const { errors } = breakfast.validateSync();
    expect(errors.food.message).toEqual('Path `food` is required.');
  });
  it('should have at least two items', () => {
    const breakfast = new Breakfast({
      food: ['eggs'],
      healthy: true
    });
    const { errors } = breakfast.validateSync();
    expect(errors.food.message).toEqual('Path `food` (1) is less than minimum allowed value (2).');
  });
  it('should be healthy', () => {
    const breakfast = new Breakfast({
      items: ['sugar', 'milk']
    });
    const { errors } = breakfast.validateSync();
    expect(errors.healthy.message).toEqual('Path `healthy` is required.');
  });
});
