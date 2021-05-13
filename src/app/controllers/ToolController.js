import { Op } from 'sequelize';
import Tool from '../models/Tool';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    if (req.query.tag) {
      const tools = await Tool.findAll({
        where: {
          tags: {
            [Op.contains]: [tag],
          },
        },
      });

      return res.json(tools);
    }

    const tools = await Tool.findAll();

    return res.json(tools);
  }

  async store(req, res) {
    const { id, title, link, description, tags } = await Tool.create(req.body);

    return res.status(201).json({ id, title, link, description, tags });
  }

  async delete(req, res) {
    const { id } = req.params;
    const tools = await Tool.findByPk(id);

    await tools.destroy(tools);

    return res.status(204).json();
  }
}

export default new ToolController();
