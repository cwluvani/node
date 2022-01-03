const { execute, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryp');

const login = async (username, password) => {
    username = escape(username);
    // 生成加密密码
    // password = genPassword(password);
    password = escape(password);

    const sql_login = `
        select username, realname from users
            where username = ${username} and password = ${password};
    `;
    // console.log(sql_login);
    // select 返回的全都是 数组
    const rows = await execute(sql_login);
    return rows[0] ?? {};
}

module.exports = {
    login
}