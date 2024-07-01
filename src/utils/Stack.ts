export default class Stack {
	private _stack: number[] = []

	constructor(initialData: number[] = []) {
		this._stack = [...initialData]
	}

	public get values(): number[] {
		return [...this._stack]
	}
	public set values(newData: number[]) {
		this._stack = newData.slice()
	}
	public push(val: number): void {
		this._stack.push(val)
	}

	public pop(): number | undefined {
		return this._stack.pop()
	}

	public top(): number[] | undefined {
		return [this._stack[this._stack.length - 1]]
	}

	public getMin(): number[] | undefined {
		return [Math.min(...this._stack)]
	}
}
