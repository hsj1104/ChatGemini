import { GoogleGenerativeAI as OfficialGoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAI as thirdPartyGoogleGenerativeAI } from "@redchicken2024/generative-ai";

export const createAiObj = (key: string, api: string | null) => {
    if (api !== null) {
        const ai = new thirdPartyGoogleGenerativeAI(key, api) as unknown;
        return ai as OfficialGoogleGenerativeAI;
    }

    return new OfficialGoogleGenerativeAI(key);
};
