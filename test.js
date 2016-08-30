

describe('Behavior Stuff', function(){
	it('truth test',function(){
		chai.expect(1).to.equal(1);
	})
	it('return true when name is passed',function(){
		var res = PrintName('hello');
		chai.expect(res).to.equal(true);
	})
	it('return false when name is not passed',function(){
		var res = PrintName();
		chai.expect(res).to.equal(false);
	})
	it('return undefined when name is empty',function(){
		var res = PrintName('');
		chai.expect(res).to.equal(undefined);
	})
})


suite('my first suite', function(){
  
  test('test 1', function(){
    chai.assert(1===1);
    console.log('test');
  });

});