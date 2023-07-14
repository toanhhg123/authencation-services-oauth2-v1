import roleRepository from '~/repositories/roleRepository'

class RoleService {
    async getRoles() {
        return await roleRepository.getRoles()
    }
}

export default new RoleService()
