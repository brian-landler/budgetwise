import { Table, Column, DataType, HasMany, BelongsTo, ForeignKey, Model } from "sequelize-typescript"

@Table({
    tableName: 'budgets'
})

class Budget extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string
    
    @Column({
        type: DataType.DECIMAL
    })
    amount: number
}

export default Budget