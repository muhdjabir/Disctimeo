// Typesheet file that contains all the types required for the various components.

// TrialObject used for components involving Trials,
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

// ProfileObject used for user/player information,
export type ProfileObject = {
    name: string;
    contact: number;
    years: string;
    position: string;
    level: string;
    club: string;
    email: string;
};

// ClubProfileObject used for club information
export type ClubProfileObject = {
    name: string;
    contact: number;
    year: string;
    description: string;
    venue: string;
    members: string[];
    email: string;
};

// ScrimObject used for componnents involving Scrims
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