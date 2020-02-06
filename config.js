module.exports = {
  /**
   *
   * ldap authentication config
   * https://www.npmjs.com/package/passport-ldapauth
   *
   */
  ldapauth: {
    provider: 'ActiveDirectory',
    customerName: 'default',
    server: {
      url: 'ldap://10.2.4.104',
      bindDN: '',
      bindCredentials: '',
      searchBase: '',
      searchAttributes: ['objectSid', 'name', 'mail', 'sAMAccountName', 'memberOf'],
      searchFilter: '(sAMAccountName={{username}})'
    },
    fields: {
      id: 'sAMAccountName',
      name: 'name',
      username: 'sAMAccountName',
      email: 'mail',
      groups: 'memberOf'
    }
  }
}
