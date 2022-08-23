const db = require('../db/db.js')

class menuservice{
    async getAll(){
        const items = await db.query(`
                                SELECT i.id, i.item, i.weight, i.price, i.description, t.menu_title 
                                FROM menu_items i JOIN menu_titles t 
                                ON i.title=t.id
                                `)
        return items.rows
    }

    async getOne(id){
        const item = await db.query(`
                                SELECT * FROM menu_items WHERE id=$1
                                `, [id])
        return item.rows[0]       
    }

    async create(body){
        const { item, weight, price, description, title } = body
        const query = `INSERT INTO menu_items(item, weight, price, description, title)
                       VALUES($1, $2, $3, $4, $5) RETURNING *
                       `;
        const oldTitle = await db.query(`
                                    SELECT * FROM menu_titles WHERE menu_title=$1
                                    `, [title])
        if(oldTitle.rows.length === 0){
            const newTitle = await db.query(`
                                    INSERT INTO menu_titles(menu_title) VALUES($1)
                                    RETURNING *
                                    `, [title])
            const newItem = await db.query(query, 
                                    [item, weight, price, description, newTitle.rows[0].id])
            return newItem.rows[0]
        } else {
            const newItem = await db.query(query, 
                [item, weight, price, description, oldTitle.rows[0].id])
            return newItem.rows[0]
        }
    }

    async update(body){
        const updatedItem = await db.query(`
                                    UPDATE menu_items 
                                    SET item=$1, weight=$2, price=$3, description=$4, menu_title=$5
                                    WHERE id=$6 
                                    RETURNING *
                                    `, [body.item, body.weight, body.price, body.description, body.menu_title, body.id])
        return updatedItem.rows[0]
    }

    async delete(id){
        const deletedItem = await db.query(`
                                    DELETE FROM menu_items WHERE id=$1 
                                    RETURNING *
                                    `, [id])
        return deletedItem.rows[0]
    }
}

module.exports = new menuservice()