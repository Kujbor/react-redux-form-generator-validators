// ToDo: @remove @bugfix @refactor
// @util @function cleanMaskArtifactsFromString - cleaning potentialy string value from field mask artifacts
// @return [any] - cleaned string or some other type incoming value - as is
//
// @bug - empty mask (but expected - empty value) as value of field at erazing of data by user input (backspace or del)
// @fact - empty mask as value
// @expected - empty value or value that can be interpreted as empty
export const cleanMaskArtifactsFromString = value =>
	typeof value === 'string'
		? // eslint-disable-next-line no-useless-escape
		  value.replace(/[\_\.\:]/gm, '')
		: value;
