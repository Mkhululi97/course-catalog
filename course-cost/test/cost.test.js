describe("The Course Cost function", function () {
  const course1 = courseCost("p1", "2023-05-21");
  const course2 = courseCost("w1", "2023-06-01");
  const course3 = courseCost("r1", "2023-05-27");
  const course4 = courseCost("p2", 2023 - 05 - 21);
  const course5 = courseCost("p1");

  it("should return an object that has the course, 'status, code, description, cost, discount and amountDue'", function () {
    assert.deepEqual(course1, courseCost("p1", "2023-05-21"));
  });
  it("should return an object that has a name of status and value of 'Invalid code'", function () {
    assert.deepEqual(course2, courseCost("w1", "2023-06-01"));
  });
  it("should return an object that has the course, 'status, code, description, cost, discount and amountDue'", function () {
    assert.deepEqual(course3, courseCost("r1", "2023-05-27"));
  });
  it("should return an object that has the course, 'status, code, description, cost, discount and amountDue", function () {
    assert.deepEqual(course4, courseCost("p2", 2023 - 05 - 31));
  });
  it("should return an object that has a name of status and value of 'Invalid day' ", function () {
    assert.deepEqual(course5, courseCost("p1"));
  });
});
