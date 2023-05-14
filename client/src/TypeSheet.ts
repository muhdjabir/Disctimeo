export type TrialObject = {
    _id: string;
    club: string;
    name: string;
    date: Date;
    time: string;
    description: string;
    venue: string;
    registration: string;
    members: string[];
    information: string;
    email: string;
};

export type ProfileObject = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
    club: string;
    email: string;
};

export type ClubProfileObject = {
    name: string;
    contact: number;
    year: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

export type ScrimObject = {
    _id: string;
    name: string;
    date: Date;
    time: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

export type SelectorTypes = {
    options: string[];
    comp: string;
    updateState: (id: string) => void;
};