class RoleRepository {
    async getRoles() {
        return ['admin', 'user']
    }
}

export default new RoleRepository()
