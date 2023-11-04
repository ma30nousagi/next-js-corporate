// Navigation.tsx
import { FC, MouseEventHandler } from "react";
import Link from 'next/link';

type Props = {
    open: boolean;
    id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
    return (
        <nav
            id={id}
            aria-hidden={!open}
            className="navigation"
        >
            <ul>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/works">Works</Link></li>
                <li><Link href="/company">Company</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
