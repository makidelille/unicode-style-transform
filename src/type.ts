export enum Style {
    None = 0,

    Bold = 1,
    Italic = 1 << 1,
    SansSerif = 1 << 2,
    Script = 1 << 3,
    Gothic = 1 << 4,
    MonoSpace = 1 << 5,
    DoubleStruck = 1 << 6,

    All = Bold | Italic | SansSerif | Script | Gothic | MonoSpace | DoubleStruck
}

