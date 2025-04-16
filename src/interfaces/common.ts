/**
 * Logo interface
 */
export interface Logo {
    img: string;
    name: string;
}

/**
 * Menu interface
 */
export interface Menu {
    href: string;
    name: string;
    style?: string;
    click?: (name: string) => void;
}

/**
 * 
 */
export interface Major {
    icon: string;
    title: string;
    subjects: string;
}

/**
 * Job interface
 */
export interface Job {
    img: string;
    alt: string;
    name: string;
    period: string;
}

/**
 * Coding interface
 */
export interface Code {
    title: string;
    percent: number;
}

/**
 * Category interface
 */
export interface Category {
    name: string;
    count: number;
}

/**
 * Project interface
 */
export interface Project {
    img: string;
    alt: string;
    title: string;
    description: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
    img: string;
    alt: string;
    description: string;
    name: string;
    company: string;
}
