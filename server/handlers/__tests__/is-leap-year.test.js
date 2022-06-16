const httpMocks = require("node-mocks-http");
const isLeapYearHandler = require("../is-leap-year");
const isLeapYearModel = require("../../../storage/models/is-leap-year.model");

jest.mock("../../../storage/models/is-leap-year.model", () => {
    return {
        isLeapYear: jest.fn()
    };
})

test("[mock] data returned always 'even'", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isLeapYear",
    
    });
    const response = httpMocks.createResponse();
    isLeapYearModel.isLeapYear.mockResolvedValue('true');
    await isLeapYearHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'true',
        error: null
    });
});