import { sql } from 'drizzle-orm';
import { mysqlTable, serial, text, datetime } from 'drizzle-orm/mysql-core';

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  tag: text('tag').notNull(),
  create_at: datetime('create_at').default(sql`CURRENT_TIMESTAMP`),
});
