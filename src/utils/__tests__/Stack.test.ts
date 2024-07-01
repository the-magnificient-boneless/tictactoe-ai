import Stack from '../Stack';
describe('Stack', () => {
    it('should create a stack with initial data', () => {
        const stack = new Stack([1, 2, 3]);
        expect(stack.values).toEqual([1, 2, 3]);
    });

    it('should push elements onto the stack', () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(10);

        expect(stack.values).toEqual([5, 10]);
    });

    it('should pop elements from the stack', () => {
        const stack = new Stack([1, 2, 3]);
        stack.pop();
        expect(stack.values).toEqual([1, 2]);
    });

    it('should return the top element without removing it', () => {
        const stack = new Stack([1, 2, 3]);
        const top = stack.top();
        expect(top).toEqual([3]);
        expect(stack.values).toEqual([1, 2, 3]); // Stack remains unchanged
    });

    it('should return the minimum element in the stack', () => {
        const stack = new Stack([5, 2, 8, 1]);
        const min = stack.getMin();
        expect(min).toEqual([1]);
    });

    // Test for setting the entire stack using the setter
    it('should set the entire stack using the setter', () => {
        const stack = new Stack([1, 2, 3]);
        stack.values = [7, 8, 9];
        expect(stack.values).toEqual([7, 8, 9]);
    });
    it('should get the entire stack using the getter', () => {
        const stack = new Stack();
        stack.values = [1, 2, 3];
        expect(stack.values).toEqual([1, 2, 3]);
    });
});