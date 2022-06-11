const httpMocks = require("node-mocks-http");
const LeapYearHandler = require("../isLeapYear");

test("jika tahun ini februari 29 hari", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2020'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    });
    const response = httpMocks.createResponse();
    await LeapYearHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("jika tahun ini bukan februari 29 hari", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    });
    const response = httpMocks.createResponse();
    await LeapYearHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});