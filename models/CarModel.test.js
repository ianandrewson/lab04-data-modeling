const Car = require('./CarModel');

describe('Model tests for Car', () => {
  it('should throw an error for not having a color', () => {
    const car = new Car({
      doors: 4
    });
    expect(car.validateSync().errors.color.message).toEqual('Path `color` is required.');
  });
  it('has a required doors value', () => {
    const car = new Car({
      color: 'blue'
    });
    expect(car.validateSync().errors.doors.message).toEqual('Path `doors` is required.');
  });
  it.skip('has the right number of doors', () => {
    
  });
});
