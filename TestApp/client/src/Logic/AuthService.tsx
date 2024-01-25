/** @@author Yuhao
 * Adapted from ChatGPT -- reused basic login template
 * Underlying logic to check if a user is logged in
 */
class AuthService {
    static isAuthenticated = false;

    static login(name : string) {
        // Simulate a login by setting isAuthenticated to true if the name is provided
        this.isAuthenticated = Boolean(name);
    }

    static logout() {
        this.isAuthenticated = false;
    }

    static isAuthenticatedUser() {
        return this.isAuthenticated;
    }
}

export default AuthService;
