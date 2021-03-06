const env = process.env.NODE_ENV ?? 'dev'; // 环境参数 ==> NODE_ENV 是我们自己为env对象配置的属性(当前已在npm script赋值)

// 配置
let MYSQL_CONFIG = {};
let REDIS_CONFIG = {};

switch(env) {
    case 'dev':
        MYSQL_CONFIG = {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'password',
            database: 'myblog'
        };
        // redis config
        REDIS_CONFIG = {
            port: 6379,
            host: '127.0.0.1'
        };
        break;
    case 'production':
        // 生产环境部署到线上，不应该用这个配置，只是暂时占位
        MYSQL_CONFIG = {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'password',
            database: 'myblog'
        };
        REDIS_CONFIG = {
            port: 6379,
            host: '127.0.0.1'
        };
        break;
    default:
        throw new Error('no matched env...');

}

module.exports = {
    MYSQL_CONFIG,
    REDIS_CONFIG
}
