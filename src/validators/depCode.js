import { digitalMask } from './digitalMask';

export const depCode = value => digitalMask(6)(value);
