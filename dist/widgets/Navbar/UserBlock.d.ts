/** @jsxImportSource theme-ui */
import React from "react";
import { Login } from "../WalletModal";
interface Props {
    account?: string | undefined;
    uDName?: string | undefined;
    login: Login;
    logout: () => void;
    t: (key: string) => string;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
