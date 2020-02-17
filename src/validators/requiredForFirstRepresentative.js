import { required } from './required';

export const requiredForFirstRepresentative = parent => value =>
	parent === '$natural_person_0' ? required(value) : undefined;
