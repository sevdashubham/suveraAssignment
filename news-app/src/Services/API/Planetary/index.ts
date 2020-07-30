// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { PlanetaryModel } from "@Interfaces";
// #endregion Interface Imports

export const PlanetaryService = {
    queryNews: async (
        payload: PlanetaryModel.GetApodPayload
    ): Promise<PlanetaryModel.GetApodResponse> => {
        let response: PlanetaryModel.GetApodResponse;

        try {
            response = await Http.Request<PlanetaryModel.GetApodResponse>(
                "POST",
                `/articles?type=${payload.type}`,
                payload.params
            );
        } catch (error) {
            response = {
                articles: []
            };
        }

        if (Object.keys(response).length === 0 && response.constructor === Object) {
            return {
                articles: []
            };
        }
        return response;

    },
};
