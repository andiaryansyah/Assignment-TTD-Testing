const weekendHandlers = require('./handlers/isWeekend')
const leapYearHandlers = require('./handlers/isLeapYear')


const app = express();

app.use(express.json());

app.get('/is-weekend', weekendHandlers.isWeekend);
app.get('/is-leap-year', leapYearHandlers.isLeapYear);

app.use(errorHandler);
app.use('*', (req, res, next) => {
    res.status(404).json({ error: `unknown route` });
});


module.exports = app;