/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account
 */

import Transformer from "./transformer";

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(account) {
    return {
      id: account.id,
      email: account.email,
      firstName: account.first_name,
      lastName: account.last_name,
      profilePicture: account.profile_picture,
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  /* eslint max-len: ["error", 150] */
  static send(account) {
    return {
      name: account.name,
      password: account.password,
      password_confirmation: account.passwordConfirmation,
      email: account.user_email,
      first_name: account.firstName,
      last_name: account.lastName,
      profile_picture: account.profilePicture
        ? account.profilePicture[0]
        : null,
    };
  }
}
