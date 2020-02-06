module.exports = {
  /**
   *
   * ldap authentication config
   * https://www.npmjs.com/package/passport-ldapauth
   *
   */
  ldapauth: {
    provider: 'ActiveDirectory',
    customerName: 'comafi',
    server: {
      url: 'ldap://10.2.4.104',
      bindDN: 'bue299\\_Srv_Vmc',
      bindCredentials: 'srvvmc',
      searchBase: 'dc=bue299,dc=comafi,dc=com,dc=ar',
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
