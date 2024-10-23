import { Translate } from "../utils/constants";
import { User } from "../utils/types";

export default function useLanguage(user: User | null) {
  if (user) {
    switch (user.language) {
      case 'en-US':
        return Translate.enUs
      case 'pt-BR':
        return Translate.ptBr
      default:
        break;
    }
  }
}