import { User } from "./user";

export interface StoreContextTypes {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  saveUserData: () => void;
  logedInUser: null | User;
  setLogedInUser: (user: User | null) => void;
}
