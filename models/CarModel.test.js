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
  it('has the right number of doors', () => {
    const car = new Car({
      color: 'blue',
      doors: 5
    });
    expect(car.validateSync().errors.doors.message).toEqual('Path `doors` (5) is more than maximum allowed value (4).');
  });
  it('has a single engine', () => {
    const car = new Car({
      color: 'red',
      doors: 3,
      engine: 0
    })
    expect(car.validateSync().errors.engine.message).toEqual('Path `engine` (0) is less than minimum allowed value (1).');
  });
  it('has the right type for start', () => {
    const car = new Car({
      color: 'blue',
      doors: 4,
      engine: 1,
      functional: 'nope'
    });
    expect(car.validateSync().errors.functional.message).toEqual('Cast to Boolean failed for value "nope" at path "functional"');
  });
});
