import { determineAgentOrgType } from "./utils/determineAgentOrgType";

export const validateAgentOrgTypeAtClosingAccount = agentType => value => {
  const orgType = determineAgentOrgType(value);

  if (
    !value ||
    (agentType === "ct" ? ["ip", "ul"] : [agentType]).includes(orgType)
  ) {
    return undefined;
  }

  switch (agentType) {
    case AgentOrgType.FL:
      return "Укажите счет получателя - физического лица";
    case AgentOrgType.IP:
      return "Укажите счет получателя - индивидуального предпринимателя";
    case AgentOrgType.UL:
      return "Укажите счет получателя - юридического лица";
    case "ct":
      if (orgType === AgentOrgType.FL) {
        return "Перевод на счет иного физического лица не разрешен";
      }

      break;
    default:
      return undefined;
  }
};
