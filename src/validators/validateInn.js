export { inn } from "./inn";
export { required } from "./required";
export { innCanBeZero } from "./innCanBeZero";
export { innFL } from "./innFL";
export { innIP } from "./innIP";
export { innUL } from "./innUL";

const AgentOrgType = {
  IP: null,
  FL: null,
  UL: null
};

export const validateInn = orgType =>
  ({
    [AgentOrgType.FL]: [innFL, innCanBeZero],
    [AgentOrgType.IP]: [required, innIP, inn],
    [AgentOrgType.UL]: [required, innUL, inn]
  }[orgType] || [innCanBeZero]);
