import Killstreak from '../parseEconItem/ParsedEcon/getDescriptions/Killstreak';

// TODO: center every type into this one for compability.
export type ItemAttributes = {
    name: string;
    quality: number|string;
    craftable: boolean;
    
    australium?: boolean;
    festivized?: boolean;
    killstreak?: number|string;
    elevated?: boolean;
    defindex?: number;
    wear?: number|string;
    texture?: number|string;
    effect?: number|string;
    itemNumber?: ItemNumber;
    isUniqueHat?: boolean;

    // TODO: defindexes here: 
    target?: string;
    targetDefindex?: number;
    output?: string;
    outputDefindex?: number;
    outputQuality?: number|string;
}

export type ItemNumber = {
    value: number;
    type: string;
}

export type TargetItem = {
    target: string;
}

export type OutputItem = {
    output: string;
    outputQuality: string;
}

export type TargetOutputItem = TargetItem & OutputItem;

export type StringQuality = {
    value: string;
    elevated: boolean;
}

export type NumberQuality = {
    value: number;
    elevated: boolean;
}

export type BackpackTFListing = {
    quality: number|string,
    craftable: number,
    item_name: string,
    priceindex: string|number|void
}

export type SKUAttributes = {
    defindex: number,
    quality: number;
    craftable: boolean;
    australium?: boolean;
    festive?: boolean;
    elevated?: boolean;
    killstreak?: number;
    effect?: number;
    texture?: number;
    wear?: number;
    target?: number;
    itemNumber?: ItemNumber;
    output?: number;
    outputQuality?: number;
}

export type EconAction = { link: string, name: string };

export type EconTag = { name: string, category: string, internal_name: string, localized_category_name?: string, localized_tag_name?: string, color: string };

export type EconDescription = { value: string, color?: string, app_data?: { def_index: number } };

export type EconItem = {
    appid: number;
    contextid: string;
    assetid: string;
    classid: string;
    instanceid: string;
    amount: string;
    currency: number;
    icon_url: string;
    icon_url_large: string;
    descriptions: EconDescription[],
    tradable: number;
    actions: EconAction[],
    name: string,
    type: string;
    market_name: string;
    market_hash_name: string;
    market_actions: EconAction[],
    commodity: number;
    marketable: number;
    tags: EconTag[],
    app_data?: { def_index: number },
}

export type TagAttributes = {
    quality: string;
    wear: number;
    classes: string[],
    type?: string;
    grade?: string;
    collection?: string;
}

export type DescriptionAttributes = {
    craftable: boolean;
    effect: string;
    killstreak: Killstreak;
    spells: string[],
    parts: string[],
    paint?: string;
    festivized?: boolean;
    texture?: string|void;
}

export type PropertyAttributes = {
    elevated: boolean;
    tradable: boolean;
    marketable: boolean;
    commodity: boolean;
}

export type NameAttributes = {
    australium: boolean;
    isUniqueHat: boolean;
    texture?: string|void;
}

export type ParsedEconOptions = {
    inNumbers?: boolean;
}

export type ParsedEconNameAtributes = {
    tradable: boolean;
    craftable: boolean;
    quality: string|number;
    texture?: string;
    wear?: number;
    australium?: boolean;
    festivized?: boolean;
    effect?: string|number;
    isUniqueHat?: boolean;
    killstreak?: string|number;
    elevated?: boolean;
}

export type ConvertableAttributes = {
    killstreak?: string|number|void;
    wear?: string|number|void;
    effect?: string|number|void;
    quality: string|number;
    outputQuality?: string|number|void|null;
}

export type EconAttributes = ParsedEconNameAtributes & {
    classes: string[];
    type?: string;
    collection?: string;
    grade?: string;
    paint?: string;
    parts: string[];
    spells: string[];
    marketable: boolean;
    commodity: boolean;
}

export type ParsedEconItem = EconAttributes & {
    name: string;
    fullName: string;
    id: string;
    img: string;
}

export type DecomposeAttributes = {
    craftable: boolean;
    australium?: boolean;
    festivized?: boolean;
    wear?: string|void;
    effect?: string|void;
    texture?: string|void;
    itemNumber?: ItemNumber|null;
    isUniqueHat?: boolean;
    quality: StringQuality;
    killstreak?: string|void;
    usableItem?: Partial<TargetOutputItem>|null;
}