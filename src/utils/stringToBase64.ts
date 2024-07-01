import { Buffer } from 'node:buffer'

const encodeToNonPaddedBase64 = (input: string) => {
	let base64String = Buffer.from(input).toString('base64')
	base64String = base64String.replace(/=+$/, '')
	return base64String
}

export default encodeToNonPaddedBase64
