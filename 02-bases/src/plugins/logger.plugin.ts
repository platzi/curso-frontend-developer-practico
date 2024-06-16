const winston = require("winston");
const { json, timestamp, combine } = winston.format;

const logger = winston.createLogger({
	level: "info",
	format: combine(
        timestamp(),
		json(),
	),

	// defaultMeta: { service: "user-service" },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: "error.log", level: "error" }),
		new winston.transports.File({ filename: "combined.log" }),
	],
});

logger.add(
	new winston.transports.Console({
		format: winston.format.simple(),
	})
);

export const buildLogger = ( service: string ) => {
    return {
        log: (message: string) => logger.log("info", {message, service}),
        error: (message: string) => logger.error("error", {message, service})
    }
}

// module.exports = buildLogger;
