const s3 = require('../aws/s3');

test('configureBucket sets AWS S3 "Bucket" param correctly', () => {
    expect(s3.getBucket()).toBe(s3.configureBucket("thirdday"));
});

test('getAllObjects returns Contents', () => {
    return expect(s3.getAllObjects()).resolves.toHaveProperty('Contents');
});

test('getSpecificObject returns Contents', () => {
    return expect(s3.getSpecificObjects('gallery/homes/', '/')).resolves.toHaveProperty('Contents');
});