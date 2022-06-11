const httpMocks = require("node-mocks-http");
const WeekendHandler = require("../isWeekend");

test("kamis", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-09'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });
    const response = httpMocks.createResponse();
    await WeekendHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});

test("sabtu", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-06-11'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });
    const response = httpMocks.createResponse();
    await WeekendHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});