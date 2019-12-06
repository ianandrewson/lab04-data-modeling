const IceCube = require('./IceModel');

describe('IceModel tests', () => {
  it('should be cold', () => {
    const iceCube = new IceCube({});
    const { errors } = iceCube.validateSync();
    expect(errors.isCold.message).toEqual('Path `isCold` is required.');
  });
  it('should have a shape', () => {
    const iceCube = new IceCube({
      isCold: true,
    });
    const { errors } = iceCube.validateSync();
    expect(errors.shape.message).toEqual('Path `shape` is required.');
  });
});
