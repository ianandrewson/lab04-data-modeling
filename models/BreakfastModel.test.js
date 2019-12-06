const Breakfast = require('./BreakfastModel');

describe('BreakfastModel Tests', () => {
  it('should have food in it', () => {
    const breakfast = new Breakfast({
      healthy: true
    });
    const { errors } = breakfast.validateSync();
    expect(errors.food.message).toEqual('Path `food` is required.');
  });
  it('should be at least 500 calories', () => {
    const breakfast = new Breakfast({
      food: 'eggs',
      healthy: true,
      calories: 300
    });
    const { errors } = breakfast.validateSync();
    expect(errors.calories.message).toEqual('Path `calories` (300) is less than minimum allowed value (500).');
  });
  it('should be healthy', () => {
    const breakfast = new Breakfast({
      food: 'sugar, milk'
    });
    const { errors } = breakfast.validateSync();
    expect(errors.healthy.message).toEqual('Path `healthy` is required.');
  });
});
