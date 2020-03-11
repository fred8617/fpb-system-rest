const prefix = 'REACT_APP';
const env = process.env[`${prefix}_MY_ENV`] || 'development';
const suffix = env.toUpperCase();
/**
 * 获取各种env
 * @param env
 */
const getEnv = (env: string) => {
  return process.env[`${prefix}_${env}_${suffix}`];
};
/**
 * 
 * @param env 获取无环境差别env
 */
export const getNormalEnv=(env: string)=>{
  return process.env[`${prefix}_${env}`];
}
/**
 * 获取Base url
 */
export const BASE_URL = () => `${getEnv('PROTOCOL')}://${getEnv('BASE_URL')}`;
export default getEnv;
