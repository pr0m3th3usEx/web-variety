import * as env from 'env-var';

export const EXPRESS_API_URL = env.get('REACT_APP_EXPRESS_API_URL').required().asString();
export const FLASK_API_URL = env.get('REACT_APP_FLASK_API_URL').required().asString();
