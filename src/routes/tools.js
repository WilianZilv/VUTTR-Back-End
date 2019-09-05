const route = require('express').Router()

const Tool = require('../models/tools')

route.get('/', async (req, res) => {
    const { tag } = req.query

    let query = {}

    if (tag)
        query = {
            tags: tag
        }

    const tools = await Tool.find(query)

    res.json(tools)
})

route.post('/', async (req, res) => {
    try {
        const tool = await Tool.create(req.body)
        res.status(201).json(tool)
    } catch (err) {
        res.status(400).send(err)
    }
})

route.patch('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const { tag } = req.query

        const tool = await Tool.findById(_id)

        if (tag) {
            if (!tool.tags.includes(tag)) {
                tool.tags.push(tag)
                await tool.save()
            }
        } else {
            await tool.updateOne(req.body)
        }

        res.send()
    } catch (err) {
        res.status(400).send(err)
    }
})

route.delete('/:_id', async (req, res) => {
    let { _id } = req.params
    const { tag } = req.query

    const tool = await Tool.findById(_id)

    if (tag) {
        tool.tags = tool.tags.filter(x => x !== tag)
        await tool.save()
    } else {
        await tool.remove()
    }

    res.status(204).send()
})

module.exports = root => root.use('/tools', route)
