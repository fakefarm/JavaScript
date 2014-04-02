describe("Activity", function() {
  it('should be true', function(){
    expect(true).toEqual(true);
  });

  it("should keep track of it's own id", function(){
    activity = new Activity();
    expect(activity.id).toEqual(1);
  });
});
