
export type ProjectType = {
    title: string;
    img: string;
    description: string;
    languages: string[];
    youtube?: string;
    github?: string;
};

export type ExperienceType = {
    period: string;
    jobtitle: string;
    company?: string;
    descriptions: string[];
};

export type SkillType = {
    icon: string;
    skill: string;
}