import { Request, Response } from 'express'
import roleService from '~/services/roleService'

class RoleController {
    async getAll(req: Request, res: Response) {
        return res.json(await roleService.getRoles())
    }
}

export default new RoleController()
