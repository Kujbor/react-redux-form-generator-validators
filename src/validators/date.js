import moment from 'moment';

import { dateLaterThan } from './dateLaterThan';
import { cleanMaskArtifactsFromString } from './utils/cleanMaskArtifactsFromString';

export const date = dirtyValue => {
	const value = cleanMaskArtifactsFromString(dirtyValue);

	if (!value) return undefined;

	return value &&
		(!moment(value, 'YYYY-MM-DD', true).isValid() || dateLaterThan('1900-01-01')(value))
		? 'Введите корректную дату'
		: undefined;
};
