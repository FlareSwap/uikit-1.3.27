/** @jsxImportSource theme-ui */
import React from "react";
import { MenuSubEntry } from "./types";
import { TrackHandler } from "../../util/trackClick";
interface SubNavbarProps {
    items: MenuSubEntry[];
    image?: string;
    position: string;
    isDark: boolean;
    chainId: number | string;
    track?: TrackHandler | undefined;
    subMenu?: {
        id: number;
        tag: string;
        navItem: string;
    }[];
    runFiat: () => void;
    t: (text: string) => string;
}
declare const SubNavbar: React.FC<SubNavbarProps>;
export default SubNavbar;
