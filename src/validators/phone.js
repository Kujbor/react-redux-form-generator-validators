import { digitalMask } from './digitalMask';

export const phone = value => digitalMask(11)(value);
