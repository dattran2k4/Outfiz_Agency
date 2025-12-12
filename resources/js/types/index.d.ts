export interface ServiceInclude {
    title: string;
    icon: string;
    description: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    detail: string;
    image: string;      
    link: string;
    includes: ServiceInclude[]; 
}

interface ServiceCard {
    data: Service;
}

interface Feature {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface FeatureCard {
    item: Feature
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    tagline: string;
    image: string;
    shortDescription: string;

    //TO-DO Bỏ ? bằng cách thêm data
    overview: ProjectOverview;
    clientSection: ProjectClientSection;
    aiming: ProjectAiming;
    solutions: ProjectSolutions;
    results: ProjectResults;
    reviews: ProjectReviews;
}

/* ============================
    Section: OVERVIEW
=============================== */
export interface ProjectOverview {
    description: string[];
    stats: {
        label: string;
        value: string;
    }[];
}

/* ============================
    Section: CLIENT
=============================== */
export interface ProjectClientSection {
    description: string;
    boxes: {
        label: string;
        value: string;
    }[];
    bannerImage: string;
}

/* ============================
    Section: AIMING
=============================== */
export interface ProjectAiming {
    content: string[];
    illustrationImage: string;
}

/* ============================
    Section: SOLUTIONS
=============================== */
export interface ProjectSolutions {
    items: string[]; // danh sách các giải pháp
}

/* ============================
    Section: RESULTS
=============================== */
export interface ProjectResults {
    description: string[];
    gallery: string[]; // danh sách ảnh
}

/* ============================
    Section: REVIEWS
=============================== */
export interface ProjectReviews {
    heading: string;
    avatar: string;
    name: string;
    role: string;
    rating: number;
    content: string[];
}

