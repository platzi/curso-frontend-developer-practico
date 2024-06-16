import { uuid } from "./uuid.plugin";
import { getAge } from '../plugins/getAge.plugin'
import { httpClient } from './httpClient.plugin'
import { buildLogger } from "./logger.plugin";

export const uuidPlugin = uuid;
export const getAgePlugin = getAge;
export const httpClientPlugin = httpClient;
export const buildLoggerPlugin = buildLogger;

