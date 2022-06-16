const httpMocks = require("node-mocks-http");
const isWeekendHandler = require("../is-weekend");
const isWeekendModel = require("../../../storage/models/is-weekend.model");

jest.mock("../../../storage/models/is-weekend.model", () => {
    return {
        isWeekend: jest.fn()
    };
})

test("[mock] data returned always 'weekend'", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    isWeekendModel.isWeekend.mockResolvedValue('true');
    await isWeekendHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'true',
        error: null
    });
});