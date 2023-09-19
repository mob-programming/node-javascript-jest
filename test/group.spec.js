const group = require("../app/group");

describe("The group", () => {
  test("can make a test pass", () => {
    expect(group.canMakeTestPass()).toBeTruthy();
  });
});
