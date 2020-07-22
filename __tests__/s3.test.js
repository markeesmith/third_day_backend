const s3 = require('../aws/s3');

test('configureBucket sets "Bucket" param correctly', () => {
    expect(s3.getBucket()).toBe(s3.configureBucket("MyBucket"));
});