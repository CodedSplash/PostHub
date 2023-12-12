import { IResponseError } from '../models/Auth.model'
import ResponseData from '../models/ResponseData.model'

export function isErrorFromBackend(
	error: unknown
): error is ResponseData<IResponseError> {
	return (
		typeof error === 'object' &&
		error !== null &&
		'data' in error &&
		typeof (error as Record<string, unknown>).data === 'object'
	)
}
