---
title: Custom Service
---

To create a custom query service to add your own methods to you can extend the `SequelizeQueryService`.

:::note
When using a custom service you need to also create your `Resolver` instead of using the auto-generated one from `NestjsQueryGraphQLModule`
:::

```ts title="todo-item.service.ts"
import { QueryService } from '@nestjs-query/core';
import { InjectModel } from '@nestjs/sequelize';
import { SequelizeQueryService } from '@nestjs-query/query-sequelize';
import { TodoItemEntity } from './entity/todo-item.entity';

@QueryService(TodoItemEntity)
export class TodoItemService extends SequelizeQueryService<TodoItemEntity> {
  constructor(@InjectModel(TodoItemEntity) model: typeof TodoItemEntity) {
    super(model);
  }

  async markAllAsCompleted(): Promise<number> {
    const entities = await this.query({ filter: { completed: { is: true } } });

    const { updatedCount } = await this.updateMany(
      { completed: true }, // update
      { id: { in: entities.map((e) => e.id) } }, // filter
    );
    // do some other business logic
    return updatedCount;
  }
}
```